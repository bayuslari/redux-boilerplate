import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View
} from 'react-native';

// === import your action here ==== //
// import {
//   usernameChanged
// } from './../../actions';

class Login extends Component {
  renderItem({ item }) {
    return <ListItem item={item} />;
  }

  render() {
    return (
      <View>
        <Text>Login</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { auth: state.auth };
};

export default connect(mapStateToProps,
  {
    // call Actions here
  }
)(Login);
