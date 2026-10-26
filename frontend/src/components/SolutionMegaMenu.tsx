import type { ElementType } from 'react';
import { Link } from 'react-router-dom';
import { MEGA_MENU_COLUMNS } from '../data/navigationData.ts';
import {
  Calculator,
  Package,
  FileText,
  FileSpreadsheet,
  Receipt,
  Scan,
  Store,
  Pill,
  ShoppingCart,
  Utensils,
  Gem,
  Shirt,
  FileCheck,
  CornerUpRight,
  UtensilsCrossed,
  Headphones,
  BookOpen,
  Award,
  HelpCircle,
  MessageSquare,
  Video,
  X,
} from 'lucide-react';

interface SolutionMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const ICON_MAP: Record<string, ElementType> = {
  Accounting: Calculator,
  Inventory: Package,
  Invoicing: FileText,
  'E-Invoice': FileSpreadsheet,
  POS: Receipt,
  OCR: Scan,
  Retail: Store,
  Pharmacy: Pill,
  Grocery: ShoppingCart,
  Restaurant: Utensils,
  Jewellery: Gem,
  'Clothing/Apparel': Shirt,
  'EveryKadai TaxOne': FileCheck,
  'EveryKadai Flyy': CornerUpRight,
  'EveryKadai Table': UtensilsCrossed,
  'Vyapar TaxOne': FileCheck,
  'Vyapar Flyy': CornerUpRight,
  'Vyapar Table': UtensilsCrossed,
  NeoDove: Headphones,
  Blogs: BookOpen,
  'Use Cases': Award,
  Guides: HelpCircle,
  'Success Stories': MessageSquare,
  Videos: Video,
};

export const SolutionMegaMenu = ({
  isOpen,
  onClose,
  onMouseEnter,
  onMouseLeave,
}: SolutionMegaMenuProps) => {
  if (!isOpen) return null;

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="absolute left-1/2 -translate-x-1/2 top-full w-[1240px] max-w-[96vw] rounded-2xl bg-white p-6 sm:p-7 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.15)] border border-slate-200/90 z-50 animate-in fade-in slide-in-from-top-1 duration-200 mt-1"
    >
      {/* Close Button Top Right */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-5 text-slate-400 hover:text-slate-700 transition cursor-pointer p-1.5 rounded-lg hover:bg-slate-100"
        aria-label="Close solutions menu"
      >
        <X className="w-4 h-4 stroke-[2]" />
      </button>

      {/* 4 Columns Grid with Proportional Column Widths & Vertical Dividers */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.05fr_1.3fr_0.9fr]">
        {MEGA_MENU_COLUMNS.map((col, idx) => (
          <div
            key={idx}
            className={`space-y-3.5 ${
              idx !== MEGA_MENU_COLUMNS.length - 1 ? 'md:border-r md:border-slate-100' : ''
            } ${
              idx === 0
                ? 'md:pr-5'
                : idx === MEGA_MENU_COLUMNS.length - 1
                ? 'md:pl-5'
                : 'md:px-4'
            }`}
          >
            <h4 className="text-[12px] font-bold text-slate-400 uppercase tracking-wider px-2">
              {col.header}
            </h4>

            {/* Subgrid */}
            <div className="grid grid-cols-[max-content_auto] gap-x-3 gap-y-2">
              {col.items.map((item, itemIdx) => {
                const Icon = ICON_MAP[item.title] || FileText;

                const Content = (
                  <div className="flex items-center gap-2.5 py-1.5 px-2 rounded-xl hover:bg-rose-50/70 group transition-all duration-150">
                    <div className="w-7 h-7 rounded-lg bg-slate-100/80 group-hover:bg-rose-100/80 flex items-center justify-center shrink-0 transition-colors">
                      <Icon
                        className="w-3.5 h-3.5 text-slate-600 group-hover:text-rose-600 transition-colors"
                        strokeWidth={2}
                      />
                    </div>
                    <span className="text-[13px] font-medium text-slate-700 group-hover:text-rose-600 transition-colors whitespace-nowrap">
                      {item.title}
                    </span>
                  </div>
                );

                return item.isExternal ? (
                  <a
                    key={itemIdx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="block"
                  >
                    {Content}
                  </a>
                ) : (
                  <Link key={itemIdx} to={item.href} onClick={onClose} className="block">
                    {Content}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
