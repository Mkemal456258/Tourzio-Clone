import React from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import SpecialOffersTripCard from '../../Data/SpecialOffersTripCard';

const SpecialOffersTripCardDesign = () => {
  return (
    <View>
      <ScrollView
        style={{marginTop: 10}}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {SpecialOffersTripCard.map(specialofferstripcard => (
          <View style={{marginRight: 10, marginBottom: 20, marginLeft: 10}}>
            <Image
              source={{uri: specialofferstripcard.SpecialOffersTrip.image}}
              style={styles.CardImage}
            />
            <View style={styles.CardContainer}>
              <View style={{alignItems: 'center'}}>
                <View style={styles.cardTextContainer}>
                  <Text style={{color: '#363636', fontWeight: 'bold'}}>
                    {' '}
                    {specialofferstripcard.SpecialOffersTrip.name}{' '}
                  </Text>
                  <Text
                    style={{color: '#999999', fontWeight: '500', fontSize: 10}}>
                    {' '}
                    {specialofferstripcard.SpecialOffersTrip.location}
                    <Text>
                      {' '}
                      {specialofferstripcard.SpecialOffersTrip.time}{' '}
                    </Text>{' '}
                  </Text>

                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 10,
                      marginBottom: 10,
                    }}>
                    <Icon name="star" size={18} color={'#fec107'} />
                    <Icon name="star" size={18} color={'#fec107'} />
                    <Icon name="star" size={18} color={'#fec107'} />
                    <Icon name="star" size={18} color={'#9e9e9e'} />
                    <Icon name="star" size={18} color={'#9e9e9e'} />
                  </View>
                  <Text
                    style={{
                      color: '#7e7e7e',
                      fontWeight: '500',
                      fontSize: 10,
                      textAlign: 'center',
                      marginTop: 5,
                    }}>
                    {' '}
                    {specialofferstripcard.SpecialOffersTrip.about}{' '}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignSelf: 'auto',
                      marginTop: 25,
                    }}>
                    <TouchableOpacity>
                      <View style={{flexDirection: 'row', marginRight: 30}}>
                        <Feather name="thumbs-up" size={16} color={'red'} />
                        <Text
                          style={{
                            color: 'red',
                            fontSize: 12,
                            fontWeight: '500',
                          }}>
                          {' '}
                          {specialofferstripcard.SpecialOffersTrip.like} Likes
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <View style={{flexDirection: 'row'}}>
                        <Icon name="arrow-undo" size={14} color={'#999999'} />
                        <Text
                          style={{
                            color: '#999999',
                            fontWeight: '500',
                            fontSize: 10,
                          }}>
                          {' '}
                          Reply
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  CardContainer: {
    height: 250,
    width: 250,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 6,
    borderRadius: 5,
    zIndex: 1,
    paddingTop: 50,
  },
  CardImage: {
    position: 'relative',
    zIndex: 999,
    top: 50,
    height: 100,
    width: 100,
    borderRadius: 50,
    alignSelf: 'center',
  },
  cardTextContainer: {
    margin: 10,
    alignItems: 'center',
  },
});
export default SpecialOffersTripCardDesign;
