'use client'


import React, { useState } from 'react';
// import Slider from 'react-slider';
import {ReactSlider} from 'react-slider';

const SliderComponent = ({ min, max, defaultValue, onChange }) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (newValue) => {
    setValue(newValue);
    onChange(newValue); // Call the provided onChange handler
  };

  return (
    <ReactSlider
      min={min}
      max={max}
      className="slider" // Add your custom class for styling (optional)
      thumbClassName="slider-thumb" // Add your custom class for thumb styling (optional)
      trackClassName="slider-track" // Add your custom class for track styling (optional)
      value={value}
      onChange={handleChange}
    />
  );
};

export default SliderComponent;
