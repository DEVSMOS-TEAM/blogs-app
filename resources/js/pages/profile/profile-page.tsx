import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { RootLayout } from '@/layouts/RootLayout';
import { useState } from 'react';
import type { PageProps } from '@/lib/types.d.';
import { usePage } from '@inertiajs/react';

export default function ProfilePage() {
    const [value, setValue] = useState(0)
    const { auth } = usePage<PageProps>().props;
    return (
        <RootLayout>
            <div className="min-h-screen bg-transparent text-white">
                <div className="container mx-auto px-6 py-8">
                    {/* Profile Header */}
                    <div className="flex items-center gap-4 mb-8">
                        <Avatar className="w-16 h-16">
                            <AvatarImage src={auth.user?.provider_image_url} alt="Profile picture" />
                            <AvatarFallback className="bg-orange-500 text-white text-xl">YV</AvatarFallback>
                        </Avatar>
                        <div>
                            <h1 className="text-xl font-bold text-white">{auth.user?.username}</h1>
                            <p className="text-gray-400">@{auth.user?.username.replace(/\s+/g, '')}</p>
                        </div>
                    </div>

                    {/* Navigation Tabs */}
                    <div className="border-b border-gray-800">
                        <nav className="flex space-x-8">
                            <button className={`pb-3 px-1 border-b-2 ${value == 0 ? "border-primary" : "border-transparent"} text-white font-medium`} onClick={()=> setValue(0)}>Profile
                            </button>
                            <button
                                className={`pb-3 px-1 border-b-2 ${value == 1 ? "border-primary" : "border-transparent"} text-gray-400 hover:text-white transition-colors`}
                                onClick={()=> setValue(1)}>
                                Articles
                            </button>
                        </nav>
                    </div>

                    <div className="my-5">
                        { value === 0 ? <div>Account</div> : <div>Articles</div>}
                    </div>
                </div>
            </div>
        </RootLayout>
    )
}
