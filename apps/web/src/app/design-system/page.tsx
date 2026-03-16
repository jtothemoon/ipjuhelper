import { typography, fontFamily } from '@workspace/ui/tokens/typography';
import { colors } from '@workspace/ui/tokens/colors';

// Logo
import Logo128 from '@workspace/ui/assets/logo/logo-128.svg';
import Logo28 from '@workspace/ui/assets/logo/logo-28.svg';
import Logo26 from '@workspace/ui/assets/logo/logo-26.svg';

// Icons - Basic
import IconCheck from '@workspace/ui/assets/icons/basic/check.svg';
// Icons - Arrow
import IconChevronLeft from '@workspace/ui/assets/icons/arrow/chevronLeft.svg';
import IconChevronRight from '@workspace/ui/assets/icons/arrow/chevronright.svg';
// Icons - Communication
import IconSelfcheck from '@workspace/ui/assets/icons/communication/fill_selfcheck.svg';
import IconExpertcheck from '@workspace/ui/assets/icons/communication/fill_expertcheck.svg';
import IconReportcheck from '@workspace/ui/assets/icons/communication/fill_reportcheck.svg';

export default function DesignSystemPage() {
  return (
    <main className="mx-auto max-w-[1200px] space-y-24 px-8 py-16">
      {/* ========== 1. Typography ========== */}
      <section>
        <h1 className="mb-2 text-3xl font-bold">Typography</h1>
        <p className="text-muted-foreground mb-8">
          문자: {fontFamily.sans} / 숫자: {fontFamily.number}
        </p>

        {/* Display */}
        <div className="mb-12">
          <h2 className="text-primary mb-1 text-xl font-semibold">Display</h2>
          <p className="text-muted-foreground mb-4 text-sm">
            사용자의 첫 시선을 유도하고 주요 메시지를 강조하는 헤드라인 폰트
          </p>
          <div className="space-y-4">
            {(['lg', 'md'] as const).map((key) => {
              const t = typography.display[key].desktop;
              return (
                <div key={key}>
                  <span className="text-muted-foreground mr-4 text-xs">
                    Display {key.toUpperCase()} · {t.fontSize} / {t.lineHeight} / {t.fontWeight}
                  </span>
                  <div
                    style={{
                      fontSize: t.fontSize,
                      lineHeight: t.lineHeight,
                      fontWeight: t.fontWeight,
                      letterSpacing: t.letterSpacing,
                    }}
                  >
                    입주 하자 점검
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-primary mb-1 text-xl font-semibold">Heading</h2>
          <p className="text-muted-foreground mb-4 text-sm">
            정보 구조와 위계를 명확히 하는 제목용 텍스트
          </p>
          <div className="space-y-4">
            {(['h1', 'h2', 'h3'] as const).map((key) => {
              const t = typography.heading[key].desktop;
              return (
                <div key={key}>
                  <span className="text-muted-foreground mr-4 text-xs">
                    {key.toUpperCase()} · {t.fontSize} / {t.lineHeight} / {t.fontWeight}
                  </span>
                  <div
                    style={{
                      fontSize: t.fontSize,
                      lineHeight: t.lineHeight,
                      fontWeight: t.fontWeight,
                      letterSpacing: t.letterSpacing,
                    }}
                  >
                    점검 방법 선택
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Body */}
        <div className="mb-12">
          <h2 className="text-primary mb-1 text-xl font-semibold">Body</h2>
          <p className="text-muted-foreground mb-4 text-sm">
            가독성과 정보 전달을 우선으로 하는 기본 본문 텍스트
          </p>
          <div className="space-y-4">
            {(['xl', 'lg', 'md', 'sm'] as const).map((key) => {
              const t = typography.body[key].desktop;
              return (
                <div key={key}>
                  <span className="text-muted-foreground mr-4 text-xs">
                    Body {key.toUpperCase()} · {t.fontSize} / {t.lineHeight} / {t.fontWeight}
                  </span>
                  <div
                    style={{
                      fontSize: t.fontSize,
                      lineHeight: t.lineHeight,
                      fontWeight: t.fontWeight,
                      letterSpacing: t.letterSpacing,
                    }}
                  >
                    체크리스트를 따라 입주 하자를 빠르게 기록하세요.
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Label */}
        <div className="mb-12">
          <h2 className="text-primary mb-1 text-xl font-semibold">Label</h2>
          <p className="text-muted-foreground mb-4 text-sm">
            UI 요소를 식별하고 조작을 안내하는 인터페이스 텍스트
          </p>
          <div className="space-y-4">
            {(['xl', 'lg', 'md', 'sm'] as const).map((key) => {
              const t = typography.label[key].desktop;
              return (
                <div key={key}>
                  <span className="text-muted-foreground mr-4 text-xs">
                    Label {key.toUpperCase()} · {t.fontSize} / {t.lineHeight} / {t.fontWeight}
                  </span>
                  <div
                    style={{
                      fontSize: t.fontSize,
                      lineHeight: t.lineHeight,
                      fontWeight: t.fontWeight,
                      letterSpacing: t.letterSpacing,
                    }}
                  >
                    셀프 점검
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Number */}
        <div className="mb-12">
          <h2 className="text-primary mb-1 text-xl font-semibold">Number</h2>
          <p className="text-muted-foreground mb-4 text-sm">
            수치 정보를 명확하게 비교·인지하기 위한 숫자 전용 텍스트 (Roboto)
          </p>
          <div className="space-y-4">
            {(['lg', 'md', 'sm'] as const).map((key) => {
              const t = typography.number[key].desktop;
              return (
                <div key={key}>
                  <span className="text-muted-foreground mr-4 text-xs">
                    Number {key.toUpperCase()} · {t.fontSize} / {t.lineHeight} / {t.fontWeight}
                  </span>
                  <div
                    style={{
                      fontFamily: `var(--font-number)`,
                      fontSize: t.fontSize,
                      lineHeight: t.lineHeight,
                      fontWeight: t.fontWeight,
                      letterSpacing: t.letterSpacing,
                    }}
                  >
                    1,234,567
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== 2. Colors ========== */}
      <section>
        <h1 className="mb-8 text-3xl font-bold">Colors</h1>

        {/* Primary */}
        <div className="mb-8">
          <h2 className="text-primary mb-1 text-xl font-semibold">Primary</h2>
          <p className="text-muted-foreground mb-4 text-sm">
            브랜드의 핵심 정체성 (Brand 01 = 600)
          </p>
          <div className="flex gap-2">
            {Object.entries(colors.primary).map(([step, hex]) => (
              <div key={step} className="flex flex-col items-center">
                <div className="h-16 w-16 rounded-lg border" style={{ backgroundColor: hex }} />
                <span className="mt-1 text-xs">{step}</span>
                <span className="text-muted-foreground text-xs">{hex}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Secondary */}
        <div className="mb-8">
          <h2 className="mb-1 text-xl font-semibold" style={{ color: colors.secondary[400] }}>
            Secondary
          </h2>
          <p className="text-muted-foreground mb-4 text-sm">
            Primary를 보완하는 보조 컬러 (Brand 02 = 400)
          </p>
          <div className="flex gap-2">
            {Object.entries(colors.secondary).map(([step, hex]) => (
              <div key={step} className="flex flex-col items-center">
                <div className="h-16 w-16 rounded-lg border" style={{ backgroundColor: hex }} />
                <span className="mt-1 text-xs">{step}</span>
                <span className="text-muted-foreground text-xs">{hex}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Gray */}
        <div className="mb-8">
          <h2 className="mb-1 text-xl font-semibold">Grayscale</h2>
          <p className="text-muted-foreground mb-4 text-sm">
            정보 전달과 위계를 나타내며, BG·Text·Line에 사용
          </p>
          <div className="flex gap-2">
            {Object.entries(colors.gray).map(([step, hex]) => (
              <div key={step} className="flex flex-col items-center">
                <div className="h-16 w-16 rounded-lg border" style={{ backgroundColor: hex }} />
                <span className="mt-1 text-xs">{step}</span>
                <span className="text-muted-foreground text-xs">{hex}</span>
              </div>
            ))}
          </div>
        </div>

        {/* System */}
        <div className="mb-8">
          <h2 className="mb-1 text-xl font-semibold">System</h2>
          <p className="text-muted-foreground mb-4 text-sm">
            사용자에게 직관적으로 시스템 상태를 보여주는 색상
          </p>
          <div className="flex gap-4">
            {Object.entries(colors.system).map(([name, hex]) => (
              <div key={name} className="flex flex-col items-center">
                <div className="h-16 w-20 rounded-lg border" style={{ backgroundColor: hex }} />
                <span className="mt-1 text-sm font-medium">{name}</span>
                <span className="text-muted-foreground text-xs">{hex}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Border & Background */}
        <div className="mb-8 flex gap-16">
          <div>
            <h2 className="mb-4 text-xl font-semibold">Border</h2>
            <div className="flex gap-4">
              {Object.entries(colors.border).map(([name, hex]) => (
                <div key={name} className="flex flex-col items-center">
                  <div
                    className="h-16 w-20 rounded-lg border-2"
                    style={{ borderColor: hex, backgroundColor: '#fff' }}
                  />
                  <span className="mt-1 text-sm">border-{name}</span>
                  <span className="text-muted-foreground text-xs">{hex}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-xl font-semibold">Background</h2>
            <div className="flex gap-4">
              {Object.entries(colors.background).map(([name, hex]) => (
                <div key={name} className="flex flex-col items-center">
                  <div className="h-16 w-20 rounded-lg border" style={{ backgroundColor: hex }} />
                  <span className="mt-1 text-sm">bg-{name}</span>
                  <span className="text-muted-foreground text-xs">{hex}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== 3. Logo ========== */}
      <section>
        <h1 className="mb-8 text-3xl font-bold">Logo</h1>
        <div className="space-y-8">
          <div>
            <p className="text-muted-foreground mb-4 text-sm">128px - 메인 로고</p>
            <div className="bg-muted inline-block rounded-lg p-8">
              <Logo128 width={128} height={128} />
            </div>
          </div>
          <div className="flex gap-12">
            <div>
              <p className="text-muted-foreground mb-4 text-sm">28px - 상단 네비게이션</p>
              <div className="bg-muted inline-block rounded-lg p-4">
                <Logo28 height={28} />
              </div>
            </div>
            <div>
              <p className="text-muted-foreground mb-4 text-sm">26px - 모바일 네비게이션</p>
              <div className="bg-muted inline-block rounded-lg p-4">
                <Logo26 height={26} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 4. Icons ========== */}
      <section>
        <h1 className="mb-8 text-3xl font-bold">Icons</h1>
        <div className="grid grid-cols-6 gap-8">
          {[
            { name: 'check', category: 'Basic', Icon: IconCheck },
            { name: 'chevronLeft', category: 'Arrow', Icon: IconChevronLeft },
            { name: 'chevronRight', category: 'Arrow', Icon: IconChevronRight },
            { name: 'fill_selfcheck', category: 'Communication', Icon: IconSelfcheck },
            { name: 'fill_expertcheck', category: 'Communication', Icon: IconExpertcheck },
            { name: 'fill_reportcheck', category: 'Communication', Icon: IconReportcheck },
          ].map((icon) => (
            <div key={icon.name} className="flex flex-col items-center gap-2">
              <div className="bg-muted flex h-12 w-12 items-center justify-center rounded-lg">
                <icon.Icon width={24} height={24} />
              </div>
              <span className="text-muted-foreground text-xs">{icon.category}</span>
              <span className="text-xs font-medium">{icon.name}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
