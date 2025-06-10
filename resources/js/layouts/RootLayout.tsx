import {AppLogo} from "@/components/AppLogo";
import { Button } from '@headlessui/react';
import { NavItemType } from '@/types/const-types';
import { MoveUpRight } from 'lucide-react';
import React from 'react';

export const RootLayout = ({children} : {children: React.ReactNode}) => {
   return <>

       <NavBar />
       <main className="bg-background py-10">
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
                path: "/",
                sub_items: [],
                isJustAdded: true,
                icon: MoveUpRight
            },
            {
                label: "Blogs",
                path: "/",
                sub_items: [],
            },
            {
                label: "Resources",
                path: "/",
                sub_items: [],
            },
            {
                label: "Testimonials",
                path: "/",
                sub_items: [],
            },
            {
                label: "Contact Us",
                path: "/",
                sub_items: [],
            },
            {
                label: "Newsletter",
                path: "/",
                sub_items: [],
            },
        ]
    },
    {
        label: "News",
        path: "/",
        sub_items: [
            {
                label: "Trending Stories",
                path: "/",
                sub_items: [],
            },
            {
                label: "Featured Videos",
                path: "/",
                sub_items: [],
            },
            {
                label: "Technology",
                path: "/",
                sub_items: [],
            },
            {
                label: "Health",
                path: "/",
                sub_items: [],
            },
            {
                label: "Politics",
                path: "/",
                sub_items: [],
            },
            {
                label: "Environment",
                path: "/",
                sub_items: [],
            },
        ]
    },
    {
        label: "Blogs",
        path: "/",
        sub_items: [
            {
                label: "Quantum Computing",
                path: "/",
                sub_items: [],
            },
            {
                label: "AI Ethics",
                path: "/",
                sub_items: [],
            },
            {
                label: "Space Exploration",
                path: "/",
                sub_items: [],
            },
            {
                label: "Biotechnology",
                path: "/",
                sub_items: [],
            },
            {
                label: "Renewable Energy",
                path: "/",
                sub_items: [],
            },
            {
                label: "Biohacking",
                path: "/",
                sub_items: [],
            },
        ]
    },
    {
        label: "Podcasts",
        path: "/",
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
        path: "/",
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
    return <header className="bg-[#1A1A1A] flex items-center py-5">
        <nav className="w-4/5 mx-auto flex items-center justify-between">
            <AppLogo />
            <ul className="flex items-center gap-4">
                {navLists.map((navItem, index) => {
                    return <li key={index}><a href={navItem.path}>{navItem.label}</a></li>
                })}
            </ul>
            <Button className="bg-primary text-black text-sm p-2 rounded-md">Contact Us</Button>
        </nav>
    </header>
}

const Footer = () => {
    return <footer className="w-4/5 mx-auto flex items-start justify-between py-6">
        {
            navLists.map((navItem, index) => {
                return <BottomNavItem key={index} item={navItem} />
            })
        }
    </footer>
}

const BottomNavItem = ({item} : {item: NavItemType}) => {
    return <div className="space-y-2">
        <p className="text-base font-bold">{item.label}</p>
        <ul className="text-sm space-y-1 text-[#666666]">
            {item.sub_items?.map((subItem, index) => {
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

