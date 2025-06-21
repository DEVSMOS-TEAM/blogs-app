import { LucideIcon } from 'lucide-react';

export interface NavItemType {
    label: string;
    path: string;
    sub_items?: NavItemType[];
    isJustAdded?: boolean;
    icon?: LucideIcon;
}


export interface SocialLink {
    name: string;
    url: string;
    icon: LucideIcon;
}

export interface Member{
    name: string;
    role: string;
    image_url: string;
    detailed_info: string;
    Badge_icon: LucideIcon;
    Specialties: string[];
    social_links:  SocialLink[];
}
export interface DataType{
    about_us:{
        members: Member[]
    }
}
