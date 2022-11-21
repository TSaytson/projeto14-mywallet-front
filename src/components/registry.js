import { useState } from "react"
import { useLocation, useNavigate } from "react-router";
import styled from "styled-components"


export default function Registry() {
    const [entrys, setEntrys] = useState([]);
    const [withdraws, setWithdraws] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Wrapper>
            <div>
                <h1>Olá, {location.state}</h1>
                <ion-icon name="log-out-outline" onClick={()=> navigate('/')}></ion-icon>
            </div>
            <main>{(entrys.length === 0 && withdraws.length === 0) ?
                'Não há registro de entrada ou saída' : ''}</main>
            <Bottom>
                <div onClick={()=> navigate('/transaction', {state:'entry'})}>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <p>Nova entrada</p>
                </div>
                <div onClick={()=> navigate('/transaction', {state:'withdraw'})}>
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <p>Nova saída</p>
                </div>
            </Bottom>
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
    div{
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
        }
        ion-icon{
            font-size:25px ;
            color: #fff;
            cursor: pointer;
        }
    }
    main{
        background-color: #fff;
        border-radius: 5px;
        width: 80vw;
        height: 65vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-family: 'Raleway';
        font-size: 20px;
        color: #868686;
        margin-bottom: 65px;
    }
`

const Bottom = styled.div`
    display: flex;
    width: 80vw;
    div{
        box-sizing: border-box;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        border-radius: 5px;
        width: 48%;
        height:115px;
        background-color: #A328D6;
        cursor:pointer;
        p{
            width: 40px;
            color: #fff;
            font-family: 'Raleway';
            font-size: 17px;
            font-weight: bold;
        }
    }
`