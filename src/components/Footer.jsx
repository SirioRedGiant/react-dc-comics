import digitalComicsIcon from "../assets/img/buy-comics-digital-comics.png";
import merchandiseIcon from "../assets/img/buy-comics-merchandise.png";
import subscriptionIcon from "../assets/img/buy-comics-subscriptions.png";
import comicShopLocator from "../assets/img/buy-comics-shop-locator.png";
import dcPowerVisa from "../assets/img/buy-dc-power-visa.svg";
//note background images
import footerHeroBackground from "../assets/img/footer-bg.jpg";
import dcLogoBackground from "../assets/img/dc-logo-bg.png";
// ICONE FOOTER --> FOLOOW US
import facebookLink from "../assets/img/footer-facebook.png";
import twitterLink from "../assets/img/footer-twitter.png";
import youtubeLink from "../assets/img/footer-youtube.png";
import pinterestLink from "../assets/img/footer-pinterest.png";
import periscopeLink from "../assets/img/footer-periscope.png";

export default function Footer() {
  //? DATI --> fascia blu
  const infoBuyLinks = [
    {
      img: digitalComicsIcon,
      text: "DIGITAL COMICS",
      url: "#",
    },
    {
      img: merchandiseIcon,
      text: "DC MERCHANDISE",
      url: "#",
    },
    {
      img: subscriptionIcon,
      text: "SUBSCRIPTION",
      url: "#",
    },
    {
      img: comicShopLocator,
      text: "COMIC SHOP LOCATOR",
      url: "#",
    },
    {
      img: dcPowerVisa,
      text: "DC POWER VISA",
      url: "#",
    },
  ];

  //note HERO fascia con gli eroi
  const heroSections = [
    {
      title: "DC COMICS",
      texts: [
        "Characters",
        "comics",
        "Movies",
        "TV",
        "Games",
        "Videos",
        "News",
      ],
    },
    {
      title: "SHOP",
      texts: ["Shop DC", "Shop DC Collectibles"],
    },
    {
      title: "DC",
      texts: [
        "Term Of Use",
        "Privacy policy (New)",
        "Ad choices",
        "Advertising",
        "Jobs",
        "Subscriptions",
        "Talent Workshops",
        "CPSC Certificates",
        "Ratings",
        "Shop Help",
        "Contact Us",
      ],
    },
    {
      title: "SITES",
      texts: ["DC", "MAD Magazine", "DC Kids", "DC Universe", "DC Per Visa"],
    },
  ];

  //* DATI piè pagina social
  const socialLinks = [
    {
      img: facebookLink,
      url: "#",
    },
    {
      img: twitterLink,
      url: "#",
    },
    {
      img: youtubeLink,
      url: "#",
    },
    {
      img: pinterestLink,
      url: "#",
    },
    {
      img: periscopeLink,
      url: "#",
    },
  ];

  return (
    <footer>
      {/*//? FASCIA BLU */}
      <div className="bg-primary py-5">
        <div className="container d-flex justify-content-around align-items-center flex-wrap">
          {infoBuyLinks.map((infoBuyLink, index) => (
            <a
              key={index}
              href={infoBuyLink.url}
              className="text-white text-decoration-none d-flex align-items-center"
            >
              <img
                src={infoBuyLink.img}
                alt={infoBuyLink.text}
                style={{ height: "50px" }}
              />
              <span className="ms-2 fw-bold ">{infoBuyLink.text}</span>
            </a>
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
              <div className="col-12 col-md-6 col-lg-2">
                <h5 className="fw-bold text-uppercase">{heroSection.title}</h5>

                <ul className="list-unstyled small text-secondary">
                  {heroSection.texts.map((text, index) => (
                    <li key={index}>
                      <a href="#" className="text-reset text-decoration-none">
                        {text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
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
            ;
          </div>
        </div>
      </section>
    </footer>
  );
}
