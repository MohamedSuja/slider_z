import {View, Text, Button} from 'react-native';
import React from 'react';
import {useAppDispatch} from '@/features/stateHooks';
import {requestStorageData} from '@/features/thunks/appThunk';

const Home = () => {
  const dispatch = useAppDispatch();
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Go to Detail"
        onPress={() => {
          dispatch(requestStorageData('data'));
        }}
      />
    </View>
  );
};

export default Home;
