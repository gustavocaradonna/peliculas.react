import axios from "axios";
// import swal from "@sweetalert/with-react";
import { useNavigate, Navigate } from "react-router-dom";

export function Login() {
  const navi = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    const PATH_API_ALKEMI = "http://challenge-react.alkemy.org";
    const email = e.target.email.value;
    const password = e.target.password.value;

    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

    // console.log(regex.test(email));

    if (email === "" || password === "") {
      alert("Los campos no pueden estar vacios");
    } else if (email !== "" && !regex.test(email)) {
      alert("Debes escribir una direccion de correo electronico valida");
    } else if (email !== "challenge@alkemy.org" || password !== "react") {
      alert("Credenciales inválidas");
    } else {
      axios
        .post(PATH_API_ALKEMI, { email, password })
        .then((result) => {
          console.log(
            "Credenciales correctas! Estamos listos para enviar la información"
          );
          // swal("Funciona ok gus?");
          console.log(result.data);
          const tokenRecibido = result.data.token;
          sessionStorage.setItem("token", tokenRecibido);
          navi("/listado");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const token = sessionStorage.getItem("token");

  return (
    <>
      <br />
      {token && <Navigate to={"/listado"} />}

      <div className="container">
        {/* <div className="row">
          <div className="col">
            <h2 className="text-light">Formulario de login</h2>
            <form onSubmit={submitHandler}>
              <label>
                <span>Correo electrónico:</span> <br />
                <input type="text" name="email" />
              </label>

              <br />
              <label>
                <span>Contraseña:</span> <br />
                <input type="password" name="password" />
              </label>
              <br />
              <br />

              <button type="submit" className="btn btn-danger">
                Ingresar
              </button>
            </form>
          </div>
        </div> */}

        {/* principio */}
        <section class="vh-100 gradient-custom">
          <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                <div class="card bg-dark text-white">
                  <div class="card-body p-5 text-center">
                    <div class="mb-md-5 mt-md-4 pb-5">
                      <h2 class="fw-bold mb-2 text-uppercase">
                        Iniciar sesión
                      </h2>
                      <p class="text-white-50 mb-5">
                        Ingresá tu email y clave.
                      </p>

                      <form onSubmit={submitHandler}>
                        <div class="form-outline form-white mb-4">
                          <input
                            type="email"
                            id="typeEmailX"
                            class="form-control form-control-lg"
                            name="email"
                          />
                          <label class="form-label" for="typeEmailX">
                            Email
                          </label>
                        </div>

                        <div class="form-outline form-white mb-4">
                          <input
                            type="password"
                            id="typePasswordX"
                            class="form-control form-control-lg"
                            name="password"
                          />
                          <label class="form-label" for="typePasswordX">
                            Clave
                          </label>
                        </div>

                        {/* <p class="small mb-5 pb-lg-2">
                          <a class="text-white-50" href="#!">
                            Forgot password?
                          </a>
                        </p> */}

                        <button
                          class="btn btn-outline-light btn-lg px-5"
                          type="submit"
                        >
                          Ingresar
                        </button>
                      </form>

                      <div class="d-flex justify-content-center text-center mt-4 pt-1">
                        <a href="#!" class="text-white">
                          <i class="fab fa-facebook-f fa-lg"></i>
                        </a>
                        <a href="#!" class="text-white">
                          <i class="fab fa-twitter fa-lg mx-4 px-2"></i>
                        </a>
                        <a href="#!" class="text-white">
                          <i class="fab fa-google fa-lg"></i>
                        </a>
                      </div>
                    </div>

                    {/* <div>
                      <p class="mb-0">
                        Don't have an account?{" "}
                        <a href="#!" class="text-white-50 fw-bold">
                          Sign Up
                        </a>
                      </p>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <br />
        <br />
        <br />
        {/* 
        //fin */}
      </div>
    </>
  );
}
