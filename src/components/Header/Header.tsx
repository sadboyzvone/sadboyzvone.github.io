import React from "react";
import {
  Container,
  Heading,
  HeadingContainer,
  NavigationItem,
  NavigationItemGroup,
} from "./HeaderComponents";
import { GiSpiderWeb } from "react-icons/gi";
import { Link } from "react-router-dom";
function Header() {
  return (
    <Container>
      <Link to="/">
        <HeadingContainer>
          <GiSpiderWeb size="2rem" />
          <Heading>Zvonimir Rudinski</Heading>
        </HeadingContainer>
      </Link>

      <NavigationItemGroup>
        <Link to="/projects">
          <NavigationItem>Projects</NavigationItem>
        </Link>
        <Link to="/about">
          <NavigationItem>About</NavigationItem>
        </Link>
        <Link to="/contact">
          <NavigationItem>Contact</NavigationItem>
        </Link>
      </NavigationItemGroup>
    </Container>
  );
}

export default Header;
