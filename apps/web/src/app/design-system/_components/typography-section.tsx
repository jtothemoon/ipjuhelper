export function TypographySection() {
  return (
    <>
      <p className="text-muted-foreground mb-8">문자: Pretendard / 숫자: Roboto</p>

      {/* Display */}
      <div className="mb-12">
        <h2 className="text-primary mb-1 text-xl font-semibold">Display</h2>
        <p className="text-muted-foreground mb-4 text-sm">
          사용자의 첫 시선을 유도하고 주요 메시지를 강조하는 헤드라인 폰트
        </p>
        <div className="space-y-4">
          <div>
            <span className="text-muted-foreground text-xs">Display LG</span>
            <div className="typo-display-lg">입주 하자 점검</div>
          </div>
          <div>
            <span className="text-muted-foreground text-xs">Display MD</span>
            <div className="typo-display-md">입주 하자 점검</div>
          </div>
        </div>
      </div>

      {/* Heading */}
      <div className="mb-12">
        <h2 className="text-primary mb-1 text-xl font-semibold">Heading</h2>
        <p className="text-muted-foreground mb-4 text-sm">
          정보 구조와 위계를 명확히 하는 제목용 텍스트
        </p>
        <div className="space-y-4">
          <div>
            <span className="text-muted-foreground text-xs">H1</span>
            <div className="typo-heading-h1">점검 방법 선택</div>
          </div>
          <div>
            <span className="text-muted-foreground text-xs">H2</span>
            <div className="typo-heading-h2">점검 방법 선택</div>
          </div>
          <div>
            <span className="text-muted-foreground text-xs">H3</span>
            <div className="typo-heading-h3">점검 방법 선택</div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="mb-12">
        <h2 className="text-primary mb-1 text-xl font-semibold">Body</h2>
        <p className="text-muted-foreground mb-4 text-sm">
          가독성과 정보 전달을 우선으로 하는 기본 본문 텍스트
        </p>
        <div className="space-y-4">
          <div>
            <span className="text-muted-foreground text-xs">Body XL</span>
            <div className="typo-body-xl">체크리스트를 따라 입주 하자를 빠르게 기록하세요.</div>
          </div>
          <div>
            <span className="text-muted-foreground text-xs">Body LG</span>
            <div className="typo-body-lg">체크리스트를 따라 입주 하자를 빠르게 기록하세요.</div>
          </div>
          <div>
            <span className="text-muted-foreground text-xs">Body MD</span>
            <div className="typo-body-md">체크리스트를 따라 입주 하자를 빠르게 기록하세요.</div>
          </div>
          <div>
            <span className="text-muted-foreground text-xs">Body SM</span>
            <div className="typo-body-sm">체크리스트를 따라 입주 하자를 빠르게 기록하세요.</div>
          </div>
        </div>
      </div>

      {/* Label */}
      <div className="mb-12">
        <h2 className="text-primary mb-1 text-xl font-semibold">Label</h2>
        <p className="text-muted-foreground mb-4 text-sm">
          UI 요소를 식별하고 조작을 안내하는 인터페이스 텍스트
        </p>
        <div className="space-y-4">
          <div>
            <span className="text-muted-foreground text-xs">Label XL</span>
            <div className="typo-label-xl">셀프 점검</div>
          </div>
          <div>
            <span className="text-muted-foreground text-xs">Label LG</span>
            <div className="typo-label-lg">셀프 점검</div>
          </div>
          <div>
            <span className="text-muted-foreground text-xs">Label MD</span>
            <div className="typo-label-md">셀프 점검</div>
          </div>
          <div>
            <span className="text-muted-foreground text-xs">Label SM</span>
            <div className="typo-label-sm">셀프 점검</div>
          </div>
        </div>
      </div>

      {/* Number */}
      <div className="mb-12">
        <h2 className="text-primary mb-1 text-xl font-semibold">Number</h2>
        <p className="text-muted-foreground mb-4 text-sm">
          수치 정보를 명확하게 비교·인지하기 위한 숫자 전용 텍스트 (Roboto)
        </p>
        <div className="space-y-4">
          <div>
            <span className="text-muted-foreground text-xs">Number LG</span>
            <div className="typo-number-lg">1,234,567</div>
          </div>
          <div>
            <span className="text-muted-foreground text-xs">Number MD</span>
            <div className="typo-number-md">1,234,567</div>
          </div>
          <div>
            <span className="text-muted-foreground text-xs">Number SM</span>
            <div className="typo-number-sm">1,234,567</div>
          </div>
        </div>
      </div>
    </>
  );
}
