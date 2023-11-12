import { AnalogClock } from './AnalogClock'

export function Footer() {
  return (
    <footer className="flex w-full justify-center border-t border-zinc-700 py-3">
      <div className="flex w-full max-w-2xl items-center justify-between px-10 text-base font-normal">
        <span className="flex items-center gap-2 text-zinc-600/80">Handcrafted by me.</span>
        <span className="flex items-center gap-2 text-zinc-600/80">
          2023
          <AnalogClock />
        </span>
      </div>
    </footer>
  )
}
