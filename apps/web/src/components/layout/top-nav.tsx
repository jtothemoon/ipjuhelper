import Link from 'next/link';
import Logo28 from '@workspace/ui/assets/logo/logo-28.svg';
import { Button } from '@workspace/ui/components/button';

export function TopNav() {
  return (
    <header className="flex h-14 items-center border-b border-[#E4E7EB] bg-white px-4">
      {/* 로고 */}
      <Link href="/" className="flex items-center gap-1">
        <Logo28 height={28} />
      </Link>

      {/* Nav */}
      <nav className="ml-auto flex items-center gap-4">
        <Button variant="text" size="text">
          셀프 점검
        </Button>
        <Button variant="text" size="text">
          전문가 참여
        </Button>
        <Button variant="secondary" className="h-10">
          로그인
        </Button>
      </nav>
    </header>
  );
}
