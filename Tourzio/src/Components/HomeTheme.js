import React from 'react';
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Story from '../../Data/Story';

const HomeTrendCard = ({onPress}) => {
  return (
    <View>
      <ScrollView
        style={{marginTop: 10, marginLeft: 20}}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {Story.map(stories => (
          <TouchableOpacity onPress={onPress}>
            <View style={{width: 95}}>
              <View style={styles.ContainerStyle}>
                <Image
                  style={styles.ImageStyle}
                  source={{uri: stories.story.image}}
                />
              </View>
              <View style={styles.ContainerStyle}>
                <Text style={styles.titleStyle} numberOfLines={1}>
                  {stories.story.name}
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
  ContainerStyle: {
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImageStyle: {
    width: 65,
    height: 65,
    borderRadius: 60,
  },
  titleStyle: {
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',
  },
});
export default HomeTrendCard;
