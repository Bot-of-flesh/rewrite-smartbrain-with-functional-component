import React , { useState } from 'react'

const Register = ({OnRouteChange, loadUser}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const onNameChange = (event) => {
        setName(event.target.value);
    }

    const onEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const onPasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const OnSubmitRegister = () => {
        fetch('https://smart-brain-api-dx8u.onrender.com/register', {
            method: 'POST',
            mode: 'cors',
            headers : {'Content-Type': 'application/json'},
            body : JSON.stringify({
                email : email,
                password : password,
                name: name
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
                    <legend className="f1 fw6 ph0 mh0">登録</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">名前</label>
                        <input 
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="text" name="name"  
                            id="name"
                            onChange={(e) => onNameChange(e)} 
                        />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">email</label>
                        <input 
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="email" name="email-address"  
                            id="email-address"
                            onChange={(e) => onEmailChange(e)}
                        />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">パスワード</label>
                        <input 
                            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="password" 
                            name="password"  
                            id="password" 
                            onChange={(e) => onPasswordChange(e)}
                        />
                    </div>
                </fieldset>
                <div className="">
                    <input 
                    onClick={() => OnSubmitRegister()}
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                    type="submit" 
                    value="登録" />
                </div>
                </div>
            </main>
        </article>
  )
}

export default Register;