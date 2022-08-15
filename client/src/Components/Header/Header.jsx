import React, { Component } from "react";
import Button from "@mui/material/Button";
import {
  StyledHeader,
  Nav,
  Logo,
  ImgHeaderContainer,
  HeaderImg,
} from "../../../public/stylesheets/styles.js";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <StyledHeader>
        <Nav>
          <Logo src={require("../../images/logoipsum.png")}></Logo>
        </Nav>
        <ImgHeaderContainer>
          <HeaderImg src="https://images.unsplash.com/photo-1616587896846-496b91f59f1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=60"></HeaderImg>

          <HeaderImg src="https://images.unsplash.com/photo-1634087990018-415aeb951215?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHdvcmtpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60"></HeaderImg>

          <HeaderImg src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHdvcmtwbGFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60"></HeaderImg>
        </ImgHeaderContainer>
      </StyledHeader>
    );
  }
}

export default Header;
