import styled from 'styled-components';

export const FormDiv = styled.div`
    width: 450px;
    height: 350px;
    margin: 60px auto;
    display: flex;
    align-items: center;
    border-radius: 10px;
    background-color: rgb(61, 60, 66);
`;

export const InputContainer = styled.div`
    width: 85%;
    height: 40px;
    background-color: rgb(18, 18, 20);
    border-radius: 3px;
    margin: 20px  auto;
    display: flex;
`;

export const InputIconContainer = styled.div`
    width: 30px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Input = styled.input`
    width: 100%;
    height: 35px;
    border: none;
    color: white;
    padding-left: 5px;
    margin: auto auto;
    background-color: rgb(18, 18, 20)
`;


export const FormContent = styled.div`
    width: 100%;
`;

export const ButtonsContainer = styled.div`
    margin-top: 55px;
`;

export const ButtonFormSubmit = styled.div`
    width: 85%;
    height: 40px;
    margin: 15px auto;
    background-color: #6943c3;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;    
    font-size: 15px;
    font-family: "Poppins";

    :hover {
        cursor: pointer;
    }
`;

export const ButtonCadastro = styled.div`
    width: 85%;
    height: 40px;
    margin: 15px auto;
    background-color: #fff;
    color: #6943c3;
    display: flex;
    border: 1px solid #6943c3;
    justify-content: center;
    align-items: center;
    border-radius: 5px;    
    font-size: 15px;
    font-weight: bold;
    font-family: "Poppins";

    :hover {
        cursor: pointer;
    }
`;