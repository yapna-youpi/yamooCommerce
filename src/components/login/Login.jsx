import React, { useState } from 'react'
import { UilUserCircle, UilPhone , UilEnvelope, UilUnlockAlt   } from '@iconscout/react-unicons'

function Login() {

    const [moon, setMoon] = useState(false);

    const colorTheme = () =>{
        let colorT = localStorage.getItem('theme')
        setMoon(!moon);
        document.getElementById('banner').classList.toggle('banner')
        document.getElementById('banner').classList.toggle('banner2')
    }

  
  const handleSignin = function () {
    const formBx = document.querySelector('.formBx');
    const signin = document.querySelector('.signin')
    formBx.classList.remove('activer');
    formBx.classList.add('desactiver');
    signin.classList.toggle('activer');
    console.log('la classe retirer')
  }
  const handleSignup = function () {
    const formBx = document.querySelector('.formBx');
    const signin = document.querySelector('.signin')
    formBx.classList.add('activer');
    formBx.classList.remove('desactiver');
    signin.classList.toggle('activer');
    console.log('la classe activer')
  }
  return (
    <div>
        <div className="signin flex justify-center pt-16 items-center h-screen transition-all duration-500 bg-orange-300 ">
            <div className="container  relative w-6/12 h-96 flex">
              <div className="blueBg flex justify-center items-center absolute top-0 left-0 bg-orag">
                <div className="box signin ">
                  <h2 className=''>Already Have An Account ?</h2>
                  <button onClick={handleSignin} className='signinBtn'>Sign In</button>
                </div>
                <div className="box signup ">
                  <h2>Don't Have An Account ?</h2>
                  <button onClick={handleSignup} className='signupBtn'>Sign Up</button>
                </div>
              </div>
              <div className="formBx absolute top-0 lef-0 w-6/12 bg-white flex justify-center items-center"> 
                <div className="signinFom">
                  <form action="">
                    <div className="formGroup">
                      <p className='m-0 p-0 font-bold'>Username</p>
                      <input type="text" name="name" placeholder="Online" /><i><UilUserCircle  size={22} /></i>
                    </div>
                    <div className="formGroup">
                      <p className='m-0 p-0 font-bold'>Password</p>
                      <input type="password" name="password" placeholder="......" /><i><UilUnlockAlt size={20} /></i>
                      <input type="submit" name='submit' className='btnSingin' value="Singn In" />
                    </div>
                    <a href='#'>Forget Password</a>
                  </form>
                </div>
                <div className="signupFom">
                  <form action="">
                    <div className="formGroup">
                      <input type="text" name="name" placeholder="Username" /><i><UilUserCircle  size={22} /></i>
                    </div>
                    <div className="formGroup">
                      <input type="text" name="email" placeholder="Email" /><i><UilEnvelope size={18} /></i>
                    </div>
                    <div className="formGroup">
                      <input type="number" name="phone" placeholder="phone" /><i><UilPhone  size={20} /></i>
                    </div>
                    <div className="formGroup">
                      <input type="password" name="password" placeholder="Password" /><i><UilUnlockAlt size={20} /></i>
                      <input type="submit" name='submit' className='btnRegister' value="Register" />
                    </div>
                    <a href='#'>Forget Password</a>
                  </form>
                </div>
              </div>
            </div>
            {/* <div className='bubble '>
                <div className='form-container'>
                    <form class="login-form">
                        <div class="icon">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" color="#c31432" height="50" width="50" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 8V7c0-2.757-2.243-5-5-5S7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2H9V7c0-1.654 1.346-3 3-3s3 1.346 3 3v1h2zm1 4 .002 8H6v-8h12z"></path>
                            </svg>
                        </div>
                        <h1>Login</h1>
                        <input type="email" required="" placeholder="Email" />
                        <input type="password" required="" placeholder="Password" />
                        <button>Login</button>
                    </form>
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default Login