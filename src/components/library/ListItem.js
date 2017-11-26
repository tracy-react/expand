import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import PropTypes from 'prop-types';
import { CardItem } from '../common';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class ListItem extends Component {

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  static propTypes = {
    library: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    }),
    selectLibrary: PropTypes.func.isRequired,
    isExpended: PropTypes.bool
  };

  render() {
    const { library, isExpended } = this.props;
    const { title } = styles;
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(library.id)}
      >
        <View>
          <CardItem>
            <Text style={title}>{library.title}</Text>
          </CardItem>
          {
            isExpended
            &&
              <CardItem>
                <Text style={{flex: 1}}>{library.description}</Text>
              </CardItem>
          }
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    paddingLeft: 15
  }
});

const mapStateToProps = (state, ownProps) => {
  const isExpended = state.selectedLibraryId === ownProps.library.id;
  return {
    isExpended
  };
};

export default connect(mapStateToProps, actions)(ListItem);
