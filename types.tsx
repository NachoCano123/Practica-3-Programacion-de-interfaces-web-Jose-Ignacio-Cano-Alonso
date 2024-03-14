export type Job = {
    slug: string,
    company_name: string,
    title: string,
    description: string,
    remote: boolean,
    url: string,
    job_types: string[],
    location: string,
    created_at: number
}

export type ResumenJob = {
    company_name: string,
    title: string,
    location: string,
    onClick: () => void
}

export type Trabajos = {
    trabajos: Job[]
}