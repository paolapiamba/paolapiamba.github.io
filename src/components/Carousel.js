function Carousel() {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="mami.jpg" className="img-fluid" alt="10" />
                </div>
                <div className="carousel-item">
                    <p className="fst-italic">Esta es mi bebe Sara Isabella Castro piamba,
                        de ella admiro que es una niña muy inteligente y educada.</p>
                    <br/>
                    <img src="isa.jpg" className="img-fluid" alt="10" />
                </div>
                <div className="carousel-item">
                    <p className="fst-item">Ella es mi motivacion para seguir estudiando y trabajando.</p>
                    <br/>
                    <a href="url" class="btn rounded-pill px-3 mb-2 mb-lg-0">Html,css y javascrip.</a>
                    <br/>
                    Ahora estoy estudiando progracion  en la fundacion soy mas y esto es lo que he aprendido.
                    <br/>

                    <img src="thml.jpg" className="img-fluid" alt="10" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
export default Carousel
