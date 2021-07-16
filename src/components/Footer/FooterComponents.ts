import { shade } from "polished";
import styled from "styled-components";
import { Global } from "../../styles/theme";

export const Container = styled.div`
  border-top: 1px solid ${Global.colors.text.primary};
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

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${Global.colors.text.primary};
  font-family: ${Global.fonts.fontFamily};
`;

export const CopyrightInformation = styled.div`
  font-size: 1rem;

  @media (max-width: ${Global.breakpoints.sm}px) {
    font-size: 0.5rem;
  }
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const SocialMediaLink = styled.a`
  color: ${Global.colors.text.primary};

  &:hover {
    color: ${shade(0.3, Global.colors.text.primary)};
  }
`;
