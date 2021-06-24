import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {w, h} from 'react-native-responsiveness';

export function Header2({FbBtn, SearchBtn, bellBtn, smsBtn, ProfileBtn}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={FbBtn} style={styles.left}>
        <Image style={styles.icon} source={require('../assets/f.png')} />
      </TouchableOpacity>

      {/* search bar */}
      <View onPress={SearchBtn} style={styles.middle}>
        <Image style={styles.icon2} source={require('../assets/search.png')} />
        <TextInput
          placeholderTextColor={'white'}
          placeholder={'Search'}
          style={styles.Textinput}
        />
      </View>
      {/* search bar */}

      <View style={styles.profile}>
        <TouchableOpacity onPress={ProfileBtn} style={styles.Imgbg}>
          <Image
            style={styles.pfimg}
            source={{
              uri: 'https://instagram.flhe3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/142811161_706005816728764_6804927864578133773_n.jpg?tp=1&_nc_ht=instagram.flhe3-1.fna.fbcdn.net&_nc_ohc=aOOt4UMxaVcAX8IpL_g&edm=ABfd0MgBAAAA&ccb=7-4&oh=289195787b6d39590e2f403152ca24d4&oe=60DA61FC&_nc_sid=7bff83',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: h('8%'),
    // backgroundColor: 'white',
    flexDirection: 'row',
    paddingRight: h('1%'),
    marginTop: h('1%'),
  },
  left: {
    // backgroundColor: 'green',
    width: '17%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: h('1%'),
  },
  middle: {
    backgroundColor: '#fff1',
    width: '65%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: h('100%'),
  },

  profile: {
    // backgroundColor: 'purple',
    width: '18%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  Imgbg: {
    backgroundColor: 'white',
    width: 50,
    height: 50,
    borderRadius: h('100%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: '70%',
    height: '70%',
    resizeMode: 'contain',
  },
  icon2: {
    width: '20%',
    height: '90%',
    resizeMode: 'contain',
  },
  pfimg: {
    width: '90%',
    height: '90%',
    borderRadius: h('100%'),
  },
  Textinput: {
    // backgroundColor: 'red',
    width: '80%',
    height: '100%',
    color: 'white',
    fontSize: h('2.2%'),
    paddingLeft: h('2%'),
  },
});
