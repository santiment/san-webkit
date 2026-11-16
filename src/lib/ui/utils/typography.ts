export const fontSize = {
  '2xs': ['10px', '14px'],
  xs: ['12px', '16px'],
  sm: ['14px', '20px'],
  base: ['16px', '24px'],
  lg: ['18px', '28px'],
  'lg-2': ['20px', '28px'],
  'lg-3': ['22px', '28px'],
  xl: ['24px', '32px'],
  '2xl': ['26px', '32px'],
  '3xl': ['32px', '40px'],
  '4xl': ['40px', '48px'],
  '5xl': ['48px', '56px'],
} satisfies Record<string, [string, string]>

export const fontWeight = {
  thin: '100',
  extralight: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
} as const

export const fontFamily = {
  sans: ['Proxima Nova', 'sans-serif'],
  inter: ['Inter', 'sans-serif'],
  anek: ['Anek Latin', 'sans-serif'],
}

type TTypographyStyle = {
  size: keyof typeof fontSize
  family: keyof typeof fontFamily
  weight: keyof typeof fontWeight
}

export const typography = {
  't-h1-medium': { size: '5xl', family: 'anek', weight: 'medium' },
  't-h2-medium': { size: '4xl', family: 'anek', weight: 'medium' },
  't-h3-medium': { size: '3xl', family: 'anek', weight: 'medium' },
  't-h3-regular': { size: '3xl', family: 'anek', weight: 'normal' },
  't-h4-medium': { size: '2xl', family: 'anek', weight: 'medium' },
  't-h4-regular': { size: '2xl', family: 'anek', weight: 'normal' },
  't-h5-medium': { size: 'lg-3', family: 'anek', weight: 'medium' },
  't-body-1-regular': { size: 'lg', family: 'inter', weight: 'normal' },
  't-body-1-medium': { size: 'lg', family: 'inter', weight: 'medium' },
  't-body-1-semibold': { size: 'lg', family: 'inter', weight: 'semibold' },
  't-body-2-regular': { size: 'base', family: 'inter', weight: 'normal' },
  't-body-2-medium': { size: 'base', family: 'inter', weight: 'medium' },
  't-body-2-semibold': { size: 'base', family: 'inter', weight: 'semibold' },
  't-body-3-regular': { size: 'sm', family: 'inter', weight: 'normal' },
  't-body-3-medium': { size: 'sm', family: 'inter', weight: 'medium' },
  't-caption-1-regular': { size: 'xs', family: 'inter', weight: 'normal' },
  't-caption-1-medium': { size: 'xs', family: 'inter', weight: 'medium' },
  't-caption-2-medium': { size: '2xs', family: 'inter', weight: 'medium' },
} as const satisfies Record<string, TTypographyStyle>
