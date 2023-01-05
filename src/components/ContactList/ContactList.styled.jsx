import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 5px;
  border: 1px solid #dbdbe9;
  border-radius: 4px;
  background-color: aliceblue;
  box-shadow: rgb(0 0 0 / 2%) 0px 1px 3px 0px,
    rgb(27 31 35 / 15%) 0px 0px 0px 1px;
`;
export const ListItem = styled.li`
  font-size: 10px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px;
  width: 100%;
`;
export const ListItemBtn = styled.button`
  border-radius: 50%;
  cursor: pointer;
  color: red;

  border-color: azure;
`;
