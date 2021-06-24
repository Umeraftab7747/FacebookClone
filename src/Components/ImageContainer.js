/* eslint-disable react/self-closing-comp */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {w, h} from 'react-native-responsiveness';

export function ImageContainer({img, name, landscape}) {
  const [modalVisible, setModalVisible] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setModalVisible(false);
    }, 3000);
  }, [modalVisible]);

  return (
    <>
      <ImageBackground
        style={styles.ImageContainr}
        source={require('../assets/c.png')}>
        <Image
          style={styles.imgProfile}
          source={{
            uri: img,
          }}
        />
      </ImageBackground>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}>
        <ImageBackground
          source={{uri: landscape}}
          style={styles.container}></ImageBackground>
      </TouchableOpacity>

      {/* modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.ModalContainer}>
          <Image
            source={{
              uri: landscape,
            }}
            style={styles.ModalImage}
          />
        </View>
      </Modal>
      {/* modal */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: w('25%'),
    height: h('14%'),
    backgroundColor: '#fff5',
    borderRadius: h('5%'),
    marginRight: h('1%'),
    resizeMode: 'contain',
    overflow: 'hidden',
  },
  ImageContainr: {
    top: h('10%'),
    left: h('4%'),
    width: 40,
    height: 40,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 1,
  },
  imgProfile: {
    width: '90%',
    height: '90%',
    resizeMode: 'cover',
    borderRadius: h('100%'),
  },
  ModalContainer: {
    backgroundColor: 'black',
    width: '100%',
    height: h('100%'),
  },

  ModalImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
