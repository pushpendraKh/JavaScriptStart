import React, { Component } from 'react';
import {
  ListView,
  StyleSheet,
  View,
  Modal,
  TouchableOpacity,
  WebView,
  RefreshControl, ActivityIndicator
} from 'react-native';
import NewsItem from './NewsItem';
import SmallText from './SmallText';
import * as globalStyles from '../styles/global';
import PropTypes from 'prop-types';


export default class NewsFeed extends Component {

  componentWillMount() {
    this.refresh(); 
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(nextProps.news),
      initialLoading: false
    });
  }
  refresh() {
    if (this.props.loadNews) {
      this.props.loadNews();
  } }


  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1.title !== row2.title
    });
    this.state = {
      dataSource: this.ds.cloneWithRows(props.news),
      modalVisible: false,
      initialLoading: true,
      refreshing: false
    };

    this.renderRow = this.renderRow.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
    this.onModalOpen = this.onModalOpen.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  onModalClose() {
    this.setState({
      modalVisible: false,
      modalUrl: undefined
    });
  }

  onModalOpen(url) {
    this.setState({
      modalVisible: true,
      modalUrl: url
    });
  }

  renderModal() {
    return (
      <Modal
        animationType="slide"
        visible={this.state.modalVisible}
        onRequestClose={this.onModalClose}
      >
        <View style={styles.modalContent}>
          <TouchableOpacity
            onPress={this.onModalClose}
            style={styles.closeButton}
          >
            <SmallText>Close</SmallText>
          </TouchableOpacity>
          <WebView
            scalesPageToFit
            source={{ uri: this.state.modalUrl }}
          />
        </View>
      </Modal>
    );
  }

  renderRow(rowData, ...rest) {
    const index = parseInt(rest[1], 10);
    return (
      <NewsItem
        onPress={() => this.onModalOpen(rowData.url)}
        style={styles.newsItem}
        index={index}
        {...rowData}
      />
    );
  }

  renderLoader(){
    return(<View style={[this.props.listStyles, styles.loadingContainer]}>
                     <ActivityIndicator
                       animating
                       size="small"
                       {...this.props}
        /> </View>)
  }
  render() {
    return (
      (this.state.initialLoading && this.props.showLoadingSpinner
        ?(
          this.renderLoader()
        ) :(

      <View style={globalStyles.COMMON_STYLES.pageContainer}>
        <ListView
          enableEmptySections
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          style={this.props.listStyles}
        />
        {this.renderModal()}
      </View>
      )
    )
  );
  }

}

NewsFeed.propTypes = {
  news: PropTypes.arrayOf(PropTypes.object),
  listStyles: View.propTypes.style,
  loadNews: PropTypes.func,
  showLoadingSpinner: PropTypes.bool

};

NewsFeed.defaultProps = {
  showLoadingSpinner: true
};



const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  newsItem: {
    marginBottom: 20
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: globalStyles.BG_COLOR
  },
  closeButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row'
  }
});