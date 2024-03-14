import { FreshContext, Handlers} from "$fresh/server.ts"
import axios from "npm:axios"
import { Job } from "../types.tsx"
import Listado from "../islands/Listado.tsx"

//hacer un handler para pillar los valores de job y pasarselos a listado
export const handler: Handlers = {
  GET: async (_req:Request, ctx:FreshContext<unknown, Job[]>) => { 
      try {
          const Empleos = await axios.get(`https://arbeitnow.com/api/job-board-api`)
      
          if(Empleos.status !== 200)
          {
              throw new Error("Ha habido un error")
          }

          return ctx.render(Empleos.data.data)
      }
      catch (e)
      {
          throw new Error("Ha habido un error")
      }
  } 
}

export default function Home(props: any) {
  
  return (
    <div> 
      <Listado jobs={props.data}/>
    </div>
  );
}
