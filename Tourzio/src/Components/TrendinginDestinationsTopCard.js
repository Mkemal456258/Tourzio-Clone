import React from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
} from 'react-native';
import TrendInDestinationsSecond from '../../Data/TrendInDestinationsSecond';

const TrendinginDestinationsTopCard = () => {
  return (
    <View>
      <ScrollView
        style={{marginTop: 10, marginLeft: 20}}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {TrendInDestinationsSecond.map(trendindestinationsSecond => (
          <View style={{marginRight: 20, paddingBottom: 10, marginBottom: 20}}>
            <View style={styles.CardContainer}>
              <TouchableOpacity>
                <Image
                  source={{
                    uri: trendindestinationsSecond.TrendInDestinationsSecond
                      .image,
                  }}
                  style={styles.CardImage}
                />
                <View style={styles.cardTextContainer}>
                  <Text style={{color: '#363636', fontWeight: 'bold'}}>
                    {' '}
                    {
                      trendindestinationsSecond.TrendInDestinationsSecond.name
                    }{' '}
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
    height: 200,
    width: 150,
    backgroundColor: 'white',
    borderRadius: 15,
    elevation: 5,
  },
  CardImage: {
    height: 150,
    width: 150,
    borderRadius: 15,
  },
  cardTextContainer: {
    margin: 10,
  },
});
export default TrendinginDestinationsTopCard;
