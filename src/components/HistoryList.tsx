import React from 'react';
import { useSelector } from 'react-redux';
import { View } from 'react-native';
import { RootState } from '../redux/store';
import { CustomText } from '../styles/CustomText';
import { BlankBox } from '../styles/BlankBox';

const HistoryList: React.FC = () => {
    const history = useSelector((state: RootState) => state.history.requests);

    return (
        <View>
            <CustomText color="light" size='large' >Search history:</CustomText>
            <BlankBox />
            {history.map((request, index) => (
                <CustomText color="light" key={index} >
                    {request}
                </CustomText>
            ))}
        </View>
    );
};



export default HistoryList;
