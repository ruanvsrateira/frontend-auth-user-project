import axios from 'axios';
import { 
    FormDiv, 
    FormContent,
    InputContainer,
    InputIconContainer,
    Input,
    ButtonFormSubmit,
    ButtonLogin
} from './styled'; 
import { FaUser, FaEnvelope, FaKey } from 'react-icons/fa';
import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer, toast } from "react-toastify";
import { Link } from 'react-router-dom';

if(window !== 'undefined') {
    injectStyle();
}

export default function Cadastro() {        

    const showNotify = (text, type) => {
        if (type === "error") {
            toast.error(text, { position: toast.POSITION.TOP_LEFT });
        } else if(type === "success") {
            toast.success(text, { position: toast.POSITION.TOP_LEFT });
        }
       
    };

    const cadastraUsuario = () => {
        axios.post("http://localhost:3333/users", {
            nome: document.querySelector(".input-nome").value,
            email: document.querySelector(".input-email").value,
            password: document.querySelector(".input-password").value,
            retypePassword: document.querySelector(".input-retypePassword").value
        }).then(({data}) => {
            data.error ? showNotify(data.error, "error") : showNotify(data.success, "success");
        })

    }

    return(         
        <>
            <ToastContainer />
            <FormDiv>
                <FormContent>

                    <InputContainer>
                        <InputIconContainer>
                            <FaUser color='rgb(61, 60, 66)'/>
                        </InputIconContainer>
                        <Input className="input-nome" required placeholder='Name'/>
                    </InputContainer>

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

                    <InputContainer>
                        <InputIconContainer>
                            <FaKey color='rgb(61, 60, 66)'/>
                        </InputIconContainer>
                        <Input className="input-retypePassword" required placeholder='Retype password'/>
                    </InputContainer>
                    <ButtonFormSubmit onClick={cadastraUsuario}>Cadastrar-se</ButtonFormSubmit>
                    <Link to="/auth/login">
                        <ButtonLogin>Logar</ButtonLogin>
                    </Link>
                </FormContent>
            </FormDiv>
        </>
    )
}