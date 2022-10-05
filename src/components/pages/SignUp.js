// import React from 'react'
// import '../../App.css'

// export default function SignUP() {
//     return <h1>SignUP</h1>
// }

import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function BasicRating() {
  const [value1, setValue1] = React.useState(1);
  const [value2, setValue2] = React.useState(2);
  const [value3, setValue3] = React.useState(3);
  const [value4, setValue4] = React.useState(4);


  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography>Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value1}
        onChange={(event, newValue) => {
          setValue1(newValue);
        }}
      />
      <Typography component="legend">Read only</Typography>
      <Rating name="read-only" value={value2} readOnly onChange={(event, newValue) => {
          setValue2(newValue);
        }}/>
      <Typography component="legend">Disabled</Typography>
      <Rating name="disabled" value={value3} disabled onChange={(event, newValue) => {
          setValue3(newValue);
        }}/>
      <Typography component="legend">No rating given</Typography>
      <Rating name="no-value" value={value4} onChange={(event, newValue) => {
          setValue4(newValue);
        }}/>
    </Box>
  );
}
