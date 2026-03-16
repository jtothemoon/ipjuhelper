/**
 * Design Tokens - Typography
 *
 * 문자는 Pretendard, 숫자는 Roboto를 표준 폰트로 사용합니다.
 * 브레이크포인트별(desktop, tablet, mobile) 타이포 체계를 지원합니다.
 * format: { fontSize, lineHeight, letterSpacing, fontWeight }
 */

export const fontFamily = {
  /** 문자용 */
  sans: 'Pretendard',
  /** 숫자용 */
  number: 'Roboto',
} as const;

type TypographyToken = {
  fontSize: string;
  lineHeight: string;
  letterSpacing: string;
  fontWeight: number;
};

type ResponsiveTypography = {
  desktop: TypographyToken;
  tablet: TypographyToken;
  mobile: TypographyToken;
};

/**
 * Display
 * 사용자의 첫 시선을 유도하고 주요 메시지를 강조하는 헤드라인 폰트
 */
const display = {
  lg: {
    desktop: { fontSize: '44px', lineHeight: '56px', letterSpacing: '-0.2px', fontWeight: 700 },
    tablet: { fontSize: '34px', lineHeight: '46px', letterSpacing: '-0.2px', fontWeight: 600 },
    mobile: { fontSize: '28px', lineHeight: '38px', letterSpacing: '-0.2px', fontWeight: 600 },
  },
  md: {
    desktop: { fontSize: '34px', lineHeight: '46px', letterSpacing: '-0.2px', fontWeight: 700 },
    tablet: { fontSize: '28px', lineHeight: '38px', letterSpacing: '-0.2px', fontWeight: 600 },
    mobile: { fontSize: '26px', lineHeight: '36px', letterSpacing: '-0.2px', fontWeight: 600 },
  },
} as const satisfies Record<string, ResponsiveTypography>;

/**
 * Heading
 * 정보 구조와 위계를 명확히 하는 제목용 텍스트
 */
const heading = {
  h1: {
    desktop: { fontSize: '28px', lineHeight: '36px', letterSpacing: '-0.2px', fontWeight: 600 },
    tablet: { fontSize: '24px', lineHeight: '32px', letterSpacing: '-0.2px', fontWeight: 600 },
    mobile: { fontSize: '20px', lineHeight: '26px', letterSpacing: '-0.2px', fontWeight: 600 },
  },
  h2: {
    desktop: { fontSize: '24px', lineHeight: '32px', letterSpacing: '-0.2px', fontWeight: 600 },
    tablet: { fontSize: '20px', lineHeight: '26px', letterSpacing: '-0.2px', fontWeight: 600 },
    mobile: { fontSize: '18px', lineHeight: '24px', letterSpacing: '-0.2px', fontWeight: 600 },
  },
  h3: {
    desktop: { fontSize: '20px', lineHeight: '26px', letterSpacing: '-0.2px', fontWeight: 600 },
    tablet: { fontSize: '18px', lineHeight: '24px', letterSpacing: '-0.2px', fontWeight: 600 },
    mobile: { fontSize: '16px', lineHeight: '22px', letterSpacing: '-0.2px', fontWeight: 600 },
  },
} as const satisfies Record<string, ResponsiveTypography>;

/**
 * Body
 * 가독성과 정보 전달을 우선으로 하는 기본 본문 텍스트
 */
const body = {
  xl: {
    desktop: { fontSize: '18px', lineHeight: '26px', letterSpacing: '0px', fontWeight: 400 },
    tablet: { fontSize: '18px', lineHeight: '26px', letterSpacing: '0px', fontWeight: 400 },
    mobile: { fontSize: '16px', lineHeight: '24px', letterSpacing: '0px', fontWeight: 400 },
  },
  lg: {
    desktop: { fontSize: '16px', lineHeight: '26px', letterSpacing: '0px', fontWeight: 400 },
    tablet: { fontSize: '16px', lineHeight: '26px', letterSpacing: '0px', fontWeight: 400 },
    mobile: { fontSize: '14px', lineHeight: '20px', letterSpacing: '0px', fontWeight: 400 },
  },
  md: {
    desktop: { fontSize: '15px', lineHeight: '24px', letterSpacing: '0px', fontWeight: 400 },
    tablet: { fontSize: '15px', lineHeight: '24px', letterSpacing: '0px', fontWeight: 400 },
    mobile: { fontSize: '13px', lineHeight: '18px', letterSpacing: '0px', fontWeight: 400 },
  },
  sm: {
    desktop: { fontSize: '14px', lineHeight: '22px', letterSpacing: '0px', fontWeight: 400 },
    tablet: { fontSize: '14px', lineHeight: '22px', letterSpacing: '0px', fontWeight: 400 },
    mobile: { fontSize: '12px', lineHeight: '16px', letterSpacing: '0px', fontWeight: 400 },
  },
} as const satisfies Record<string, ResponsiveTypography>;

/**
 * Label
 * UI 요소를 식별하고 조작을 안내하는 인터페이스 텍스트
 */
const label = {
  xl: {
    desktop: { fontSize: '15px', lineHeight: '22px', letterSpacing: '0.2px', fontWeight: 500 },
    tablet: { fontSize: '14px', lineHeight: '20px', letterSpacing: '0.2px', fontWeight: 500 },
    mobile: { fontSize: '14px', lineHeight: '20px', letterSpacing: '0.2px', fontWeight: 500 },
  },
  lg: {
    desktop: { fontSize: '14px', lineHeight: '20px', letterSpacing: '0.2px', fontWeight: 500 },
    tablet: { fontSize: '13px', lineHeight: '18px', letterSpacing: '0.2px', fontWeight: 500 },
    mobile: { fontSize: '13px', lineHeight: '18px', letterSpacing: '0.2px', fontWeight: 500 },
  },
  md: {
    desktop: { fontSize: '13px', lineHeight: '18px', letterSpacing: '0.2px', fontWeight: 500 },
    tablet: { fontSize: '12px', lineHeight: '16px', letterSpacing: '0.2px', fontWeight: 500 },
    mobile: { fontSize: '12px', lineHeight: '16px', letterSpacing: '0.2px', fontWeight: 500 },
  },
  sm: {
    desktop: { fontSize: '12px', lineHeight: '16px', letterSpacing: '0.2px', fontWeight: 500 },
    tablet: { fontSize: '12px', lineHeight: '14px', letterSpacing: '0.2px', fontWeight: 500 },
    mobile: { fontSize: '10px', lineHeight: '14px', letterSpacing: '0.2px', fontWeight: 500 },
  },
} as const satisfies Record<string, ResponsiveTypography>;

/**
 * Number
 * 수치 정보를 명확하게 비교·인지하기 위한 숫자 전용 텍스트
 * fontFamily: Roboto
 */
const number = {
  lg: {
    desktop: { fontSize: '34px', lineHeight: '44px', letterSpacing: '0.2px', fontWeight: 600 },
    tablet: { fontSize: '28px', lineHeight: '36px', letterSpacing: '0.2px', fontWeight: 600 },
    mobile: { fontSize: '24px', lineHeight: '22px', letterSpacing: '0.2px', fontWeight: 600 },
  },
  md: {
    desktop: { fontSize: '24px', lineHeight: '32px', letterSpacing: '0.2px', fontWeight: 500 },
    tablet: { fontSize: '20px', lineHeight: '28px', letterSpacing: '0.2px', fontWeight: 500 },
    mobile: { fontSize: '18px', lineHeight: '20px', letterSpacing: '0.2px', fontWeight: 500 },
  },
  sm: {
    desktop: { fontSize: '15px', lineHeight: '22px', letterSpacing: '0.2px', fontWeight: 400 },
    tablet: { fontSize: '14px', lineHeight: '20px', letterSpacing: '0.2px', fontWeight: 400 },
    mobile: { fontSize: '13px', lineHeight: '18px', letterSpacing: '0.2px', fontWeight: 400 },
  },
} as const satisfies Record<string, ResponsiveTypography>;

export const typography = {
  display,
  heading,
  body,
  label,
  number,
} as const;
