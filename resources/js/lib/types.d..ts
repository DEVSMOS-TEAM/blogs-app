import { LucideIcon } from 'lucide-react';
import { PageProps as InertiaPageProps } from '@inertiajs/inertia';

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

export interface UserModel {
    id: string;
    username: string;
    email: string;
    oauth2:{
        provider: string,
        provider_id: string,
        access_token: string,
    };
    provider_image_url: string;
    bio: string;
    password_hash: string;
    remember_token: string;
    created_at: string;
    updated_at: string;
}

export interface Flash{
   message: string;
}

export interface PageProps extends InertiaPageProps {
    auth: {
        user: UserModel | null;
    };
    flash: Flash;
}
