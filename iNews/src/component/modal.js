import React, { Component } from "react";
import { Dimensions, Modal, Share, ScrollView } from "react-native";
import { WebView } from "react-native-webview";
import {
  Container,
  Header,
  Content,
  Body,
  Left,
  Right,
  Icon,
  Button,
  Title
} from "native-base";

const webViewHeight = Dimensions.get("window").height - 100;

export default class modal extends Component {
  constructor(props) {
    super(props);
  }

  handleClose = () => {
    return this.props.onClose();
  };

  handleShare = () => {
    const { url, title } = this.props.articleData;
    message = `${title}\n\nRead More at: ${url}\n\nShared via INews`;
    return Share.share(
      { title, message, url: message },
      { dialogTitle: `Share${title}` }
    );
  };

  render() {
    const { showModal, articleData } = this.props;
    const { url } = articleData;
    if (url != undefined) {
      return (
        <Modal
          animationType="slide"
          transparent
          visible={showModal}
          onRequestClose={this.handleClose}
        >
          <Container
            style={{ margin: 15, marginBottom: 0, backgroundColor: "#fff" }}
          >
            <Header>
              <Left>
                <Button onPress={this.handleClose} transparent>
                  <Icon name="close" style={{ color: "white", fontSize: 18 }} />
                </Button>
              </Left>
              <Body>
                <Title
                  children={articleData.title}
                  style={{ color: "white" }}
                />
              </Body>
              <Right>
                <Button onPress={this.handleShare} transparent>
                  <Icon name="share" style={{ color: "white", fontSize: 18 }} />
                </Button>
              </Right>
            </Header>
              <Content contentContainerStyle={{ height: webViewHeight }}>
                <WebView
                  source={{ uri: url }}
                  style={{ flex: 1 }}
                  onError={this.handleClose}
                  startInLoadingState
                  scalesPageToFit
                />
              </Content>
          </Container>
        </Modal>
      );
    } else {
      return null;
    }
  }
}
