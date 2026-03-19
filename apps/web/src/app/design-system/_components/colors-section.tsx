import { colors } from '@workspace/ui/tokens/colors';

export function ColorsSection() {
  return (
    <>
      {/* Primary */}
      <div className="mb-8">
        <h2 className="text-primary mb-1 text-xl font-semibold">Primary</h2>
        <p className="text-muted-foreground mb-4 text-sm">브랜드의 핵심 정체성 (Brand 01 = 600)</p>
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
    </>
  );
}
