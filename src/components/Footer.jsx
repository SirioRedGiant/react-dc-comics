import digitalComicsIcon from "../assets/img/buy-comics-digital-comics.png";
import merchandiseIcon from "../assets/img/buy-comics-merchandise.png";
import subscriptionIcon from "../assets/img/buy-comics-subscriptions.png";
import comicShopLocator from "../assets/img/buy-comics-shop-locator.png";
import dcPowerVisa from "../assets/img/buy-dc-power-visa.svg";

// ICONE FOOTER --> FOLOOW US
import facebookLink from "../assets/img/footer-facebook.png"
import twitterLink from "../assets/img/footer-twitter.png"
import youtubeLink from "../assets/img/footer-youtube.png"
import pinterestLink from "../assets/img/footer-pinterest.png"
import periscopeLink from "../assets/img/footer-periscope.png"



export default function Footer() {
  return (
    <footer>
      <div className="bg-primary py-5">
        <div className="container d-flex justify-content-around align-items-center">
          <figure className="d-flex align-items-center text-white">
            <img src={digitalComicsIcon} alt="DIGITAL COMICS ICON" />
            <figcaption>DIGITAL COMICS</figcaption>
          </figure>
          <figure className="d-flex align-items-center text-white">
            <img src={merchandiseIcon} alt="DIGITAL COMICS ICON" />
            <figcaption>DC MERCHANDISE</figcaption>
          </figure>
          <figure className="d-flex align-items-center text-white">
            <img src={subscriptionIcon} alt="DIGITAL COMICS ICON" />
            <figcaption>SUBSCRIPTION</figcaption>
          </figure>
          <figure className="d-flex align-items-center text-white">
            <img src={comicShopLocator} alt="DIGITAL COMICS ICON" />
            <figcaption>COMIC SHOP LOCATOR</figcaption>
          </figure>
          <figure className="d-flex align-items-center text-white">
            <img src={dcPowerVisa} alt="DIGITAL COMICS ICON" />
            <figcaption>DC POWER VISA</figcaption>
          </figure>
        </div>
      </div>
      {/* LINK FASCIA GRIGIA */}
      <section className="hero-footer bg-dark py-5 text-white overflow-hidden">
        <div className="container">
          <div className="row">
            {/* Colonne Link */}
            <div className="col-2">
              <h5 className="fw-bold text-uppercase">DC Comics</h5>
              <ul className="list-unstyled small text-secondary">
                <li>Characters</li>
                <li>Comics</li>
                {/* Altri link... */}
              </ul>

              <h5 className="fw-bold text-uppercase mt-3">Shop</h5>
              <ul className="list-unstyled small text-secondary">
                <li>Shop DC</li>
                <li>Shop DC Collectibles</li>
              </ul>
            </div>

            <div className="col-2">
              <h5 className="fw-bold text-uppercase">DC</h5>
              <ul className="list-unstyled small text-secondary">
                <li>Terms Of Use</li>
                <li>Privacy policy</li>
                {/* Altri link... */}
              </ul>
            </div>

            <div className="col-2">
              <h5 className="fw-bold text-uppercase">Sites</h5>
              <ul className="list-unstyled small text-secondary">
                <li>DC</li>
                <li>MAD Magazine</li>
                {/* Altri link... */}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-dark py-4 border-top border-secondary">
        <div className="container d-flex justify-content-between align-items-center">
          <button className="btn btn-outline-primary text-white border-2 fw-bold text-uppercase">Sign-up now!</button>
          <div className="d-flex align-items-center">
             <span className="text-primary fw-bold me-3 text-uppercase">Follow Us</span>
             <img src={facebookLink} alt="link a facebook" />
             <img src={twitterLink} alt="link a twitter" />
             <img src={youtubeLink} alt="link a youtube" />
             <img src={pinterestLink} alt="link a periscope" />
             <img src={periscopeLink} alt="link a periscope" />
          </div>
        </div>
      </section>
    </footer>
  );
}
