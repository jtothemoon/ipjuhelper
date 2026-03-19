import Logo26White from '@workspace/ui/assets/logo/logo-26-white.svg';

export function Footer() {
  return (
    <footer className="tablet:px-6 desktop:px-8 bg-foreground flex h-85 items-center justify-center px-4">
      <div className="tablet:w-174 desktop:w-300 relative flex w-88.5 flex-col gap-6">
        {/* 로고 - 우측 상단 */}
        <div className="absolute top-0 right-0 flex items-center gap-1">
          <Logo26White height={26} />
        </div>

        {/* 링크 섹션 1 */}
        <nav aria-label="하단 탐색" className="flex flex-col gap-6">
          <div className="tablet:gap-4 desktop:gap-5 flex flex-col gap-3">
            <a
              href="#"
              className="desktop:text-[15px] desktop:leading-5.5 text-[14px] leading-5 font-medium tracking-[0.2px] text-white"
            >
              개인정보 처리방침
            </a>
            <a
              href="#"
              className="tablet:text-[15px] tablet:leading-6 text-muted text-[14px] leading-5.5 font-normal"
            >
              이용약관
            </a>
          </div>

          {/* 링크 섹션 2 */}
          <div className="tablet:gap-4 desktop:gap-5 flex flex-col gap-3">
            <a
              href="#"
              className="tablet:text-[15px] tablet:leading-6 text-muted text-[14px] leading-5.5 font-normal"
            >
              문의하기
            </a>
            <a
              href="#"
              className="tablet:text-[15px] tablet:leading-6 text-muted text-[14px] leading-5.5 font-normal"
            >
              FAQ
            </a>
          </div>
        </nav>

        {/* Copyright */}
        <span className="tablet:text-[15px] tablet:leading-6 text-[14px] leading-5.5 font-normal text-white">
          COPYRIGHT ⓒ 입주도우미. ALL RIGHTS RESERVED.
        </span>
      </div>
    </footer>
  );
}
