import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {w, h} from 'react-native-responsiveness';
import {Header, Statusboard, Post, StoryBoard} from '../Components';

export function Dashboard({navigation}) {
  return (
    <ScrollView>
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
        <Statusboard />
        <StoryBoard />
        <Post
          img={
            'https://static.toiimg.com/thumb/msid-58515713,width-748,height-499,resizemode=4,imgsize-145905/.jpg'
          }
        />
        <Post
          img={
            'https://media.istockphoto.com/photos/villefranche-on-sea-in-evening-picture-id1145618475?k=6&m=1145618475&s=612x612&w=0&h=u6mv9zLy6WWdxnGxJ4i3bYOFQYJtxjmnkvgVoaGqf_U='
          }
        />
        <Post
          img={
            'https://st.depositphotos.com/1592314/1376/i/600/depositphotos_13763797-stock-photo-panoramic-view-of-mediterranean-resort.jpg'
          }
        />
      </View>
    </ScrollView>
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
