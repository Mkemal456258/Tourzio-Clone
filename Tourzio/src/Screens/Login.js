import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Button from '../common/Button';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ıonIcon from 'react-native-vector-icons/Ionicons';

const Login = ({navigation}) => {
  return (
    //https://www.goodfreephotos.com/albums/france/paris/eiffel-tower-going-into-the-fog-and-mist.jpg
    <SafeAreaView>
      <ImageBackground
        source={require('../../img/eiffel.jpg')}
        style={{width: '100%', height: 800}}>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home');
            }}
            activeOpacity={0.4}>
            <ıonIcon
              name="arrow-back"
              size={28}
              color="white"
              style={{zIndex: 999, position: 'absolute', margin: 15}}
            />
          </TouchableOpacity>
        </View>
        <View style={{marginHorizontal: 40}}>
          <View style={styles.titleContainer}>
            <Text style={styles.title1}>TOURZIO</Text>
            <Text style={styles.title2}> We stay for you </Text>
          </View>
          <View>
            <TextInput
              placeholder="EMAIL ADRESS OR MOBILE NUMBER"
              placeholderTextColor={'white'}
              style={styles.inputStyle}
            />
            <TextInput
              placeholder="PASSWORD"
              placeholderTextColor={'white'}
              style={styles.inputStyle}
            />
          </View>
          <View style={{alignItems: 'flex-end', width: '100%'}}>
            <Text style={styles.forgotpass}>FORGOT PASSWORD?</Text>
          </View>
          <View style={{width: '100%', height: 50, marginTop: 10}}>
            <Button> LOG IN </Button>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title1}>OR</Text>
            <Text style={{color: 'white', marginTop: 20, fontWeight: 'bold'}}>
              {' '}
              Login with{' '}
            </Text>
          </View>
          <View style={styles.social}>
            <TouchableOpacity>
              <Text style={styles.facebook}>
                {' '}
                <Icon name="facebook" /> FACEBOOK{' '}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.Twitter}>
                {' '}
                <Icon name="twitter" /> Twitter{' '}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.Google}>
                {' '}
                <Icon name="google" /> Google +{' '}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.titleContainer}>
            <TouchableOpacity>
              <Text style={{color: 'white'}}> SıgnUp </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  facebook: {
    fontSize: 11,
    color: 'white',
    backgroundColor: '#4165b0',
    padding: 13,
    borderRadius: 10,
    marginRight: 10,
  },
  Twitter: {
    fontSize: 11,
    color: 'white',
    backgroundColor: '#5cb4f9',
    padding: 13,
    borderRadius: 10,
    marginRight: 10,
  },
  Google: {
    fontSize: 11,
    color: 'white',
    backgroundColor: '#dd553f',
    padding: 13,
    borderRadius: 10,
    marginRight: 10,
  },

  social: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  forgotpass: {
    color: 'white',
    fontSize: 10,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 175,
    width: '100%',
  },
  title1: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 28,
  },
  title2: {
    color: 'white',
    fontSize: 20,
  },
});
export default Login;
