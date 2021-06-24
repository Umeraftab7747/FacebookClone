import React from 'react';
import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import {w, h} from 'react-native-responsiveness';

export function Statusboard() {
  return (
    <View style={styles.container}>
      <View style={styles.TextContainer}>
        <View style={styles.Imgbg}>
          <Image
            style={styles.pfimg}
            source={{
              uri: 'https://instagram.flhe3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/142811161_706005816728764_6804927864578133773_n.jpg?tp=1&_nc_ht=instagram.flhe3-1.fna.fbcdn.net&_nc_ohc=aOOt4UMxaVcAX8IpL_g&edm=ABfd0MgBAAAA&ccb=7-4&oh=289195787b6d39590e2f403152ca24d4&oe=60DA61FC&_nc_sid=7bff83',
            }}
          />
        </View>
        <TextInput
          style={styles.textinpuContainer}
          placeholder={'Whats on your mind today ?'}
          placeholderTextColor={'#ffff'}
        />
      </View>
      <View style={styles.ButtonContainer}>
        {/* button */}
        <View style={styles.button}>
          <Image style={styles.icon2} source={require('../assets/cam.png')} />
          <Text style={styles.TextColor}>Photos</Text>
        </View>
        {/* button */}
        {/* button */}
        <View style={styles.button}>
          <Image style={styles.icon} source={require('../assets/Group.png')} />
          <Text style={styles.TextColor}>Live</Text>
        </View>
        {/* button */}
        {/* button */}
        <View style={styles.button}>
          <Image style={styles.icon} source={require('../assets/view.png')} />
          <Text style={styles.TextColor}>View</Text>
        </View>
        {/* button */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#232935',
    width: '95%',
    height: h('20%'),
    marginTop: h('1%'),
    borderRadius: h('1%'),
    overflow: 'hidden',
  },

  TextContainer: {
    // backgroundColor: 'red',
    width: '100%',
    height: '55%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  ButtonContainer: {
    // backgroundColor: 'rgba(255,242,000,0.4)',
    width: '100%',
    height: '45%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    backgroundColor: '#0002',
    width: '30%',
    height: h('6%'),
    borderRadius: h('1%'),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  Imgbg: {
    backgroundColor: '#ffff',
    width: 50,
    height: 50,
    borderRadius: h('100%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: h('5%'),
  },
  pfimg: {
    width: '90%',
    height: '90%',
    borderRadius: h('100%'),
  },
  textinpuContainer: {
    // backgroundColor: 'purple',
    width: '90%',
    height: '100%',
    paddingLeft: h('2%'),
    color: 'white',
  },
  icon: {
    width: '40%',
    height: '40%',
    resizeMode: 'contain',
    marginTop: h('0.5%'),
    marginRight: h('0.5%'),
  },
  icon2: {
    width: '40%',
    height: '40%',
    resizeMode: 'contain',
  },
  TextColor: {
    fontSize: h('2%'),
    fontWeight: 'bold',
    color: 'white',
  },
});
