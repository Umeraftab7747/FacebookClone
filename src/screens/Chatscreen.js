import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import {w, h} from 'react-native-responsiveness';
import {Header, List2} from '../Components';

export function Chatscreen({navigation}) {
  return (
    <View style={styles.container}>
      <Header
        FbBtn={() => {
          navigation.navigate('Dashboard');
        }}
        SearchBtn={() => {
          navigation.navigate('SearchScreen');
        }}
        bellBtn={() => {
          navigation.navigate('NotficationScreen');
        }}
        smsBtn={() => {
          navigation.navigate('Chatscreen');
        }}
        ProfileBtn={() => {
          navigation.navigate('Profile');
        }}
      />

      {/* search bar */}
      <View style={styles.middle}>
        <Image style={styles.icon2} source={require('../assets/search.png')} />
        <TextInput
          placeholderTextColor={'white'}
          placeholder={'Search'}
          style={styles.Textinput}
        />
      </View>
      {/* search bar */}

      <List2
        img={
          'https://www.oneplanetnetwork.org/sites/default/files/profile-leena.jpg'
        }
      />
      <List2
        img={
          'data:image/jpeg;base64,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'
        }
      />
      <List2
        img={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1aNIkRJ3Rz1Vm5z5gac9Xb-OOVZEDpxp7Jg&usqp=CAU'
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '120%',
    backgroundColor: '#080E1D',
    alignItems: 'center',
  },
  middle: {
    backgroundColor: '#fff1',
    width: '85%',
    height: h('7%'),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: h('100%'),
    marginTop: h('2%'),
    paddingRight: h('9%'),
    marginBottom: h('2%'),
  },
  icon2: {
    width: '20%',
    height: '90%',
    resizeMode: 'contain',
    // backgroundColor: 'red',
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
