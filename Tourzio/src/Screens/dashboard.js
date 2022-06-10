import React from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import TabViewExample from '../common/dashboard-tabview';

const Dashboard = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        style={styles.headerimg}
        source={{
          uri: 'https://images.unsplash.com/photo-1498503403619-e39e4ff390fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        }}>
        <View style={{padding: 10}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home');
            }}
            activeOpacity={0.4}>
            <Icon name="arrow-back" size={28} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.dashboardprofile}>
          <Image
            style={{width: 100, height: 100}}
            borderRadius={50}
            source={{
              uri: 'https://freedesignfile.com/upload/2018/08/Beautiful-woman-sitting-on-the-steps-by-the-sea-Stock-Photo.jpg',
            }}
          />
          <View style={styles.profilenameContainer}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              Catherine Zeta
            </Text>
            <Text style={{color: 'white', fontSize: 12, marginVertical: 3}}>
              New Yark, USA
            </Text>
            <TouchableOpacity
              onPress={() => console.log('Tıklandı!')}
              style={styles.buttonStyle}>
              <Text style={styles.textStyle}> FOLLOW </Text>
            </TouchableOpacity>
          </View>
        </View>
        <TabViewExample />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 10,
    fontWeight: '600',
    paddingTop: 5,
    paddingBottom: 5,
  },
  buttonStyle: {
    width: '100%',
    backgroundColor: '#11b719',
    borderRadius: 5,
  },
  profilenameContainer: {
    margin: 15,
  },
  dashboardprofile: {
    marginHorizontal: 50,
    marginVertical: 25,
    flexDirection: 'row',
  },
  headerimg: {
    height: '100%',
    width: '100%',
  },
});

export default Dashboard;
