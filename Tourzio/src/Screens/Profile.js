import React from 'react';
import {
  SafeAreaView,
  Text,
  ImageBackground,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Profile = ({navigation}) => {
  return (
    <SafeAreaView>
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
              onPress={() => navigation.navigate('editProfile')}
              style={styles.buttonStyle}>
              <Text style={styles.textStyle}> EDIT PROFILE </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>

      <View
        style={{
          marginVertical: 40,
          marginHorizontal: 20,
        }}>
        <Text style={{fontWeight: 'bold', color: 'black', marginBottom: 20}}>
          Change Password
        </Text>

        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Current Password</Text>
          <TextInput style={styles.inputStyle} secureTextEntry={true} />
        </View>

        <View style={styles.newPasswordContainer}>
          <View style={{width: '45%'}}>
            <Text style={styles.inputTitle}>New Password</Text>
            <TextInput style={styles.inputStyle} secureTextEntry={true} />
          </View>
          <View style={{width: '45%'}}>
            <Text style={styles.inputTitle}>Verify New Password</Text>
            <TextInput style={styles.inputStyle} secureTextEntry={true} />
          </View>
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={styles.savebuttonStyle}>
            <Text style={styles.savetextStyle}> SAVE </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  savetextStyle: {
    color: 'white',
    fontWeight: '500',
  },
  savebuttonStyle: {
    justifyContent: 'center',
    backgroundColor: '#11b719',
    borderRadius: 5,
    alignItems: 'center',
    alignContent: 'center',
    width: 100,
    height: 40,
  },
  newPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputTitle: {
    fontSize: 12,
    color: 'black',
    fontWeight: '500',
    marginBottom: 5,
  },
  inputContainer: {
    marginVertical: 5,
  },
  inputStyle: {
    backgroundColor: '#eeeeee',
    padding: 15,
    borderRadius: 5,
    marginBottom: 15,
    color: 'black',
  },
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 11,
    fontWeight: '600',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  buttonStyle: {
    marginVertical: 10,
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
    height: 250,
    width: '100%',
  },
});

export default Profile;
