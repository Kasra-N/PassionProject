import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button
} from "native-base";

export default class Science extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail
                  square
                  source={{
                    uri:
                      "https://www.euractiv.com/wp-content/uploads/sites/2/2014/03/news-default.jpeg"
                  }}
                />
              </Left>
              <Body>
                <Text>Trending Article</Text>
                <Text note numberOfLines={2}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum qui natus saepe. Obcaecati culpa id qui corrupti
                  delectus ullam tempora earum perferendis repudiandae sed,
                  optio facere omnis consectetur illo aliquam.
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
