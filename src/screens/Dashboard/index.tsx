import * as React from "react";
import { getBottomSpace } from "react-native-iphone-x-helper";

import { HighlighCard } from "../../components/HighlighCard";
import { TransactionCard,TransactionCardProps } from "../../components/TransactionCard";

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
  HighlighCards,
  Transactions,
  Title,
  TransactionList,
} from "./styles";

export interface DataListProps extends TransactionCardProps {
  id: string
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: "1",
      type: "positive",
      title: "Desenvolvimento de site",
      amount: "R$ 12.000,00",
      category: {
        name: "Vendas",
        icon: "dollar-sign",
      },
      date: "19/03/2001",
    },
    {
      id: "2",
      type: "negative",
      title: "Desenvolvimento de site",
      amount: "R$ 12.000,00",
      category: {
        name: "Vendas",
        icon: "coffee",
      },
      date: "19/03/2001",
    },
    {
      id: "3",
      type: "negative",
      title: "Desenvolvimento de site",
      amount: "R$ 12.000,00",
      category: {
        name: "Vendas",
        icon: "shopping-bag",
      },
      date: "19/03/2001",
    },
  ];

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
        <HighlighCard
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HighlighCard
          type="down"
          title="Saídas"
          amount="R$ 1.249,00"
          lastTransaction="Última entrada dia 03 de abril"
        />
        <HighlighCard
          type="total"
          title="Total"
          amount="R$ 16.141,00"
          lastTransaction="01 à 16 de abril"
        />
      </HighlighCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}
