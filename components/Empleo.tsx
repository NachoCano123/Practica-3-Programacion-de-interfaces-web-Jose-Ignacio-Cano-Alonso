import { FunctionComponent } from "preact";
import { Job } from "../types.tsx"

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
            <h2> Acerca del empleo </h2>
            <p dangerouslySetInnerHTML={{ __html: description }}> </p>
            <p> Creación de la página: {created_at} </p>
        </div>
    )
}

export default Trabajo