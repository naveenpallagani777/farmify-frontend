import "./Authentication.css"

import { useState } from "react";

const AuthPage = () => {

    let [id ,updateId] = useState("Farmer");
    let [opration,updateOpration] = useState(true);

    return(<>
        <div className="AuthPage">
            <div className="block">
                <h1 >Welcome to Farmify Connect!</h1>
                <h3>Connecting Farmers to the Future of Agriculture</h3>
                <p>At Farmify Connect, we are committed to empowering farmers with the tools, resources, and community they need to thrive in today's dynamic agricultural landscape. Whether you are a seasoned farmer or just starting out, our platform offers a wealth of information and support to help you succeed.</p>
            </div>
            <form className="input">
                <h2 style={{color:"blue"}}>{opration ? "LOGIN":"SIGN UP"}</h2>
                <h2 style={{color:"rgb(0, 94, 255)"}}>Welcome to Farmify Connect!</h2>
                <select name="" id="" onChange={(e) => {updateId(e.target.value)}}>
                    <option value="Farmer">Farmer</option>
                    <option value="Delar">Delar</option>
                </select>
                <input type="text" placeholder={`${id} ID`}/>
                <input type="password" placeholder="Password"/>
                {!opration && <input type="password" placeholder="Re-enter Password"/>}
                <button><h3>{opration ? "LOGIN":"SIGN UP"}</h3></button>
                <div className="line"><h4>{opration ? "Don't have account ?":"Already have account ?"}</h4><h4 onClick={() => {updateOpration(!opration)}}>{opration ? "Sign up":"Login"}</h4></div>
                <h4>{opration ? "forget your password ?":""}</h4>

            </form>
          
        </div>
    </>)

}

export default AuthPage;