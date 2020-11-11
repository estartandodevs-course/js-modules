import estartandodevs from "../assets/estartandodevs.png"

export default function Header(props){
  return (`
    <header class="app-header" style="background: ${props.background}">
      <img
        src="${estartandodevs}"
        alt="estartandodevs"
      />
    </header>
  `)
}