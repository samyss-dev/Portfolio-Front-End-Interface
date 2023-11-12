import { Title } from '../components/Title'
import { Project } from '../components/Project'
import { Loading } from '../components/Loading'
import { FetchContext } from '../context/FetchContext'
import { useContext } from 'react'

export function Work() {
  const { projects, isFetching } = useContext(FetchContext)

  return (
    <>
      <Title text="Check out my creations" />
      {isFetching ? (
        <Loading />
      ) : (
        <ul className="flex flex-col gap-8">
          {projects?.map((project) => (
            <li key={project.id}>
              <Project
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                hasDeploy={project.hasDeploy}
                deployPath={project.deployPath}
                repositoryPath={project.repositoryPath}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
