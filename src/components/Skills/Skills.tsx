import React from "react";
import {
  DiBootstrap,
  DiDocker,
  DiDrupal,
  DiGitBranch,
  DiJavascript1,
  DiLaravel,
  DiMongodb,
  DiMysql,
  DiNodejsSmall,
  DiPhp,
  DiPostgresql,
  DiReact,
  DiSymfony,
  DiWordpress,
} from "react-icons/di";
import { GiSkills, GiWarpPipe } from "react-icons/gi";
import {
  SiAzurepipelines,
  SiGraphql,
  SiMariadb,
  SiNeo4J,
  SiTypescript,
} from "react-icons/si";
import {
  Container,
  SkillContainer,
  SkillIconsContainer,
  SkillsLabel,
} from "./SkillsComponents";

function Skills() {
  return (
    <Container>
      <SkillsLabel>
        <div>
          <GiSkills />
          <span>Skills:</span>
        </div>
        <span>My skillset includes but is not limited to:</span>
      </SkillsLabel>
      <SkillIconsContainer>
        <SkillContainer>
          <DiJavascript1 />
          <span>JavaScript</span>
        </SkillContainer>
        <SkillContainer>
          <SiTypescript />
          <span>TypeScript</span>
        </SkillContainer>
        <SkillContainer>
          <DiNodejsSmall />
          <span>NodeJS</span>
        </SkillContainer>
        <SkillContainer>
          <DiReact />
          <span>React</span>
        </SkillContainer>
        <SkillContainer>
          <DiBootstrap />
          <span>Bootstrap</span>
        </SkillContainer>
      </SkillIconsContainer>
      <SkillIconsContainer>
        <SkillContainer>
          <DiPhp />
          <span>PHP</span>
        </SkillContainer>
        <SkillContainer>
          <DiDrupal />
          <span>Drupal</span>
        </SkillContainer>
        <SkillContainer>
          <DiWordpress />
          <span>WordPress</span>
        </SkillContainer>
        <SkillContainer>
          <DiLaravel />
          <span>Laravel</span>
        </SkillContainer>
        <SkillContainer>
          <DiSymfony />
          <span>Symfony</span>
        </SkillContainer>
      </SkillIconsContainer>
      <SkillIconsContainer>
        <SkillContainer>
          <DiMysql />
          <span>MySQL / MariaDB</span>
        </SkillContainer>
        <SkillContainer>
          <DiPostgresql />
          <span>PostgreSQL</span>
        </SkillContainer>
        <SkillContainer>
          <DiMongodb />
          <span>MongoDB</span>
        </SkillContainer>
        <SkillContainer>
          <SiNeo4J />
          <span>Neo4J</span>
        </SkillContainer>
        <SkillContainer>
          <SiGraphql />
          <span>GraphQL</span>
        </SkillContainer>
      </SkillIconsContainer>
      <SkillIconsContainer>
        <SkillContainer>
          <DiGitBranch />
          <span>Git</span>
        </SkillContainer>
        <SkillContainer>
          <DiDocker />
          <span>Docker</span>
        </SkillContainer>
        <SkillContainer>
          <GiWarpPipe />
          <span>CI / CD Pipelines</span>
        </SkillContainer>
      </SkillIconsContainer>
    </Container>
  );
}

export default Skills;
