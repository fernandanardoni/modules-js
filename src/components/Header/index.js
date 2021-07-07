import "./style.css";


export function Header(props) {
    return `
    <header class="header-container ${props.class}">
        <img src="${props.img}"/>
        ${props.title}
    </header>
`
}