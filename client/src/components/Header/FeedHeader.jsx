import React from 'react';
import Box from '@mui/material/Box'

export default function FeedHeader() {
  return(
    <Box
      sx={{
        width: 95vw,
        height: 0.5em,
      }}
    />
  )
}




const FeedHeader = styled(Row)`
  width: 100vw;
  padding: 5px;
  align-items: flex-end;
  font-size: 14pt;
  font-weight: bold;
  justify-content: center;
`;

const HeaderDivider = styled(Row)`
  width: 95vw;
  height: 0.1em;
  margin: 5px;
  justify-content: center;
  background: linear-gradient(50deg, rgba(119, 201, 212, 0.75), rgba(87, 188, 144, 0.75));
`