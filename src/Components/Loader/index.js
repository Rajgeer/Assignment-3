import React from 'react';
import {ActivityIndicator, Colors} from 'react-native-paper';
import {StyleSheet, View, Modal} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
export default function LoaderComponent(props) {
  const {isLoading = true} = props;
  return (
    <Modal
      style={{zIndex: 1100}}
      animationType="none"
      transparent={true}
      visible={isLoading}
      presentationStyle={'fullScreen'}>
      <View style={styles.modalBackground}></View>
      <View style={styles.whiteOverlay}>
        {/* <ActivityIndicator animating={true} color={Colors.cyan500} /> */}
        <EvilIcons color={'#6666DE'} name={'spinner'} size={50} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040',
    zIndex: 1000,
  },
  whiteOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
