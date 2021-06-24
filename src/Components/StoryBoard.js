import React from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {w, h} from 'react-native-responsiveness';
import {ImageContainer} from '../Components';
import data from '../data';

export function StoryBoard() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.imgeuploadbutton}
          source={require('../assets/imageupload.png')}
        />
        <View style={styles.MeContainer}>
          <Image
            style={styles.imge}
            source={{
              uri: 'https://instagram.flhe3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/142811161_706005816728764_6804927864578133773_n.jpg?tp=1&_nc_ht=instagram.flhe3-1.fna.fbcdn.net&_nc_ohc=aOOt4UMxaVcAX_XaSqF&edm=ABfd0MgBAAAA&ccb=7-4&oh=58969bad05943a3b039440a2bcf4a5bd&oe=60DC5C3C&_nc_sid=7bff83',
            }}
          />
        </View>
      </TouchableOpacity>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <ImageContainer
            img={item.image}
            name={item.name}
            landscape={item.landscape}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'white',
    width: '100%',
    height: h('16%'),
    marginTop: h('2%'),
    paddingLeft: h('0.5%'),
    paddingRight: h('0.5%'),
    flexDirection: 'row',
  },
  MeContainer: {
    width: w('25%'),
    height: h('14%'),
    // backgroundColor: '#fff5',
    borderRadius: h('5%'),
    marginRight: h('1%'),
    resizeMode: 'contain',
    overflow: 'hidden',
  },
  imge: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  imgeuploadbutton: {
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
});
