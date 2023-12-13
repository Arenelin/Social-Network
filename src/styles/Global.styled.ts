import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *,
    *:before,
    *:after {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        border: 0;
    }


    body {
        margin: 0;
        font-family: 'Poppins', -apple-system, BlinkMacSystemfont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #000000;
        line-height: 1.2;
        font-weight: 400;
        min-width: 360px;
        font-size: 14px;
    }

    nav, footer, header, aside {
        display: block;
    }

    html, body {
        height: 100%;
        width: 100%;
        font-style: 100%;
        -ms-text-size-adjust: 100%;
        -moz-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
    }

    button {
        cursor: pointer;
        background-color: unset;
        border: none;
        color: #000000;
    }

    button::-moz-focus-inner {
        padding: 0;
        border: 0;
    }

    a {
        text-decoration: none;
        color: #000000;
        cursor: pointer;
    }

    a:hover, a:visited {
        text-decoration: none;
    }

    ul li {
        list-style-type: none;
    }
`