import React from 'react';
import { InsideLabel, OutsideLabel, StyleError, StyledChevron } from './Styled';

import ChevronDown from '@svg/chevron-down.svg';

export interface SelectProps {
  id: string;
  name: string;
  label: string;
  variant: 'outside-label' | 'inside-label';
  status: boolean;
  disabled: boolean;
  value: string;
  placeholder: string;
  required: boolean;
  onChange: () => any;
}

const Select = (props) => {
  const {
    id,
    label,
    name,
    status,
    value,
    placeholder,
    required,
    onChange,
    disabled,
    variant,
    options,
  } = props;

  const idName = name || label.replace(/ /g, '-').toLowerCase();

  const elementSelect = (
    <>
      <select
        id={idName}
        name={idName}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
      >
        <option value="">Selecione</option>
        {options.map((option, index) => {
          return (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
      <StyledChevron>
        <ChevronDown />
      </StyledChevron>
      {status ? <StyleError>{status}</StyleError> : false}
    </>
  );

  const insideBox = (
    <InsideLabel htmlFor={idName}>
      <label htmlFor={idName}>{label}</label>
      <div>{elementSelect}</div>
    </InsideLabel>
  );

  const outside = (
    <OutsideLabel>
      <label htmlFor={idName}>{label}</label>
      {elementSelect}
    </OutsideLabel>
  );

  if (variant === 'outside-label') return outside;
  return insideBox;
};

Select.defaultProps = {
  name: '',
  label: '',
  variant: 'outside-label',
  status: false,
  disabled: false,
  value: '',
  placeholder: '',
  required: false,
  onChange: () => null,
};

export default Select;
export { Select };
