import { FeaturedVideo } from '@/components/cart/FeaturedVideo';
import NewsBlogCart from '@/components/cart/NewsCart';
import { FutureTechSection } from '@/components/section/FutureTechSection';
import NewsCard from '@/components/section/NewsCard';
import { RootLayout } from '@/layouts/RootLayout';


export default function news() {
    return (
        <RootLayout>
            <section className="bg-neutral-900 py-20 text-white md:px-16 lg:px-28 xl:px-40">
                <div className="container mx-auto">
                    <h2 className="my-6 text-2xl md:text-5xl">Today's Headlines: Stay</h2>
                    <p className="rounded-sm py-1 text-white">
                        Explore the latest news from around the world. We bring you up-to-the-minute updates on the most significant events, trends,
                        and stories. Discover the world through our news coverage.
                    </p>
                </div>
            </section>
            <section className="border-b border-neutral-800 bg-background py-20 text-white md:px-16 lg:px-28 xl:px-40">
                <NewsCard />
            </section>
            <section className="bg-background py-20 text-white md:px-16 lg:px-28 xl:px-40">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {Array.from({ length: 3 }).map((_, index) => {
                        return <NewsBlogCart key={index} />;
                    })}
                </div>
            </section>
            <section className="my-5 bg-neutral-900 px-4 py-20 text-white md:px-16 lg:px-28 xl:px-40">
                <div className="container mx-auto px-4">
                    <p className="rounded-sm py-1 text-white">Featured Videos</p>
                    <h2 className="my-6 text-2xl md:text-5xl">Visual Insights for the Modern Viewer</h2>
                </div>
            </section>
             <section className="bg-background py-20 text-white md:px-16 lg:px-28 xl:px-40">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {Array.from({ length: 3 }).map((_, index) => {
                        return <FeaturedVideo key={index} />;
                    })}
                </div>
            </section>
             <section className="bg-background py-20 text-white md:px-16 lg:px-28 xl:px-40 border-b border-neutral-800">
               <FutureTechSection/>
            </section>
        </RootLayout>
    );
}
