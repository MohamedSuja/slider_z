import {
  View,
  Modal,
  NativeSyntheticEvent,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {ColorSheet} from '@/utils/ColorSheet';
import {useUpdateEffect} from '@/utils/useUpdateEffect';

const LoadingModal = (props: {
  visible?: boolean;
  status?: 'IDLE' | 'LOADING' | 'SUCCEEDED' | 'FAILED' | undefined;
  onRequestClose?: (event: NativeSyntheticEvent<any>) => void;
  transparent?: boolean;
}) => {
  const {visible, onRequestClose, transparent} = props;

  const [loading, setLoading] = useState(false);

  // Time out for loading
  /*   useUpdateEffect(() => {
    if (visible) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [visible]); */

  return (
    <Modal
      visible={visible}
      statusBarTranslucent
      transparent={transparent}
      onRequestClose={onRequestClose}
      animationType="fade">
      <View style={styles.root}>
        <ActivityIndicator
          size="large"
          color={ColorSheet.Primary}
          style={styles.indicator}
        />
        {/*   <AnimatedLottieView
          style={{
            height: wp(40),
            alignSelf: 'center',
            justifyContent: 'center',
            marginTop: hp(15),
          }}
          source={require('../../assets/animation/93019-loading-18.json')}
          autoPlay
          speed={0.9}
          loop={true}
        /> */}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0,0.2)',
  },
  indicator: {
    marginTop: hp(35),
  },
});

export default LoadingModal;
