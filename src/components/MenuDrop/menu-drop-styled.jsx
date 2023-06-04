import styled from 'styled-components';

export const Menu = styled.div`
  color: #757575;
  display: flex;
  justify-content: space-between;
  a {
    text-decoration: none;
    color: #757575
  }
  a:hover {
    color: #00acb7;
  }
  @media screen and (max-width: 1130px) {
      display: none;
      pointer-events: none;
    }
`;

export const Menu1 = styled.div`
  border-right: 1px solid #e9eae9;
  width: 100%;
  &>ul{
    list-style: none;
    padding: 10px 0 0 10px;
    font-size: 0.9rem;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;

export const Title = styled.span`
  font-weight: 600;
  width: 100%;
  &>span {
    color: #00acb7;
  }
`;

export const Menu2 = styled.div`
  border-right: 1px solid #e9eae9;
  width: 100%;
  padding-left: 20px;
  &>ul{
    list-style: none;
    padding: 10px 0 0 10px;
    font-size: 0.9rem;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;

export const Menu3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 300%;
  padding-left: 20px;
  & ul{
    list-style: none;
    padding: 10px 0 0 10px;
    font-size: 0.9rem;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  &>div{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

