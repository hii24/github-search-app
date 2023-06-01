// components/ResultsList.tsx

import React from 'react';
import { View, Linking } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { ItemContainer } from '../styles/ItemContainer';
import { CustomText } from '../styles/CustomText';
import { BlankBox } from '../styles/BlankBox';

const ResultsList = () => {
    const searchResults = useSelector((state: RootState) => state.search.results);

    const openURL = (url: string) => {
        Linking.openURL(url).catch((err) => console.error('Failed to open URL: ', err));
    };

    return (
        <View>
            {searchResults.map((result) => (
                <ItemContainer key={result.id} onPress={() => openURL(result.html_url)} >
                    <CustomText size="large" color="dark" weight="bold">{result.name}</CustomText>
                    <CustomText>language: <CustomText weight="bold">{result.language}</CustomText></CustomText>
                    <CustomText>description: <CustomText weight="bold">{result.description}</CustomText></CustomText>
                </ItemContainer>
            ))}
        </View>
    );
};

export default ResultsList;
