const TopLinkNavBAr = ({ url, text, isActive }) => {
  return (
    <li>
      <a
        href={url}
        className={`text-decoration-none py-4 d-inline-block ${isActive ? "text-primary border-bottom border-primary border-5" : "text-dark"}`}
      >
        {text}
      </a>
    </li>
  );
};

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
              <TopLinkNavBAr
                key={link.id}
                url={link.url}
                isActive={link.isActive}
                text={link.text}
              />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
