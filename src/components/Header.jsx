import dcLogo from "../assets/img/dc-logo.png";

export default function Header({ headLogoImg, links }) {
  return (
    <header className="bg-white">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo-container">
          <img src={headLogoImg} alt="DC logo" />
        </div>
        <nav>
          <ul className="d-flex flex-wrap list-unstyled m-0 gap-3 fw-bold">
            {/*//note ciclo su navLinks  */}
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={link.url}
                  className={`text-decoration-none py-4 d-inline-block ${link.isActive ? "text-primary border-bottom border-primary border-5" : "text-dark"}`}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
