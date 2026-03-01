export type CourseRole = 'student' | 'teacher' | 'admin';

export type CourseAccessSession = {
  sessionId: string;
  expiresAt: string; // ISO string (3 months, issued by API)
  username: string;
  role: CourseRole;

  // Updated on activity, used for auto logout
  lastSeenAt: string; // ISO string
};

const IDLE_DAYS = 5;
const IDLE_MS = IDLE_DAYS * 24 * 60 * 60 * 1000;

const COURSE_SESSION_PREFIX = 'course_access_session_';
const COURSE_SESSION_SUFFIX = '_v1';

function parseIsoMs(value: string): number | null {
  const ms = Date.parse(value);
  return Number.isFinite(ms) ? ms : null;
}

function normalizeRole(value: unknown): CourseRole {
  const v = String(value ?? '')
    .trim()
    .toLowerCase();
  if (v === 'admin' || v === 'teacher' || v === 'student') return v;
  return 'student';
}

function storageKeyForCourse(slug: string) {
  // Keep it stable and human-readable
  const safe = String(slug).trim().toLowerCase();
  return `${COURSE_SESSION_PREFIX}${safe}${COURSE_SESSION_SUFFIX}`;
}

function slugFromStorageKey(key: string): string | null {
  if (!key.startsWith(COURSE_SESSION_PREFIX)) return null;
  if (!key.endsWith(COURSE_SESSION_SUFFIX)) return null;

  const slug = key.slice(COURSE_SESSION_PREFIX.length, key.length - COURSE_SESSION_SUFFIX.length);
  return slug || null;
}

export function readCourseSession(slug: string): CourseAccessSession | null {
  try {
    const key = storageKeyForCourse(slug);
    const raw = localStorage.getItem(key);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as Partial<CourseAccessSession> | null;
    if (!parsed) return null;

    if (!parsed.sessionId || !parsed.expiresAt || !parsed.username) return null;

    // Backward compatibility:
    // - if lastSeenAt missing, treat as "now"
    // - if role missing or invalid, treat as "student"
    const lastSeenAt = parsed.lastSeenAt ? String(parsed.lastSeenAt) : new Date().toISOString();
    const role = normalizeRole(parsed.role);

    return {
      sessionId: String(parsed.sessionId),
      expiresAt: String(parsed.expiresAt),
      username: String(parsed.username),
      role,
      lastSeenAt,
    };
  } catch {
    return null;
  }
}

export function writeCourseSession(slug: string, session: CourseAccessSession) {
  const key = storageKeyForCourse(slug);
  localStorage.setItem(key, JSON.stringify(session));
}

export function clearCourseSession(slug: string) {
  const key = storageKeyForCourse(slug);
  localStorage.removeItem(key);
}

export function isCourseSessionValid(session: CourseAccessSession | null): boolean {
  if (!session) return false;

  const expiresMs = parseIsoMs(session.expiresAt);
  if (expiresMs === null) return false;

  const lastSeenMs = parseIsoMs(session.lastSeenAt);
  if (lastSeenMs === null) return false;

  const now = Date.now();

  const notExpired = expiresMs > now;
  const notIdleTimedOut = now - lastSeenMs <= IDLE_MS;

  return notExpired && notIdleTimedOut;
}

export function touchCourseSession(slug: string, session: CourseAccessSession) {
  writeCourseSession(slug, {
    ...session,
    lastSeenAt: new Date().toISOString(),
  });
}

/**
 * Finds any valid admin session across all stored course sessions.
 * Useful for app-level admin pages (not tied to a single course).
 */
export function findAnyAdminSession(): { slug: string; session: CourseAccessSession } | null {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!key) continue;

    const slug = slugFromStorageKey(key);
    if (!slug) continue;

    const session = readCourseSession(slug);
    if (!isCourseSessionValid(session)) continue;

    if (session?.role === 'admin') {
      return { slug, session };
    }
  }

  return null;
}
