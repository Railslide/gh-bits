// @flow
import React from 'react';
import {Text, View} from 'react-native';

type TopBarAttributes = {
    score: number,
};

class TopBar extends React.Component<TopBarAttributes> {

    render(): React$Element<*> {
        const score = `Score: ${this.props.score}`;

        return (
            <View style={styles.topBar}>
                <Text style={styles.score}>{score}</Text>
            </View>
        );
    }
}

const styles = {
    score: {
        fontSize: 20,
        fontWeight: '700',
        marginRight: 20,
        textAlign: 'right',

    },
    topBar: {
        borderColor: '#000',
        borderWidth: 1,
        display: 'flex',
        height: 60,
        justifyContent: 'center',
    },
};

export default TopBar;
