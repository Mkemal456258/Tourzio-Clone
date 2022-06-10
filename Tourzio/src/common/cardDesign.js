import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';

const HomeTrendCard = (props, {onPress}) => (
  <View style={{marginRight: 20, paddingBottom: 10, marginBottom: 20}}>
    <View style={styles.CardContainer}>
      <TouchableOpacity onPress={onPress}>
        <Image source={props.img} style={styles.CardImage} />
        <View style={styles.cardTextContainer}>
          <Text style={{color: '#363636', fontWeight: 'bold'}}>
            {' '}
            {props.cardname}{' '}
          </Text>
          <Text style={{color: '#999999'}}>
            {' '}
            starting:
            <Text style={{color: '#24af2b', fontWeight: 'bold'}}>
              {' '}
              {props.price}{' '}
            </Text>
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  CardContainer: {
    height: 230,
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
export default HomeTrendCard;
