import React, { useState } from 'react';
import { FieldBox, FieldDefault, FieldInvalid } from './Styled';

const Input = React.forwardRef((props, ref) => {
  const {
    label,
    name,
    mask,
    status,
    type,
    value,
    placeholder,
    required,
    onBlur,
    onChange,
    disabled,
    variant,
  } = props;

  const [dinamicType, setDinamicType] = useState(type);
  const isPasswordType = dinamicType === 'password';
  const isDefaultVariant = variant === 'out-label';
  const idName = name || label.replace(/ /g, '-').toLowerCase();

  const toggleEyes = () => setDinamicType(isPasswordType ? 'text' : 'password');

  const buttonEyes = (
    <button type="button" onClick={() => toggleEyes()}>
      {isPasswordType ? <EyesOn /> : <EyesOff />}
    </button>
  );

  const invalid = (
    <FieldInvalid invalidStatus={status} fieldDefault={isDefaultVariant}>
      {status}
    </FieldInvalid>
  );

  const fieldGroup = (
    <>
      <label htmlFor={idName}>{label}</label>
      <div>
        <MaskedInput
          type={dinamicType}
          id={idName}
          name={idName}
          value={value}
          ref={ref || null}
          guide={false}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          autoComplete="on"
          onBlur={onBlur}
          onChange={onChange}
          mask={mask ? inputMask(mask) : mask}
        />
        {type === 'password' ? buttonEyes : false}
      </div>
      {status ? invalid : false}
    </>
  );

  const fieldBox = <FieldBox htmlFor={idName}>{fieldGroup}</FieldBox>;
  const fieldDefault = (
    <FieldDefault disabled={disabled}>{fieldGroup}</FieldDefault>
  );

  return isDefaultVariant ? fieldDefault : fieldBox;
});

Input.defaultProps = {
  label: '',
  variant: 'out-label',
  status: false,
  disabled: false,
  type: 'text',
  value: '',
  mask: [],
  placeholder: '',
  required: false,
  onBlur: (e) => e,
  onChange: (e) => e,
};

export default Input;
export { Input };
