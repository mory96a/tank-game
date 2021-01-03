import styled from 'styled-components';

const StyledButton = styled.button`
    height: ${props => props.height}px;
    width: ${props => props.width}px;
    background:${props => props.color};
`;

export default StyledButton;