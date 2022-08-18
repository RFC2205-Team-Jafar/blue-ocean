/*========== EXTERNAL MODULES ==========*/
import styled, {createGlobalStyle} from 'styled-components';
import AppBar from '@mui/material/AppBar';

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
  color: #171816;
  max-width: 1440px;
  /* background-color: #414141; */
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

export const NavBar = styled(AppBar)({
  backgroundColor: 'transparent',
  '&:hover': {
    color: '#fff',
    backgroundColor:'#f44336',
    borderColor:'#f44336',
  },
});

export const ImgGalleryContainer = styled.div`
  width:33%
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const Footer = styled.footer`
`;

export const FeedSection = styled.section`
  display: flex;
  width: 90vw;
  max-width: 1440px;
  flex-direction: column;
  align-items: space-between;
  background: linear-gradient(50deg, rgba(119, 201, 212, 0.75), rgba(87, 188, 144, 0.75));
  overflow: scroll;
  border-radius: 10px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

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
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ButtonTray = styled(Row)`
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
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

export const ButtonBox = styled(Column)`
  top: 15px;
  right: 10px;
  position: absolute;
`;

export const JobPosting = styled(Column)`
  background-color: #fcfaf5;
  border: solid thin transparent;
  margin: 10px;
  padding: 10px;
  min-height: 12em;
  max-height: 20em;
  overflow: clip;
  border-radius: 10px;
  box-shadow:  5px 5px 3px #84c9b7,
           -5px -5px 3px #90d9c7;
  &:hover {
    border: solid thin #171816;
    box-shadow:  6px 6px 12px #84c9b7,
           -6px -6px 12px #90d9c7;
  }
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

