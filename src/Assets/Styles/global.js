import { createGlobalStyle } from "styled-components"

export const GLobalStyled = createGlobalStyle`
    *{
margin: 0;
padding: 0;
border: 0;
text-decoration: none;
list-style: none;
box-sizing: border-box;
}
:root{
        --primary-1: #83ad93;
        --primary-2: #aecfba;
        --secondary-1:#fcb1a7;
        --secondary-2: #ffdacc;
        --light-1:#ffff;
        --light-2: #FFEEE6;
        --light-3: #edebe8;
        --dark-1: #212121;
        --dark-2: #595959;
        --danger: #ff8989;
        --success:#beff9f;
        --font-inter:'Inter', sans-serif;
        --font-barlow:'Barlow', sans-serif
    }


`