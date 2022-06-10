import React from 'react';
import {
  SafeAreaView,
  Image,
  View,
  StyleSheet,
  Text,
  ScrollView,
  FlatList,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ıonIcons from 'react-native-vector-icons/Ionicons';

state = {
  data: [
    {
      id: 1,
      Storyindestinations: {
        name: 'Greece',
        image:
          'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/96/cb/7a.jpg',
        price: '$800',
      },
    },
    {
      id: 2,
      Storyindestinations: {
        name: 'Italy',
        image:
          'http://www.tarifikolay.com/public/image/sevgililer-gununde-iliklerinize-kadar-romantizmi-yasamak-icin-bu-sehirlere-gidin_1549829019.jpg',
        price: '$1200',
      },
    },
    {
      id: 3,
      Storyindestinations: {
        name: 'France',
        image:
          'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=820&q=80',
        price: '$1200',
      },
    },
    {
      id: 4,
      Storyindestinations: {
        name: 'Switzerland',
        image:
          'https://images.unsplash.com/photo-1497535944603-98de35a7eef9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80',
        price: '$800',
      },
    },
    {
      id: 5,
      Storyindestinations: {
        name: 'Alaska',
        image:
          'https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2020/06/Ice-cave-1024x683.jpg',
        price: '$1500',
      },
    },
    {
      id: 6,
      Storyindestinations: {
        name: 'Romania',
        image:
          'https://i0.wp.com/travelmakertours.com/wp-content/uploads/2021/04/peles-castle-transylvania-attractions.jpg?w=800&ssl=1',
        price: '$800',
      },
    },
    {
      id: 7,
      Storyindestinations: {
        name: 'Romania',
        image:
          'https://media.istockphoto.com/photos/view-of-the-beach-at-night-picture-id1135160372?k=20&m=1135160372&s=612x612&w=0&h=QCEaAabVNaCd0nCI01DzVkrVIjwmq4pUpi0FH1T3sv4=',
        price: '$1400',
      },
    },
    {
      id: 8,
      Storyindestinations: {
        name: 'Estonia',
        image:
          'https://cdn.pixabay.com/photo/2017/08/07/23/52/nature-2609332_960_720.jpg',
        price: '$800',
      },
    },
  ],
};

renderUser = ({item, index}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <ImageBackground
        style={styles.ImageStyle}
        source={{uri: item.Storyindestinations.image}}
        imageStyle={{borderRadius: 10}}>
        <Text style={styles.imgtextitle}>{item.Storyindestinations.name}</Text>
        <Text style={styles.imgtext}>Starting Budget</Text>
        <Text style={styles.imgtextitle}>
          {item.Storyindestinations.price}
          <Text style={styles.imgtext}> /Person</Text>
        </Text>
      </ImageBackground>
    </View>
  );
};

const TripDestinations = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <Image
        source={require('../../img/bgnew.png')}
        style={{position: 'absolute', width: '100%', height: 400}}
      />

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}
          activeOpacity={0.4}>
          <ıonIcons
            name="arrow-back"
            size={24}
            color="white"
            style={{margin: 15}}
          />
        </TouchableOpacity>
        <Text
          style={{
            padding: 15,
            marginRight: '35%',
            alignSelf: 'center',
            color: 'white',
            fontWeight: '500',
            fontSize: 15,
          }}>
          Destinations{' '}
        </Text>
      </View>
      <ScrollView>
        <View style={styles.SearchContainer}>
          <TextInput
            style={styles.SearchInputStyle}
            placeholder={'Find Your Destinations'}
          />
          <Icon
            name="search"
            size={15}
            color="#d3d3d3"
            style={styles.SearchImgStyle}
          />
        </View>
          <View style={{alignItems:'center'}}>
        <FlatList
          style={{paddingBottom: 100}}
          numColumns={2}
          data={this.state.data}
          renderItem={this.renderUser}
          keyExtractor={(item, index) => index.toString()} //keyExtractor kullanımı
        />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SearchContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'white',
    paddingLeft: 20,
    margin: 15,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  SearchInputStyle: {
    height: 40,
    width: '90%',
    flexDirection: 'row',
  },
  SearchImgStyle: {
    flexDirection: 'row',
    width: '10%',
    marginTop: 10,
  },
  imgtextitle: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  imgtext: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '500',
    fontSize: 12,
  },
  ImageStyle: {
    width: 175,
    height: 175,
    marginHorizontal:10,
    marginTop: 20,
    borderRadius: 15,
    justifyContent: 'center',
  },
});
export default TripDestinations;
