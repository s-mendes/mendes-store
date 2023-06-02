import styled from 'styled-components';

export const MainContainer = styled.nav`
  background-color: #fff;
  height: 40px;
`;

export const MenuContainer = styled.ul`
  display: flex;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 10px;
  align-items: center;
  justify-content: space-between;
  font-size: 0.85rem;
  height: 100%;
`;

export const MainMenu = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  color: #00acb7;
  height: 100%;
  width: 150%;
  list-style: none;
    & svg:first-child {
      font-size: 25px;
    }
    & svg:last-child {
      font-size: 1.3rem;
    }
    &:hover{
      background-color: #00acb7;
      color: #fff;
      cursor: pointer;
      svg {
       color: #fff;
       }
    }
    ::after {
      -webkit-transition: width 0.6s, opacity 0.8s;
      -moz-transition: width 0.6s, opacity 0.8s;
      transition: width 0.6s, opacity 0.8s;
    }
`;

export const Categories = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  color: #757575;
  height: 100%;
  width: 100%;
  list-style: none;
    & svg {
      color: #00acb7;
      font-size: 1.3rem;
    }
    &:hover{
      background-color: #00acb7;
      color: #fff;
      cursor: pointer;
      svg {
       color: #fff;
       transform: translateX(5px);
       -webkit-transition: all 0.3s;
      -o-transition: all 0.3s;
      -ms-transition: all 0.3s;
      -moz-transition: all 0.3s;
      transition: all 0.3s
       }
    }
`;