import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import axios from "axios";

export default function SingIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function signIn() {
        const user = {
            email,
            password
        }
        try {
            const response = await axios.post('http://localhost:5000/sign-in', user);
            navigate('/registry', {state:response.data});            
        }
        catch (error) {
            console.log(error.response.data);
        }
    }

    return (
        <Wrapper>
            <h1>MyWallet</h1>
            <input type='text' onChange={(event) => setEmail(event.target.value)} placeholder='E-mail'></input>
            <input type='password' onChange={(event) => setPassword(event.target.value)} placeholder='Senha'></input>
            <button onClick={signIn}>Entrar</button>
            <Link to={'/sign-up'}>Primeira vez? Cadastre-se</Link>
        </Wrapper>
    )

}

const Wrapper = styled.div`
    background-color: #8C11BE;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    h1{
        font-family: 'Saira Stencil One';
        font-weight: normal;
        font-size: 32px;
        color:white;
        margin-bottom: 25px;
    }
    input{
        height: 60px;
        width: 80vw;
        border-radius: 5px;
        background-color: #FFF;
        border: 1px solid;
        margin-bottom: 15px;
    }
    input::placeholder{
        font-family: 'Raleway';
        color:#000;
        padding-left: 10px;
        font-size: 20px;
    }
    button{
        background-color: #A328D6;
        font-family: 'Raleway';
        color: #FFF;
        font-size: 20px;
        font-weight: bold;
        width: 80vw;
        height: 50px;
        border: none;
        border-radius: 5px;
    }
    a{
        margin-top: 35px;
        font-size: 15px;
        font-weight: bold;
        font-family: 'Raleway';
        color: #FFF;
        text-decoration: none;
    }
`