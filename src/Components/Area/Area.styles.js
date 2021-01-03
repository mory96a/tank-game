import styled from 'styled-components';

const StyledArea = styled.div`
  width: 50%;
  height: 100%;
  border-${props => props.side.border}: 1px red solid;
  display: flex;
  flex-direction: column
`;

export const Row = styled.div`
  width: 100%;
  height: 2%;
  display: flex; 
`;

export default StyledArea;