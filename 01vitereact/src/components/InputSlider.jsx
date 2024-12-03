import * as React from 'react';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import VolumeUp from '@mui/icons-material/VolumeUp';

const Input = styled(MuiInput)`
  width: 42px;
`;

export default function InputSlider({handleChangeInParent}) {
  const [value, setValue] = React.useState(4);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? 0 : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  React.useEffect(()=>{
    handleChangeInParent(value)
  },[value])

  return (
    <Box sx={{ width: 250 }}>
      <Typography id="input-slider" gutterBottom>
        Length
      </Typography>
      <Grid container spacing={2} sx={{ alignItems: 'center' }}>
        <Grid item>
          <VolumeUp />
        </Grid>
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            min={4}
            max={10}
            step={1}
          />
        </Grid>
        <Grid item>
          <Input
            value={value}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: 4,
              max: 10,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}


//--------------------second argument newValue automatically passed------------

// In React, when using a Slider component, the onChange event handler typically receives two arguments:

// The event object (first argument) — This contains details about the event that triggered the change, such as event.target or event.currentTarget.
// The new value (second argument) — This is the updated value of the slider after the user moves it. This value is passed automatically by the Slider component.
// If you're not seeing the second argument in your handler function, it's likely due to one of the following reasons:

// Arrow Function Used Inside onChange: If you use an arrow function or a regular function in your onChange handler, make sure it includes the second argument. Here's an example:

// jsx
// Copy code
// const handleSliderChange = (event, newValue) => {
//   setValue(newValue); // 'newValue' is the second argument
// };
// Destructuring or Syntax Issue: If you're not explicitly showing the second argument in the function signature, ensure your syntax is correct. For example, if you're omitting it or destructuring incorrectly, React might not pass it as expected.

// Different Slider Component: Some custom sliders might not pass the second argument by default, so check the documentation to ensure it supports the expected behavior.

// Solution Example:
// jsx
// Copy code
// <Slider
//   value={value}
//   onChange={(event, newValue) => setValue(newValue)}  // newValue is automatically passed here
// />