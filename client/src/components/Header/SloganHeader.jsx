import React from "react";
import Box from "@mui/material/Box";
import { Row } from "../../../public/stylesheets/styles.js";
import styled from "styled-components";
// import url("https://fonts.googleapis.com/css?family=Raleway:200");

export default function SloganHeader() {
  return (
    <SloganHeaderStyle>
      <h1> Your New Career Awaits You...</h1>
    </SloganHeaderStyle>
  );
}

// const FeedHeader = styled(Row)`
//   width: 100vw;
//   padding: 5px;
//   align-items: flex-end;
//   font-size: 14pt;
//   font-weight: bold;
//   justify-content: center;
// `;

const SloganHeaderStyle = styled(Row)`
  width: 100vw;
  height: 5em;
  margin: 5px;
  justify-content: center;
  background: linear-gradient(
    30deg,
    rgba(119, 201, 212, 0.75),
    rgba(87, 188, 144, 0.75)
  );
  align-items: flex-end;
  font-size: 14pt;
  font-weight: light;
  justify-content: center;
  color: black;
  font-family: "Helvetica";
`;
