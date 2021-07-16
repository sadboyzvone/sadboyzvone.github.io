import { lighten } from "polished";
import styled from "styled-components";
import { Global } from "../../styles/theme";

export const Container = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > a {
    text-decoration: none;
  }

  @media (max-width: ${Global.breakpoints.sm}px) {
    gap: 1rem;
    flex-direction: column;
  }
`;

export const NotFoundContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Text = styled.div`
  -webkit-text-stroke: 1px white;
  color: transparent;
  text-align: center;
  font-size: 5rem;
  font-family: ${Global.fonts.fontFamily};
`;

export const LostText = styled.div`
  font-family: ${Global.fonts.fontFamily};
  color: ${Global.colors.text.primary};
  text-align: center;

  & > a {
    transition: all 300ms ease;
    will-change: color, background-color;
    text-decoration: none;
    background-color: ${Global.colors.text.primary};
    color: ${Global.colors.background.primary};

    &:hover {
      color: ${Global.colors.text.primary};
      background-color: ${lighten(0.1, Global.colors.background.primary)};
    }
  }
`;
