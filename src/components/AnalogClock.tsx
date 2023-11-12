import { useState, useEffect } from 'react'

export function AnalogClock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  const getTimeWithOffset = (offset: number) => {
    const localTime = new Date(time.getTime() + offset * 3600000)
    return localTime
  }

  const localTime = getTimeWithOffset(0)
  const seconds = localTime.getSeconds()
  const minutes = localTime.getMinutes()
  const hours = localTime.getHours()

  const secondStyle = {
    transform: `rotate(${seconds * 6}deg)`,
  }

  const minuteStyle = {
    transform: `rotate(${minutes * 6}deg)`,
  }

  const hourStyle = {
    transform: `rotate(${hours * 30 + minutes * 0.5}deg)`,
  }

  return (
    <div className="flex scale-x-[-1] scale-y-[-1] transform items-center justify-center">
      <div className="relative h-6 w-6 rounded-full border border-zinc-600">
        <div
          className="absolute left-1/2 top-1/2 h-[5px] w-[0.4px] origin-top -translate-x-1/2 -translate-y-1/2 transform bg-zinc-600"
          style={hourStyle}
        ></div>
        <div
          className="absolute left-1/2 top-1/2 h-[7px] w-[0.4px] origin-top -translate-x-1/2 -translate-y-1/2 transform bg-zinc-600"
          style={minuteStyle}
        ></div>
        <div
          className="absolute left-1/2 top-1/2 h-[8px] w-[0.2px] origin-top -translate-x-1/2 -translate-y-1/2 transform bg-amber-300"
          style={secondStyle}
        ></div>
        <div className="absolute left-1/2 top-1/2 h-[1px] w-[1px] origin-top -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-amber-300"></div>
      </div>
    </div>
  )
}
