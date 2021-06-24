import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {w, h} from 'react-native-responsiveness';

export function Post({img}) {
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.PostHeader}>
        <View style={styles.left}>
          <View style={styles.Imgbg}>
            <Image
              style={styles.pfimg}
              source={{
                uri: 'https://instagram.flhe3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/142811161_706005816728764_6804927864578133773_n.jpg?tp=1&_nc_ht=instagram.flhe3-1.fna.fbcdn.net&_nc_ohc=aOOt4UMxaVcAX8IpL_g&edm=ABfd0MgBAAAA&ccb=7-4&oh=289195787b6d39590e2f403152ca24d4&oe=60DA61FC&_nc_sid=7bff83',
              }}
            />
          </View>
        </View>
        <View style={styles.middle}>
          <Text style={styles.Nametext}>UMER AFTAB</Text>
          <View style={styles.middiledownContainer}>
            <Image source={require('../assets/globe.png')} />
            <Text style={styles.Text}>LOCATION</Text>
          </View>
        </View>
        <View style={styles.right}>
          <Image source={require('../assets/setting.png')} />
        </View>
      </View>
      {/* header */}

      {/* postStatus */}
      <View style={styles.PostStatus}>
        <Text style={styles.PostText} numberOfLines={1} ellipsizeMode={'tail'}>
          This is my first status to test the Ui. 😋
        </Text>
      </View>
      {/* postStatus */}

      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}
        style={styles.ImageContainer}>
        {/* imge */}

        <Image
          style={styles.imge}
          source={{
            uri: img,
          }}
        />

        {/* imge */}
      </TouchableOpacity>

      <View style={styles.btnContainer}>
        <Text style={styles.btnContainerText}>30 Comments , 5 shares</Text>
        <View style={styles.ButtonBox}>
          <View style={styles.firstButton}>
            <Image source={require('../assets/thumb.png')} />
          </View>
          <View style={styles.firstButton}>
            <Image source={require('../assets/comment.png')} />
          </View>
          <View style={styles.firstButton}>
            <Image source={require('../assets/share.png')} />
          </View>
          <View style={styles.SecondButton}>
            <Text style={styles.likeText}>50 people like this</Text>
            <Image
              style={{width: '50%', height: '50%', resizeMode: 'contain'}}
              source={require('../assets/Like.png')}
            />
          </View>
        </View>
      </View>

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
              uri: img,
            }}
            style={styles.ModalImage}
          />
        </View>
        <View style={styles.ModalContainer2}>
          <View style={styles.thirdButton}>
            <Image
              style={{width: '40%', height: '40%', resizeMode: 'contain'}}
              source={require('../assets/Like.png')}
            />
            <Text style={styles.likeText}>50 people like this</Text>
          </View>
          <View style={styles.btnContainer2}>
            <View style={styles.ButtonBox}>
              <View style={styles.firstButton}>
                <Image source={require('../assets/thumb.png')} />
              </View>
              <View style={styles.firstButton}>
                <Image source={require('../assets/comment.png')} />
              </View>
              <View style={styles.firstButton}>
                <Image source={require('../assets/share.png')} />
              </View>
            </View>
          </View>
        </View>
      </Modal>
      {/* modal */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222833',
    width: '95%',
    height: h('60%'),
    marginTop: h('2%'),
    borderRadius: h('1%'),
    alignItems: 'center',
  },
  PostHeader: {
    // backgroundColor: 'green',
    width: '100%',
    height: '16%',
    flexDirection: 'row',
  },
  left: {
    // backgroundColor: 'red',
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  middle: {
    // backgroundColor: 'orange',
    width: '60%',
    height: '100%',
    justifyContent: 'center',
    // alignItems: 'center',
    paddingTop: h('0.5%'),
  },
  right: {
    // backgroundColor: 'purple',
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Imgbg: {
    backgroundColor: '#1977F3',
    width: 50,
    height: 50,
    borderRadius: h('100%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  pfimg: {
    width: '90%',
    height: '90%',
    borderRadius: h('100%'),
  },
  middiledownContainer: {
    width: '100%',
    flexDirection: 'row',
    height: '40%',
    // backgroundColor: 'red',
    // justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: h('1.3%'),
  },
  Nametext: {
    fontSize: h('2%'),
    fontWeight: 'bold',
    color: 'white',
    paddingLeft: h('1.5%'),
  },
  Text: {
    color: '#fff5',
    paddingLeft: h('1%'),
  },
  PostStatus: {
    // backgroundColor: 'white',
    width: '95%',
    height: '7%',
    justifyContent: 'center',
  },
  PostText: {
    color: 'white',
    fontSize: h('2.5%'),
  },
  ImageContainer: {
    // backgroundColor: 'red',
    width: '97%',
    height: '55%',
    overflow: 'hidden',
    borderRadius: h('1%'),
    marginTop: h('1%'),
  },
  imge: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  btnContainer: {
    // backgroundColor: 'red',
    width: '97%',
    height: '15%',
  },
  btnContainer2: {
    // backgroundColor: 'red',
    width: '97%',
    height: '35%',
    justifyContent: 'center',
  },
  btnContainerText: {
    color: 'white',
    fontSize: h('2%'),
    fontWeight: 'bold',
    paddingTop: h('1%'),
    paddingLeft: h('1%'),
  },
  ButtonBox: {
    // backgroundColor: 'red',
    width: '100%',
    height: '90%',
    flexDirection: 'row',
  },
  firstButton: {
    // backgroundColor: 'red',
    width: '15%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  SecondButton: {
    // backgroundColor: 'red',
    width: '55%',
    height: '100%',
    justifyContent: 'space-evenly',
    // alignItems: 'center',
    paddingLeft: h('4%'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  thirdButton: {
    // backgroundColor: 'red',
    width: '45%',
    height: '50%',
    justifyContent: 'space-evenly',
    // alignItems: 'center',
    paddingRight: h('3%'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeText: {
    color: 'white',
    fontSize: h('2%'),
    fontWeight: 'bold',
  },
  ModalContainer: {
    backgroundColor: 'black',
    width: '100%',
    height: h('80%'),
    paddingTop: h('5%'),
  },
  ModalContainer2: {
    backgroundColor: 'black',
    width: '100%',
    height: h('20%'),
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
