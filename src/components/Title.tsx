type TitleProps = {
  text: string
  style?: string
}
export function Title(props: TitleProps) {
  return <h1 className="mb-10 text-5xl font-bold">{props.text}</h1>
}
