import styled from 'styled-components';

const StyledInput = styled.div`
 
    margin: 40px 10px;
    position: relative;
    
    input {
       border: none;
       border-bottom: 1px black solid;
       background: none;
       font-size: 18px;
       position:relative;
       padding: 10px 10px 10px 5px;
       width: 100%;
       &:focus {
           outline: none;
       }
       &:focus ~ .label{
        top: -20px;
        font-size: 14px;
       }
    }
    .label {
      position: absolute; 
      left: 5px;
      top: 8px;
      transition: 300ms ease all;
    }
    .shrink {
       top: -20px;
       font-size: 14px;
    }
`;

export default StyledInput;