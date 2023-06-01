import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { RootState } from '../redux/store';

const ResultsList: React.FC = () => {
    const results = useSelector((state: RootState) => state.search.results);

    return (
        <View>
            {results.map(result => (
                <Text key={result.id} style={styles.result}>
                    {result.name}
                </Text>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    result: {
        fontSize: 18,
    },
});

export default ResultsList;
