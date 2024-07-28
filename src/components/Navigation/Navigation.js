import React from "react";

const Navigation = ({OnRouteChange, isSignIn}) =>{
        if (isSignIn){
            return(
                    <nav style={{display: 'flex', justifyContent: 'flex-end'}} className="instruction">
                        <p className="f3 link dim black underline pa3 pointer" onClick={() => OnRouteChange('signout')}>サインアウト</p>
                    </nav>
            );
        } else {
            return(
                <div className="message" >
                    <p className="f3  black pa3">未登録の方は登録の後でサインインを、登録済みの方はそのままサインインをしてください。</p>
                    <nav>
                        <p className="f3 link dim black underline pa3 pointer" onClick={() => OnRouteChange('signin')}>サインイン</p>
                        <p className="f3 link dim black underline pa3 pointer" onClick={() => OnRouteChange('register')}>登録</p>
                    </nav>
                </div>
            );
        }
}

export default Navigation;