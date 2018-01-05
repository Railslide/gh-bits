// @flow

import React from 'react';
import {FlatList} from 'react-native';
import ActionCard from './ActionCard';

const actions = [
    {
        description: 'Do something',
        score: '1',
    },
    {
        description: 'Don\'t do something',
        score: -2,
    },
];

class ActionList extends React.Component<{}> {

    _keyExtractor = (_, index: number): string => index.toString();

    _renderItem = ({item}): React$Element<*> => {
        return (
            <ActionCard
                description={item.description}
                score={item.score}
            />
        );
    };

    render(): React$Element<*> {
        return (
            <FlatList
                data={actions}
                renderItem={this._renderItem}
                keyExtractor={this._keyExtractor}
            />
        );
    }
}

export default ActionList;
