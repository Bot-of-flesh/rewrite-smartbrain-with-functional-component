import React, { useState } from 'react'

const Signin = ({OnRouteChange, loadUser}) => {
    const [SignInEmail, setSignInEmail] = useState('');
    const [SignInPassword, setSignInPassword] = useState('');

    const onEmailChange = (event) => {
        setSignInEmail(event.target.value);
    }
    const onPasswordChange = (event) => {
        setSignInPassword(event.target.value);
    }

    const OnSubmitSignIn = () => {
        fetch('https://smart-brain-api-dx8u.onrender.com/signin', {
            method: 'POST',
            mode: 'cors',
            headers : {'Content-Type': 'application/json'},
            body : JSON.stringify({
                email : SignInEmail,
                password : SignInPassword
            })
        })
        .then(response => response.json())
        .then(user => {
            if (user.id){
                loadUser(user);
                OnRouteChange('home');
            }
        })
        
    }
  return (
        <article className="br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 black-80">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0">サインイン</legend>
                        <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="email" 
                            name="email-address"  
                            id="email-address" 
                            onChange={(e) => onEmailChange(e)}
                        />
                        </div>
                        <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">パスワード</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="password" 
                            name="password"  
                            id="password" 
                            onChange={(e) =>onPasswordChange(e)}
                        />
                        </div>
                    </fieldset>
                    <div className="">
                        <input 
                        onClick={() => OnSubmitSignIn()}
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                        type="submit" 
                        value="サインイン" />
                    </div>
                    <div className="lh-copy mt3">
                        <p onClick={() => OnRouteChange('register')} className="f6 link dim black db pointer">登録</p>
                    </div>
                </div>
            </main>
        </article>
  )
}

export default Signin