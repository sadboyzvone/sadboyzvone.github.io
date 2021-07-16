import React from "react";
import PropTypes from "prop-types";
import { TimelineElement } from "./WorkTimelineComponents";
import { WorkTimeline } from "./WorkTimelineTypes";
import { Global } from "../../styles/theme";

function WorkTimelineElement({
  date,
  title,
  subtitle,
  description,
  icon,
}: WorkTimeline) {
  return (
    <TimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: Global.colors.background.primary,
        color: Global.colors.text.primary,
        border: `1px solid ${Global.colors.text.primary}`,
      }}
      contentArrowStyle={{
        borderRight: `7px solid ${Global.colors.text.primary}`,
      }}
      date={date}
      icon={icon}
      iconStyle={{
        background: Global.colors.background.primary,
        color: Global.colors.text.primary,
      }}
    >
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
      <p>{description}</p>
    </TimelineElement>
  );
}

WorkTimelineElement.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.any.isRequired,
  date: PropTypes.string.isRequired,
  icon: PropTypes.any,
};

export default WorkTimelineElement;
