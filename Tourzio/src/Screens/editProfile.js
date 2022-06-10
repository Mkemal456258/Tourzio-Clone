import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

const EditProfile = ({navigation}) => {
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
              navigation.navigate('profile');
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
          </View>
        </View>
      </ImageBackground>
      <ScrollView style={{marginBottom: 250}}>
        <View style={{marginHorizontal: 20, marginVertical: 40}}>
          <Text style={{color: 'black', fontWeight: 'bold', marginBottom: 25}}>
            EDIT PROFILE
          </Text>

          <View style={styles.rowinputContainer}>
            <View style={{width: '45%'}}>
              <Text style={styles.inputTitle}>Name</Text>
              <TextInput style={styles.inputStyle} />
            </View>
            <View style={{width: '45%'}}>
              <Text style={styles.inputTitle}>Last Name</Text>
              <TextInput style={styles.inputStyle} />
            </View>
          </View>

          <Text style={styles.inputTitle}>Address</Text>
          <TextInput
            multiline={true}
            numberOfLines={10}
            style={{
              height: 150,
              textAlignVertical: 'top',
              backgroundColor: '#eeeeee',
              padding: 15,
              borderRadius: 10,
              marginBottom: 15,
            }}
          />

          <View style={styles.rowinputContainer}>
            <View style={{width: '45%'}}>
              <Text style={styles.inputTitle}>City</Text>
              <TextInput style={styles.inputStyle} />
            </View>
            <View style={{width: '45%'}}>
              <Text style={styles.inputTitle}>State</Text>
              <TextInput style={styles.inputStyle} />
            </View>
          </View>

          <Text style={styles.inputTitle}>Country</Text>
          <Picker
            selectedValue={'sec'}
            style={{
              backgroundColor: '#eeeeee',
            }}>
            <Picker.Item label="Seçiniz" value="sec" enabled />
            <Picker.Item label="Türkiye" value="turkey" />
            <Picker.Item label="India" value="India" />
            <Picker.Item label="Australia" value="Australia" />
            <Picker.Item label="America" value="America" />
            <Picker.Item label="Jappan" value="Jappan" />
            <Picker.Item label="China" value="China" />
          </Picker>

          <View style={styles.inputContainer}>
            <Text style={styles.inputTitle}>Postal Code</Text>
            <TextInput style={styles.inputStyle} keyboardType={'numeric'} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputTitle}>Email</Text>
            <TextInput
              style={styles.inputStyle}
              keyboardType={'email-address'}
              textContentType={'emailAddress'}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputTitle}>Phone Number</Text>
            <TextInput
              style={styles.inputStyle}
              keyboardType={'phone-pad'}
              textContentType={'telephoneNumber'}
            />
          </View>

          <View style={{alignItems: 'flex-end'}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              style={styles.savebuttonStyle}>
              <Text style={styles.savetextStyle}> SAVE </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
    width: '100%',
    height: 40,
  },
  rowinputContainer: {
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
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    color: 'black',
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

export default EditProfile;
