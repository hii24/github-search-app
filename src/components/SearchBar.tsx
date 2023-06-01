import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { searchGithub } from '../redux/slices/searchSlice';
import { addRequest } from '../redux/slices/historySlice';
import { AppDispatch } from '../redux/store';
import { debounce } from 'lodash';
import { SearchInput } from '../styles/SearchInput';

const SearchBar: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const dispatch: AppDispatch = useDispatch();

    const handleInputChange = (text: string) => {
        setSearchTerm(text);
    };

    const debouncedHandleSearch = debounce(() => {
        dispatch(searchGithub(searchTerm));
        dispatch(addRequest(searchTerm));
    }, 500);

    useEffect(() => {
        if (searchTerm) {
            debouncedHandleSearch();
        }

        // Очищаем предыдущий debounce таймер при обновлении searchTerm
        return debouncedHandleSearch.cancel;
    }, [searchTerm, debouncedHandleSearch]);

    return (
        <View>
            <SearchInput
                style={styles.input}
                value={searchTerm}
                onChangeText={handleInputChange}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
});

export default SearchBar;
