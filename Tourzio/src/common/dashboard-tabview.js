import React from 'react';
import {
  View,
  useWindowDimensions,
  StyleSheet,
  Box,
  Pressable,
  Text,
  ScrollView,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

//Cards
import DasboardTripcard from '../Components/DashboardTripcard';
import DashboardFollowers from '../Components/DashboardFollowers';
import DashboardFollowing from '../Components/DashboardFollowing';

const FirstRoute = () => (
  <View style={{backgroundColor: 'white', flex: 1}}>
    <ScrollView>
      <View style={{marginTop: 15, marginHorizontal: 15}}>
        <Text style={{fontSize: 16, fontWeight: '500', color: 'black'}}>
          TripDetail
        </Text>
      </View>
      <DasboardTripcard />
    </ScrollView>
  </View>
);

const SecondRoute = () => (
  <View style={{backgroundColor: 'white', flex: 1}}>
    <ScrollView>
      <View style={{marginTop: 15, marginHorizontal: 15}}>
        <Text style={{fontSize: 16, fontWeight: '500', color: 'black'}}>
          Followers
        </Text>
      </View>
      <DashboardFollowers />
    </ScrollView>
  </View>
);

const ThirtRoute = () => (
  <View style={{backgroundColor: 'white', flex: 1}}>
    <ScrollView>
      <View style={{marginTop: 15, marginHorizontal: 15}}>
        <Text style={{fontSize: 16, fontWeight: '500', color: 'black'}}>
          Following
        </Text>
      </View>
      <DashboardFollowing />
    </ScrollView>
  </View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  tree: ThirtRoute,
});

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: 'white'}}
    style={{
      backgroundColor: 'transparent',
      borderColor: 'white',
      shadowColor: 'transparent',
    }}
    renderLabel={({route, focused, color}) => (
      <View>
        <Text
          style={{
            fontWeight: 'bold',
            color: 'white',
            margin: 8,
            textAlign: 'center',
          }}>
          {route.title}
        </Text>
      </View>
    )}
  />
);

const tabviewExample = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: '20\nTrips'},
    {key: 'second', title: '129k\nFollowers'},
    {key: 'tree', title: '178k\nFollowing'},
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderTabBar={renderTabBar}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
};

export default tabviewExample;
