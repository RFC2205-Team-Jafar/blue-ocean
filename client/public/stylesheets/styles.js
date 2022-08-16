/*========== EXTERNAL MODULES ==========*/
import styled, {createGlobalStyle} from 'styled-components';

/*========== INTERNAL MODULES ==========*/



/*========== EXPORTS ==========*/

/*
=====================================
                THEMES
=====================================
*/

export const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  background-color: #414141;
}
`;

/*
=====================================
                TEXT
=====================================
*/

export const P = styled.p``;

/*
=====================================
                BUTTONS
=====================================
*/

export const Button = styled.button``;

/*
=====================================
                DIVS
=====================================
*/

export const modalBG = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const StyledHeader = styled.header`
  background-color: #ebfbff;
  padding: 40px 0;
`;

export const ImgGalleryContainer = styled.div`
  width:33%
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const Footer = styled.footer``

;

export const Page = styled.div`
  display:flex;
  flex-direction:column;
  align-items: center;
`;

export const Container = styled.div`

`;

export const Div = styled.div``;

export const Column = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-items: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const ButtonGroup = styled.div`
  display:flex;
  margin: 10px;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

/*
=====================================
                FORMS
=====================================
*/

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

/*
=====================================
                INPUTS
=====================================
*/

export const Input = styled.input`
  border: solid;
  border-width: thin;
  border-top: none;
  border-left: none;
  border-right: none;
  outline: none;
  font-size: 12pt;
  font-weight: light;
  background-color: transparent;
  width: 10em;
  padding: 2px;
  margin: 10px;
  text-align: center;
`;

/*
=====================================
                IMAGES
=====================================
*/

export const Logo = styled.img``;

export const HeaderImg = styled.img`
  width: auto;
  height: 250px;
`

export const Img = styled.img``;

export const Thumbnail = styled.img``;
