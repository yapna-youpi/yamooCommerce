import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, storage, db } from "../../firebase.config";
import { setDoc, doc } from "firebase/firestore";

const Signup = ({ handleSignin }) => {
  const [user, setUser] = useState([]);
  const [signupUsername, setSignupUsername] = useState("");
  const [signupMail, setSignupMail] = useState("");
  const [signupPhone, setSignupPhone] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const formRef2 = useRef(null);
  const [isPassword, setIsPassword] = useState(true)

  //function to active upload file
  const handleFile = () => {
    document.getElementById("file").click();
    const selectedFile = document.getElementById("file").files[0];
    setFile(selectedFile);
  };

  //function to signup with authentification
  const signup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        signupMail,
        signupPassword
      );
      const user = userCredential.user;

      const storageRef = ref(storage, `images/${Date.now() + signupUsername}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          toast.error(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            // update user profile,
            await updateProfile(user, {
              displayName: signupUsername,
              photoURL: downloadURL,
            });

            // store user data in firestore database
            await setDoc(doc(db, "users", user.uid), {
              uid: user.uid,
              displayName: signupUsername,
              email: signupMail,
              photoURL: downloadURL,
              phone: signupPhone,
            });
          });
        }
      );

      toast.success("utilisateur crée avec success");
      handleSignin()
      console.log(user);
    } catch (error) {
      toast.error("Quelque chose a mal fonctionne!");
      setLoading(false);
    }

    formRef2.current.reset()

  };

  return (
    <div className="form signupForm">
      <form onSubmit={signup} ref={formRef2} id="form">
        <div className="formGroup">
          <input
            onChange={(e) => setSignupUsername(e.target.value)}
            type="text"
            name="name"
            required
            placeholder="Nom"
          />
          <i class="ri-user-fill"></i>
        </div>
        <div className="formGroup">
          <input
            onChange={(e) => setSignupMail(e.target.value)}
            type="email"
            name="email"
            required
            placeholder="Email"
          />
          <i class="ri-mail-fill"></i>
        </div>
        <div className="formGroup">
          <input
            onChange={(e) => setSignupPhone(e.target.value)}
            type="number"
            name="phone"
            required
            placeholder="Télephone"
          />
          <i class="ri-phone-fill"></i>
        </div>
        <div className="formGroup">
          <input
            onChange={(e) => setSignupPassword(e.target.value)}
            type={isPassword ? "password" : "text"}
            name="password"
            required
            placeholder="Mot de Passe"
          />
          {isPassword ? (
            <i
              class="ri-lock-2-fill"
              onClick={() => setIsPassword(!isPassword)}
            ></i>
          ) : (
            <i
              class="ri-lock-unlock-fill"
              onClick={() => setIsPassword(!isPassword)}
            ></i>
          )}
          <div className="formGroup">
            <label onClick={handleFile} className="label_file">
              Choisir un fichier
            </label>
            <input
              className="input_file"
              onChange={(e) => setFile(e.target.files[0])}
              type="file"
              id="file"
            />
          </div>
          <input
            type="submit"
            name="submit"
            className="btnRegister"
            value={loading ? "Chargement..." : "Inscription"}
          />
        </div>
        <a href="#" className="forgot">
          Mot de passe Oublié
        </a>
      </form>
    </div>
  );
};

export default Signup;
