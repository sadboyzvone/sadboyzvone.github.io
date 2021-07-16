import styled from "styled-components";
import { shade } from "polished";
import { Global } from "../../styles/theme";

export const Container = styled.div`
  border-bottom: 1px solid ${Global.colors.text.primary};
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

export const HeadingContainer = styled.div`
  transition: all 300ms ease;
  will-change: color, border-bottom-color;
  display: flex;
  align-items: center;
  font-size: 1.75rem;
  gap: 1rem;
  color: ${Global.colors.text.primary};

  & > svg {
    stroke-width: 10;
    fill: none;
    stroke: ${Global.colors.text.primary};
    transform: scale(1.5);
  }

  &:hover {
    color: ${shade(0.3, Global.colors.text.primary)};
    border-bottom: 1px solid ${shade(0.3, Global.colors.text.primary)};
  }

  @media (max-width: ${Global.breakpoints.sm}px) {
    gap: 2rem;
    font-size: 1.5rem;
  }
`;

export const Heading = styled.h1`
  margin: 0;
  padding: 0;
  color: transparent;
  -webkit-text-stroke: 1px white;

  font-family: ${Global.fonts.heading?.fontFamily};
`;

export const NavigationItemGroup = styled.div`
  display: flex;
  gap: 1rem;
  & > a {
    text-decoration: none;
  }
`;

export const NavigationItem = styled.div`
  transition: all 300ms ease;
  will-change: color, background-color;
  padding: 0.5rem;
  font-weight: 200;
  font-size: 1rem;
  font-family: ${Global.fonts.navigationItem?.fontFamily};

  color: ${Global.colors.text.primary};
  background-color: transparent;
  border: 1px solid ${Global.colors.text.primary};

  &:hover {
    color: ${Global.colors.background.primary};
    background-color: ${Global.colors.text.primary};
  }
`;
