import { useEffect } from "react"
import axios from 'axios'

export default function Home() {
    useEffect(() => {
        axios.get("http://localhost:3333/session").then(({data}) => console.log(data))
        const session = localStorage.getItem("session");
        console.log(Object.values(session))
    
    }, [])

    return(
        <h1>Vc está na HOME !!! {localStorage.getItem("session")}</h1>
    )
}