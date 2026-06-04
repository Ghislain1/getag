
import { CheckIcon } from '@radix-ui/react-icons';
import { Flower2, SirenIcon } from 'lucide-react';

export function AnnouncementBar() {


  const items = [
    "Keine Wartezeit",
    "Bequem bei Ihnen zu Hause",
    "Flexibel",
    " Text todo 1",
    " Text todo 2",

  ];

  const doubledItems = [...items, ...items];

  return (
    <div className="fixed top-20 left-0 right-0 z-50 transition-all duration-300 overflow-hidden   shadow-lg bg-transparent">
      <div className="flex h-10 justify-center animate-[marquee_22s_linear_infinite]" style={{ width: 'max-content' }}>
        {doubledItems.map((text, i) => (
          <span key={i} className="flex items-center gap-3 px-8 text-lg font-medium text-red-600 whitespace-nowrap">
            <SirenIcon className="h-3.5 w-3.5 shrink-0 bg-(--color-main) text-red" />
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
