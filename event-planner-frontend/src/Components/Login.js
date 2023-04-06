import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate,useLocation } from 'react-router-dom';



const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success,setSuccess]=useState("");

    const navigate = useNavigate();
    const location = useLocation();

    const updateEmail = (e)=>{
        setEmail(e.target.value);
    }
    const updatePassword = (e)=>{
        setPassword(e.target.value);
    }

    const endpoint = async ()=>{
        const response = await fetch('http://localhost:3001/login',{
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({
                email: email,
                password:password
            })
        });

        return response.json();
    }

    const handleLogin=async(e)=>{
        e.preventDefault();
        setError("");
        setSuccess("");

        const result = await endpoint();
        console.log(result);
        if(Object.keys(result)[0]==="error") setError(result[Object.keys(result)[0]]);
        else{
            setSuccess("Log In successful");
            navigate('/user-dashboard', {state:result});
            // clear();
        }

    }

    return (
        <div classNameName="row">
            <div className="col-12">
                <form className="container p-3">
                    <div className="row mb-3">
                        <label for="email" className="col-form-label col-sm-2 text-wrap">
                            Email:
                        </label>
                        <div className="col-sm-10">
                            <input onChange={updateEmail} type="email" className="form-control" id="email" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label for="password" className="col-form-label col-sm-2 text-wrap">
                            Password:
                        </label>
                        <div className="col-sm-10">
                            <input onChange={updatePassword} type="password" className="form-control" id="password" />
                        </div>
                    </div>

                    <div className="mt-5 d-flex justify-content-evenly">
                        <button onClick={handleLogin} type="submit" className="btn btn-primary">Login</button>
                        <button id="reset" type="reset" className="btn btn-primary">Reset</button>
                    </div>
                </form>
            </div>
            <div className='col-12 text-center'>
                <span>{error !== "" ? error : success}</span>
            </div>
        </div>
    )
}

export default Login