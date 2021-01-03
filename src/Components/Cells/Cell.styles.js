import styled from 'styled-components';

const StyledCell = styled.div`
  height: 100%;
  flex:1;
  border: 1px white solid;
  background:${props => props.backgroundColor};
`;

export default StyledCell;