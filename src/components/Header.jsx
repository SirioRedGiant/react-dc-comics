import dcLogo from "../assets/img/dc-logo.png";

export default function Header() {
  const navLinks = [
    {
      url: "#",
      text: "CHARACTERS",
      isActive: false,
    },
    {
      url: "#",
      text: "COMICS",
      isActive: true,
    },
    {
      url: "#",
      text: "MOVIES",
      isActive: false,
    },
    {
      url: "#",
      text: "TV",
      isActive: false,
    },
    {
      url: "#",
      text: "GAMES",
      isActive: false,
    },
    {
      url: "#",
      text: "COLLECTIBLES",
      isActive: false,
    },
    {
      url: "#",
      text: "VIDEOS",
      isActive: false,
    },
    {
      url: "#",
      text: "FANS",
      isActive: false,
    },
    {
      url: "#",
      text: "NEWS",
      isActive: false,
    },
    {
      url: "#",
      text: "SHOP",
      isActive: false,
    },
  ];

  return (
    <header className="bg-white">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo-container">
          <img src={dcLogo} alt="DC logo" />
        </div>
        <nav>
          <ul className="d-flex flex-wrap list-unstyled m-0 gap-3 fw-bold">
            {navLinks.map((navLink, index) => (
              <li key={index}>
                <a
                  href={navLink.url}
                  className={`text-decoration-none ${navLink.isActive ? "text-primary border-bottom border-primary border-5" : "text-dark"}`}
                >
                  {navLink.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
