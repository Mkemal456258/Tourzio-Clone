import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SpecialOffersTripCard from '../../Data/SpecialOffersTripCard';
const DashboardFollowers = () => {
  return (
    <SafeAreaView>
      <View style={styles.SearchContainer}>
        <TextInput
          style={styles.SearchInputStyle}
          placeholder={'Fine your Destinations'}
        />
        <Icon
          name="search"
          size={15}
          color="#d3d3d3"
          style={styles.SearchImgStyle}
        />
      </View>
      <ScrollView
        style={{marginTop: 10}}
        Vertical={true}
        showsVerticalScrollIndicator={false}>
        {SpecialOffersTripCard.map(specialofferstripcard => (
          <View style={styles.follwersContainer}>
            <Image
              source={{uri: specialofferstripcard.SpecialOffersTrip.image}}
              style={styles.followersimg}
            />
            <View style={styles.followerstext}>
              <Text style={{fontSize: 14, fontWeight: '500'}}>
                {specialofferstripcard.SpecialOffersTrip.name}
              </Text>
              <Text
                style={{fontSize: 12, fontWeight: '500', color: '#a6a6a6a6'}}>
                {specialofferstripcard.SpecialOffersTrip.location}
              </Text>
            </View>
            <View style={{alignSelf: 'center'}}>
              <TouchableOpacity
                onPress={() => console.log('Tıklandı!')}
                style={styles.buttonStyle}>
                <Text style={styles.textStyle}> Following </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
    fontWeight: '600',
  },
  buttonStyle: {
    justifyContent: 'center',
    height: 30,
    width: 75,
    backgroundColor: 'black',
    borderRadius: 5,
    marginLeft: '40%',
  },
  followerstext: {
    marginLeft: 15,
    marginTop: 10,
    width: 100,
  },
  follwersContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: 'row',
  },
  followersimg: {
    width: 65,
    height: 65,
    borderRadius: 65,
  },
  SearchContainer: {
    flexDirection: 'row',
    paddingLeft: 20,
    margin: 15,
    borderRadius: 5,
    backgroundColor: '#eeeeee',
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
export default DashboardFollowers;
