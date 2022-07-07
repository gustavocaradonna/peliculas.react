import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
// import swal from "@sweetalert/with-react";
import { Header } from "./Header";

export function Listado(props) {
  const token = sessionStorage.getItem("token");
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const endPoint =
      "https://api.themoviedb.org/3/discover/movie?api_key=eb4b4d4c70bdc53fa1ac4ee02b47664e&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";

    axios
      .get(endPoint)
      .then((res) => {
        const apiData = res.data;
        setMoviesList(apiData.results);
      })
      .catch((error) => {
        alert(<h2>Hubo errores, intenta mas tarde!</h2>);
      });
  }, []);

  const goToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {!token && <Navigate to={"/"} />}
      <Header />
      {/* <h1 className="bg-primary  row align">NetFlix!</h1> */}

      {/* {estructura base} */}
      <div className="row">
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/ff25a865063407.5b2527aae74a8.gif"
          alt="altqseyo"
        />
        {moviesList.map((cadaPeli, index) => {
          return (
            //carta

            <div className="col-3 bg-dark" key={index}>
              <div className="card my-3  desenfoque-gus">
                <Link to={`/detalle?idPelicula=${cadaPeli.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${cadaPeli.poster_path}`}
                    className="card-img-top"
                    alt="..."
                  />
                </Link>
                <button
                  className="favourite-btn-gus"
                  onClick={() => console.log("Agregaste a favoritos! ^^")}
                >
                  🖤
                </button>

                <div className="card-body">
                  <h5 className="card-title">
                    {cadaPeli.title.substring(0, 25)}
                  </h5>
                  <p className="card-text">
                    {cadaPeli.overview.substring(0, 67)}...
                  </p>
                  <Link
                    to={`/detalle?idPelicula=${cadaPeli.id}`}
                    className="btn btn-primary"
                  >
                    Detalle
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <br />
      <div>
        {" "}
        <button onClick={goToTop} className="btn-flotante">
          Up!
        </button>
      </div>
    </>
  );
}
