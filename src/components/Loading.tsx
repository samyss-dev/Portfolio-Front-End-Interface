export function Loading() {
  const divStyle = 'h-[12.813rem] max-w-[37rem] rounded-sm bg-zinc-800'

  return (
    <div className="flex animate-pulse flex-col gap-8">
      <div className={divStyle}></div>
      <div className={divStyle}></div>
      <div className={divStyle}></div>
    </div>
  )
}
