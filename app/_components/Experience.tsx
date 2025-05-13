import experiences, { freelanceExperience } from "../_constants/experiences";

export default function Experience() {
  return (
    <div
      id="experience"
      className="grid grid-cols-[100px_1fr] gap-x-4 gap-y-10"
    >
      <div className="text-blue-accent">work experience</div>
      <div className="space-y-4">
        {experiences.map((experience, key) => (
          <div key={key}>
            <div key={key} className="flex justify-between items-start text-sm">
              <div>
                <h5>{experience.title}</h5>
                <p className="text-light/60">{experience.company} <span className="text-xs">({experience.address})</span></p>
              </div>
              <div className="lowercase opacity-80">{experience.date}</div>
            </div>

            <ul className="pl-4 text-sm list-disc">
              {experience.lists.map((list, key) => (
                <li key={key} className="text-light/60">
                  {list}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* <div className="text-blue-accent">project based experience</div>
      <div className="space-y-4">
        {freelanceExperience.map((experience, key) => (
          <div key={key}>
            <div className="flex justify-between items-start text-sm">
              <div>
              <p className="text-light/60">{experience.company} <span className="text-xs">({experience.address})</span></p>
              </div>
              <div className="lowercase opacity-80">{experience.date}</div>
            </div>
            <ul className="pl-4 text-sm list-disc">
              {experience.lists.map((list, key) => (
                <li key={key} className="text-light/60">
                  {list}
                </li>
              ))}
            </ul>
          </div>
        ))} */}
        {/* <div className="!mt-10 flex">
          <a
            className="text-blue-accent py-1 px-2 rounded-sm hover:bg-blue-major hover:text-light rounded-[5px] text-sm"
            href="https://docs.google.com/document/d/1wIh1Ujhft8m2dOMJiRljQTnXaA7H-tLhBHR6X3mngEE"
            target="_blank"
          >
            🔗 view full resume{" "}
          </a>
        </div> */}
      {/* </div> */}
    </div>
  );
}
