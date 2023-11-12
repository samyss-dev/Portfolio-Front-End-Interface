import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Outlet } from 'react-router-dom'

export function Default() {
  return (
    <div className="flex h-screen flex-col items-center justify-between">
      <div className="w-full max-w-2xl px-10 py-16">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  )
}
