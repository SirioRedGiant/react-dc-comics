import digitalComicsIcon from "../assets/img/buy-comics-digital-comics.png"



export default function Footer() {
  return <footer>
    <div className="bg-primary py-5">
      <div className="container d-flex justify-content-around align-items-center">
        <div className="d-flex align-items-center text-white">
          <img src={digitalComicsIcon} alt="" />
        </div>

      </div>
    </div>
  </footer>;
}
