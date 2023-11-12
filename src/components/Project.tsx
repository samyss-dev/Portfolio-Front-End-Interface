import { FiGithub } from 'react-icons/fi'
import { BsBoxArrowUpRight } from 'react-icons/bs'

export type ProjectProps = {
  title: string
  description: string
  technologies: string[]
  hasDeploy: boolean
  deployPath?: string
  repositoryPath: string
}

export function Project(props: ProjectProps) {
  const styledIcon = 'hover:text-amber-300 duration-500 cursor-pointer'

  return (
    <div className="flex w-full transform-gpu flex-col rounded-sm bg-zinc-800 p-6 transition-transform duration-500 hover:scale-105">
      <div className="flex justify-between">
        <h2 className="font-bold">{props.title}</h2>
        <span className="flex items-center gap-4 text-3xl">
          <a href={props.repositoryPath} target="blank">
            <FiGithub className={styledIcon} />
          </a>
          {props.hasDeploy && (
            <a href={props.deployPath} target="blank">
              <BsBoxArrowUpRight className={`${styledIcon} mb-1`} />
            </a>
          )}
        </span>
      </div>
      <p className="py-7 text-sm text-zinc-500">{props.description}</p>
      <span className="flex w-full justify-center border-t border-zinc-700 py-3"></span>
      <ul className="flex flex-wrap gap-4 text-sm ">
        {props.technologies?.map((tech) => (
          <li className="rounded-sm border border-amber-300 px-2 py-0.5 text-amber-300" key={tech}>
            {tech}
          </li>
        ))}
      </ul>
    </div>
  )
}
