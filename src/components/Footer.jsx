//note background images
import footerHeroBackground from "../assets/img/footer-bg.jpg";
import dcLogoBackground from "../assets/img/dc-logo-bg.png";

import { infoBuyLinks, heroSections, socialLinks } from "../data/footerlinks";

const buyGoods = ({ img, text, url }) => {
  return (
    <a
      href={url}
      className="text-white text-decoration-none d-flex align-items-center"
    >
      <img src={img} alt={text} style={{ height: "50px" }} />
      <span className="ms-2 fw-bold ">{text}</span>
    </a>
  );
};

//note ricorda che texts è un array di stringhe
const heroLinkColumn = ({ title, texts }) => {
  return (
    <div className="col-12 col-md-6 col-lg-2">
      <h5 className="fw-bold">{title}</h5>
      <ul className="list-unstyled small text-secondary">
        {texts.map((text, index) => (
          <li key={index}>
            <a href="#" className="text-reset text-decoration-none">
              {text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default function Footer() {
  return (
    <footer>
      {/*//? FASCIA BLU RIFATTORIZZATA*/}
      <div className="bg-primary py-5">
        <div className="container d-flex justify-content-around align-items-center flex-wrap">
          {infoBuyLinks.map((infoBuyLink, index) => (
            <buyGoods
              key={index}
              img={infoBuyLink.img}
              text={infoBuyLink.text}
              url={infoBuyLink.url}
            />
          ))}
        </div>
      </div>
      {/*//note  Hero --> FASCIA GRIGIA */}
      <section
        className="hero-footer bg-dark py-5 text-white overflow-hidden"
        style={{ backgroundImage: `url(${footerHeroBackground})` }}
      >
        <div className="container position-relative">
          <img
            src={dcLogoBackground}
            alt="DC Logo Background"
            className="dc-logo-bg"
          />
          <div className="row">
            {/* Colonne Link */}
            {heroSections.map((heroSection, index) => (
              <heroLinkColumn
                key={index}
                title={heroSection.title}
                texts={heroSection.texts}
              />
            ))}
          </div>
        </div>
      </section>
      {/*//todo  PIè DI PAGINA --> SOCIAL*/}
      <section className="bg-dark py-4 border-top border-secondary">
        <div className="container d-flex justify-content-between align-items-center">
          <a
            href="#"
            className="btn btn-outline-primary text-white border-2 fw-bold text-uppercase"
          >
            Sign-up now!
          </a>
          <div className="d-flex align-items-center">
            <span className="text-primary fw-bold me-3 text-uppercase">
              Follow Us
            </span>
            {socialLinks.map((socialLink, index) => (
              <a key={index} href={socialLink.url} className="ms-4">
                <img src={socialLink.img} alt={`Social ${index}`} />
              </a>
            ))}
          </div>
        </div>
      </section>
    </footer>
  );
}
