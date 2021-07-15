import styled from "styled-components";
import { lighten, shade } from "polished";
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

export const HeadingContainer = styled.div`
  transition: all 300ms ease;
  will-change: color, border-bottom-color;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${Global.colors.text.primary};
  border-bottom: 1px solid ${Global.colors.text.primary};

  &:hover {
    color: ${shade(0.3, Global.colors.text.primary)};
    border-bottom: 1px solid ${shade(0.3, Global.colors.text.primary)};
  }

  @media (max-width: ${Global.breakpoints.sm}px) {
    gap: 2rem;
    font-size: 2rem;
    & > svg {
      transform: scale(2);
    }
  }
`;

export const Heading = styled.h1`
  margin: 0;
  padding: 0;
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
  border-radius: 0.15rem;
  font-weight: 200;
  font-size: 1rem;
  font-family: ${Global.fonts.navigationItem?.fontFamily};
  color: ${Global.colors.background.primary};
  background-color: ${Global.colors.text.primary};

  &:hover {
    color: ${Global.colors.text.primary};
    background-color: ${lighten(0.1, Global.colors.background.primary)};
  }
`;