import styled from "styled-components";
import { Global } from "../../styles/theme";

export const Body = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  background-color: ${Global.colors.background.primary};

  & > :nth-child(2) {
    flex: 1 auto;
    & > :first-child {
      height: 100%;
    }
  }

  & > :last-child {
    flex-shrink: 0;
  }
`;
