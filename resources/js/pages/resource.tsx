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
   return <section id="hero" className="w-4/5 mx-auto flex flex-col justify-center h-screen ">
       <p className="text-7xl">Unlock a World of</p>
       <div className="flex items-center gap-10 my-6">
           <p className="text-7xl">Knowledge</p>
           <p className="text-base text-justify text-[#98989A]">Dive deep into the AI universe with our collection of insightful podcasts. Explore the latest trends, breakthroughs, and discussions on artificial intelligence. Whether you're an enthusiast or a professional, our AI podcasts offer a gateway to knowledge and innovation.</p>
       </div>
      <div className="mt-20">
          <Separator className="bg-[#262626] absolute left-0"/>
          <div className="flex">
              {
                  heroItems.map((item,index) => {
                      return <HeroChildBox {...item} key={index} className={`${index != heroItems.length - 1 ? 'border-r-2' : ''}`} />;
                  })
              }
          </div>
          <Separator className="bg-[#262626] absolute left-0"/>
      </div>
   </section>
}

// HeroChildBox
const HeroChildBox = ({className,title, description} : {className?: string,title: string, description: string}) => {
    return <div className={`space-y-4 border-[#262626] w-full flex flex-col items-center py-8 ${className}`}>
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
    return <section id="dive-into-the-details">
        <header className="bg-[#1A1A1A] py-10 flex items-center">
           <div className="w-4/5 mx-auto flex justify-between items-center">
               <div className=" space-y-5 ">
                   <p className="text-base px-4 py-2 bg-[#333333] w-fit">Dive into the Details</p>
                   <p className="text-4xl text-justify ">In-Depth Reports and Analysis</p>
               </div>
               <div className="flex items-center border-2  bg-[#141414] border-[#262626] px-3 py-2 rounded-sm gap-2">
                   <p className="py-2 px-4 bg-[#262626] border-2 rounded-sm">Whitepaper</p>
                   <p className="py-2 px-4  border-2 rounded-sm">Ebooks</p>
                   <p className="py-2 px-4  border-2 rounded-sm">Reports</p>
               </div>
           </div>
        </header>
        <Separator className="bg-[#262626] absolute left-0"/>
        <main className="mx-auto w-4/5">
            {
                DiveIntoTheDetailsData.map((item,index) => {
                    return <div>
                        <SubFirstSectionItem {...item} key={index} />
                        <Separator className="bg-[#262626] absolute left-0"/>
                    </div>
                })
            }
           <section className="flex items-center justify-between gap-5">
               {
                   DiveIntoTheDetailsData.map((item,index) => {
                       return <SubSecondSectionItem image={item.image} description={item.description} title={item.title} index={index} key={index} />
                   })
               }
           </section>
        </main>
        <Separator className="bg-[#262626] absolute left-0"/>
    </section>
}

//
// sub first Section Item
//

const SubFirstSectionItem = ({title, description, description2, icon, image, author, publicationDate, category} : DiveIntoTheDetailsType) => {

    return (
        <div className=" grid grid-cols-5 justify-between items-center">
            <div className="space-y-5 col-span-2">
                <img src={icon as unknown as string} alt="icon" className="h-10 w-10" />
                <p className="text-3xl font-bold w-2/3">{title}</p>
                <p className="text-base text-[#98989A]">{description}</p>
            </div>
            <div className="space-y-5 pl-20 py-10 border-l-2 border-[#262626] col-span-3">
                <img src={image as unknown as string} alt="icon" className="w-full h-[13.5rem] rounded-sm object-cover" />
                <div className="flex items-center gap-2">
                    <div className="space-y-5">
                        <p className="text-xl font-bold w-2/3">Quantum Computing Whitepaper</p>
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
    return  <div className={`border-[#262626] space-y-5 py-10 p-0 ${index != DiveIntoTheDetailsData.length - 1 ? 'border-r-2 px-10' : 'pl-10'}`}>
        <img src={image as unknown as string} alt="image" className="rounded-md object-cover" />
        <p className="text-2xl font-bold">{title}</p>
        <p className="text-base text-[#98989A]">{description}</p>
        <div className="flex items-center justify-start gap-5">
            <p className="px-4 py-2 bg-[#1A1A16] w-1/2 text-center rounded-md text-[#98989A]">View Details</p>
            <p className="px-4 py-2 bg-[#1A1A16] w-1/2 text-center rounded-md text-[#98989A]">Download PDF Now</p>
        </div>
    </div>
}
