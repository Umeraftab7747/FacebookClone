/* eslint-disable react/self-closing-comp */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {w, h} from 'react-native-responsiveness';
import {Header, Statusboard, Post, StoryBoard} from '../Components';
import {Icon} from 'react-native-elements';

export function Profile({navigation}) {
  return (
    <ScrollView>
      <View style={styles.Container}>
        {/* top header */}
        <ImageBackground
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEyxSUzQHJUi2-Pm7BJq44o8bJDHMG0jFRcA&usqp=CAU',
          }}
          style={styles.ImgeContainer}>
          {/* container */}
          <View style={styles.hcontainer}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Dashboard');
              }}
              style={styles.left}>
              <View style={styles.box}>
                <Icon name="chevron-back" type="ionicon" color="#ffff" />
              </View>
            </TouchableOpacity>

            {/* search bar */}
            <View style={styles.middle}></View>
            {/* search bar */}

            <TouchableOpacity style={styles.profile}>
              <View style={styles.box}>
                <Image
                  style={styles.icon2}
                  source={require('../assets/search.png')}
                />
              </View>
            </TouchableOpacity>
          </View>

          {/* container */}
        </ImageBackground>
        {/* top header */}

        {/* Profile */}
        <View style={styles.ProfileContainer}>
          <View style={styles.ProfileImage}>
            <Image
              style={styles.img}
              source={{
                uri: 'https://instagram.flhe3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/142811161_706005816728764_6804927864578133773_n.jpg?tp=1&_nc_ht=instagram.flhe3-1.fna.fbcdn.net&_nc_ohc=aOOt4UMxaVcAX8IpL_g&edm=ABfd0MgBAAAA&ccb=7-4&oh=289195787b6d39590e2f403152ca24d4&oe=60DA61FC&_nc_sid=7bff83',
              }}
            />
          </View>
          <Text style={styles.profileName}>Umer Aftab</Text>
          <Text style={styles.profileProfession}>
            React Native | React | Developer
          </Text>

          {/* button container */}
          <View style={styles.BtnContainer}>
            <TouchableOpacity style={styles.Chatbutton}>
              <Image
                style={styles.img2}
                source={require('../assets/sms.png')}
              />
              <Text style={styles.MessangerText}>Open Messanger !</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Followbutton}>
              <Text style={styles.MessangerText}>Activity</Text>
            </TouchableOpacity>
          </View>
          {/* button container */}

          <Statusboard />
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
        {/* Profile */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    height: h('270%'),
    alignItems: 'center',
  },
  ImgeContainer: {
    width: '100%',
    height: h('30%'),
    backgroundColor: 'white',
  },
  hcontainer: {
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
    // backgroundColor: 'blue',
    width: '65%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#282E39',
    width: 50,
    height: 50,
    borderRadius: h('100%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  profile: {
    // backgroundColor: 'purple',
    width: '18%',
    height: h('280%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  ProfileContainer: {
    backgroundColor: '#282E39',
    width: '100%',
    height: h('280%'),
    marginTop: -h('6%'),
    borderTopLeftRadius: h('5%'),
    borderTopRightRadius: h('5%'),
    alignItems: 'center',
  },
  ProfileImage: {
    width: 150,
    height: 150,
    borderRadius: h('100%'),
    backgroundColor: 'white',
    marginTop: -h('9%'),
    borderColor: '#1977F3',
    borderWidth: h('0.5%'),
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  profileName: {
    color: 'white',
    fontSize: h('3%'),
    fontWeight: 'bold',
    marginTop: h('2%'),
  },
  profileProfession: {
    color: 'white',
    fontSize: h('2.5%'),
    fontWeight: 'bold',
    marginTop: h('0.5%'),
  },
  BtnContainer: {
    // backgroundColor: 'white',
    width: '95%',
    height: h('9%'),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  Chatbutton: {
    backgroundColor: '#1977F3',
    width: '55%',
    height: '70%',
    borderRadius: h('100%'),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  Followbutton: {
    // backgroundColor: '#0003',
    width: '35%',
    height: '70%',
    borderRadius: h('100%'),
    borderColor: '#fff',
    borderWidth: h('0.3%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  img2: {
    width: '20%',
    height: '90%',
    resizeMode: 'contain',
  },
  MessangerText: {
    color: 'white',
    fontSize: h('2%'),
    fontWeight: 'bold',
  },
});
