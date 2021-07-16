import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { GiMedicines, GiWhiteBook, GiHourglass } from "react-icons/gi";
import { DiDrupal, DiNodejsSmall, DiCode } from "react-icons/di";
import {
  ContactLink,
  Container,
  TimelineLabel,
} from "./WorkTimelineComponents";
import WorkTimelineElement from "./WorkTimelineElement";
import { Link } from "react-router-dom";

function WorkTimeline() {
  return (
    <Container>
      <TimelineLabel>
        <GiHourglass />
        <span>Timeline:</span>
      </TimelineLabel>
      <VerticalTimeline>
        <WorkTimelineElement
          date={"2016 - Present"}
          title={"Freelance Web Developer"}
          description={
            <>
              Utilizing modern approaches I'm able to increase your web presence
              efficiently and quickly. If this something you want, don't be
              afraid to{" "}
              <ContactLink>
                <Link to="/contact">contact me</Link>
              </ContactLink>
              .
            </>
          }
          icon={<DiCode />}
        />
        <WorkTimelineElement
          date={"2021 - Present"}
          title={"Software Developer"}
          subtitle={"Noubis d.o.o"}
          description={
            "I've worked on multiple complex projects which utilized modern techniques and methods to create high-performance applications which scale."
          }
          icon={<DiNodejsSmall />}
        />
        <WorkTimelineElement
          date={"2019 - 2021"}
          title={"Private Tutor"}
          description={
            "I've been teaching programming to high school and college students who were struggling with the curriculum which included multiple programming languages like JavaScript, C#, C++ etc."
          }
          icon={<GiWhiteBook />}
        />
        <WorkTimelineElement
          date={"2019 - 2020"}
          title={"Backend Web Developer"}
          subtitle={"Studio Present"}
          description={
            "I was working on multiple Drupal 7 and Drupal 8 projects. My responsibilities included: fixing bugs, developing new complex modules and features as well as site-building."
          }
          icon={<DiDrupal />}
        />
        <WorkTimelineElement
          date={"2017 - 2019"}
          title={"Software Engineer"}
          subtitle={"Cardio-Phoenix Inc."}
          description={
            "I've been tasked with working on a medical software that communicates with a device called Cardio Tri-Test that helps doctors diagnose heart problems. These include both fixing the old version and adding new features so that the software can be approved by the FDA."
          }
          icon={<GiMedicines />}
        />
      </VerticalTimeline>
    </Container>
  );
}

export default WorkTimeline;
