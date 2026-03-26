/**
 * Typography scale. Use semantic sizes; legacy px values snap to the nearest step.
 */
export const fontSize = {
  micro: '8px',
  caption2: '9px',
  caption: '10px',
  label: '11px',
  bodySm: '12px',
  body: '13px',
  bodyLg: '14px',
  bodyXL: '15px',
  titleSm: '20px',
  titleMd: '24px',
  /** Was 27px on large SmallProductCard — rounded to 28 */
  titleLg: '28px',
  displaySm: '36px',
  displayMd: '40px',
  displayLg: '48px',
} as const

export const fontWeight = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const

export const lineHeight = {
  normal: 'normal',
  tight: 1,
  snug: 1.25,
  /** Pagination numeral cap height */
  controlMd: '30px',
} as const
