import { LucideIcon } from 'lucide-react';

export interface NavItemType{
    label: string;
    path: string;
    sub_items?: NavItemType[];
    isJustAdded?: boolean;
    icon?: LucideIcon;
}
