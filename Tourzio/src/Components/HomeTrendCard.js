import React from 'react';
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import trends from '../../Data/TrendDestinations';

const HomeTrendCard = ({onPress}) => {
  return (
    <View>
      <ScrollView
        style={{marginTop: 10, marginLeft: 20}}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {trends.map(trendss => (
          <View style={{marginRight: 20, paddingBottom: 10, marginBottom: 20}}>
            <View style={styles.CardContainer}>
              <TouchableOpacity onPress={onPress}>
                <Image
                  source={{uri: trendss.trend.image}}
                  style={styles.CardImage}
                />
                <View style={styles.cardTextContainer}>
                  <Text style={{color: '#363636', fontWeight: 'bold'}}>
                    {' '}
                    {trendss.trend.name}{' '}
                  </Text>
                  <Text style={{color: '#999999'}}>
                    {' '}
                    starting:
                    <Text style={{color: '#24af2b', fontWeight: 'bold'}}>
                      {' '}
                      {trendss.trend.price}{' '}
                    </Text>
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  CardContainer: {
    height: 240,
    width: 150,
    backgroundColor: 'white',
    borderRadius: 15,
    elevation: 5,
  },
  CardImage: {
    height: 175,
    width: 150,
    borderRadius: 15,
    zIndex: 999,
  },
  cardTextContainer: {
    margin: 10,
  },
});
export default HomeTrendCard;
