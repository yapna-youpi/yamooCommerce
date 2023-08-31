import React,{useState} from 'react'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../../firebase.config'
import {ref, uploadBytesResumable, getDownloadUel} from "firebase/storage"
import { storage } from '../../firebase.config';
// import {toast} from 'react-toastify'
import { setDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase.config';

const Signup = ({setLoading}) => {

  const [signupUsername,setSignupUsername] = useState('')
  const [signupMail,setSignupMail] = useState('')
  const [signupPhone,setSignupPhone] = useState('')
  const [signupPassword,setSignupPassword] = useState('')


  //function to signup with authentification 
  const signup = async (e) =>{
    e.preventDefault()
    setLoading(true)

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, signupMail, signupPassword)
      const user = userCredential.user;

      console.log('le user',user)

    } catch (error) {
      
    }
  }

  return (
    <div className="form signupForm">
      <form onSubmit={signup}>
        <div className="formGroup">
          <input
            onChange={(e) => setSignupUsername(e.target.value)}
            type="text"
            name="name"
            placeholder="Username"
          />
          <i class="ri-user-fill"></i>
        </div>
        <div className="formGroup">
          <input
            onChange={(e) => setSignupMail(e.target.value)}
            type="email"
            name="email"
            placeholder="Email"
          />
          <i class="ri-mail-fill"></i>
        </div>
        <div className="formGroup">
          <input
            onChange={(e) => setSignupPhone(e.target.value)}
            type="number"
            name="phone"
            placeholder="phone"
          />
          <i class="ri-phone-fill"></i>
        </div>
        <div className="formGroup">
          <input
            onChange={(e) => setSignupPassword(e.target.value)}
            type="password"
            name="password"
            placeholder="Password"
          />
          <i class="ri-mail-fill"></i>
          <input
            type="submit"
            name="submit"
            className="btnRegister"
            value="Register"
          />
        </div>
        <a href="#" className="forgot">
          Forget Password
        </a>
      </form>
    </div>
  );
}

export default Signup