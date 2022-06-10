import React from 'react';
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import TrendInDestinations from '../../Data/TrendInDestinations';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeTrendCard = () => {
  return (
    <View style={{alignItems: 'center', marginVertical: 10, flex: 1}}>
      {TrendInDestinations.map(trendindestinations => (
        <View style={{marginBottom: 20}}>
          <View style={styles.CardContainer}>
            <TouchableOpacity>
              <View>
                <ImageBackground
                  borderRadius={10}
                  source={{uri: trendindestinations.TrendInDestinations.image}}
                  style={styles.CardImage}>
                  <Icon
                    name="heart"
                    size={24}
                    style={{color: 'red', textAlign: 'right', margin: 5}}
                  />
                  <View
                    style={{flex: 1, justifyContent: 'flex-end', margin: 10}}>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>
                      Greece Real Food Adventure
                    </Text>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>
                      Tour Package
                    </Text>
                  </View>
                  <View
                    style={{
                      position: 'absolute',
                      backgroundColor: '#11b619',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: 120,
                      marginLeft: 240,
                      width: 140,
                      borderBottomLeftRadius: 10,
                      borderTopLeftRadius: 10,
                    }}>
                    <View style={{marginVertical: 10, marginHorizontal: 5}}>
                      <Text style={{color: 'white'}}>
                        {trendindestinations.TrendInDestinations.day}
                      </Text>
                    </View>
                  </View>
                </ImageBackground>
              </View>
            </TouchableOpacity>

            <View style={styles.cardTextContainer}>
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Text style={{color: '#24af2b', fontWeight: '500'}}>
                    {' '}
                    starting From{' '}
                  </Text>
                  <Text
                    style={{color: 'black', fontWeight: 'bold', fontSize: 15}}>
                    {' '}
                    {trendindestinations.TrendInDestinations.price}
                    <Text
                      style={{
                        color: '#999999',
                        fontSize: 13,
                        fontWeight: '500',
                      }}>
                      {' '}
                      per Person on twin sharing
                    </Text>
                  </Text>
                </View>
              </View>

              <View
                style={{
                  borderBottomColor: '#f1f1f1',
                  borderBottomWidth: 1,
                  marginVertical: 7,
                }}
              />

              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{marginHorizontal: 5, marginVertical: 10}}>
                  <Text style={{color: 'black', fontSize: 12}}>
                    <Text>
                      {' '}
                      {trendindestinations.TrendInDestinations.departure}{' '}
                    </Text>
                    <Icon name="arrow-forward" size={12} />
                    <Text>
                      {' '}
                      {trendindestinations.TrendInDestinations.landing}{' '}
                    </Text>
                  </Text>
                </View>

                <View style={{flexDirection: 'row', margin: 5}}>
                  <Icon
                    name="airplane"
                    size={23}
                    style={{margin: 3, color: '#b3b3b3'}}
                  />
                  <Icon
                    name="car"
                    size={23}
                    style={{margin: 3, color: '#b3b3b3'}}
                  />
                  <Icon
                    name="bed"
                    size={23}
                    style={{margin: 3, color: '#b3b3b3'}}
                  />
                  <Icon
                    name="restaurant"
                    size={23}
                    style={{margin: 3, color: '#b3b3b3'}}
                  />
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: '500',
                      fontSize: 15,
                      margin: 3,
                    }}>
                    +4
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  CardContainer: {
    height: 290,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 15,
    elevation: 5,
  },
  CardImage: {
    height: 175,
    width: 380,
    borderRadius: 15,
    zIndex: 999,
  },
  cardTextContainer: {
    margin: 10,
  },
});
export default HomeTrendCard;
