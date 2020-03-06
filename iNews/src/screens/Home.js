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
import Sports from "./tabs/Sports";
import Health from "./tabs/Health";
import Business from "./tabs/Business";

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Header hasTabs>
          <Left />
          <Body>
            <Title>
              <Text style={{ fontSize: 30, color: "white", marginLeft: 210 }}>
                {" "}
                iN
                <Icon
                  style={{ color: "white", fontSize: 22 }}
                  type="FontAwesome"
                  name="globe"
                />
                ws
              </Text>
            </Title>
          </Body>
          <Right />
        </Header>
        <Tabs renderTabBar={() => <ScrollableTab />}>
          <Tab heading="Trending">
            <Trending />
          </Tab>
          <Tab heading="Science">
            <Science />
          </Tab>
          <Tab heading="Technology">
            <Technology />
          </Tab>
          <Tab heading="Sports">
            <Sports />
          </Tab>
          <Tab heading="Health">
            <Health />
          </Tab>
          <Tab heading="Business">
            <Business />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
