import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const About = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <Image
        source={require('../../img/bgnew.png')}
        style={{position: 'absolute', width: '100%', height: 400}}
      />
      <ScrollView>
        <View style={styles.Container}>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Home');
              }}
              activeOpacity={0.4}>
              <Icon name="arrow-back" size={28} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles.headtitle}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
              ABOUT US
            </Text>
            <Text style={{color: '#aaaaaa', fontWeight: 'bold', fontSize: 14}}>
              Mi in nulla posuere sollicitud in aliquam.
            </Text>
          </View>
          <View style={styles.abouttextCon}>
            <Text style={styles.abouttext}>
              Lorem ipsum dolor sit amet. consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Text style={styles.abouttext}>
              ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  abouttext: {
    color: '#aaaaaa',
    paddingBottom: 5,
    marginVertical: 5,
    fontWeight: '500',
  },
  abouttextCon: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 5,
  },
  headtitle: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  Container: {
    margin: 20,
  },
});
export default About;
