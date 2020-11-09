import React, { useState } from 'react';
import { RangeContainer, RangeNumber, RangeSlider } from './Styled';

export interface RangeProps {
  id: string;
  name: string;
  value: number;
  valueDefault?: number;
  min: number;
  max: number;
  step: number;
  onChange: (number: number) => void;
  onBlur?: (event: React.SyntheticEvent<HTMLElement>) => void;
}

const Range = (props: RangeProps) => {
  const { id, name, valueDefault, min, max, step } = props;
  const [value, setValue] = useState(valueDefault || props.value);
  const handleOnBlur = props.onBlur || undefined;

  const handleChange = (e) => {
    e.preventDefault();

    let val: number = Number(e.target.value);
    if (val < min || !val) val = min;
    else if (val > max) val = max;
    const str = val.toString();
    setValue(val);
    props.onChange(val);
  };

  return (
    <RangeContainer>
      <RangeSlider theme={{}}>
        <input
          type="range"
          id={`${id}_rangeSlider`}
          name={`${name}_rangeSlider`}
          min={min}
          max={max}
          value={value}
          step={step}
          onChange={handleChange}
          onBlur={handleOnBlur}
        ></input>
      </RangeSlider>
      <RangeNumber>
        <input
          type="number"
          id={`${id}_inputNumber`}
          name={`${name}_inputNumber`}
          min={min}
          max={max}
          value={value}
          step={step}
          onChange={handleChange}
          onBlur={handleOnBlur}
        />
      </RangeNumber>
    </RangeContainer>
  );
};

Range.defaultProps = {
  id: '',
  name: '',
  step: 1,
  value: 50,
  min: 0,
  max: 100,
  valueDefault: 0,
};

export default Range;
export { Range };
