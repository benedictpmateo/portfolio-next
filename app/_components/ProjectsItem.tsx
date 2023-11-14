import Image from "next/image";

interface ProjectItemProps {
  path?: string;
  name: string;
  link: string;
  description?: string;
  stack?: string[];
}

export default function ProjectsItem({
  path,
  name,
  link,
  description,
  stack
}: ProjectItemProps) {
  return (
    <div className="rounded-[5px] w-full hover:bg-blue-major/10 transition-all duration-500 hover:shadow-[0px_-2px_0px_0px] hover:shadow-blue-major/30">
      <div className="grid grid-cols-[150px_1fr] gap-4 p-4">
        <div className="w-[150px] h-[90px] relative rounded-[5px] overflow-hidden">
          {!!path && <Image
            src={path}
            alt="projects/webmint"
            fill
            objectFit="cover"
          />}
        </div>
        <div>
          <h5>
            <span className="font-semibold">{name}</span>&nbsp;&nbsp;👉 <a href={link} target="_blank" className="text-sm">{link}</a>
          </h5>
          <p className="text-sm mb-4">{description}</p>
          <div className="flex flex-wrap gap-1">{stack?.map((item) => (
            <p key={item} className="border-[2px] border-blue-major bg-blue-major/40 rounded-[5px] py-[2px] px-[4px] text-sm text-light">{item}</p>
          ))}</div>
        </div>
      </div>
    </div>
  );
}
