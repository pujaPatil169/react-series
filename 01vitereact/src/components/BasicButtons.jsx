import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
export default function BasicButtons({bgColor,clickFunc,className,btnText,copyFunc}) {
  return (
    <Stack spacing={2} direction="row">
      {/* <Button variant="text">Text</Button> */}
      {/* <Button className={`${className}`} variant="contained" onClick={()=>{clickFunc(bgColor); copyFunc();}} color='success'style={{backgroundColor:`${bgColor}`}}>{btnText}</Button> */}
      {/* in above line you are writing two functions inside onClick but the copyFunc was not working , it started working when i write like in below line */}
      <Button className={`${className}`} variant="contained" onClick={()=>{ copyFunc();}} color='success'style={{backgroundColor:`${bgColor}`}}>{btnText}</Button>
      {/* <Button variant="outlined" color='primary'>Outlined</Button> */}
    </Stack>
  );
}
