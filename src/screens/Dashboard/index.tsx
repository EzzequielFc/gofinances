import * as React from "react";
import { HighlighCard } from "../../components/HighlighCard";
import {
  Container,
  Header,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  UserWrepper,
  Icon,
  HighlighCards
} from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrepper>
          <UserInfo>
            <Photo source={{ uri: "https://github.com/EzzequielFc.png" }} />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Ezequiel</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrepper>
      </Header>

      <HighlighCards>
        <HighlighCard />
        <HighlighCard />
        <HighlighCard />
      </HighlighCards>
    </Container>
  );
}
