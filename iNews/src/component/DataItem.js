import React, { Component } from "react";
import {
  ListItem,
  Left,
  Right,
  Thumbnail,
  Body,
  View,
  Text,
  Button
} from "native-base";

export default class DataItem extends Component {
  constructor(props) {
    super(props);
    this.data = props.data;
  }

  render() {
    return (
      <ListItem thumbnail>
        <Left>
          <Thumbnail
            square large
            source={{
              uri:
                this.data.urlToImage != null
                  ? this.data.urlToImage
                  : "https://www.euractiv.com/wp-content/uploads/sites/2/2014/03/news-default.jpeg"
            }}
          />
        </Left>
        <Body>
          <Text numberOfLines={2}>{this.data.title}</Text>
          <Text note numberOfLines={2}>
            {this.data.description}
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginTop: 8,
              marginLeft: 0
            }}
          >
            <Text note>{this.data.source.name}</Text>
          </View>
        </Body>
        <Right>
          <Button>
            <Text>View</Text>
          </Button>
        </Right>
      </ListItem>
    );
  }
}
