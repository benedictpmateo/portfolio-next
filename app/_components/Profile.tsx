import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin, FaMediumM } from "react-icons/fa";

import ProfileLinks from "./ProfileLinks";

export default function Profile() {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <h1 className="text-light text-4xl font-semibold">Benedict Mateo</h1>
        <h5 className="text-light text-lg mb-4">
          Senior Software Engineer at Webmint
        </h5>
        <p className="text-light">
          <span className="opacity-60">get in touch</span> 👉{" "}
          <a href="mailto:hello@benmateo.xyz" target="_blank">
            hello@benmateo.xyz
          </a>
        </p>

        <ProfileLinks />
      </div>
      <div className="flex gap-6 items-center">
        <a
          href="https://github.com/benedictpmateo"
          target="_blank"
          className="text-light hover:text-gray"
        >
          <DiGithubBadge size="30px" />
        </a>
        <a
          href="https://www.linkedin.com/in/benedictpmateo/"
          target="_blank"
          className="text-light hover:text-gray"
        >
          <FaLinkedin size="24px" />
        </a>
        <a
          href="https://medium.com/@benedictpmateo"
          target="_blank"
          className="text-light hover:text-gray"
        >
          <FaMediumM size="24px" />
        </a>
      </div>
    </div>
  );
}
