import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';

//Navigation
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
//İcons

import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

//Screens

import Home from './src/Screens/Home';
import Favourites from './src/Screens/Favourites';
import Profile from './src/Screens/Profile';
import Login from './src/Screens/Login';
import Register from './src/Screens/Register';
import contact from './src/Screens/contact';
import about from './src/Screens/about';
import dashboard from './src/Screens/dashboard';
import editProfile from './src/Screens/editProfile';

import TripDestinations from './src/Screens/TripDestinations';
import TrendingInDestinations from './src/Screens/TrendingInDestinations';
import SpecialOffersIn from './src/Screens/SpecialOffersIn';
import TripCollection from './src/Screens/TripCollection';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Search Button Tasarımı
const CustomTabbarButton = ({children, onPress}) => (
  <TouchableOpacity
    style={{
      top: -50,
      alignItems: 'center',
    }}
    onPress={onPress}>
    <View
      style={{
        width: 100,
        height: 100,
        borderRadius: 80,
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: 'black',
      }}>
      <View
        style={{
          width: 84,
          height: 84,
          borderRadius: 45,
          backgroundColor: 'black',
          marginLeft: 5,
          marginTop: 5,
          paddingTop: 4,
        }}>
        {children}
      </View>
    </View>
  </TouchableOpacity>
);

const MainTab = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#000000',
        tabBarInactiveTintColor: '#999999',
        tabBarStyle: {
          borderTopWidth: 3,
          borderTopColor: 'black',
          paddingBottom: 10,
          paddingTop: 5,
          height: 65,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: props => <Icon name="home" {...props} />,
        }}
      />

      <Tab.Screen
        name="Trip"
        component={TripCollection}
        options={{
          headerShown: false,
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: '#4a4a4a', shadowColor: '#4a4a4a'},
          tabBarIcon: props => <Icon name="star" {...props} />,
          headerLeft: props => (
            <View style={{marginLeft: 10}}>
              <Icon
                name="chevron-back"
                size={24}
                style={{color: 'white'}}
                onPress={() => navigation.navigate('Home')}
                {...props}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={Login}
        options={{
          headerShown: false,
          tabBarStyle: {display: 'none'},
          tabBarIcon: props => (
            <Icon name="search" style={{color: 'white'}} {...props} />
          ),
          tabBarButton: props => <CustomTabbarButton {...props} />,
          tabBarLabelStyle: {
            color: 'white',
            marginBottom: 13,
            fontWeight: 'bold',
          },
        }}
      />

      <Tab.Screen
        name="Favourites"
        component={Favourites}
        options={{
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: '#4a4a4a', shadowColor: '#4a4a4a'},
          tabBarIcon: props => <Icon name="heart" {...props} />,
          headerLeft: props => (
            <View style={{marginLeft: 10}}>
              <Icon
                name="chevron-back"
                size={24}
                style={{color: 'white'}}
                onPress={() => navigation.navigate('Home')}
                {...props}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: props => <Icon name="person" {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};


const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{headerShown: false}}
      />
    <Stack.Screen
      name="Register"
      component={Register}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="contact"
      component={contact}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="about"
      component={about}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="dashboard"
      component={dashboard}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="editProfile"
      component={editProfile}
      options={{headerShown: false}}
    />
     <Stack.Screen
      name="TripDestinations"
      component={TripDestinations}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="TrendingInDestinations"
      component={TrendingInDestinations}
      options={{headerShown: false}}
    />

<Stack.Screen
      name="SpecialOffersIn"
      component={SpecialOffersIn}
      options={{headerShown: false}}
    />

<Stack.Screen
      name="TripCollection"
      component={TripCollection}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="DrawerNavigator"
      component={DrawerNavigator}
      options={{headerShown: false}}
    />
      </Stack.Navigator>
  )}


const DrawerNavigator = () => {
  return (
    <NavigationContainer>
    <Drawer.Navigator
      initialRouteName="HomeStack"
      defaultStatus="closed"
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerLabelStyle: {marginLeft: -10, color: '#333333', marginTop: -10},
        drawerStyle: {
          backgroundColor: 'white',
          width: '90%',
        },
      }}>
      <Drawer.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          drawerIcon: props => (
            <Icon name="home" {...props} size={22} color={'black'} />
          ),
          drawerActiveTintColor: '#333333',
          drawerActiveBackgroundColor: 'transparent',
          drawerInactiveTintColor: '#333333',
          headerShown: false,
          title: 'Home',
        }}
      />
      <Drawer.Screen
        name="TripDestinations"
        component={TripDestinations}
        options={{
          drawerIcon: props => (
            <Icon name="earth" {...props} size={22} color={'black'} />
          ),
          drawerActiveTintColor: '#333333',
          drawerActiveBackgroundColor: 'transparent',
          drawerInactiveTintColor: '#333333',
          headerShown: false,
          title: 'Destinations',
        }}
      />
      <Drawer.Screen
        name="SpecialOffersIn"
        component={SpecialOffersIn}
        options={{
          drawerIcon: props => (
            <Icon name="list-sharp" {...props} size={22} color={'black'} />
          ),
          drawerActiveTintColor: '#333333',
          drawerActiveBackgroundColor: 'transparent',
          drawerInactiveTintColor: '#333333',
          headerShown: false,
          title: 'Trip Detail',
        }}
      />
      <Drawer.Screen
        name="TripCollection"
        component={TripCollection}
        options={{
          drawerIcon: props => (
            <MaterialCommunityIcons
              name="folder-multiple-image"
              {...props}
              size={22}
              color={'black'}
            />
          ),
          drawerActiveTintColor: '#333333',
          drawerActiveBackgroundColor: 'transparent',
          drawerInactiveTintColor: '#333333',
          headerShown: false,
          title: 'TripCollections',
        }}
      />
      <Drawer.Screen
        name="Register"
        component={Register}
        options={{
          drawerIcon: props => (
            <Icon name="lock-closed" {...props} size={22} color={'black'} />
          ),
          drawerActiveTintColor: '#333333',
          drawerActiveBackgroundColor: 'transparent',
          drawerInactiveTintColor: '#333333',
          headerShown: false,
          title: 'Register',
        }}
      />
      <Drawer.Screen
        name="login"
        component={Login}
        options={{
          drawerIcon: props => (
            <Icon name="exit-outline" {...props} size={22} color={'black'} />
          ),
          drawerActiveTintColor: '#333333',
          drawerActiveBackgroundColor: 'transparent',
          drawerInactiveTintColor: '#333333',
          headerShown: false,
          title: 'Sign In',
        }}
      />
      <Drawer.Screen
        name="about"
        component={about}
        options={{
          drawerIcon: props => (
            <FontAwesome
              name="info-circle"
              {...props}
              size={22}
              color={'black'}
            />
          ),
          drawerActiveTintColor: '#333333',
          drawerActiveBackgroundColor: 'transparent',
          drawerInactiveTintColor: '#333333',
          headerShown: false,
          title: 'About',
        }}
      />
      <Drawer.Screen
        name="contact"
        component={contact}
        options={{
          drawerIcon: props => (
            <Icon name="mail" {...props} size={22} color={'black'} />
          ),
          drawerActiveTintColor: '#333333',
          drawerActiveBackgroundColor: 'transparent',
          drawerInactiveTintColor: '#333333',
          headerShown: false,
          title: 'Contact',
        }}
      />
      <Drawer.Screen
        name="dashboard"
        component={dashboard}
        options={{
          drawerIcon: props => (
            <Icon name="home" {...props} size={22} color={'black'} />
          ),
          drawerActiveTintColor: '#333333',
          drawerActiveBackgroundColor: 'transparent',
          drawerInactiveTintColor: '#333333',
          headerShown: false,
          title: 'Dashboard',
        }}
      />
    </Drawer.Navigator>
    </NavigationContainer>
  );
};

function CustomDrawerContent(props) {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={{
          uri: 'https://www.visitgreece.gr/images/1743x752/jpg/files/merakos_05_santorini-oia_1743x752.webp',
        }}
        style={{
          width: '100%',
          height: 160,
          justifyContent: 'center',
          alignItems: 'baseline',
          marginBottom: 10,
        }}>
        <View style={{flexDirection: 'row', margin: 25}}>
          <Image
            source={{
              uri: 'https://academiadelamor.com/wp-content/uploads/2019/10/C%C3%B3mo-enamorar-a-un-hombre-atractivo-7.jpg',
            }}
            style={{width: 75, height: 75}}
            borderRadius={75}
          />
          <Text
            style={{
              marginVertical: 25,
              marginHorizontal: 10,
              color: 'white',
              fontWeight: 'bold',
            }}>
            David Beckham
          </Text>
        </View>
      </ImageBackground>

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <View style={{marginHorizontal: 20}}>
          <TouchableOpacity onPress={() => {}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 10,
              }}>
              <FontAwesome name="cogs" size={22} color={'black'} />
              <Text
                style={{
                  marginLeft: 17,
                  fontSize: 14,
                  color: '#333333',
                  fontWeight: '500',
                }}>
                Settings
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}} style={{}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 10,
                marginBottom: 65,
              }}>
              <MaterialCommunityIcons name="logout" size={22} color={'black'} />
              <Text
                style={{
                  marginLeft: 17,
                  fontSize: 14,
                  color: '#333333',
                  fontWeight: '500',
                }}>
                Logout
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}
  export default DrawerNavigator;