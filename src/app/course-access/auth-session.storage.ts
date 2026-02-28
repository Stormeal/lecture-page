export type CourseAccessSession = {
  sessionId: string;
  expiresAt: string; // ISO string (3 months, issued by API)
  username: string;

  // Updated on activity, used for auto logout
  lastSeenAt: string; // ISO string
};

const IDLE_DAYS = 5;
const IDLE_MS = IDLE_DAYS * 24 * 60 * 60 * 1000;

function parseIsoMs(value: string): number | null {
  const ms = Date.parse(value);
  return Number.isFinite(ms) ? ms : null;
}

function storageKeyForCourse(slug: string) {
  // Keep it stable and human-readable
  const safe = String(slug).trim().toLowerCase();
  return `course_access_session_${safe}_v1`;
}

export function readCourseSession(slug: string): CourseAccessSession | null {
  try {
    const key = storageKeyForCourse(slug);
    const raw = localStorage.getItem(key);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as Partial<CourseAccessSession> | null;
    if (!parsed) return null;

    if (!parsed.sessionId || !parsed.expiresAt || !parsed.username) return null;

    // Backward compatibility: if lastSeenAt missing, treat as "now"
    const lastSeenAt = parsed.lastSeenAt ? String(parsed.lastSeenAt) : new Date().toISOString();

    return {
      sessionId: String(parsed.sessionId),
      expiresAt: String(parsed.expiresAt),
      username: String(parsed.username),
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
