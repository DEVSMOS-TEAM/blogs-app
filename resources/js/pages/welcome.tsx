import BlogFeatureCard from '@/components/cart/BlogFeatureCard';
import CountDownCart from '@/components/cart/CountDownCart';
import FeatureCard from '@/components/cart/FeatureCard';
import TestimonialsGrid from '@/components/TestimonialsGrid';
import { RootLayout } from '@/layouts/RootLayout';
import { Avatar, AvatarGroup } from 'flowbite-react';
import { ArrowRight, Dot, CheckCircle as IconCheckCircle } from 'lucide-react';
import Layer from '../../../public/layer.png';

export default function Welcome() {
    return (
        <>
            <RootLayout>
                <section className="relative min-h-screen overflow-hidden bg-background text-white">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 right-20 h-72 w-72 animate-pulse rounded-full bg-blue-500/10 blur-3xl md:h-96 md:w-96" />
                        <div className="absolute bottom-20 left-20 h-48 w-48 animate-pulse rounded-full bg-purple-500/10 blur-3xl delay-1000 md:h-64 md:w-64" />
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage: `radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`,
                                backgroundSize: '100px 100px',
                            }}
                        />
                    </div>

                    <div className="absolute inset-0 opacity-30">
                        <svg className="h-full w-full" viewBox="0 0 1200 800">
                            <defs>
                                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
                                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
                                </linearGradient>
                            </defs>
                            <path d="M0,400 Q300,200 600,400 T1200,300" stroke="url(#lineGradient)" strokeWidth="2" fill="none">
                                <animate attributeName="stroke-dasharray" values="0,1000;1000,0;0,1000" dur="8s" repeatCount="indefinite" />
                            </path>
                            <path d="M0,500 Q400,300 800,500 T1200,400" stroke="url(#lineGradient)" strokeWidth="1.5" fill="none" opacity="0.7">
                                <animate attributeName="stroke-dasharray" values="1000,0;0,1000;1000,0" dur="10s" repeatCount="indefinite" />
                            </path>
                        </svg>
                    </div>
                    <div className="relative z-10 px-6 py-12 md:px-12 md:py-20 lg:border-b lg:px-24 lg:py-28">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="space-y-6 border-r text-start">
                                <p className="text-xs font-medium tracking-wide text-white uppercase">Your Journey to Tomorrow Begins Here</p>
                                <h1 className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-3xl leading-tight font-bold text-transparent sm:text-4xl md:text-5xl lg:text-5xl">
                                    Explore the Frontiers of <br />
                                    <span>Artificial Intelligence</span>
                                </h1>
                                <p className="text-base leading-relaxed text-gray-300 md:text-lg">
                                    Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where machines think,
                                    learn, and reshape the future. Join us on this visionary expedition into the heart of AI.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                                    {Array.from({ length: 3 }, (_, index) => (
                                        <div key={index} className="flex items-center space-x-2">
                                            <CountDownCart number="300" label="Resources available" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative flex items-center justify-center md:items-end">
                                <img
                                    src={Layer}
                                    alt="AI Hero"
                                    className="absolute top-0 left-0 h-[900px]"
                                />
                                <div className="relative z-20 flex max-w-md flex-col items-start space-y-3 rounded-xl md:max-w-lg">
                                    <div className="flex items-center space-x-2">
                                        <AvatarGroup>
                                            {Array.from({ length: 5 }, (_, index) => (
                                                <Avatar
                                                    key={index}
                                                    img={`https://i.pravatar.cc/150?img=${index + 1}`}
                                                    alt={`Avatar ${index + 1}`}
                                                    className="h-8 w-8 md:h-10 md:w-10"
                                                    rounded
                                                    stacked
                                                />
                                            ))}
                                        </AvatarGroup>
                                    </div>
                                    <h3 className="text-lg font-bold text-white md:text-xl">Explore 1000+ resources</h3>
                                    <p className="text-sm text-gray-400 md:text-base">
                                        Find 1,000 articles on emerging tech trends and breakthroughs.
                                    </p>
                                    <button className="flex items-center space-x-2 font-medium text-primary transition-colors hover:text-blue-400">
                                        <span>Explore Resources</span>
                                        <ArrowRight className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Features Cards */}
                    <div className="relative z-20 mx-auto grid grid-cols-1 gap-6 px-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:px-24">
                        {Array.from({ length: 3 }, (_, index) => (
                            <FeatureCard
                                key={index}
                                icon={<Dot className="h-6 w-6 text-yellow-400" />}
                                title={`Feature ${index + 1}`}
                                subtitle="Subtitle for feature"
                                description="This is a brief description of the feature that highlights its benefits and functionalities."
                            />
                        ))}
                    </div>
                </section>
                <section className="my-5 bg-neutral-900 px-4 py-20 text-white md:px-16 lg:px-26">
                    <div className="container mx-auto">
                        <p className="rounded-sm py-1 text-white">Subscribe Now</p>
                        <h2 className="my-6 text-2xl md:text-5xl">FutureTech Features</h2>
                    </div>
                </section>

                <section className="my-5 bg-background px-4 py-20 text-white md:px-16 lg:px-26">
                    <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 md:grid-cols-2">
                        {/* Left Content */}
                        <div className="flex flex-col items-start justify-center px-4 md:px-0">
                            <h2 className="my-6 text-2xl md:text-5xl">Future Technology Blog</h2>
                            <p className="max-w-md rounded-sm text-white">Stay informed with our blog section dedicated to future technology.</p>
                        </div>

                        {/* Right Grid of Cards */}
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            {Array.from({ length: 4 }, (_, index) => (
                                <BlogFeatureCard
                                    key={index}
                                    icon={<IconCheckCircle className="h-6 w-6" />}
                                    title="Quantity"
                                    description="Over 1,000 articles on emerging tech trends and breakthroughs."
                                />
                            ))}
                        </div>
                    </div>
                </section>

                <section className="my-5 bg-neutral-900 px-4 py-20 text-white md:px-16 lg:px-28 xl:px-40">
                    <div className="container mx-auto px-4">
                        <p className="rounded-sm py-1 text-white">A Knowledge Treasure Trove</p>
                        <h2 className="my-6 text-2xl md:text-5xl">Explore FutureTech&apos;s In-Depth Blog Posts</h2>
                    </div>
                </section>

                <section className="my-5 bg-background px-4 py-20 text-white md:px-16 lg:px-28 xl:px-40">
                    <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 md:grid-cols-2">
                        {/* Left Side */}
                        <div className="flex flex-col justify-center border-r border-gray-700 pr-4 md:pr-8">
                            <h2 className="mb-4 text-2xl font-bold md:text-5xl">Ebooks</h2>
                            <p className="mb-6 max-w-md text-gray-300">
                                Explore our collection of ebooks covering a wide spectrum of future technology topics.
                            </p>

                            <div className="flex flex-col justify-center gap-4">
                                <div>
                                    <p className="mb-1 text-sm text-gray-400">Read By</p>
                                    <h3 className="text-xl font-bold text-white">1000+ Users</h3>
                                </div>

                                <div className="flex -space-x-2">
                                    <AvatarGroup>
                                        {Array.from({ length: 5 }, (_, index) => (
                                            <Avatar
                                                key={index}
                                                img={`https://i.pravatar.cc/150?img=${index + 1}`}
                                                alt={`Avatar ${index + 1}`}
                                                className="h-8 w-8 md:h-10 md:w-10"
                                                rounded
                                                stacked
                                            />
                                        ))}
                                    </AvatarGroup>
                                </div>
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className="flex flex-col md:pl-8">
                            <div>
                                <h3 className="mb-4 text-2xl font-bold">Variety of Topics</h3>
                                <p className="mb-6 max-w-md text-gray-300">
                                    Topics include AI in education (25%), renewable energy (20%), healthcare (15%).
                                </p>
                            </div>
                            <div className="overflow-hidden rounded-sm">
                                <img
                                    className="h-auto w-full object-cover"
                                    src="https://img.freepik.com/free-photo/cheerful-caucasian-woman-wearing-vr-headset_74855-4004.jpg"
                                    alt="Woman wearing VR headset"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="my-5 bg-neutral-900 px-4 py-20 text-white md:px-16 lg:px-28 xl:px-40">
                    <div className="container mx-auto px-4">
                        <p className="rounded-sm py-1 text-white">What Our Readers Say</p>
                        <h2 className="my-6 text-2xl md:text-5xl">Real Words from Real Readers</h2>
                    </div>
                </section>

                <section className="my-5 bg-background px-4 py-20 text-white md:px-16 lg:px-28 xl:px-40">
                    <TestimonialsGrid />
                </section>
            </RootLayout>
        </>
    );
}
