export const PHONE_MAX_WIDTH_PX = 767;

export const PHONE_MEDIA_QUERY = `(max-width: ${PHONE_MAX_WIDTH_PX}px)`;

export function isPhoneViewport(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia(PHONE_MEDIA_QUERY).matches;
}
