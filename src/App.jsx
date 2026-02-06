import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

//note ARRAY COMICS fumetti
import comicsListData from "./data/comics";

export default function App() {
  return (
    <>
      <Header />
      <Main comics={comicsListData} />
      <Footer />
    </>
  );
}
