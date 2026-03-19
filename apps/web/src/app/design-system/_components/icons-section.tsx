import IconCheck from '@workspace/ui/assets/icons/basic/check.svg';
import IconChevronLeft from '@workspace/ui/assets/icons/arrow/chevronLeft.svg';
import IconChevronRight from '@workspace/ui/assets/icons/arrow/chevronright.svg';
import IconSelfcheck from '@workspace/ui/assets/icons/communication/fill_selfcheck.svg';
import IconExpertcheck from '@workspace/ui/assets/icons/communication/fill_expertcheck.svg';
import IconReportcheck from '@workspace/ui/assets/icons/communication/fill_reportcheck.svg';

export function IconsSection() {
  return (
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
  );
}
