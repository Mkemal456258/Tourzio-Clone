import React from 'react';
import {View, ScrollView} from 'react-native';
import Cardesign from '../common/cardDesign';
import topWild from '../../Data/TopWild';

const HomeTopWild = () => {
  return (
    <View>
      <ScrollView
        style={{marginTop: 10, marginLeft: 20}}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {topWild.map(topwild => (
          <Cardesign
            img={{uri: topwild.TopWild.image}}
            cardname={topwild.TopWild.name}
            price={topwild.TopWild.price}
          />
        ))}
      </ScrollView>
    </View>
  );
};
export default HomeTopWild;
