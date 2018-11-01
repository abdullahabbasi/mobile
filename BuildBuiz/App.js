/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Scene, Router, TabBar, Icon} from 'react-native-router-flux';
import configureStore from './src/store/store'
import { Provider } from 'react-redux';
import Starter from './src/scene/Starter'
const store = configureStore({});

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <Starter />
      </Provider>
    );
  }
}

{/* <Router>
<Scene key="root">
  <Scene key="Welcome" initial={true} component={WelcomeScene} title='Build Buiz' direction="vertical"/>
</Scene>
</Router> */}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
