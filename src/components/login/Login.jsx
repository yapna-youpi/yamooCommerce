import React, { useState, useRef, useEffect } from "react";
import Signup from "../signup/Signup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.config";
import { toast } from "react-toastify";
import { useHistory, useParams } from "react-router-dom";

function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const { id } = useParams();
  const [moon, setMoon] = useState(false);
  const [loading, setLoading] = useState(false);
  const signref = useRef();
  const navigate = useHistory();
  const [ispassWord, setIspassword] = useState(true);

  //fnction to start login
  const signin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      const user = userCredential.user;

      console.log(user);
      setLoading(false);
      toast.success(`Bienvenue ${user.displayName}`);
      navigate.push("/");
    } catch (error) {
      setLoading(false);
      toast.error("Quelque chose à mal fonctionner");
    }

    document.getElementById("signref").reset();
  };

  //function to change color theme
  const colorTheme = () => {
    setMoon(!moon);
    document.getElementById("banner").classList.toggle("banner");
    document.getElementById("banner").classList.toggle("banner2");
  };

  const formBx = document.querySelector(".formBx");
  //function to permute signin to signup
  const handleSignup = function () {
    let sign = document.querySelector(".sign");
    let formBx = document.querySelector(".formBx");

    formBx.classList.add("activer");
    sign.classList.add("activer");
    if (formBx.classList.contains("desactiver")) {
      formBx.classList.toggle("desactiver");
    }
  };
  //function to permute signup to signin
  const handleSignin = function () {
    let sign = document.querySelector(".sign");
    let formBx = document.querySelector(".formBx");

    formBx.classList.remove("activer");
    sign.classList.remove("activer");
    formBx.classList.add("desactiver");
  };

  useEffect(() => {
    window.scrollTo(0,200)
    // window.screenTop(0,0)
    if (id == 1) {
      setTimeout(() => {
        handleSignup();
      }, 300);

    }
  }, []);
  // console.log("le id", id)
  return (
    <div>
      <div className="sign">
        <div className="contain">
          <div className="blueBg">
            <div className="boxe signin">
              <h2 className="">Vous avez déjà un compte ?</h2>
              <button onClick={handleSignin} className="signinBtn">
                Connexion
              </button>
            </div>
            <div className="boxe signup ">
              <h2>Vous n'avez pas de compte ?</h2>
              <button onClick={handleSignup} className="signupBtn">
                Inscription
              </button>
            </div>
          </div>

          <div className="formBx">
            <div className="form signinForm">
              <form onSubmit={signin} id="signref" ref={signref}>
                <div className="formGroup">
                  <p className="text_form">Mail d'utilisateur</p>
                  <input
                    type="email"
                    name="email"
                    value={loginEmail}
                    required
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="Email"
                  />
                  <i class="ri-user-fill"></i>
                </div>
                <div className="formGroup">
                  <p className="text_form">Mot de passe</p>
                  <input
                    type={ispassWord ? "password" : "text"}
                    name="password"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="......"
                  />
                  {ispassWord ? (
                    <i
                      class="ri-lock-2-fill"
                      onClick={() => setIspassword(!ispassWord)}
                    ></i>
                  ) : (
                    <i
                      class="ri-lock-unlock-fill"
                      onClick={() => setIspassword(!ispassWord)}
                    ></i>
                  )}
                  <input
                    type="submit"
                    name="submit"
                    required
                    className="btnSingin"
                    value={loading ? "Chargement....." : "Connexion"}
                  />
                </div>
                <a href="#" className="forgot">
                  Mot de passe Oublié
                </a>
              </form>
            </div>

            <Signup setLoading={setLoading} handleSignin={handleSignin} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
