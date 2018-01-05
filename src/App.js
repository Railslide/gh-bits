// @flow

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import TopBar from './ScoreBar';



export default class App extends Component<{}> {
    render(): React$Element<*> {
        return (
            <View style={styles.container}>
                <TopBar score={23} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
        flex: 1,
    },

});
