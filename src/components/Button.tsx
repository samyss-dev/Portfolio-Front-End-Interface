import { FaSpinner } from 'react-icons/fa6'
import { BiSolidPaperPlane } from 'react-icons/bi'

interface ButtonProps {
  isLoading: boolean
}

export function Button({ isLoading }: ButtonProps) {
  const style = 'hover:border-amber-300 hover:text-amber-300 cursor-default'

  return (
    <button
      type="submit"
      className={`flex items-center justify-center gap-2.5 rounded-sm border border-neutral-200/10 bg-zinc-800 px-6 py-2 text-xl duration-[0.4s] ease-in-out ${
        !isLoading ? style : null
      }`}
    >
      {!isLoading && <BiSolidPaperPlane />}
      {isLoading && <FaSpinner className="animate-spin" />}
      {isLoading ? 'Submitting...' : 'Submit'}
    </button>
  )
}
