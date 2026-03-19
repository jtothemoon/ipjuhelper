import { cn } from '@workspace/ui/lib/utils';

interface SectionTitleProps {
  subtitle: string;
  title: string;
  description: string;
  className?: string;
}

export function SectionTitle({ subtitle, title, description, className }: SectionTitleProps) {
  return (
    <div
      className={cn('tablet:gap-4 desktop:gap-5 mb-8 flex flex-col items-center gap-3', className)}
    >
      <span className="typo-heading-h1 text-primary">{subtitle}</span>
      <h2 className="typo-display-lg text-center whitespace-pre-line text-[#1E1E1E]">{title}</h2>
      <p className="typo-body-xl text-foreground text-center whitespace-pre-line">{description}</p>
    </div>
  );
}
