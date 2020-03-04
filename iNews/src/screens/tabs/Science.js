import React, { Component } from "react";
import { Container, Content, List, View } from "native-base";
import { getArticles } from "../../service/news";
import { Alert, ActivityIndicator, Text } from "react-native";
import DataItem from "../../component/DataItem";

export default class Trending extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isLoading: true,
      data: null
    };
  }

  componentDidMount() {
    getArticles('science').then(
      data => {
        this.setState({
          isLoading: false,
          data: data
        });
      },
      error => {
        Alert.alert("Error", "Oops! Something went wrong.");
      }
    );
  }
  render() {
    let view = this.state.isLoading ? (
      <View>
        <ActivityIndicator animating={this.state.isLoading} />
      </View>
    ) : (
      <List
        dataArray={this.state.data}
        renderRow={item => {
          return <DataItem data={item} />;
        }}
      />
    );

    return (
      <Container>
        <Content>{view}</Content>
      </Container>
    );
  }
}
