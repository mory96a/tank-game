import styled from 'styled-components';

const StyledFight = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledPlayersContainer = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px black solid;
`;

export const StyledContainer = styled.div`
  display: flex;  
  width: 90vw;
  height: 80vh;
  margin-top: 2vh;
  border: 4px green solid;
`;

export default StyledFight;
