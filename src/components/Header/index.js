import "./header.css"


export function Header(props) {
  return `
    <header class="header-container ${props.class}">
      <img src="${props.imgSrc}" alt="qq" />
    </header>
  `
}