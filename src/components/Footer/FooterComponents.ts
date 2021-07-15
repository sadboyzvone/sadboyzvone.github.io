import { shade } from "polished";
import styled from "styled-components";
import { Global } from "../../styles/theme";

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${Global.colors.text.primary};
  font-family: ${Global.fonts.fontFamily};
`;

export const CopyrightInformation = styled.div``;

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
