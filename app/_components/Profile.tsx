import ProfileLinks from "./ProfileLinks";

export default function Profile() {
  return (
    <div>
      <h1 className="text-light text-4xl font-semibold">Benedict Mateo</h1>
      <h5 className="text-light text-lg mb-4">
        Senior Software Engineer at Webmint
      </h5>
      <p className="text-light">
        <span className="opacity-60">get in touch</span> 👉{" "}
        <a href="mailto:hello@benmateo.xyz" target="_blank">hello@benmateo.xyz</a>
      </p>

      <ProfileLinks />
    </div>
  );
}
