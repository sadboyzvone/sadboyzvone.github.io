import styled from "styled-components";
import { Global } from "../../styles/theme";

export const Container = styled.div``;

export const CtaContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  @media (max-width: ${Global.breakpoints.sm}px) {
    transform: translate(-50%, -25%);
  }
`;

export const CtaText = styled.div`
  font-family: ${Global.fonts.fontFamily};
  font-size: 3rem;
  text-align: center;
  color: ${Global.colors.text.primary};
`;

export const CtaButton = styled.div`
  font-family: ${Global.fonts.fontFamily};
  text-align: center;
  font-size: 2rem;
  font-weight: 200;
  padding-top: 2rem;

  & > a {
    transition: all 300ms ease;
    will-change: color, background-color;
    padding: 1rem;

    color: ${Global.colors.text.primary};
    background-color: transparent;
    border: 1px solid ${Global.colors.text.primary};

    text-decoration: none;

    &:hover {
      color: ${Global.colors.background.primary};
      background-color: ${Global.colors.text.primary};
    }
  }
`;
