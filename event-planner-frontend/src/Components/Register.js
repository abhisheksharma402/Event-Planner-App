import React, { useEffect, useState } from 'react'
import { createBrowserHistory } from '@remix-run/router';
import { useNavigate } from 'react-router-dom';
// import Header from './Header';

const Register = (props) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [dob, setDOB] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("");
    const [city, setCity] = useState("");
    const [error, setError] = useState("");
    const [success,setSuccess] = useState("");
    const [passMatch, setPassMatch] = useState(true);

    const [user, setUser] = useState({});

    const navigate = useNavigate();
    

    useEffect(()=>{
        // debugger;
        setPassMatch(password===confirmPass);

    },[confirmPass]);

    useEffect(()=>{
        if(!passMatch) setError("Passwords do not match!!");
        else setError("");
    },[passMatch]);

    const updateName = (e)=>{
        setName(e.target.value);
    }
    const updatePhone = (e)=>{
        setPhone(e.target.value);
    }
    const updateDOB = (e)=>{
        setDOB(e.target.value);
    }
    const updateAddress = (e)=>{
        setAddress(e.target.value);
    }
    const updateGender = (e)=>{
        if(gender==="Male" || gender==="" && e.target.value==="Female") setGender("Female");
        else setGender("Male");
    }
    const updateCity =(e)=>{
        setCity(e.target.value);
    }
    const updateEmail =(e)=>{
        setEmail(e.target.value);
    }
    const updatePassword =(e)=>{
        setPassword(e.target.value);
        // console.log(password);
    }
    const updateConfirmPass = (e)=>{
        setConfirmPass(e.target.value);
    }

    const clearStates = ()=>{
        setName("");
        setPhone("");
        setEmail("");
        setDOB("");
        setCity("");
        setAddress("");
        setGender("");
        setPassword("");
        setConfirmPass("");
    }

    const clear = ()=>{
        const reset = document.getElementById("reset");
        reset.click();
        clearStates();
    }

    const endpoint = async ()=>{
        // console.log("inside endpoint: ",user);
        const response = await fetch('http://localhost:3001/signup',{
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
                name: name,
                phone: phone,
                email: email,
                password:password,
                dob: dob,
                address: address,
                gender: gender,
                city: city,
            })
        });

        return response.json();
    }


    const handleRegister = async (e)=>{
        // debugger;
        e.preventDefault();
        setError("");
        setSuccess("");

        const result = await endpoint();
        if(Object.keys(result)[0]==="error") setError(result[Object.keys(result)[0]]);
        else{
            setSuccess("Please Log in to continue");
            navigate('/login',result);
            clear();
        }   
    }



    return (
        <div classNameName="row">
            <div className="col-12">
                <form className="container p-3">
                    <div className="row mb-3">
                        <label for="name" className="col-form-label col-sm-2 text-wrap">
                            Name:
                        </label>
                        <div className="col-sm-10">
                            <input onChange={updateName} type="text" className="form-control" id="name" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label for="phone" className="col-form-label col-sm-2 text-wrap">
                            Phone:
                        </label>
                        <div className="col-sm-10">
                            <input onChange={updatePhone} type="tel" className="form-control" id="phone" />
                        </div>
                    </div>
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
                    <div className="row mb-3">
                        <label for="confirm-password" className="col-form-label col-sm-2 text-wrap">
                            Confirm Password:
                        </label>
                        <div className="col-sm-10">
                            <input onChange={updateConfirmPass} type="password" className="form-control" id="confirm-password" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label for="dob" className="col-form-label col-sm-2 text-wrap">
                            Date of Birth
                        </label>
                        <div className="col-sm-10">
                            <input onChange={updateDOB} type="date" className="form-control" id="dob" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label for="address" className="col-form-label col-sm-2 text-wrap">
                            Address:
                        </label>
                        <div className="col-sm-10">
                            <textarea
                                onChange={updateAddress}
                                className="form-control"
                                name="address"
                                id="address"
                            ></textarea>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label className="col-form-label col-sm-2 text-wrap" for="gender">
                            Gender:
                        </label>
                        <div className="col-sm-10 d-flex">
                            <div className="form-check me-3">
                                <input
                                    className="form-check-input"
                                    name="gender"
                                    id="male"
                                    type="radio"
                                    value="Male"
                                    onChange={updateGender}
                                />
                                <label className="form-check-label" for="male">Male</label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    name="gender"
                                    id="female"
                                    type="radio"
                                    value="Female"
                                    onChange={updateGender}
                                />
                                <label className="form-check-label" for="female">Female</label>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label className="col-form-label col-sm-2 text-wrap" for="">City:</label>
                        <div className="col-sm-10">
                            <select onChange={updateCity} className="form-select">
                                <option selected>Select city</option>
                                <option value="Chandigarh">Chandigarh</option>
                                <option value="Gurgaon">Gurgaon</option>
                                <option value="Shimla">Shimla</option>
                                <option value="Manali">Manali</option>
                                <option value="New Delhi">New Delhi</option>
                                <option value="Noida">Noida</option>
                            </select>
                        </div>
                    </div>

                    <div className="mt-5 d-flex justify-content-evenly">
                        <button onClick={handleRegister} type="submit" className="btn btn-primary">Register</button>
                        <button id="reset" type="reset" className="btn btn-primary">Reset</button>
                    </div>
                </form>
            </div>
            <div className='col-12 text-center'>
                <span>{error!==""?error:success}</span>
            </div>
        </div>
    )
}

export default Register;
