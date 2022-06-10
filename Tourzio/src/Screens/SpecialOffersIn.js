import React from 'react';
import {
  SafeAreaView,
  Text,
  ImageBackground,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {DataTable} from 'react-native-paper';
import MapView from 'react-native-maps';

import SpecialOffersTripCard from '../Components/SpecialOffersTripCard';
import TrendDesinationsCard from '../Components/TrendingInDestinationsCard';

const SpecialOffersIn = ({navigation}) => {
  return (
    <SafeAreaView>
      <ImageBackground
        style={styles.headerimg}
        source={{
          uri: 'https://mwallpaper.ir/wp-content/uploads/2021/10/%D9%88%D8%A7%D9%84%D9%BE%DB%8C%D9%BE%D8%B1-%DA%A9%D9%88%D9%87-%D9%87%D8%A7%DB%8C-%D9%BE%D9%88%D8%B4%DB%8C%D8%AF%D9%87-%D8%A7%D8%B2-%D8%A8%D8%B1%D9%81.jpg',
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
      </ImageBackground>
      <ScrollView style={{marginBottom: 250}}>
        <View
          style={{
            width: '100%',
            height: 150,
            backgroundColor: 'white',
            padding: 20,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: 'black',
              marginBottom: 20,
            }}>
            Dolomoties center - based Cycling
          </Text>
          <View>
            <Text style={{color: '#999999', fontWeight: '500'}}>From</Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>
                $2499
                <Text
                  style={{color: '#999999', fontWeight: '500', fontSize: 14}}>
                  {' '}
                  for 8 day
                </Text>
              </Text>
              <View style={{flexDirection: 'row', margin: 5}}>
                <Icon
                  name="airplane"
                  size={20}
                  style={{margin: 5, color: '#b3b3b3'}}
                />
                <Icon
                  name="car"
                  size={20}
                  style={{margin: 5, color: '#b3b3b3'}}
                />
                <Icon
                  name="glasses"
                  size={20}
                  style={{margin: 5, color: '#b3b3b3'}}
                />
                <Text
                  style={{
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: 15,
                    margin: 4,
                  }}>
                  +4
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{padding: 20}}>
          <View>
            <Text style={{color: '#999999', fontSize: 10, fontWeight: 'bold'}}>
              TOUR
            </Text>
            <Text style={{color: '#111111', fontWeight: 'bold'}}>OVERVIEW</Text>
          </View>
          <View>
            <Text style={{fontWeight: '500', color: '#797979'}}>
              Praesent in commodo felis. sit amet ornare dui. Nulla ultrices
              erat eget semper volutpat. Nulla at arcu finibus. sodales sapien
              at, condimentum nibh. Cras nec purus tincidunt, placerat enim eu,
              mollis sapien,sit amet ornate dui.
            </Text>
            <View style={{alignItems: 'flex-end'}}>
              <TouchableOpacity
                onPress={() => console.log('Tıklandı!')}
                style={styles.buttonStyle}>
                <Text style={styles.textStyle}> READ MORE </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{padding: 20, backgroundColor: 'white'}}>
          <View>
            <Text style={{color: '#999999', fontSize: 10, fontWeight: 'bold'}}>
              ESSENTIAL
            </Text>
            <Text style={{color: '#111111', fontWeight: 'bold'}}>INFO</Text>
          </View>
          <View>
            <View style={{marginVertical: 5}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: 'black', fontWeight: '500'}}>Starts</Text>
                <Text>Starts Dobbiaco</Text>
              </View>
              <View
                style={{
                  borderBottomColor: '#f1f1f1',
                  borderBottomWidth: 1,
                  marginVertical: 7,
                }}
              />
            </View>

            <View style={{marginVertical: 5}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: 'black', fontWeight: '500'}}>Ends</Text>
                <Text>End Dobbiaco</Text>
              </View>
              <View
                style={{
                  borderBottomColor: '#f1f1f1',
                  borderBottomWidth: 1,
                  marginVertical: 7,
                }}
              />
            </View>

            <View style={{marginVertical: 5}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: 'black', fontWeight: '500'}}>Ages</Text>
                <Text>Min 16</Text>
              </View>
              <View
                style={{
                  borderBottomColor: '#f1f1f1',
                  borderBottomWidth: 1,
                  marginVertical: 7,
                }}
              />
            </View>

            <View style={{marginVertical: 5}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: 'black', fontWeight: '500'}}>
                  Countries Visited
                </Text>
                <Text>Italy</Text>
              </View>
              <View
                style={{
                  borderBottomColor: '#f1f1f1',
                  borderBottomWidth: 1,
                  marginVertical: 7,
                }}
              />
            </View>

            <View style={{marginVertical: 5}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: 'black', fontWeight: '500'}}>Theme</Text>
                <Text>Cycling</Text>
              </View>
              <View
                style={{
                  borderBottomColor: '#f1f1f1',
                  borderBottomWidth: 1,
                  marginVertical: 7,
                }}
              />
            </View>

            <View style={{marginVertical: 5}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: 'black', fontWeight: '500'}}>
                  Activity Level
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Icon name="radio-button-on" size={20} />
                  <Icon name="radio-button-on" size={20} />
                  <Icon name="radio-button-off" size={20} />
                  <Icon name="radio-button-off" size={20} />
                </View>
              </View>
              <View
                style={{
                  borderBottomColor: '#f1f1f1',
                  borderBottomWidth: 1,
                  marginVertical: 7,
                }}
              />
            </View>
          </View>
        </View>

        <View style={{padding: 20}}>
          <View>
            <Text style={{color: '#999999', fontSize: 10, fontWeight: 'bold'}}>
              WHAT's
            </Text>
            <Text style={{color: '#111111', fontWeight: 'bold'}}>INCLUDED</Text>
          </View>
          <View style={{marginVertical: 10}}>
            <View style={{flexDirection: 'row'}}>
              <Icon
                name="checkmark-circle-outline"
                size={24}
                style={{color: 'black'}}
              />
              <Text style={{color: 'black', fontWeight: '500'}}>
                {' '}
                Breakfast{' '}
              </Text>
            </View>
            <View
              style={{
                borderBottomColor: '#e9e9e9',
                borderBottomWidth: 1,
                marginVertical: 7,
              }}
            />
          </View>

          <View style={{marginVertical: 10}}>
            <View style={{flexDirection: 'row'}}>
              <Icon
                name="checkmark-circle-outline"
                size={24}
                style={{color: 'black'}}
              />
              <Text style={{color: 'black', fontWeight: '500'}}>
                {' '}
                Private car Transfer{' '}
              </Text>
            </View>
            <View
              style={{
                borderBottomColor: '#e9e9e9',
                borderBottomWidth: 1,
                marginVertical: 7,
              }}
            />
          </View>

          <View style={{marginVertical: 10}}>
            <View style={{flexDirection: 'row'}}>
              <Icon
                name="checkmark-circle-outline"
                size={24}
                style={{color: 'black'}}
              />
              <Text style={{color: 'black', fontWeight: '500'}}>
                {' '}
                SIC for Tours{' '}
              </Text>
            </View>
            <View
              style={{
                borderBottomColor: '#e9e9e9',
                borderBottomWidth: 1,
                marginVertical: 7,
              }}
            />
          </View>

          <View style={{alignItems: 'flex-end'}}>
            <TouchableOpacity
              onPress={() => console.log('Tıklandı!')}
              style={styles.buttonStyle}>
              <Text style={styles.textStyle}> READ MORE </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{padding: 20, backgroundColor: 'white'}}>
          <View>
            <Text style={{color: '#999999', fontSize: 10, fontWeight: 'bold'}}>
              WHAT's
            </Text>
            <Text style={{color: '#111111', fontWeight: 'bold'}}>EXCLUDED</Text>
          </View>
          <View style={{marginVertical: 10}}>
            <View style={{flexDirection: 'row'}}>
              <Icon
                name="checkmark-circle-outline"
                size={24}
                style={{color: 'black'}}
              />
              <Text style={{color: 'black', fontWeight: '500'}}> Flights </Text>
            </View>
            <View
              style={{
                borderBottomColor: '#e9e9e9',
                borderBottomWidth: 1,
                marginVertical: 7,
              }}
            />
          </View>

          <View style={{marginVertical: 10}}>
            <View style={{flexDirection: 'row'}}>
              <Icon
                name="checkmark-circle-outline"
                size={24}
                style={{color: 'black'}}
              />
              <Text style={{color: 'black', fontWeight: '500'}}>
                {' '}
                Anything not mentioned in the inclusions{' '}
              </Text>
            </View>
            <View
              style={{
                borderBottomColor: '#e9e9e9',
                borderBottomWidth: 1,
                marginVertical: 7,
              }}
            />
          </View>

          <View style={{marginVertical: 10}}>
            <View style={{flexDirection: 'row'}}>
              <Icon
                name="checkmark-circle-outline"
                size={24}
                style={{color: 'black'}}
              />
              <Text style={{color: 'black', fontWeight: '500'}}>
                {' '}
                Travel Insurance{' '}
              </Text>
            </View>
            <View
              style={{
                borderBottomColor: '#e9e9e9',
                borderBottomWidth: 1,
                marginVertical: 7,
              }}
            />
          </View>
        </View>

        <View style={{padding: 20}}>
          <View style={{marginBottom: 10}}>
            <Text style={{color: '#999999', fontSize: 10, fontWeight: 'bold'}}>
              ITINERARY AND
            </Text>
            <Text style={{color: '#111111', fontWeight: 'bold'}}>NOTES</Text>
          </View>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                paddingHorizontal: 10,
                paddingVertical: 15,
                borderRadius: 5,
                justifyContent: 'space-between',
                marginBottom: 3,
              }}>
              <Text style={{color: 'black', fontWeight: '500'}}>
                DAY 1 - Start Dobbiaco{' '}
              </Text>
              <Icon name="chevron-forward" size={24} color="black" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                paddingHorizontal: 10,
                paddingVertical: 15,
                borderRadius: 5,
                justifyContent: 'space-between',
                marginBottom: 3,
              }}>
              <Text style={{color: 'black', fontWeight: '500'}}>
                DAY 2 - Transfer to Saxten Valley{' '}
              </Text>
              <Icon name="chevron-forward" size={24} color="black" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                paddingHorizontal: 10,
                paddingVertical: 15,
                borderRadius: 5,
                justifyContent: 'space-between',
                marginBottom: 3,
              }}>
              <Text style={{color: 'black', fontWeight: '500'}}>
                DAY 3 - Riding along the Rienz River{' '}
              </Text>
              <Icon name="chevron-forward" size={24} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                paddingHorizontal: 10,
                paddingVertical: 15,
                borderRadius: 5,
                justifyContent: 'space-between',
                marginBottom: 3,
              }}>
              <Text style={{color: 'black', fontWeight: '500'}}>
                DAY 4 - Transfer to Saxten Valley{' '}
              </Text>
              <Icon name="chevron-forward" size={24} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                paddingHorizontal: 10,
                paddingVertical: 15,
                borderRadius: 5,
                justifyContent: 'space-between',
                marginBottom: 3,
              }}>
              <Text style={{color: 'black', fontWeight: '500'}}>
                DAY 5 - Riding along the Rienz River{' '}
              </Text>
              <Icon name="chevron-forward" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </View>

        <View style={{padding: 20, backgroundColor: 'white'}}>
          <DataTable>
            <DataTable.Header
              style={{
                backgroundColor: '#4b4b4b',
                borderRadius: 5,
                color: 'white',
              }}>
              <DataTable.Title>
                <Text style={{color: 'white', fontWeight: '500'}}>Date</Text>
              </DataTable.Title>
              <DataTable.Title>
                <Text style={{color: 'white', fontWeight: '500'}}>Price</Text>
              </DataTable.Title>
              <DataTable.Title>
                <Text style={{color: 'white', fontWeight: '500'}}>
                  Availibility
                </Text>
              </DataTable.Title>
            </DataTable.Header>

            <DataTable.Row>
              <DataTable.Cell>
                <Text style={styles.cell}>20 Jul - 27 Jul 2019</Text>
              </DataTable.Cell>
              <DataTable.Cell numeric>
                <Text style={styles.cell}>$1,199pp</Text>
              </DataTable.Cell>
              <DataTable.Cell numeric>
                <Text style={styles.cell}>Good</Text>
              </DataTable.Cell>
              <DataTable.Cell numeric>
                <TouchableOpacity
                  onPress={() => console.log('Tıklandı!')}
                  style={styles.tablebuttonStyle}>
                  <Text style={styles.tabletextStyle}> BOOK </Text>
                </TouchableOpacity>
              </DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>
                <Text style={styles.cell}>14 Sep - 22 Sep 2019</Text>
              </DataTable.Cell>
              <DataTable.Cell numeric>
                <Text style={styles.cell}>$1,269pp</Text>
              </DataTable.Cell>
              <DataTable.Cell numeric>
                <Text style={styles.cell}>Booked</Text>
              </DataTable.Cell>
              <DataTable.Cell numeric>
                <TouchableOpacity
                  onPress={() => console.log('Tıklandı!')}
                  style={styles.tablebuttonStyle}>
                  <Text style={styles.tabletextStyle}> BOOK </Text>
                </TouchableOpacity>
              </DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>
                <Text style={styles.cell}>22 Oct - 28 Oct 2019</Text>
              </DataTable.Cell>
              <DataTable.Cell numeric>
                <Text style={styles.cell}>$1,080pp</Text>
              </DataTable.Cell>
              <DataTable.Cell numeric>
                <Text style={styles.cell}>Good</Text>
              </DataTable.Cell>
              <DataTable.Cell numeric>
                <TouchableOpacity
                  onPress={() => console.log('Tıklandı!')}
                  style={styles.tablebuttonStyle}>
                  <Text style={styles.tabletextStyle}> BOOK </Text>
                </TouchableOpacity>
              </DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>
                <Text style={styles.cell}>15 Nov - 20 Nov 2019</Text>
              </DataTable.Cell>
              <DataTable.Cell numeric>
                <Text style={styles.cell}>$1,469pp</Text>
              </DataTable.Cell>
              <DataTable.Cell numeric>
                <Text style={styles.cell}>Good</Text>
              </DataTable.Cell>
              <DataTable.Cell numeric>
                <TouchableOpacity
                  onPress={() => console.log('Tıklandı!')}
                  style={styles.tablebuttonStyle}>
                  <Text style={styles.tabletextStyle}> BOOK </Text>
                </TouchableOpacity>
              </DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>
                <Text style={styles.cell}>14 Dec - 22 Dec 2019</Text>
              </DataTable.Cell>
              <DataTable.Cell numeric>
                <Text style={styles.cell}>$2,269pp</Text>
              </DataTable.Cell>
              <DataTable.Cell numeric>
                <Text style={styles.cell}>Good</Text>
              </DataTable.Cell>
              <DataTable.Cell numeric>
                <TouchableOpacity
                  onPress={() => console.log('Tıklandı!')}
                  style={styles.tablebuttonStyle}>
                  <Text style={styles.tabletextStyle}> BOOK </Text>
                </TouchableOpacity>
              </DataTable.Cell>
            </DataTable.Row>
          </DataTable>
        </View>
        <View style={{padding: 20}}>
          <View style={{marginBottom: 10}}>
            <Text style={{color: '#999999', fontSize: 10, fontWeight: 'bold'}}>
              TOUR
            </Text>
            <Text style={{color: '#111111', fontWeight: 'bold'}}>MAP</Text>
          </View>
        </View>
        <View style={{paddingBottom: 20}}>
          <MapView
            style={{width: '100%', height: 250}}
            initialRegion={{
              latitude: 37.7882,
              longitude: -122.4,
              latitudeDelta: 0,
              longitudeDelta: 0,
            }}
          />
        </View>
        <View style={{padding: 20, backgroundColor: 'white'}}>
          <View style={{marginTop: 10}}>
            <Text style={{color: '#999999', fontSize: 10, fontWeight: 'bold'}}>
              TRIP
            </Text>
            <Text style={{color: '#111111', fontWeight: 'bold'}}>REVIEWS</Text>
          </View>

          <View>
            <SpecialOffersTripCard />
          </View>
        </View>

        <View style={{padding: 20}}>
          <View style={{marginTop: 10}}>
            <Text style={{color: '#999999', fontSize: 10, fontWeight: 'bold'}}>
              SIMILAR
            </Text>
            <Text style={{color: '#111111', fontWeight: 'bold'}}>TRIPS</Text>
          </View>

          <View>
            <TrendDesinationsCard />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tabletextStyle: {
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    fontWeight: '600',
    margin: 5,
  },
  tablebuttonStyle: {
    backgroundColor: '#2faf35',
    borderRadius: 5,
  },
  cell: {
    color: 'black',
    fontWeight: '500',
    fontSize: 10,
  },
  textStyle: {
    alignSelf: 'center',
    color: '#2faf35',
    fontWeight: '500',
    fontSize: 10,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonStyle: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#e7e7e7',
    paddingHorizontal: 20,
  },
  headerimg: {
    height: 250,
    width: '100%',
  },
});

export default SpecialOffersIn;
