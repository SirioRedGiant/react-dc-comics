import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import headLogoImg from "./assets/img/dc-logo.png";
import jumbotronImg from "./assets/img/jumbotron.jpg";

//note NAVLINKS --> Header links
import navLinks from "./data/headerlinks";

//note ARRAY COMICS fumetti
import comicsListData from "./data/comics";

//note Jumbotron
import Jumbotron from "./components/Jumbotron";

export default function App() {
  return (
    <>
      <Header headLogoImg={headLogoImg} links={navLinks} />
      <Jumbotron image={jumbotronImg} />
      <Main comics={comicsListData} />
      <Footer />
    </>
  );
}
