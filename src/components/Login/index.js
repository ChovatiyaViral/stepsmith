import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Layout from '../../layout';

const loginData = ({
    loginEmail: '',
    loginPassword: ''
})

toast.configure();
export default function Login() {
    const history = useHistory();
    const usersList = JSON.parse(localStorage.getItem('users'));
    const [login, setLogin] = useState(loginData);
    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const eye = <FontAwesomeIcon icon={faEye} />
    const slashEye = <FontAwesomeIcon icon={faEyeSlash} />


    const onChange = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }


    const handleClick = () => {
        if (usersList === null) {
            return toast.error("User not found")
        }
        const userDetails = usersList.find(item => item.email === login.loginEmail)
        if (!userDetails) {
            return toast.error('User with provided email does not exist')
        }

        const hasEnteredCorrectPassword = userDetails.password === login.loginPassword;
        if (!hasEnteredCorrectPassword) {
            return toast.error('user password is incurrect')
        }

        toast.success('Login Successfully')
        localStorage.setItem("loginUser", login.loginEmail);
        history.push('/home')

    }

    return (
        <>
            <Layout>
                <div className="container">
                    <form>
                        <label>Email :-</label>
                        <input type="Email" name="loginEmail" placeholder="Enter Email" onChange={onChange}></input><br /><br />
                        <div className="d-flex align-items-center">
                            <label style={{ position: 'relative' }}>Password :- <i onClick={() => setPasswordVisibility(!passwordVisibility)} style={{ position: "absolute", left: '238px', top: '4px' }} >{passwordVisibility ? eye : slashEye}</i></label>
                            <input type={passwordVisibility ? 'text' : 'password'} name="loginPassword" autoComplete="false" placeholder="Enter Password" onChange={onChange}>
                            </input>
                        </div><br /><br />
                        <button type="button" onClick={handleClick}>Login</button>
                    </form>
                </div>
            </Layout>
        </>
    )
}
