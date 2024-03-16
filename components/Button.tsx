import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.2/src/index.js";
import { JSX } from "preact/jsx-runtime";

type PropsComponenteBoton = JSX.HTMLAttributes<HTMLButtonElement> & {
  variant: "Solicitud" | "Guardar" | "Mensaje"
}

export function Button(props: PropsComponenteBoton) {
  return(
    <button 
    {...props}
    class={`text- ${props.variant}`}
    />
  )
}

const Miboton: FunctionComponent<PropsComponenteBoton> = (props) => {
  const { variant, children, ...rest} = props

  return (
    <button class={`miboton ${variant}`} {...rest}>
    {children}
    </button>
  )
}

export default Miboton
