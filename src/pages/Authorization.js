import React from 'react';
import { useForm } from 'react-hook-form'

function Authorization() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data.username, data.password)
        let user = {
            "username": data.username,
            "password": data.password
        }
        console.log(JSON.stringify(user))
        try {
            fetch("https://fakestoreapi.com/auth/login",{
            method:'POST',
            body:JSON.stringify(user)
            }).then(res=>res.json()).then(json=>console.log(json))
        }
        catch (e) {
    
        }
    };

    return (
        <div>
            <form className='loginForm' onSubmit={handleSubmit(onSubmit)}>
                <input type='login' placeholder='Логин' className='formElem' {...register("username", {required: true})}/>
                {errors.login && <p>Неправильный логин</p>}
                <input type='password' placeholder='Пароль' className='formElem' {...register("password", {required: true})}/>
                {errors.password && <p>Неправильный пароль</p>}
                <button className='fromButton' type='submit'>Войти</button>
            </form>
        </div>
    );
}

export default Authorization;