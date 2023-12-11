import React from 'react';
import { useForm } from 'react-hook-form';
import './Authorization.css';

function Authorization() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async(data) => {
        let user = {
            "username": data.username,
            "password": data.password
        }
        try {
            const tok = await GetToken(user);
            localStorage.setItem('token', tok)
        }
        catch (e) {
    
        }
        window.location.reload()
    };

    return (
        <div>
            <form className='loginForm' onSubmit={handleSubmit(onSubmit)}>
                <div className='formcontainer'>
                    <h2>Авторизация</h2>
                    <input type='login' placeholder='Логин' className='formElem' {...register("username", {required: true})}/>
                    {errors.login && <p>Неправильный логин или пароль</p>}
                    <input type='password' placeholder='Пароль' className='formElem' {...register("password", {required: true})}/>
                    {errors.password && <p>Неправильный логин или пароль</p>}
                    <button className='formButton' type='submit'>Войти</button>
                </div>
            </form>
        </div>
    );
}

async function GetToken(user) {
    try {
        const response = await fetch("https://fakestoreapi.com/auth/login",{
            method:'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(user)
        })
        const token = await response.json()
        return token.token
    }
    catch (e) {

    }
}

export default Authorization;