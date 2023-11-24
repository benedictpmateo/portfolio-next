"use client";

import { useEffect, useState } from "react";
import { ScrollTo } from "react-scroll-to";
import { cn } from "../_utils/styles";

const links = [
  { label: "about" },
  { label: "experience" },
  { label: "skills" },
  { label: "projects" },
];

export default function ProfileLinks() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const y = window.pageYOffset;
      const offsets = links.map(({ label }, i) => ({ index: i, key: label, offset: (document.getElementById(label)?.offsetTop || 40) - 40}));
      let setter = offsets[offsets.length - 1].key;
      console.log(y, offsets);
      for (let item of offsets) {
        if (item.index + 1 == offsets.length && y < item.offset) {
          setter = item.key;
          break;
        } else if (item.index + 1 < offsets.length && y < offsets[item.index + 1].offset) {
          setter = item.key;
          break;
        } 
      }
      setActive(setter);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onClickItem = (item: string, scroll: any) => {
    if (item !== active) {
      let y = (document.getElementById(item)?.offsetTop || 40) - 40;

      if (scroll) {
        scroll({ y, smooth: true });
      }
    }
  };

  return (
    <div className="mt-20 text-sm font-medium flex flex-col justify-start items-start gap-2">
      {links.map((item, key) => (
        <ScrollTo key={item.label}>
          {({ scroll }) => (
            <div
              key={key}
              className={cn(
                "group gap-2 cursor-pointer opacity-50 border border-transparent rounded-[5px] p-1 transition-all w-[100px] hover:w-[120px] hover:border-blue-major hover:bg-blue-major/60 hover:opacity-100",
                {
                  "!opacity-100 text-center !w-[180px] !bg-blue-major !border-blue-major":
                    active === item.label,
                }
              )}
              onClick={() => onClickItem(item.label, scroll)}
            >
              <p className="group-hover:text-center">{item.label}</p>
            </div>
          )}
        </ScrollTo>
      ))}
    </div>
  );
}
