export default function Main({ comics }) {
  return (
    <>
      <div className="jumbotron-hardcoded">
        <img src="/img/jumbotron.jpg" alt="jumbotron" />
      </div>
      {/* contenitore per poter gestire la posizione relativa */}
      <div className="position-relative">
        <button className="btn btn-primary fw-bold current-series-button">
          CURRENT SERIES
        </button>

        <section className="bg-dark py-5">
          <div className="container">
            <div className="row g-4">
              {comics.map((comic) => (
                <div key={comic.id} className="col-12 col-md-4 col-lg-2">
                  <div className="comic-card text-white">
                    <div className="img-container mb-3">
                      <img
                        src={comic.thumb}
                        alt={comic.series}
                        className="img-fluid w-100"
                      />
                    </div>
                    <span className="text-uppercase small fw-bold">
                      {comic.series}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <div className="bg-dark py-3 d-flex justify-content-center">
        <button className="btn btn-primary fw-bold load-more-button">
          Load More
        </button>
      </div>
    </>
  );
}
