// App.tsx
import React from 'react';
import { ScrollView, Image } from 'react-native';
import SearchBar from './components/SearchBar';
import ResultsList from './components/ResultsList';
import HistoryList from './components/HistoryList';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './redux/store';
import { Container } from './styles/Container';
import { Title } from './styles/Title';
import { Line } from './styles/Line';
import { BlankBox } from './styles/BlankBox';

const App = () => {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Container>
        <Image source={require('./assets/logo.png')} style={{ width: '100%', height: 80 }} resizeMode='contain' />
        <Title>Github users search app</Title>
        <Line />
        <SearchBar />
        <HistoryList />
        <BlankBox />
        <ScrollView >
          <ResultsList />
        </ScrollView>
      </Container>
    </PersistGate>
  );
};



export default App;
