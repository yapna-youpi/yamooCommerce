import React, { useState, useRef } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase.config";
import { toast } from "react-toastify";
import { useHistory, useParams } from "react-router-dom";

function LoginAcceuil() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const { id } = useParams();
  const [moon, setMoon] = useState(false);
  const [loading, setLoading] = useState(false);
  const signref = useRef();
  const [ispassWord, setIspassword] = useState(true);

  const navigate = useHistory()

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
      navigate.push("/home");
    } catch (error) {
      setLoading(false);
      console.log(error)
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

  return (
    <div>
      <div className="w-full text-black flex justify-center items-center" id="connect">
        <div className="contain_acceuil">
          <div className="formBx relative z-0 h-96">
            <div className="form">
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

            {/* <Signup setLoading={setLoading} handleSignin={handleSignin} /> */}
          </div>
        </div>
      </div>
        
    </div>
  );
}

export default LoginAcceuil;
