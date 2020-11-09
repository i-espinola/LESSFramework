import React from 'react';
import { SwitchStyle } from './Styled';

export interface CheckboxProps {
  id?: string;
  name: string;
  value: boolean;
  onBlur?: (event: React.SyntheticEvent<HTMLElement>) => void;
  onChange: (event: React.SyntheticEvent<HTMLElement>) => void;
}

const Switch = (props: CheckboxProps) => {
  const { id, name, value, onBlur, onChange } = props;

  return (
    <SwitchStyle htmlFor={name}>
      <input
        id={id || name}
        name={name}
        checked={value}
        onBlur={onBlur}
        onChange={onChange}
        type="checkbox"
      />
      <span />
    </SwitchStyle>
  );
};

Switch.defaultProps = {
  id: '',
  name: '',
  value: false,
  onBlur: (e) => e,
  onChange: (e) => e,
};

export default Switch;
export { Switch };
