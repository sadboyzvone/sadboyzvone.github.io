import styled from "styled-components";
import { Global } from "../../styles/theme";

export const Container = styled.div`
  padding: 2rem;
  border-bottom: 1px solid ${Global.colors.text.primary};
`;

export const AboutLabel = styled.div`
  display: flex;
  flex-direction: column;

  font-family: ${Global.fonts.fontFamily};
  font-size: 3rem;
  font-weight: 300;
  color: ${Global.colors.text.primary};
  & > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  & > span {
    font-size: 2rem;
    font-weight: 100;
  }
`;

export const AboutText = styled.div`
  font-family: ${Global.fonts.fontFamily};
  font-size: 2rem;
  font-weight: 200;
  color: ${Global.colors.text.primary};
  font-style: italic;
`;
