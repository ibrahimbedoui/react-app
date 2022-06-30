import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
//import { connect } from 'react-redux';
import { reset_password } from '../features/auth/authSlice';
import { useDispatch } from 'react-redux';
const ResetPassword = () => {
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        email: ''
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { email } = formData;
    

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        dispatch(reset_password(email));
        setRequestSent(true);
    };

    if (requestSent) {
        return navigate("/")
    }

    return (
        <div>
            <h1>Réinitialisez votre mot de passe:</h1>
            <form onSubmit={e => onSubmit(e)}>
                <div>
                    <input
                       
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <button>Envoyer</button>
            </form>
        </div>
    );
};
export default ResetPassword;
