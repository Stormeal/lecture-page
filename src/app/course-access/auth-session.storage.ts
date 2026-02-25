import { PLAYWRIGHT_ACCESS } from './playwright-access.config';

export type CourseAccessSession = {
  sessionId: string;
  expiresAt: string; // ISO string (3 months)
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

export function readPlaywrightSession(): CourseAccessSession | null {
  try {
    const raw = localStorage.getItem(PLAYWRIGHT_ACCESS.storageKey);
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

export function writePlaywrightSession(session: CourseAccessSession) {
  localStorage.setItem(PLAYWRIGHT_ACCESS.storageKey, JSON.stringify(session));
}

export function clearPlaywrightSession() {
  localStorage.removeItem(PLAYWRIGHT_ACCESS.storageKey);
}

export function isPlaywrightSessionValid(session: CourseAccessSession | null): boolean {
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

export function touchPlaywrightSession(session: CourseAccessSession) {
  writePlaywrightSession({
    ...session,
    lastSeenAt: new Date().toISOString(),
  });
}
