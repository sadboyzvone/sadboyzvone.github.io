import { VerticalTimelineElement } from "react-vertical-timeline-component";
import styled from "styled-components";
import { Global } from "../../styles/theme";

export const Container = styled.div`
  padding: 2rem;
  padding-bottom: 0;
`;

export const TimelineElement = styled(VerticalTimelineElement)`
  font-family: ${Global.fonts.fontFamily};
  & > div > h3 > a {
    transition: all 300ms ease;
    will-change: color, background-color;
    text-decoration: none;
    color: ${Global.colors.text.primary};
    font-weight: 200;
    border: 1px solid ${Global.colors.text.primary};
    display: block;
    padding: 0.25rem;
    width: max-content;
    margin-bottom: 0.5rem;
    &:hover {
      background-color: ${Global.colors.text.primary};
      color: ${Global.colors.background.primary};
    }
  }
  & > div > p {
    margin-top: 0.5rem;
    font-weight: 400;

    & > img {
      width: 100%;
    }

    & > .technologies {
      display: flex;
      justify-content: center;
      font-size: 3rem;
      border-top: none !important;
      margin: 0 !important;
      padding: 0 !important;
    }

    & > div:last-child {
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 1px solid ${Global.colors.text.primary};
      & > span {
        font-style: italic;
        font-weight: 200;
      }
    }
  }
`;

export const ContactLink = styled.span`
  & > a {
    will-change: background-color, border-bottom-color, color;
    transition: all 300ms ease;
    background-color: ${Global.colors.text.primary};
    color: ${Global.colors.background.primary};
    border-bottom: 1px solid transparent;
    text-decoration: none;

    &:hover {
      background-color: ${Global.colors.background.primary};
      color: ${Global.colors.text.primary};
      border-bottom: 1px solid ${Global.colors.text.primary};
    }
  }
`;

export const TimelineLabel = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  color: ${Global.colors.text.primary};
  font-family: ${Global.fonts.fontFamily};
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 300;

  @media (max-width: 1169px) {
    justify-content: flex-start;
  }
`;
