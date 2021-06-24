import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {w, h} from 'react-native-responsiveness';
import {Header2} from '../Components';

export function SearchScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Header2
        FbBtn={() => {
          navigation.navigate('Dashboard');
        }}
        SearchBtn={() => {
          navigation.navigate('Dashboard');
        }}
        ProfileBtn={() => {
          navigation.navigate('Dashboard');
        }}
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
});
