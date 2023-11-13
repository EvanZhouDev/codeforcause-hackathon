import Icon from "./components/icon.jsx"

export default function Home() {
  return (
    <>
      <a className="btn btn-filled mx-1">
        <Icon.Outlined name="beaker" />
        Filled
      </a>
      <a className="btn btn-clear mx-1">
        Clear
      </a>
      <a className="btn btn-ghost mx-1">
        <Icon.Outlined name="beaker" />
        Outline
      </a>
      <a className="btn btn-classic mx-1">
        <Icon.Outlined name="beaker" />
        Classic
      </a>
      <a className="btn btn-shadow mx-1">
        <Icon.Outlined name="beaker" />
        Shadow
      </a>
    </>
  )
}
