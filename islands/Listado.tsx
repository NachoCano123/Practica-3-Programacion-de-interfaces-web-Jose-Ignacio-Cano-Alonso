import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import {Job} from "../types.tsx"
import Empleo from "../components/Empleo.tsx";
import Trabajoresumen from "../components/TrabajoResumen.tsx";

export const Form: FunctionComponent<{
  jobs: Job[]
}> = (props) => {
  const [mijob, setjob] = useState<Job>(props.jobs[0])
  
  return (
    <div>
      <h1 class="Titulo"> Principales empleos que te recomendamos </h1>
      <p class="Titulo"> {props.jobs.length} resultados </p>

      <ul class="FondoResumen">
      {props.jobs.map((job) => 
      <Trabajoresumen onClick={() => {
        setjob(job)
      }} company_name={job.company_name} title={job.title} location={job.location}></Trabajoresumen>
      )}
      </ul>   

      <p> 
        <Empleo slug={mijob.slug} company_name={mijob.company_name} title={mijob.title}
                    description={mijob.description} remote={mijob.remote} url={mijob.url}
                    job_types={mijob.job_types} location={mijob.location} created_at={mijob.created_at}></Empleo>
      </p>
    </div>
  );
};

export default Form;