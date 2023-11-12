import { NavLink } from 'react-router-dom'

export function Header() {
  const navLinks = [
    { text: 'home', path: '/' },
    { text: 'work', path: '/work' },
    { text: 'contact', path: '/contact' },
  ]

  return (
    <header className="mb-16">
      <nav>
        <ul className="flex gap-10">
          {navLinks.map((link) => (
            <li className="text-2xl text-zinc-300/90" key={link.path}>
              <NavLink to={link.path}>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
