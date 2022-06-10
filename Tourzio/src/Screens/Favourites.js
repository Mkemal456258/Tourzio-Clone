import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/Ionicons';

//Cards
import FavouritesDestinations from '../Components/FavouritesDestinations';
import FavouritesTours from '../Components/FavouritesTours';

const FirstRoute = () => (
  <ScrollView showsVerticalScrollIndicator={false}>
    <FavouritesDestinations />
  </ScrollView>
);

const SecondRoute = () => (
  <ScrollView showsVerticalScrollIndicator={false}>
    <FavouritesTours />
  </ScrollView>
);

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: 'transparent'}}
    style={{
      backgroundColor: '#4a4a4a',
      borderColor: 'white',
      shadowColor: 'transparent',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: 'white',
    }}
    renderLabel={({route}) => (
      <Text
        style={{
          fontWeight: 'bold',
          textAlign: 'center',
          color: 'white',
          backgroundColor: '#424242',
          alignSelf: 'center',
          width: 175,
          padding: 10,
        }}>
        {route.title}
      </Text>
    )}
  />
);

const renderScene = ({route}) => {
  switch (route.key) {
    case 'first':
      return <FirstRoute />;
    case 'second':
      return <SecondRoute />;
    default:
      return null;
  }
};

const Favourites = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'DESTINATIONS'},
    {key: 'second', title: 'TOURS'},
  ]);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Image
        source={require('../../img/bgnew.png')}
        style={{position: 'absolute', width: '100%', height: 400}}
      />
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

      <TabView
        style={{margin: 10, flex: 1}}
        navigationState={{index, routes}}
        renderTabBar={renderTabBar}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
    </SafeAreaView>
  );
};

export default Favourites;
