import experiences from "../_constants/experiences";

export default function Experience() {
  return (
    <div id="experience" className="grid grid-cols-[100px_1fr] gap-4">
      <div className="text-blue-accent">experience</div>
      <div className="space-y-4">
        {experiences.map((experience, key) => (
          <div key={key} className="flex justify-between items-start text-sm">
            <div>
              <h5>{experience.title}</h5>
              <p className="text-light/60">{experience.company}</p>
            </div>
            <div className="lowercase opacity-80">{experience.date}</div>
          </div>
        ))}
        <div className="!mt-10 flex">
          <a
            className="text-blue-accent py-1 px-2 rounded-sm hover:bg-blue-major hover:text-light rounded-[5px] text-sm"
            href="https://docs.google.com/document/d/1wIh1Ujhft8m2dOMJiRljQTnXaA7H-tLhBHR6X3mngEE"
            target="_blank"
          >
            🔗 view full resume{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
