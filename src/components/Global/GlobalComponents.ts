import styled from "styled-components";
import { Global } from "../../styles/theme";

export const PageContainer = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  height: calc(100vh - 168px) !important;

  @media (max-width: ${Global.breakpoints.sm}px) {
    height: calc(100vh - 212px) !important;
  }
`;

export const Body = styled.div`
  min-height: 100vh;

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
