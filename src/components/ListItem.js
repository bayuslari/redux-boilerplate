import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';

import * as actions from '../actions';

class ListItem extends Component {
  componentWillUpdate(){
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { item, expanded } = this.props;

    if (expanded) {
      return (
        <CardSection>
          <Text>{item.description}</Text>
        </CardSection>
      )
    }
  }

  render() {
    const { id, title } = this.props.item;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.item.id;

  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);