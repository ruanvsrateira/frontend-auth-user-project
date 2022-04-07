import { useEffect } from "react"
import { HomeTitle, ButtonLogOff } from './styled';
import { Container } from "../../GlobalStyles";
import { FaPowerOff } from 'react-icons/fa'
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        const session = localStorage.getItem("session");

        if(!session) {
            navigate("/auth/login");
        }
    }, [])

    const logOff = () => {
        localStorage.removeItem("session");
        navigate("/auth/login");
    };

    return(
        <Container>
            <HomeTitle>Olá {localStorage.getItem("session")}, Seja bem-vindo ao nosso site !   </HomeTitle>
            <ButtonLogOff onClick={logOff}><FaPowerOff />LogOff</ButtonLogOff>
        </Container>
    )
}