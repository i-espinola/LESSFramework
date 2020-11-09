import React, { useState } from 'react';

import { FieldBox, FieldDefault } from './Styled';

import EyesOff from '@svg/eyes-hidden.svg';
import EyesOn from '@svg';
import { Context } from '@context';

export interface InputProps {
  label: string;
  id: string;
  name: string;
  type: 'text' | 'number' | 'date' | 'email' | 'tel';
  value: string;
  placeholder: string;
  required: boolean;
  disabled: boolean;
  autoComplete: 'on' | 'off';
  variant: 'out-label' | 'in-label';
  onBlur?: (event: React.SyntheticEvent<HTMLElement>) => void;
  onChange: (event: React.SyntheticEvent<HTMLElement>) => void;
}

const Input = (props, ref) => {
  const {
    label,
    id,
    name,
    type,
    value,
    placeholder,
    required,
    disabled,
    autoComplete,
    variant,
    onBlur,
    onChange,
  } = props;

  const [dinamicType, setDinamicType] = useState(type);
  const isPasswordType = dinamicType === 'password';

  const toggleEyes = () => setDinamicType(isPasswordType ? 'text' : 'password');

  const buttonEyes = (
    <button type="button" onClick={toggleEyes}>
      {isPasswordType ? <EyesOn /> : <EyesOff />}
    </button>
  );

  const fieldGroup = (
    <>
      <label htmlFor={name}>{label}</label>
      <div>
        <input
          type={dinamicType}
          id={id || name}
          name={name}
          value={value}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          autoComplete={autoComplete}
          onBlur={onBlur}
          onChange={onChange}
        />
        {type === 'password' ? buttonEyes : false}
      </div>
    </>
  );

  const labelIn = <FieldBox htmlFor={name}>{fieldGroup}</FieldBox>;
  const labelOut = <FieldDefault>{fieldGroup}</FieldDefault>;

  return variant === 'out-label' ? labelOut : labelIn;
};

Input.defaultProps = {
  label: '',
  id: '',
  name: '',
  type: 'text',
  value: '',
  placeholder: '',
  required: false,
  disabled: false,
  autoComplete: 'on',
  variant: 'out-label',
  onBlur: (e) => e,
  onChange: (e) => e,
};

export default Input;
export { Input };
