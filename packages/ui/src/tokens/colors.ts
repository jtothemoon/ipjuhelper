/**
 * Design Tokens - Colors
 *
 * 케어락의 대표 색상을 디지털 UI에 최적화한 색상으로 구성되었습니다.
 * - 색상별 10단계를 지원하며, Grayscale을 제외한 색상별 주요 색상은 50입니다.
 * - Color Palette는 가장 밝은 색상을 0, 가장 어두운 색상을 100으로 합니다.
 */

/**
 * Primary Color
 * 브랜드의 핵심 정체성을 나타내는 컬러로, 주요 버튼, 활성 상태, 핵심 액션 등
 * UI의 중심 요소에 사용됩니다.
 * 사용자의 시선을 유도하고 인터랙션의 우선순위를 명확하게 전달합니다.
 * Brand 01 = primary.600
 */
const primary = {
  50: '#EFF7FF',
  100: '#DBEDFE',
  200: '#BFE0FE',
  300: '#BFE0FE',
  400: '#60B1FA',
  500: '#3B91F6',
  600: '#1F6FEB',
  700: '#1D5DD8',
  800: '#1E4BAF',
  900: '#1E438A',
  950: '#172A54',
} as const;

/**
 * Secondary Color
 * Primary를 보완하는 보조 컬러로, 서브 버튼, 강조 정보, 상태 표현 등
 * 보조적 인터랙션에 사용됩니다.
 * 화면의 균형을 유지하면서 친환경적인 브랜드 이미지를 강화합니다.
 * Brand 02 = secondary.400
 */
const secondary = {
  50: '#F1F8F4',
  100: '#DCEFE2',
  200: '#BCDEC9',
  300: '#90C5A9',
  400: '#6FAF8F',
  500: '#3F8A67',
  600: '#2D6E51',
  700: '#245842',
  800: '#1F4636',
  900: '#1A3A2E',
  950: '#0E201A',
} as const;

/**
 * Grayscale / Text
 * 정보 전달과 위계를 나타내는 중요한 역할을 합니다.
 * 주로 BG, Text, Line에 사용되며, 텍스트는 가독성을 고려해야 하므로
 * 배경과의 명암비를 고려해야 합니다.
 */
const gray = {
  50: '#FAFBFA',
  100: '#F5F7F6',
  200: '#E4E7EB',
  300: '#CBD2D9',
  400: '#9AA5B1',
  500: '#7B8794',
  600: '#52606D',
  700: '#3E4C59',
  800: '#2E3A45',
  900: '#1F2933',
  950: '#1E1E1E',
} as const;

/**
 * System Colors
 * 사용자에게 직관적으로 시스템 상태를 보여주는 색상으로,
 * 텍스트와 모양(아이콘)을 함께 사용하는 것을 권장합니다.
 */
const system = {
  warning: '#B43636',
  success: '#2D6E51',
  info: '#1F6FEB',
} as const;

/** Border */
const border = {
  1: '#9AA5B1',
  2: '#E4E7EB',
} as const;

/** Background */
const background = {
  1: '#FFFFFF',
  2: '#F5F7F6',
  3: '#1F6FEB',
  4: '#DCEFE2',
} as const;

/** Button */
const button = {
  primary: {
    bg: '#1F6FEB',
    hover: '#1D5DD8',
    text: '#FFFFFF',
  },
  secondary: {
    bg: '#FFFFFF',
    border: '#CBD2D9',
    text: '#3E4C59',
    hoverBg: '#F5F7F6',
    activeBg: '#E4E7EB',
  },
} as const;

export const colors = {
  primary,
  secondary,
  gray,
  system,
  border,
  background,
  button,
} as const;
