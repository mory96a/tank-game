import React from "react";
import StyledInput from "./FormInput.styles";

type Props = {
  type: string,
  name: string,
  value?: string,
  label?: string,
  handleChange: Function
};

const Input = ({ type, name, value, label, handleChange, ...restProps }: Props) => {
  return (
      <StyledInput {...restProps}>
        <input
            type={type}
            name={name}
            value={value}
            onChange={handleChange}
            required
        />
        {
          label ?
              <label className={`${value.length ? 'shrink' : ''} label`}>
                {label}
              </label>
              : null
        }
      </StyledInput>
  );
};

export default Input;
