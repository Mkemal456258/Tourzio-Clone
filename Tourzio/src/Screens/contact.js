import React from 'react';
import {
  Text,
  Image,
  SafeAreaView,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Contact = ({navigation}) => {
  return (
    <SafeAreaView>
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
              CONTACT
            </Text>
            <Text style={{color: '#aaaaaa', fontWeight: 'bold', fontSize: 14}}>
              Get in Touch With us
            </Text>
          </View>

          <View style={styles.contactContainer}>
            <View>
              <TextInput
                placeholder="NAME"
                placeholderTextColor={'#c2c2c2'}
                style={styles.inputStyle}
              />
              <TextInput
                placeholder="EMAIL ADDRESS"
                placeholderTextColor={'#c2c2c2'}
                style={styles.inputStyle}
              />
              <TextInput
                placeholder="MOBILE NUMBER"
                placeholderTextColor={'#c2c2c2'}
                style={styles.inputStyle}
              />
              <TextInput
                multiline={true}
                numberOfLines={10}
                placeholder="MESSAGE"
                placeholderTextColor={'#c2c2c2'}
                style={{
                  height: 150,
                  textAlignVertical: 'top',
                  backgroundColor: '#f2f2f2',
                  padding: 15,
                  borderRadius: 10,
                  marginBottom: 15,
                }}
              />

              <TouchableOpacity
                onPress={() => console.log('Tıklandı!')}
                style={styles.buttonStyle}>
                <Text style={styles.textStyle}> SEND </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.contactContainer}>
            <View style={styles.address}>
              <Icon name="location-sharp" size={28} color={'#b2b2b2'} />
              <View style={{marginHorizontal: 5}}>
                <Text style={styles.contacttitle}>ADDRESS</Text>
                <Text style={styles.contacttext}>47,East street</Text>
                <Text style={styles.contacttext}>Italy</Text>
              </View>
            </View>
            <View
              style={{
                borderBottomColor: '#f1f1f1',
                borderBottomWidth: 1,
                marginVertical: 7,
              }}
            />

            <View style={styles.address}>
              <Icon name="phone-portrait-outline" size={28} color={'#b2b2b2'} />
              <View style={{marginHorizontal: 5}}>
                <Text style={styles.contacttitle}>PHONE</Text>
                <Text style={styles.contacttext}>+91 987654 3210</Text>
              </View>
            </View>
            <View
              style={{
                borderBottomColor: '#f1f1f1',
                borderBottomWidth: 1,
                marginVertical: 7,
              }}
            />

            <View style={styles.address}>
              <Icon name="mail" size={28} color={'#b2b2b2'} />
              <View style={{marginHorizontal: 5}}>
                <Text style={styles.contacttitle}>ADDRESS</Text>
                <Text style={styles.contacttext}>info@tourzio.com</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contacttext: {
    color: '#191919',
    fontWeight: '500',
    fontSize: 12,
  },
  contacttitle: {
    fontWeight: '500',
    color: '#b2b2b2',
    fontSize: 14,
  },
  address: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonStyle: {
    width: '100%',
    backgroundColor: '#11b719',
    borderRadius: 5,
  },
  inputStyle: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  contactContainer: {
    borderRadius: 15,
    padding: 25,
    width: '100%',
    backgroundColor: 'white',
    marginVertical: 15,
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

export default Contact;
