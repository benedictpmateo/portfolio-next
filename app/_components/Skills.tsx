import skills from "../_constants/skills";

export default function Skills() {
  return (
    <div className="grid grid-cols-[100px_1fr] gap-4">
      <div className="text-blue-accent">skills</div>
      <div className="space-y-10">
        {skills.map((skill) => (
          <div key={skill.label}>
            <h5 className="font-semibold">{skill.label}</h5>
            <div className="flex flex-row flex-wrap opacity-70">
              {skill.items.map((item) => (
                <p key={item.label} className="text-sm w-1/3 pr-2">{item.label}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
