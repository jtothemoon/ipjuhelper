import Logo128 from '@workspace/ui/assets/logo/logo-128.svg';
import Logo28 from '@workspace/ui/assets/logo/logo-28.svg';
import Logo26 from '@workspace/ui/assets/logo/logo-26.svg';

export function LogoSection() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-muted-foreground mb-4 text-sm">128px - 메인 로고</p>
        <div className="bg-muted inline-block rounded-lg p-8">
          <Logo128 height={128} />
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
  );
}
