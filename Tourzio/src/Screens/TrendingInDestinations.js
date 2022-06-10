import React from 'react';
import {
  ImageBackground,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import TrendingInDestinationsCard from '../Components/TrendingInDestinationsCard';
import Button from '../common/Button';
import TrendinginDestinationsTopCard from '../Components/TrendinginDestinationsTopCard';
import Icon from 'react-native-vector-icons/Ionicons';

const TrendingInDestinations = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <ImageBackground
        style={styles.headerimg}
        source={{
          uri: 'https://images.unsplash.com/photo-1498503403619-e39e4ff390fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        }}>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home');
            }}
            activeOpacity={0.4}>
            <Icon
              name="arrow-back"
              size={24}
              color="white"
              style={{zIndex: 999, position: 'absolute', margin: 15}}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '75%',
            width: '100%',
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: 28,
              marginTop: 50,
            }}>
            G R E E C E
          </Text>
          <Text style={{textAlign: 'center', color: 'white', fontSize: 14}}>
            8988+ Bookings - 188 Agents
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: '25%',
            width: '100%',
          }}>
          <View style={{marginLeft: 15}}>
            <Text style={{color: 'white', fontSize: 14}}>
              Best time to visit
            </Text>
            <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
              Oct - Mar
            </Text>
          </View>

          <View style={{marginRight: 15}}>
            <Text style={{color: 'white', fontSize: 14}}>Starting budged</Text>
            <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
              $ 2400 /person
            </Text>
          </View>
        </View>
      </ImageBackground>

      <ScrollView style={{marginBottom: 250}}>
        <View style={{marginHorizontal: 20}}>
          <View style={{marginTop: 30}}>
            <Text style={{color: '#999999', fontSize: 10, fontWeight: 'bold'}}>
              BEST SELLING
            </Text>
            <Text style={{color: '#111111', fontWeight: 'bold'}}>PACKAGES</Text>
          </View>
          <TrendingInDestinationsCard />
        </View>

        <View style={{marginHorizontal: 15}}>
          <TouchableOpacity
            onPress={() => console.log('Tıklandı!')}
            style={styles.buttonStyle}>
            <Text style={styles.textStyle}> VIEW ALL 288 PACKAGES </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            backgroundColor: '#f0f0f0',
            margin: 20,
            padding: 20,
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>
            {' '}
            Didn't find a. suitable package?
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 14,
              color: '#9b9b9b',
              textAlign: 'center',
              marginVertical: 15,
            }}>
            {' '}
            We can help you create a package as per your requirement{' '}
          </Text>
          <Button>
            <Text style={{fontSize: 14}}> REQUEST COSTOMIZED PACKAGES </Text>
          </Button>
        </View>

        <View>
          <View style={{marginTop: 30, marginLeft: 20}}>
            <Text style={{color: '#999999', fontSize: 10, fontWeight: 'bold'}}>
              TOP
            </Text>
            <Text style={{color: '#111111', fontWeight: 'bold'}}>
              ATTRACTIONS
            </Text>
          </View>
          <TrendinginDestinationsTopCard />
        </View>

        <View>
          <View style={{marginTop: 30, marginLeft: 20}}>
            <Text style={{color: '#999999', fontSize: 10, fontWeight: 'bold'}}>
              HOW TO
            </Text>
            <Text style={{color: '#111111', fontWeight: 'bold'}}>REACH?</Text>
          </View>

          <View
            style={{
              backgroundColor: '#f7f7f7',
              marginHorizontal: 20,
              marginVertical: 10,
              flexDirection: 'row',
              padding: 15,
              borderRadius: 5,
              alignItems: 'center',
            }}>
            <Icon name="airplane-outline" size={36} color={'black'} />
            <View style={{width: 300, marginLeft: 10}}>
              <Text style={{color: '#111111', fontWeight: 'bold'}}>By Air</Text>
              <Text style={{color: '#999999', fontSize: 13, fontWeight: '500'}}>
                The 2 main and busiest airports in Greece are in athens city and
                Thessaloniki city.
              </Text>
            </View>
          </View>

          <View
            style={{
              backgroundColor: '#f7f7f7',
              marginHorizontal: 20,
              marginVertical: 10,
              flexDirection: 'row',
              padding: 15,
              borderRadius: 5,
              alignItems: 'center',
            }}>
            <Icon name="train-outline" size={36} color={'black'} />
            <View style={{width: 300, marginLeft: 10}}>
              <Text style={{color: '#111111', fontWeight: 'bold'}}>
                By Train
              </Text>
              <Text style={{color: '#999999', fontSize: 13, fontWeight: '500'}}>
                The 2 main and busiest airports in Greece are in athens city and
                Thessaloniki city.
              </Text>
            </View>
          </View>

          <View
            style={{
              backgroundColor: '#f7f7f7',
              marginHorizontal: 20,
              marginVertical: 10,
              flexDirection: 'row',
              padding: 15,
              borderRadius: 5,
              alignItems: 'center',
            }}>
            <Icon name="boat-outline" size={36} color={'black'} />
            <View style={{width: 300, marginLeft: 10}}>
              <Text style={{color: '#111111', fontWeight: 'bold'}}>
                By Cruise
              </Text>
              <Text style={{color: '#999999', fontSize: 13, fontWeight: '500'}}>
                The 2 main and busiest airports in Greece are in athens city and
                Thessaloniki city.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
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
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#ef6701',
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5,
  },
  headerimg: {
    height: 250,
    width: '100%',
  },
});
export default TrendingInDestinations;
