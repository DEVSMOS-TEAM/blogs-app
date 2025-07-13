import {AppLogo} from "@/components/AppLogo";
import { Button } from '@headlessui/react';
import { NavItemType } from '@/types/const-types';
import { Menu, MoveUpRight, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Head } from '@inertiajs/react';
import { usePage} from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import type {PageProps} from '@/lib/types.d.';
import { toast, Toaster } from 'sonner';
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Separator } from '@/components/ui/separator';
import { IoPersonSharp } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";

export const RootLayout = ({children, title} : {children: React.ReactNode, title?: string}) => {
   return <>
       <Head title={title} />
       <NavBar />
       <main className="bg-background">
           <section>
               {children}
           </section>
       </main>
       <Footer />
   </>;
}

const navLists : NavItemType[] = [
    {
        label: "Home",
        path: "/",
        sub_items: [
            {
                label: "Features",
                path: "#",
                sub_items: [],
                isJustAdded: true,
                icon: MoveUpRight
            },
            {
                label: "Blogs",
                path: "#",
                sub_items: [],
            },
            {
                label: "Resources",
                path: "#",
                sub_items: [],
            },
            {
                label: "Testimonials",
                path: "#",
                sub_items: [],
            },
            {
                label: "Contact Us",
                path: "#",
                sub_items: [],
            },
            {
                label: "Newsletter",
                path: "#",
                sub_items: [],
            },
        ]
    },
    {
        label: "News",
        path: "/news",
        sub_items: [
            {
                label: "Trending Stories",
                path: "#",
                sub_items: [],
            },
            {
                label: "Featured Videos",
                path: "#",
                sub_items: [],
            },
            {
                label: "Technology",
                path: "#",
                sub_items: [],
            },
            {
                label: "Health",
                path: "#",
                sub_items: [],
            },
            {
                label: "Politics",
                path: "#",
                sub_items: [],
            },
            {
                label: "Environment",
                path: "#",
                sub_items: [],
            },
        ]
    },
    {
        label: "Blogs",
        path: "/blogs",
        sub_items: [
            {
                label: "Quantum Computing",
                path: "#",
                sub_items: [],
            },
            {
                label: "AI Ethics",
                path: "#",
                sub_items: [],
            },
            {
                label: "Space Exploration",
                path: "#",
                sub_items: [],
            },
            {
                label: "Biotechnology",
                path: "#",
                sub_items: [],
            },
            {
                label: "Renewable Energy",
                path: "#",
                sub_items: [],
            },
            {
                label: "Biohacking",
                path: "#",
                sub_items: [],
            },
        ]
    },
    {
        label: "Podcasts",
        path: "#",
        sub_items: [
            {
                label: "AI Revolution",
                path: "/",
                sub_items: [],
            },
            {
                label: "AI Revolution",
                path: "/",
                sub_items: [],
                isJustAdded: true,
            },
            {
                label: "TechTalk AI",
                path: "/",
                sub_items: [],
            },
            {
                label: "AI Conversations",
                path: "/",
                sub_items: [],
            },
        ]
    },
    {
        label: "Resources",
        path: "/resources",
        sub_items: [
            {
                label: "Whitepapers",
                path: "/",
                sub_items: [],
                icon: MoveUpRight
            },
            {
                label: "Ebooks",
                path: "/",
                sub_items: [],
                icon: MoveUpRight
            },
            {
                label: "Reports",
                path: "/",
                sub_items: [],
                icon: MoveUpRight
            },
            {
                label: "Research Papers",
                path: "/",
                sub_items: [],
                icon: MoveUpRight
            },
        ]
    }
]

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { auth, flash }  = usePage<PageProps>().props;

    useEffect(() => {
        if (flash?.message) {
            toast.success(flash.message);
        }
    }, [flash?.message]);

    function navigateToProfile(){
        Inertia.visit(`/profile/@${auth.user?.username.replace(/\s+/g, '')}`);
    }

    function handleLogout(){
        Inertia.get(`/auth/logout`);
    }
    function navigateToLogin(){
        Inertia.visit("/auth/login");
    }

    function navigateToAbout(){
        Inertia.visit("/about-us");
    }
    return (
        <header className="bg-[#1A1A1A] py-5">
            <Toaster richColors position="top-center"/>
            <nav className="container mx-auto px-4 flex items-center justify-between">
                <AppLogo />

                <ul className="hidden md:flex items-center gap-6 text-white">
                    {navLists.map((navItem) => (
                        <li key={navItem.path}>
                            <a href={navItem.path} className="hover:text-primary">
                                {navItem.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex gap-5">
                    {
                        auth.user ? (
                                <HoverCard>
                                    <HoverCardTrigger>
                                        <Avatar>
                                            <AvatarImage src={auth.user.provider_image_url} alt={auth.user.username} />
                                            <AvatarFallback>{auth.user.username.toString().substring(0, 2)}</AvatarFallback>
                                        </Avatar>
                                    </HoverCardTrigger>
                                    <HoverCardContent className="bg-muted p-1">
                                       <div className="space-y-3">
                                           <div className="p-2">
                                               <p className="text-md text-white">{auth.user.username}</p>
                                               <p className="text-xs text-gray-400">{auth.user.email}</p>
                                           </div>
                                           <Separator className="bg-muted-foreground opacity-45"/>
                                           <div className="space-y-2">
                                               <Button className="w-full text-white p-2 rounded-xs bg-transparent hover:bg-neutral-500"
                                               onClick={navigateToProfile}>
                                                   <div className="flex gap-2 items-center text-sm">
                                                       <IoPersonSharp/>
                                                       <p>Profile</p>
                                                   </div>
                                               </Button>
                                               <Button className="w-full text-white p-2 rounded-xs bg-transparent hover:bg-neutral-500">
                                                   <div className="flex gap-2 items-center text-sm">
                                                       <MdOutlineSettings/>
                                                       <p>Setting</p>
                                                   </div>
                                               </Button>
                                           </div>
                                           <Separator className="bg-muted-foreground opacity-45"/>
                                           <Button className="bg-primary text-black text-sm p-2 px-4 rounded-sm mb-2"
                                           onClick={handleLogout}>
                                               Logout
                                           </Button>
                                       </div>
                                    </HoverCardContent>
                                </HoverCard>

                            ) : (
                            <Button onClick={navigateToLogin} className="hidden md:block text-sm py-2 px-4 hover:text-primary hover:font-bold rounded-md transition-all duration-300 ease-linear cursor-pointer">
                                LOGIN
                            </Button>
                        )
                    }
                    <Button onClick={navigateToAbout} className="hidden md:block bg-primary text-black text-sm p-2 rounded-md">
                        About Us
                    </Button>
                </div>

                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {isMenuOpen && (
                <ul className="md:hidden mt-4 px-6 space-y-3 text-white">
                    {navLists.map((navItem) => (
                        <li key={navItem.path}>
                            <a
                                href={navItem.path}
                                className="block py-2 border-b border-gray-700"
                            >
                                {navItem.label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <Button className="w-full bg-primary text-black text-sm p-2 rounded-md">
                            Contact Us
                        </Button>
                    </li>
                </ul>
            )}
        </header>
    );
};


const Footer = () => {
    return (
     <section className="py-10 container mx-auto px-4">
         <footer className="w-full py-10 grid grid-cols-2 content-center lg:flex lg:justify-between gap-8">
             {navLists.map((navItem, index) => (
                 <BottomNavItem key={index} item={navItem} />
             ))}
         </footer>
         <div className="mt-10 text-center text-xs text-gray-500">
             © {new Date().getFullYear()} Kumnet Khnhom. All rights reserved.
         </div>
     </section>
    );
};


const BottomNavItem = ({item} : {item: NavItemType}) => {
    return <div className="space-y-2">
        <p className="text-base font-bold">{item.label}</p>
        <ul className="text-sm space-y-1 text-[#666666]">
            {item.sub_items?.map((subItem , index) => {
                return <li key={index}>
                    <div className="space-x-1 flex items-center">
                        <a href={subItem.path}>{subItem.label}</a>
                        {subItem.isJustAdded && <span className="text-xs text-white bg-gradient-to-tr p-[2px]  from-55% from-[#262626] to-[#FFD119] rounded-sm">
                            <span className="text-xs py-[1px] px-1.5 bg-[#262626] rounded-sm">New</span>
                        </span>}
                        {
                            subItem.icon && <subItem.icon className="h-4 w-4 text-primary" />
                        }
                    </div>
                </li>
            })}
        </ul>
    </div>
}

