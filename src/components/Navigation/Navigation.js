import React from "react";

const Navigation = ({OnRouteChange, isSignIn}) =>{
        if (isSignIn){
            return(
                <nav style={{display:'flex', justifyContent: 'flex-end'}}>
                    <p className="f3 link dim black underline pa3 pointer" onClick={() => OnRouteChange('signout')}>サインアウト</p>
                </nav>
            );
        } else {
            return(
                <nav style={{display:'flex', justifyContent: 'flex-end'}}>
                    <p className="f3 link dim black underline pa3 pointer" onClick={() => OnRouteChange('signin')}>サインイン</p>
                    <p className="f3 link dim black underline pa3 pointer" onClick={() => OnRouteChange('register')}>登録</p>
                </nav>
            );
        }
}

export default Navigation;