/**
 * Spacing scale for margin, padding, gap, and inset offsets (px).
 * When migrating legacy values, snap to the nearest token (e.g. 3 → 4, 9 → 8).
 */
export const space = {
  0: '0',
  1: '1px',
  2: '2px',
  4: '4px',
  6: '6px',
  8: '8px',
  10: '10px',
  12: '12px',
  14: '14px',
  16: '16px',
  20: '20px',
  24: '24px',
  28: '28px',
  32: '32px',
  36: '36px',
  40: '40px',
} as const

export type SpaceToken = (typeof space)[keyof typeof space]
