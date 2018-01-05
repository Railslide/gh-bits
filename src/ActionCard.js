// @flow

import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';

type ActionCardProps = {
    description: string,
    score: number,
}

class ActionCard extends React.Component<ActionCardProps> {

    render(): React$Element<*> {
        return (
            <TouchableHighlight>
                <View style={styles.container}>
                    <Text style={styles.column}>{this.props.description}</Text>
                    <Text style={styles.column}>{this.props.score}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = {
    column: {

    },
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        padding: 10,
    },
};

export default ActionCard;
