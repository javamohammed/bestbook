import "./Register.css"

export default  function Register(): JSX.Element {
    return <>
            <div className="register">
                <div className="register-wrapper">
                    <div className="register-left">
                        <h3 className="register-logo">Bestbook</h3>
                        <span className="register-desc">
                            connect with friends and the world around you on Bestbook
                        </span>
                    </div>
                    <div className="register-right">
                        <div className="register-box">
                            <input type="text" placeholder="Username" className="register-input" />
                            <input type="text" placeholder="Email" className="register-input" />
                            <input type="password" placeholder="Password" className="register-input" />
                            <input type="password" placeholder="Password Agin" className="register-input" />
                            <input type="button" value="Sign Up" className="register-button" />
                            <span className="register-forgot">Forgot Password ?</span>
                            <input type="button" value="Connect to your Account" className="register-login-button" />
                        </div>
                    </div>
                </div>
               
            </div>
        </>
} 