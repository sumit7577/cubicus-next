import HeroData from "./heroData";
import Image from "next/image";

interface SingleHeroProps {
    hero: typeof HeroData[0]
}
const SingleHero = (props: SingleHeroProps) => {
    const { id, name, image,content,designation } = props.hero;
    return (
        <div className="h-[70vh]">
            <div className="absolute -z-10 w-full h-full">
                <Image
                    src={image}
                    alt="bg-image"
                    quality={100}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex flex-col lg:max-w-[35%] lg:ml-[15%] gap-2 pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46 px-4 md:px-0">
                <h2 className="text-7xl absolute -z-5 text-white opacity-30 font-bold font-sans bottom-[58%]">0{id}</h2>
                <h3 className="text-sm text-red-800 font-semibold font-inter">{designation}</h3>
                <h1 className="text-sectiontitle2 text-white font-semibold font-sans">{name}</h1>
                <h2 className="text-sectiontitle text-white font-sans">{content}</h2>
            </div>
        </div>
    )
}

export default SingleHero;