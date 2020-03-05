import React, { Component } from "react";
import { Container, Content, List, View } from "native-base";
import { getArticles } from "../../service/news";
import { Alert, ActivityIndicator, Text } from "react-native";
import DataItem from "../../component/dataItem";
import Modal from "../../component/modal";

export default class Technology extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: null,
      setModalVisible: false,
      modalArticleData: {}
    };
  }

  handleItemDataOnPress = articleData => {
    this.setState({
      setModalVisible: true,
      modalArticleData: articleData
    });
  };

  handleModalClose = () => {
    this.setState({
      setModalVisible: false,
      modalArticleData: {}
    });
  };

  componentDidMount() {
    getArticles("technology").then(
      data => {
        this.setState({
          isLoading: false,
          data: data
        });
      },
      error => {
        Alert.alert("Error", "Something went wrong!");
      }
    );
  }

  render() {
    let view = this.state.isLoading ? (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator animating={this.state.isLoading} color="#00f0ff" />
        <Text style={{ marginTop: 10 }} children="Please Wait.." />
      </View>
    ) : (
      <List
        dataArray={this.state.data}
        renderRow={item => {
          return <DataItem onPress={this.handleItemDataOnPress} data={item} />;
        }}
      />
    );

    return (
      <Container>
        <Content>{view}</Content>
        <Modal
          showModal={this.state.setModalVisible}
          articleData={this.state.modalArticleData}
          onClose={this.handleModalClose}
        />
      </Container>
    );
  }
}
