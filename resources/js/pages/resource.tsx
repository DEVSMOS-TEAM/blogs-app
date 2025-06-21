import { RootLayout } from '@/layouts/RootLayout';
import { Plus } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { FirstIcon, Image1, LocalIcons, SecondIcon, Image2 } from '@/types/icon';
import { MoveUpRight } from 'lucide-react';
export default function Resource(){
    return <RootLayout>
        <Hero />
        <DiveIntoTheDetails/>
    </RootLayout>
}

///
/// Hero Section Component
///

interface HeroItem {
    title: string,
    description: string,
}

const heroItems : HeroItem[] = [
    {
        title: '200',
        description: 'Resources available'
    },
    {
        title: '12K',
        description: 'Total Downloads'
    },
    {
        title: '10K',
        description: 'Active Users'
    },
    {
        title: '100',
        description: 'Countries Accesses Our Content '
    }
]

const Hero = () => {
    return (
        <section id="hero" className="container mx-auto flex flex-col justify-center h-fit lg:h-screen px-4">
            <p data-aos="fade-up" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                Unlock a World of
            </p>

            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-10 my-6">
                <p data-aos="fade-up" data-aos-delay="100" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                    Knowledge
                </p>
                <p data-aos="fade-up" data-aos-delay="200" className="text-sm sm:text-base text-justify text-[#98989A] max-w-xl">
                    Dive deep into the AI universe with our collection of insightful podcasts. Explore the latest trends, breakthroughs, and discussions on artificial intelligence. Whether you're an enthusiast or a professional, our AI podcasts offer a gateway to knowledge and innovation.
                </p>
            </div>

            <div className="mt-10 md:mt-20" data-aos="fade-up" data-aos-delay="300">
                <Separator className="bg-[#262626] absolute left-0" />
                <div className="flex flex-col md:flex-row">
                    {
                        heroItems.map((item, index) => (
                            <HeroChildBox
                                {...item}
                                key={index}
                                className={`${index !== heroItems.length - 1 ? 'md:border-r-2' : ''}`}
                            />
                        ))
                    }
                </div>
                <Separator className="bg-[#262626] absolute left-0" />
            </div>
        </section>
    );
};


// HeroChildBox
const HeroChildBox = ({className,title, description} : {className?: string,title: string, description: string}) => {
    return <div data-aos="fade-up" className={`space-y-4 border-[#262626] w-full flex flex-col items-center py-8 ${className}`}>
        <div className="flex items-center text-5xl">
            <p>{title}</p>
            <Plus className="text-[#FFD11A] h-10 w-10"/>
        </div>
        <p className="text-base text-[#98989A]">{description}</p>

    </div>
}


///
///  Dive into the Details Section
///


interface DiveIntoTheDetailsType {
    title: string,
    description: string,
    description2?: string,
    icon: LocalIcons,
    image?: LocalIcons,
    publicationDate?: string,
    category?: string,
    author?: string,
}

const DiveIntoTheDetailsData : DiveIntoTheDetailsType[] = [
    {
        title: 'Quantum Computing Whitepaper',
        description: 'Provides technical specifications and requirements for implementing quantum computing systems.',
        icon: FirstIcon,
        image: Image1,
        description2: 'An in-depth whitepaper exploring the principles, applications, and potential impact of quantum computing.',
        publicationDate: 'July 2023',
        category: 'Quantum Computing',
        author: 'Dr. Quantum'
    },
    {
        title: 'Space Exploration Whitepaper',
        description: 'Explores Mars colonization, asteroid resource potential, and space tourism.',
        icon: SecondIcon,
        image: Image2,
        publicationDate: 'July 2023',
        description2: 'An in-depth whitepaper covering the latest advancements in space exploration, including Mars missions and asteroid mining.',
        category: 'Space Exploration',
        author: 'FutureTech Space Division'
    },
    {
        title: 'Quantum Computing Whitepaper',
        description: 'Provides technical specifications and requirements for implementing quantum computing systems.',
        icon: FirstIcon,
        image: Image1,
        description2: 'An in-depth whitepaper exploring the principles, applications, and potential impact of quantum computing.',
        publicationDate: 'July 2023',
        category: 'Quantum Computing',
        author: 'Dr. Quantum'
    },
]

const DiveIntoTheDetails = () => {
    return (
        <section id="dive-into-the-details" data-aos="fade-up">
            <header className="bg-[#1A1A1A] py-10 flex items-center">
                <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                    <div className="space-y-3">
                        <p className="text-sm px-3 py-1 bg-[#333333] w-fit rounded">Dive into the Details</p>
                        <p className="text-2xl md:text-3xl lg:text-4xl font-semibold">In-Depth Reports and Analysis</p>
                    </div>
                    <div className="flex flex-wrap gap-2 border-2 bg-[#141414] border-[#262626] p-2 rounded-sm">
                        {['Whitepaper', 'Ebooks', 'Reports'].map((label, i) => (
                            <button key={i} className="px-4 py-2 border-2 bg-[#262626] text-sm rounded-sm text-white">{label}</button>
                        ))}
                    </div>
                </div>
            </header>

            <Separator className="bg-[#262626]" />

            <main className="mx-auto container px-4">
                <section>
                    {DiveIntoTheDetailsData.map((item, index) => (
                        <div key={index}>
                            <SubFirstSectionItem {...item} />
                            <Separator className="bg-[#262626] absolute left-0" />
                        </div>
                    ))}
                </section>

                <section className="flex flex-col lg:flex-row justify-between gap-6">
                    {DiveIntoTheDetailsData.map((item, index) => (
                        <SubSecondSectionItem {...item} index={index} key={index} />
                    ))}

                </section>
            </main>

            <Separator className="bg-[#262626]" />
        </section>
    );
};


//
// sub first Section Item
//

const SubFirstSectionItem = ({title, description, description2, icon, image, author, publicationDate, category} : DiveIntoTheDetailsType) => {

    return (
        <div className="grid grid-cols-1 lg:grid-cols-5 justify-between items-center" data-aos="fade-up">
            <div className="space-y-8 col-span-2 py-10">
                <img src={icon as unknown as string} alt="icon" className="h-10 w-10" />
                <p className="text-3xl font-bold w-fit lg:w-2/3">{title}</p>
                <p className="text-base text-[#98989A] pr-0 lg:pr-10">{description}</p>
            </div>
            <div className="space-y-8 pb-10 lg:pt-10 lg:pl-20 lg:border-l-2 border-[#262626] col-span-3">
                <img src={image as unknown as string} alt="icon" className="w-full h-[20.5rem] rounded-sm object-cover" />
                <div className="flex items-center gap-2">
                    <div className="space-x-5 space-y-5">
                        <p className="text-xl font-bold w-fit lg:w-2/3">Quantum Computing Whitepaper</p>
                        <p className="text-base text-[#98989A]">{description2}</p>
                    </div>
                    <div className="flex items-center space-x-2 bg-[#1A1A1A] p-4 rounded-sm">
                        <p className="text-nowrap text-[#98989A]">Download PDF Now</p>
                        <MoveUpRight className="text-[#FFD11A]"/>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <div className="bg-[#1A1A1A] p-6 rounded-sm">
                        <p className="text-base text-[#98989A]">Publication Date</p>
                        <p className="text-base">{publicationDate}</p>
                    </div>
                    <div className="bg-[#1A1A1A] p-6 rounded-sm">
                        <p className="text-base text-[#98989A]">Category</p>
                        <p className="text-base">{category}</p>
                    </div>
                    <div className="bg-[#1A1A1A] p-6 rounded-sm">
                        <p className="text-base text-[#98989A]">Author</p>
                        <p className="text-base">{author}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}


///
/// sub second Section Item
///


const SubSecondSectionItem = ({image, title, description, index}: {index :number,image? : LocalIcons, title : string, description : string}) => {
    return  <div data-aos="fade-up" className={`border-[#262626] space-y-5 px-10 ${index != DiveIntoTheDetailsData.length - 1 && index != 0 ? 'lg:border-x-2 lg:px-16' : ''}`}>
        <div className="py-10 space-y-8">
            <img src={image as unknown as string} alt="image" className="rounded-md object-cover" />
            <p className="text-2xl font-bold">{title}</p>
            <p className="text-base text-[#98989A]">{description}</p>
            <div className="flex items-center justify-start gap-5">
                <p className="px-4 py-2 bg-[#1A1A16] w-1/2 text-center rounded-md text-[#98989A]">View Details</p>
                <p className="px-4 py-2 bg-[#1A1A16] w-1/2 text-center rounded-md text-[#98989A]">Download PDF Now</p>
            </div>
        </div>
        <Separator className="bg-[#262626] absolute left-0 lg:hidden" />
    </div>
}
