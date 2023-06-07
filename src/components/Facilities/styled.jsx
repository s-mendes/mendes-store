import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  &>div{
    margin: 30px 20px 10px 20px;
    padding: 12px;
    background-color: #fff;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
    color: #757575;
    border-radius: 8px;
    overflow-x: auto;
    ::-webkit-scrollbar {
        display: none;
    }
  }
  &>div>div{
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .description{
    width: 120px;
    font-size: 14px;
    font-weight: 400;
  }
  svg{
    font-size: 2rem;
  }
  .container::-webkit-scrollbar-track {
      /* Estilo da trilha do scrollbar */
    }

    .container::-webkit-scrollbar-thumb {
      /* Estilo do polegar do scrollbar */
    }

    .container::-webkit-scrollbar-thumb:hover {
      /* Estilo do polegar do scrollbar quando o mouse está em cima */
    }

    .container::-webkit-scrollbar-corner {
      /* Estilo do canto do scrollbar (apenas se necessário) */
    }
`;
