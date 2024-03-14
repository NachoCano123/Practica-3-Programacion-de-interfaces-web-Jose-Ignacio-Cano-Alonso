import { FunctionComponent } from "preact";
import { ResumenJob } from "../types.tsx"

const Trabajoresumen: FunctionComponent<ResumenJob> = (props) => {
    const {company_name, title, location} = props
    return (
        <div class="Resumen" onClick={props.onClick}>
            <h1 class={"Texto"}> {title} </h1>
            <p> {company_name} </p>
            <p> {location} </p>
            <p class="promo"> Promocionado </p>
        </div>
    )
}

export default Trabajoresumen