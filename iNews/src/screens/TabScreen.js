import React, { Component } from "react";
import {
  Container,
  Header,
  Tab,
  Tabs,
  ScrollableTab,
  Left,
  Right,
  Body,
  Title,
  Icon,
  Text
} from "native-base";
import Science from "./tabs/Science";
import Technology from "./tabs/Technology";
import Trending from "./tabs/Trending";
export default class TabsScrollableExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Header hasTabs>
          <Left />
          <Body>
            <Title>
              <Icon
                style={{ color: "white", fontSize: 22 }}
                type="FontAwesome"
                name="globe"
              />
              iNews
            </Title>
          </Body>
          <Right />
        </Header>
        <Tabs renderTabBar={() => <ScrollableTab />}>
          <Tab heading="Science">
            <Science />
          </Tab>
          <Tab heading="Technology">
            <Technology />
          </Tab>
          <Tab heading="Trending">
            <Trending />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
