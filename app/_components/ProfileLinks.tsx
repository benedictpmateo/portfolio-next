"use client";

import { useState } from "react";
import { cn } from "../_utils/styles";

const links = [
  { label: "about" },
  { label: "experience" },
  { label: "skills" },
  { label: "projects" },
];

export default function ProfileLinks() {
  const [active, setActive] = useState("about");

  return (
    <div className="mt-20 text-sm font-medium flex flex-col justify-start items-start gap-2">
      {links.map((item, key) => (
        <div
          key={key}
          className={cn(
            "group gap-2 cursor-pointer opacity-50 border border-transparent rounded-[5px] p-1 transition-all w-[100px] hover:w-[120px] hover:border-blue-major hover:bg-blue-major/60 hover:opacity-100",
            {
              "!opacity-100 text-center !w-[180px] !bg-blue-major !border-blue-major":
                active === item.label,
            }
          )}
          onClick={() => setActive(item.label)}
        >
          <p className="group-hover:text-center">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
