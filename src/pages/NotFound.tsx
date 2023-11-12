import { PiSmileySadThin } from 'react-icons/pi'

export function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-12 px-4 text-zinc-300/90">
      <PiSmileySadThin className="text-[12rem] text-amber-300 lg:text-[18rem]" />
      <div className="flex flex-col items-center gap-12">
        <span className="text-[5rem] font-thin lg:text-[7rem]">404</span>
        <span className="ml-1 text-base text-zinc-500/80 lg:text-xl">Page Not Found</span>
      </div>
      <div>
        <p className="text-center text-sm lg:text-base">
          The page you are looking for might have been removed, had its name changed, or is
        </p>
        <p className="text-center text-sm lg:text-base">
          temporarily unavailable. Please check the URL or go back to the{' '}
          <a href="/" className="text-amber-300">
            homepage
          </a>
          .
        </p>
      </div>
    </div>
  )
}
