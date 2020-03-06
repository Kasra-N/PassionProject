import React, { Component } from "react";
import { ListItem, Left, Thumbnail, Body, View, Text } from "native-base";
import Time from "./time";

export default class DataItem extends Component {
  constructor(props) {
    super(props);
    this.data = props.data;
  }

  handlePress = () => {
    const { url, title } = this.data;
    this.props.onPress({ url, title });
  };

  render() {
    return (
      <ListItem key={this.data.url} onPress={this.handlePress} thumbnail>
        <Left>
          <Thumbnail
            style={{ borderRadius: 8, width: 160, height: 120 }}
            square
            source={{
              uri:
                this.data.urlToImage != null
                  ? this.data.urlToImage
                  : "https://www.euractiv.com/wp-content/uploads/sites/2/2014/03/news-default.jpeg"
            }}
          />
        </Left>
        <Body>
          <Text numberOfLines={3}>{this.data.title}</Text>
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
            <Time time={this.data.publishedAt} />
          </View>
        </Body>
      </ListItem>
    );
  }
}
