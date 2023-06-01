import React, { useCallback } from 'react';
import { FlatList, Linking } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { ItemContainer } from '../styles/ItemContainer';
import { CustomText } from '../styles/CustomText';

const ResultsList = () => {
    const searchResults = useSelector((state: RootState) => state.search.results);

    const openURL = useCallback((url: string) => {
        Linking.openURL(url).catch((err) => console.error('Failed to open URL: ', err));
    }, []);

    return (
        <FlatList
            data={searchResults}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
                <ItemContainer onPress={() => openURL(item.html_url)}>
                    <CustomText size="large" color="dark" weight="bold">{item.name}</CustomText>
                    <CustomText>language: <CustomText weight="bold">{item.language}</CustomText></CustomText>
                    <CustomText>description: <CustomText weight="bold">{item.description}</CustomText></CustomText>
                </ItemContainer>
            )}
        />
    );
};

export default React.memo(ResultsList);
