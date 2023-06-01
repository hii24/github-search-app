import React from 'react';
import { View, StyleSheet } from 'react-native';
import SearchBar from './components/SearchBar';
import ResultsList from './components/ResultsList';
import HistoryList from './components/HistoryList';

const App = () => {
  return (
    <View style={styles.container}>
      <SearchBar />
      <ResultsList />
      <HistoryList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});

export default App;
