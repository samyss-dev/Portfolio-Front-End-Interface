import axios from 'axios'
import { ProjectProps } from '../components/Project'
import { createContext, useState, useEffect, ReactNode } from 'react'

type ProjectData = ProjectProps & { id: string }

interface FetchContextValue {
  projects: ProjectData[] | null
  isFetching: boolean
}

export const FetchContext = createContext<FetchContextValue>({
  projects: null,
  isFetching: true,
})

export function FetchProvider({ children }: { children: ReactNode }) {
  const [projects, setProjects] = useState<ProjectData[] | null>(null)
  const [isFetching, setIsFetching] = useState(true)

  const apiUrl = import.meta.env.VITE_API_URL

  const fetch = async () => {
    try {
      const projects = await axios.get(`${apiUrl}/projects`)

      setProjects(projects.data)
      setIsFetching(false)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetch()
  }, [])

  return <FetchContext.Provider value={{ projects, isFetching }}>{children}</FetchContext.Provider>
}
