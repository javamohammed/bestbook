import "./Login.css"

export default  function Login(): JSX.Element {
    return <>
            <div className="login">
                <div className="login-wrapper">
                    <div className="login-left">
                        <h3 className="login-logo">Bestbook</h3>
                        <span className="login-desc">
                            connect with friends and the world around you on Bestbook
                        </span>
                    </div>
                    <div className="login-right">
                        <div className="login-box">
                            <input type="text" placeholder="Email" className="login-input" />
                            <input type="password" placeholder="Password" className="login-input" />
                            <input type="button" value="Log In" className="login-button" />
                            <span className="login-forgot">Forgot Password ?</span>
                            <input type="button" value="Create a New Account" className="login-register-button" />
                        </div>
                    </div>
                </div>
               
            </div>
        </>
} 