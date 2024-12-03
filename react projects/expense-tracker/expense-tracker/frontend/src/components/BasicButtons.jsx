import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
export default function BasicButtons({bgColor,clickFunc,className}) {
  return (
    <Stack spacing={2} direction="row">
      {/* <Button variant="text">Text</Button> */}
      <Button className={`${className}`} variant="contained" onClick={()=>clickFunc(bgColor)} color='success'style={{backgroundColor:`${bgColor}`}}>Contained</Button>
      {/* <Button variant="outlined" color='primary'>Outlined</Button> */}
    </Stack>
  );
}
