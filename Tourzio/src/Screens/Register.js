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
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TextInput
              placeholder="FIRST NAME"
              placeholderTextColor={'white'}
              style={styles.nameinputStyle}
            />
            <TextInput
              placeholder="LAST NAME"
              placeholderTextColor={'white'}
              style={styles.nameinputStyle}
            />
          </View>
          <View>
            <TextInput
              placeholder="EMAIL ADRESS"
              placeholderTextColor={'white'}
              style={styles.inputStyle}
            />
            <TextInput
              placeholder="MOBILE NUMBER"
              placeholderTextColor={'white'}
              style={styles.inputStyle}
            />
            <TextInput
              placeholder="PASSWORD"
              placeholderTextColor={'white'}
              style={styles.inputStyle}
            />
            <TextInput
              placeholder="CONFIRM PASSWORD"
              placeholderTextColor={'white'}
              style={styles.inputStyle}
            />
          </View>
          <View style={{width: '100%', height: 50, marginTop: 10}}>
            <Button> REGISTER </Button>
          </View>
          <View>
            <Text style={styles.haveaccountText}>
              you accept our Terms of Use and Privacy Policy.
            </Text>
            <TouchableOpacity activeOpacity={0.6}>
              <Text style={styles.haveaccountText}>
                Already have an Account?
                <Text style={{color: 'white', fontWeight: 'bold'}}>LogIn</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  haveaccountText: {
    marginVertical: 20,
    textAlign: 'center',
    color: 'white',
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  nameinputStyle: {
    borderWidth: 1,
    borderColor: 'white',
    width: 160,
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
