import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {w, h} from 'react-native-responsiveness';
import {Icon} from 'react-native-elements';

export function List2({img}) {
  return (
    <View style={styles.Container}>
      <View style={styles.left}>
        <Image
          style={styles.Image}
          source={{
            uri: img,
          }}
        />
      </View>
      <View style={styles.middle}>
        <Text style={styles.comment}>ABC NAME</Text>
        <Text style={styles.comment2}>i will contact you back...</Text>
      </View>
      <View style={styles.Right}>
        <Icon name="checkmark-circle-sharp" type="ionicon" color="#ffff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    // backgroundColor: 'blue',
    width: '95%',
    height: h('12%'),
    flexDirection: 'row',
    borderTopColor: '#fff1',
    // borderTopWidth: h('0.1%'),
    // paddingTop: h('1%'),
  },
  left: {
    // backgroundColor: 'red',
    width: '25%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  middle: {
    // backgroundColor: 'green',
    width: '60%',
    height: '100%',
    justifyContent: 'center',
    paddingLeft: h('1%'),
  },
  Right: {
    // backgroundColor: 'gold',
    width: '15%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Image: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    borderRadius: h('100%'),
  },
  comment: {
    fontSize: h('2%'),
    fontWeight: 'bold',
    color: 'white',
  },
  comment2: {
    fontSize: h('1.8%'),
    // fontWeight: 'bold',
    color: '#fff8',
  },
});
