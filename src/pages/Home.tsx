import {
  SiPrisma,
  SiNestjs,
  SiFastify,
  SiExpress,
  SiJavascript,
  SiTailwindcss,
} from 'react-icons/si'
import { BiLogoTypescript } from 'react-icons/bi'
import { FaNode, FaReact, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa6'
import { Title } from '../components/Title'
import { NavLink } from 'react-router-dom'

export function Home() {
  const technologies = [
    { name: 'Prisma', technology: <SiPrisma /> },
    { name: 'Nestjs', technology: <SiNestjs /> },
    { name: 'Fastify', technology: <SiFastify /> },
    { name: 'Express', technology: <SiExpress /> },
    { name: 'Javascript', technology: <SiJavascript /> },
    { name: 'Tailwind', technology: <SiTailwindcss /> },
    { name: 'Node', technology: <FaNode /> },
    { name: 'React', technology: <FaReact /> },
  ]

  const linkStyle = `flex items-center justify-center gap-2.5 rounded-sm border border-neutral-200/10 bg-zinc-800 py-2 px-6 text-xl duration-[0.4s] ease-in-out hover:border-amber-300 hover:text-amber-300`

  return (
    <>
      <Title text="hey, I'm Samuel 👋" />
      <div className="flex flex-col gap-7">
        <p>
          A web developer based in Portugal with Brazilian roots. My journey into the world of
          technology began just a year ago, and it has since fostered a deep passion for crafting
          effective web solutions.
        </p>
        <p>
          While my primary focus lies in{' '}
          <span className="whitespace-nowrap rounded-sm border border-neutral-200/10 bg-zinc-800 px-[0.2rem] py-[1px] text-amber-300">
            <BiLogoTypescript className="mb-0.5 inline" /> Typescript
          </span>{' '}
          for back-end, I have a modest understanding of front-end development as well.
        </p>
        <span>Some of the technologies I work with include:</span>
        <ul className="relative my-7 grid w-full grid-cols-4 place-items-center gap-x-11 gap-y-12 min-[480px]:flex min-[480px]:justify-between min-[480px]:gap-0">
          {technologies.map((icon) => (
            <li
              className="group relative flex justify-center rounded-sm border border-neutral-200/10 bg-zinc-800 p-2 text-4xl text-amber-300"
              key={icon.name}
            >
              {icon.technology}
              <span className="invisible absolute top-full mt-2 rounded border border-neutral-200/10 bg-zinc-800 p-1 text-sm group-hover:visible">
                {icon.name}
              </span>
            </li>
          ))}
        </ul>
        <span className="text-xl">You can get in touch with me via:</span>
        <div className="mt-5 flex flex-col flex-wrap gap-10 lg:flex-row">
          <a
            className={linkStyle}
            target="_blank"
            href="https://www.linkedin.com/in/samuel-souza-santos-585b55248/"
          >
            <FaLinkedin className="text-2xl" />
            LinkedIn
          </a>
          <a className={linkStyle} target="_blank" href="https://github.com/samyss-dev">
            <FaGithub className="text-2xl" />
            GitHub
          </a>
          <NavLink className={linkStyle} to="/contact">
            <FaEnvelope className="text-2xl" />
            Email
          </NavLink>
        </div>
      </div>
    </>
  )
}
