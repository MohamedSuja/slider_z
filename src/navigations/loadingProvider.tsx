/* eslint-disable @typescript-eslint/no-explicit-any */
import {Platform, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import FlashMessage from 'react-native-flash-message';
import {useAppSelector} from '@/features/stateHooks';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {useUpdateEffect} from '@/utils/useUpdateEffect';

import {selectAppSliceStatus} from '@/features/slices/AppSlice';
import {STATUS} from '@/features/status_constants';
import LoadingModal from '@/components/Loading/LoadingModal';

const LoadingProvider = ({children}: any) => {
  const AppSliceStatus = useAppSelector<any>(selectAppSliceStatus);
  const [loading, setLoading] = useState(false);

  //App Loading
  useUpdateEffect(() => {
    if (AppSliceStatus === STATUS.LOADING) {
      setLoading(true);
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [AppSliceStatus]);

  return (
    <SafeAreaProvider style={styles.root}>
      {children}
      <LoadingModal visible={loading} transparent />
      <FlashMessage
        position="top"
        floating
        statusBarHeight={Platform.OS == 'ios' ? hp(5) : 0}
      />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default LoadingProvider;
