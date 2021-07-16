import styled from "styled-components";
import { Global } from "../../styles/theme";

export const Container = styled.div`
  padding: 2rem;
`;
export const SkillsLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

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

export const SkillIconsContainer = styled.div`
  margin-top: 0.5rem;
  color: ${Global.colors.text.primary};
  font-family: ${Global.fonts.fontFamily};
  font-size: 5rem;
  gap: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-wrap: wrap;
`;

export const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  align-items: center;

  & > span {
    font-size: 0.75rem;
  }
`;
