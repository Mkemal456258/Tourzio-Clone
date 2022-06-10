import React from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeTrendCard from '../Components/HomeTrendCard';
import HomeSpecialOffers from '../Components/HomeSpecialOffers';
import TopAdventureCard from '../Components/HomeTopAdventureCard';
import HomeTopNature from '../Components/HomeTopNature';
import HomeTopWild from '../Components/HomeTopWild';
import HomeTheme from '../Components/HomeTheme';
import TrendingInDestinations from './TrendingInDestinations';
import SpecialOffersIn from './SpecialOffersIn';
import TripCollection from './TripCollection';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <StatusBar translucent={false} backgroundColor={'#4a4a4a'} />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon name="navicon" size={28} color="white" style={{zIndex: 999}} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>TOURZIO</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={require('../../img/bgnew.png')}
          style={{position: 'absolute', width: '100%', height: 400}}
        />
        <View style={styles.SearchContainer}>
          <TextInput
            style={styles.SearchInputStyle}
            placeholder={'Destinations,Themes & Categories'}
          />
          <Icon
            name="search"
            size={15}
            color="#d3d3d3"
            style={styles.SearchImgStyle}
          />
        </View>

        <View>
          <View style={{marginTop: 15, marginLeft: 20}}>
            <Text style={{color: '#999999', fontSize: 10, fontWeight: 'bold'}}>
              TRIP
            </Text>
            <Text style={{color: 'white', fontWeight: 'bold'}}>THEMES</Text>
          </View>
        </View>

        <View>
          <HomeTheme onPress={() => navigation.navigate('TripDestinations')} />
        </View>

        <View>
          <View style={{marginTop: 30, marginLeft: 20}}>
            <Text style={{color: '#999999', fontSize: 10, fontWeight: 'bold'}}>
              TRENDING
            </Text>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              DESTINATIONS
            </Text>
          </View>
          <HomeTrendCard
            onPress={() => navigation.navigate('TrendingInDestinations')}
          />
        </View>

        <View>
          <HomeSpecialOffers
            onPress={() => navigation.navigate('SpecialOffersIn')}
          />
        </View>

        <View backgroundColor={'#f7f7f7'}>
          <View style={{marginTop: 30, marginLeft: 20}}>
            <Text style={{color: '#999999', fontSize: 10, fontWeight: 'bold'}}>
              TOP ADVENTURE
            </Text>
            <Text style={{color: '#111111', fontWeight: 'bold'}}>
              DESTINATIONS
            </Text>
          </View>

          <TopAdventureCard
            onPress={() => navigation.navigate('TripCollection')}
          />
        </View>

        <View>
          <View style={{marginTop: 30, marginLeft: 20}}>
            <Text style={{color: '#999999', fontSize: 10, fontWeight: 'bold'}}>
              TOP NATURE
            </Text>
            <Text style={{color: '#111111', fontWeight: 'bold'}}>
              DESTINATIONS
            </Text>
          </View>
          <HomeTopNature />
        </View>

        <View backgroundColor={'#f7f7f7'}>
          <View style={{marginTop: 30, marginLeft: 20}}>
            <Text style={{color: '#999999', fontSize: 10, fontWeight: 'bold'}}>
              TOP WILD
            </Text>
            <Text style={{color: '#111111', fontWeight: 'bold'}}>
              DESTINATIONS
            </Text>
          </View>
          <HomeTopWild />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    color: 'white',
    fontSize: 18,
    marginHorizontal: 'auto',
    width: '90%',
    textAlign: 'center',
  },
  header: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#4a4a4a',
    alignItems: 'center',
  },
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
});
export default Home;
