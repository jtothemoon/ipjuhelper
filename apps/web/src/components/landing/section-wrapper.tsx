import { cn } from '@workspace/ui/lib/utils';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionWrapper({ children, className }: SectionWrapperProps) {
  return (
    <section
      className={cn(
        'tablet:px-6 tablet:py-20 desktop:px-8 desktop:py-30 bg-white px-4 py-10',
        className,
      )}
    >
      <div className="desktop:mx-auto desktop:max-w-300">{children}</div>
    </section>
  );
}
