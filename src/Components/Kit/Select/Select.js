import React from 'react';
import StyledSelect from "./Select.styles";

type Props = {
    name: string,
    options: Array,
    handleChange: Function
};

const Select = ({name, options, handleChange, ...restProps}: Props) => {
    return (
        <StyledSelect {...restProps}>
            <label htmlFor={name}>{name} :</label>
            <select name={name} onChange={handleChange} id={name}>
                {
                    options.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))
                }
            </select>
        </StyledSelect>
    );
};

export default Select;