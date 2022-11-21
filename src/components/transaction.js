
import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import styled from "styled-components"


export default function Transaction() {
    const navigate = useNavigate();
    const location = useLocation();
    const [value, setValue] = useState(null);
    const [description, setDescription] = useState('');

    async function saveTransaction() {
        if (value && description) {
            const transaction = {
                value,
                description
            }
            try {
                const response = await axios
                    .post('http://localhost/transactions', transaction);
                console.log(response);
                navigate('/registry');
            }
            catch (error) {
                console.log(error);
            }
        }
        else
            console.log('Preencha todos os campos');
    }
    return (
        <Wrapper>
            <div>
                <h1>Nova {location.state === 'entry' ? 'entrada' : 'saída'}</h1>
            </div>
            <input onChange={(event) => setValue(event.target.value) }type='number' placeholder="Valor"></input>
            <input onChange={ (event) => setDescription(event.target.value)}type='text' placeholder="Descrição"></input>
            <button onClick={saveTransaction}>Salvar {location.state === 'entry' ? 'entrada' : 'saída'}</button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: #8C11BE;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100vw;
    height: 100vh;
    div{
        margin-top: 30px;
        height: 30px;
        width: 80vw;
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        h1{
            font-family: 'Raleway';
            font-size: 26px;
            font-weight: bold;
            color: #fff;
            margin-bottom: 10px;
        }
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
        cursor: pointer;
    }
    
`