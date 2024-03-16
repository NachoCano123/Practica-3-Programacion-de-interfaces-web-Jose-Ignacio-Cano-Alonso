import { FunctionComponent } from "preact";
import { Job } from "../types.tsx"
import { Button } from "./Button.tsx";

const Trabajo: FunctionComponent<Job> = (props) => {
    const {slug, company_name, title, description, remote, url, job_types, location, created_at} = props
    //Slug es la id
    return (
        <div class="FondoEmpleo">
            <h1 class={"Texto"}> {title} </h1>
            <p> <strong> {company_name} </strong> • {location}</p>
            <p> {remote} </p>
            <a href={url}> Mi perfil </a>
            <hr></hr>
            <p> Tipos de trabajo: {job_types} </p>
            <Button variant = "Solicitud" role="link" onClick={() => <a href={url}/>}> Solicitar </Button> 
            <Button variant = "Guardar"> Guardar </Button>
            <hr></hr>
            <h2>Conoce al equipo de contratación</h2>
            <image class="imagen" src="https://www.labsaenzrenauld.com/wp-content/uploads/2020/10/Perfil-hombre-ba%CC%81sico_738242395.jpg"/>
            <Button variant = "Mensaje"> Mensaje </Button>
            <hr></hr>
            <h3> Acerca del empleo </h3>
            <p dangerouslySetInnerHTML={{ __html: description }}> </p>
            <p> Creación de la página: {created_at} </p>
        </div>
    )
}

export default Trabajo
