import React from "react";
import { Link } from "react-router-dom";
import {
  LostText,
  NotFoundContentContainer,
  Text,
} from "./NotFoundContentComponents";

function NotFoundContent() {
  return (
    <NotFoundContentContainer>
      <Text>404</Text>
      <Text>Page Not Found</Text>
      <LostText>
        Are you maybe <Link to="/">lost?</Link>
      </LostText>
    </NotFoundContentContainer>
  );
}

export default NotFoundContent;
