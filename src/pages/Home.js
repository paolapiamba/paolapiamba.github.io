import Carousel from '../components/Carousel';

function Home() {
    return (
        <div className="App container text-center">
            <h1> ¡¡BIENVENIDOS!!<br />MI BIOGRAFIA </h1>
            <br></br>
            <p className='fst-italic'>Hola mi nombre es Paola Andrea Piamba,tengo 21 años.
                <br></br>
                Tengo una hermosa bebe de 4 años,llamada Isabella.</p>
            <br></br>
            <a href="https://www.aluracursos.com/blog/html-css-javascript-cuales-son-las-diferencias" class="btn rounded-pill px-3 mb-2 mb-lg-0">¿Qué es Html,css y javascript?</a>
            <br></br>
            <Carousel />
        </div>
    )
}
export default Home