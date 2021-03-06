import styled from "styled-components";
import { Global } from "../../styles/theme";

export const PageContainer = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  height: calc(100vh - 168px) !important;
  scrollbar-color: #33333391 transparent;
  scrollbar-width: thin;

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

    height: calc(100vh - 172px);

    @media (max-width: ${Global.breakpoints.sm}px) {
      height: calc(100vh - 274px) !important;
    }

    & > canvas {
      height: 100%;
    }
  }

  & > :last-child {
    flex-shrink: 0;
  }
`;
