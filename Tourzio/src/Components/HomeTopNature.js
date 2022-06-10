import React from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import Cardesign from '../common/cardDesign';
import topNature from '../../Data/TopNature';

const HomeTopNature = () => {
  return (
    <View>
      <ScrollView
        style={{marginTop: 10, marginLeft: 20}}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {topNature.map(topnature => (
          <Cardesign
            img={{uri: topnature.TopNature.image}}
            cardname={topnature.TopNature.name}
            price={topnature.TopNature.price}
          />
        ))}
      </ScrollView>
    </View>
  );
};
export default HomeTopNature;
