import { TopNav } from '@/components/layout/top-nav';
import { Footer } from '@/components/layout/footer';

export function NavigationSection() {
  return (
    <>
      {/* Top Nav */}
      <div className="mb-12">
        <h2 className="text-primary mb-1 text-xl font-semibold">Top Nav</h2>
        <p className="text-muted-foreground mb-4 text-sm">상단 네비게이션</p>
        <div className="overflow-hidden rounded-lg border">
          <TopNav />
        </div>
      </div>

      {/* Footer */}
      <div className="mb-12">
        <h2 className="text-primary mb-1 text-xl font-semibold">Footer</h2>
        <p className="text-muted-foreground mb-4 text-sm">하단 푸터</p>
        <div className="overflow-hidden rounded-lg">
          <Footer />
        </div>
      </div>
    </>
  );
}
