import Image from "next/image";

export default function ProjectsItem () {
    return (
        <div className="pointer-events-none">
            <div className="relative h-[310px] w-[470px] mx-auto">
                <div className="absolute left-[320px] top-0 z-[2] h-[310px] w-[150px]">
                    <Image src="/iph.png" alt="iphone" width="150" height="310" />
                </div>
                <div className="absolute left-0 top-[50px] z-[1] w-[400px] h-[230px]">
                    <Image src="/mbp.png" alt="mbpro" width="400" height="230" />
                </div>
            </div>
        </div>
    )
}