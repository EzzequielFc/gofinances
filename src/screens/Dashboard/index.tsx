import * as React from "react";
import {
  Container,
  Header,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  UserWrepper,
  Icon
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
    </Container>
  );
}
