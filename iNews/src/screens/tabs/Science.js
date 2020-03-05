import React, { Component } from "react";
import { Container, Content, List, View } from "native-base";
import { getArticles } from "../../service/news";
import { Alert, ActivityIndicator, Text } from "react-native";
import DataItem from "../../component/dataItem";
import Modal from "../../component/modal";

export default class Science extends Component {
  constructor(props, context) {
    super(props, context);

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
    getArticles("science").then(
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
      <ActivityIndicator animating={this.state.isLoading} />
    ) : (
      <List
        keyExtractor={item => item.title}
        dataArray={this.state.data}
        renderRow={item => {
          return <DataItem onPress={this.handleItemDataOnPress} data={item} />;
        }}
      />
    );

    return (
      <Container>
        {view}
        <Modal
          showModal={this.state.setModalVisible}
          articleData={this.state.modalArticleData}
          onClose={this.handleModalClose}
        />
      </Container>
    );
  }
}
