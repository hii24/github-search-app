import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { RootState } from '../redux/store';

const HistoryList: React.FC = () => {
    const history = useSelector((state: RootState) => state.history.requests);

    return (
        <View>
            {history.map((request, index) => (
                <Text key={index} style={styles.request}>
                    {request}
                </Text>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    request: {
        fontSize: 18,
    },
});

export default HistoryList;
