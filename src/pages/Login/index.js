import axios from 'axios';
import { 
    FormDiv, 
    FormContent,
    InputContainer,
    InputIconContainer,
    Input,
    ButtonFormSubmit,
    ButtonCadastro,
    ButtonsContainer
} from './styled'; 
import { FaEnvelope, FaKey } from 'react-icons/fa';
import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect} from 'react';

if(window !== 'undefined') {
    injectStyle();
}

export default function Cadastro() {    
    const navigate = useNavigate();

    useEffect(() => {
        const session = localStorage.getItem("session");

        if(session) {
            navigate("/home");
        }
    }, [])

    const showNotify = (text, type) => {
        if (type === "error") {
            toast.error(text, { position: toast.POSITION.TOP_LEFT });
        }   
    };

    const logaUsuario = async function() {
        await axios.post("http://localhost:3333/logging", {
            email: document.querySelector(".input-email").value,
            password: document.querySelector(".input-password").value,
        }).then(({data}) => {
           if (data.error) {
               showNotify(data.error, "error");
           } else {
                localStorage.setItem("session", data.user_logged.nome);
                navigate("/home")
           }
        }).catch(e => console.log(e));
    }

    return(         
        <>
            <ToastContainer />
            <FormDiv>
                <FormContent>

                    <InputContainer>
                        <InputIconContainer>
                            <FaEnvelope color='rgb(61, 60, 66)'/>
                        </InputIconContainer>
                        <Input className="input-email" required placeholder='E-mail'/>
                    </InputContainer>

                    <InputContainer>
                        <InputIconContainer>
                            <FaKey color='rgb(61, 60, 66)'/>
                        </InputIconContainer>
                        <Input className="input-password" required placeholder='Password'/>
                    </InputContainer>

                    <ButtonsContainer>
                        <ButtonFormSubmit onClick={logaUsuario}>Logar</ButtonFormSubmit>
                        <Link to="/auth/cadastro">
                            <ButtonCadastro>Cadastrar-se</ButtonCadastro>
                        </Link>
                    </ButtonsContainer>
                </FormContent>
            </FormDiv>
        </>
    )
}