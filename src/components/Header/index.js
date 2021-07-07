import "./style.css";

export function Header(props) {
    return `
    <header class="header-container ${props.class}">
        ${props.title}
    </header>
`
}