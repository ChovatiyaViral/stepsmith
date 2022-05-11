import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Layout from '../../layout';

const RegisterData = ({
    firstName: '',
    email: '',
    password: '',
    conformPassword: '',
    firstNameError: '',
    emailError: '',
    passwordError: '',
    conformPasswordError: ''
})


export default function Registration() {

    const history = useHistory();
    const localStorageData = JSON.parse(localStorage.getItem("users"));

    const [register, setRegister] = useState(RegisterData);
    const [passwordVisibility, setPasswordVisibility] = useState(false)
    const [conformPasswordVisibility, setConformPasswordVisibility] = useState(false)
    const eye = <FontAwesomeIcon icon={faEye} />
    const slashEye = <FontAwesomeIcon icon={faEyeSlash} />


    const onChange = (e) => {
        setRegister({
            ...register,
            [e.target.name]: e.target.value
        });
    }

    
    const handelData = () => {

        const isValid = formValidation();

        if (isValid) {
            if (!localStorageData) {
                localStorage.setItem("users", JSON.stringify([register]));
            } else {
                localStorageData.push(register);
                localStorage.setItem("users", JSON.stringify(localStorageData))
            }
            history.push('/login');
        }

    }


    const formValidation = () => {
        let firstNameError = "";
        let emailError = "";
        let passwordError = "";
        let conformPasswordError = "";
        let isValid = true;

        const firstNamePattern = new RegExp(/^[a-zA-Z]{3,}$/);
        const emailPattern = new RegExp(/^([\w]*[\w\.]*(?!\.)@gmail.com)/);
        const passwordPattern = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);


        if (register.firstName === " ") {
            firstNameError = "please enter valid name";
            isValid = false;
        }
        if (register.firstName !== " ") {
            if (!firstNamePattern.test(register.firstName)) {
                firstNameError = "please enter minimum 3 Charecter";
                isValid = false;
            }
        }

        //email validation

        if (!emailPattern.test(register.email)) {
            emailError = "please enter valid email";
            isValid = false;
        }

        //password validation
        if (register.password === "") {
            passwordError = "please enter password"
            isValid = false
        }

        if (localStorageData !== null) {
            localStorageData.find(item => {
                if (item.password === register.password) {
                    passwordError = "please enter other password"
                    isValid = false;
                }
            })
        }

        if (register.password !== "") {
            if (!passwordPattern.test(register.password)) {
                passwordError = "please enter one small character,one spacial character,one capital character ";
                isValid = false;
            }
        }
        //conform password
        if (register.conformPassword === "") {
            conformPasswordError = "please enter ConformPassword"
            isValid = false;
        }
        if (register.conformPassword !== "") {
            if (register.password !== "undefined" && register.conformPassword !== "undefined") {
                if (register.conformPassword !== register.password) {
                    conformPasswordError = "Passwords don't match."
                    isValid = false;
                }
            }
        }
        //set all value
        setRegister({
            ...register,
            errors: {
                firstName: {
                    hasError: true,
                    message: 'Please enter valid first name'
                }
            },
            firstNameError: firstNameError,
            emailError: emailError,
            passwordError: passwordError,
            conformPasswordError: conformPasswordError
        })
        return isValid;
    }

    const handelLogin = ()=> {
        history.push('/login')
    }

    return (
        <>
            <Layout>
                <div className="container p-5">
                    <form>
                        <label>First Name :- </label>
                        <input type="text" name="firstName" onChange={onChange} minLength="3"></input>
                        <div style={{ color: "red" }}>{register.firstNameError}</div>
                        <br />
                        <label>Email :-</label>
                        <input type="email" name="email" onChange={onChange} required></input>
                        <div style={{ color: "red" }}>{register.emailError}</div>
                        <br />

                        <div className="d-flex align-items-center">
                            <label style={{ position: 'relative' }}>Password : - <i onClick={() => setPasswordVisibility(!passwordVisibility)} style={{ position: "absolute", left: '278%', top: '4px' }}>{passwordVisibility ? eye : slashEye}</i></label>
                            <input type={passwordVisibility ? 'text' : 'password'} name="password" autoComplete="false" onChange={onChange}></input>
                        </div>
                        <div style={{ color: "red" }}>{register.passwordError}</div>
                        <br />

                        <div className="d-flex align-items-center">
                            <label style={{ position: 'relative' }}>conform Password : - <i icon={faEye} onClick={() => setConformPasswordVisibility(!conformPasswordVisibility)} style={{ position: "absolute", left: '200%', top: '4px' }}>{conformPasswordVisibility ? eye : slashEye}</i></label>
                            <input type={conformPasswordVisibility ? 'text' : 'password'} name="conformPassword" onChange={onChange}></input>
                        </div>
                        <div style={{ color: "red" }}>{register.conformPasswordError}</div>
                        <br />
                        <button type="button" onClick={handelData}>Submit</button>
                    </form>
                </div>
            </Layout>
        </>
    )
}
