import styled from "styled-components";
import { Global } from "../../styles/theme";

export const Body = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  background-color: ${Global.colors.background.primary};

  & > :nth-child(2) {
    display: flex;
    flex: 1 auto;
    align-items: center;

    & > :first-child {
      height: 100%;
      width: 100%;
    }
  }

  & #tsparticles {
    display: flex;
    align-items: center;

    height: 100%;

    & > canvas {
      max-height: calc(100vh - 200px);
    }
  }

  & > :last-child {
    flex-shrink: 0;
  }
`;
