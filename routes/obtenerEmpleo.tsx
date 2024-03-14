import { FreshContext, Handlers, PageProps } from "$fresh/server.ts"
import axios from "npm:axios";
import { Trabajos, Job } from "../types.tsx"
import Empleo from "../components/Empleo.tsx";

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

const miPagina = (props: PageProps<Job[]>) => {
    return (
        <div>
            {props.data.map((emp) =>
                    <Empleo slug={emp.slug} company_name={emp.company_name} title={emp.title}
                    description={emp.description} remote={emp.remote} url={emp.url}
                    job_types={emp.job_types} location={emp.location} created_at={emp.created_at}></Empleo>
                     )}
        </div>
    )
}

export default miPagina