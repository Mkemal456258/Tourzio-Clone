import React from 'react';
import {Text, View, ScrollView, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import specialoffers from '../../Data/specialoffers';

const HomeSpecialOffers = ({onPress}) => {
  return (
    <View>
      <View style={{marginTop: 10, marginLeft: 20}}>
        <Text style={{color: '#9b9b9b', fontSize: 10, fontWeight: 'bold'}}>
          SPECIAL
        </Text>
        <Text style={{color: '#111111', fontWeight: 'bold'}}>OFFERS</Text>
      </View>
      <ScrollView
        style={{marginTop: 10, marginLeft: 20}}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {specialoffers.map(offers => (
          <TouchableOpacity onPress={onPress}>
            <View style={{marginRight: 20, paddingBottom: 10}}>
              <Image
                source={{uri: offers.offer.image}}
                style={styles.CardImage}
              />
              <View style={styles.cardTextContainer}>
                <Text style={{color: '#363636', fontWeight: 'bold'}}>
                  {offers.offer.name}
                </Text>
                <Text style={{color: '#9b9b9b'}}>{offers.offer.Days}</Text>
                <Text style={{color: '#24af2b', fontWeight: 'bold'}}>
                  {' '}
                  {offers.offer.price}{' '}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  CardImage: {
    height: 175,
    width: 225,
    borderRadius: 15,
    zIndex: 999,
  },
  cardTextContainer: {
    backgroundColor: 'white',
    width: 225,
    height: 95,
    padding: 10,
    paddingTop: 15,
    borderBottomStartRadius: 15,
    borderBottomEndRadius: 15,
  },
});
export default HomeSpecialOffers;
