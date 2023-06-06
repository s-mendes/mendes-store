import styled from 'styled-components';

export const MainContainer = styled.nav`
  background-color: #fff;
  position: relative;
  height: 40px;
  z-index: 5;
  border-bottom: 1px solid #e9eae9;
  @media screen and (max-width: 1130px) {
      display: none;
      pointer-events: none;
    }
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

export const DropdownMenu = styled.div`
  position: absolute;
  z-index: 2;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.1);
  /* color: #757575; */
  width: 100%;
  opacity: 0;
  transform: translateY(-200px);
  -webkit-transition: all 0.3s ;
  -o-transition: all 0.3s ;
  -ms-transition: all 0.3s ;
  -moz-transition: all 0.3s ;
  transition: all 0.3s;
  &>div {
    max-width: 1100px;
    margin: 0 auto;
    padding: 20px 10px;
  }
  ${ ({ menuIsVisible }) =>  menuIsVisible && `
        opacity: 1;
        transform: translateY(0px);
    `}
`;
