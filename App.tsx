import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {
  StyleSheet, Text
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Fonts from './App/constants/Fonts';
import Icons from './App/constants/Icons';
import { MainStackParamList, MyTabParamList, WatchStackParamList } from './App/helpers/types';
import BookingConfirmationScreen from './App/screens/BookingConfirmationScreen';
import BookingScreen from './App/screens/BookingScreen';
import DashboardScreen from './App/screens/DashboardScreen';
import MediaLibraryScreen from './App/screens/MediaLibraryScreen';
import MoreScreen from './App/screens/MoreScreen';
import MovieDetailScreen from './App/screens/MovieDetailScreen';
import SearchScreen from './App/screens/SearchScreen';
import TrailerScreen from './App/screens/TrailerScreen';
import WatchScreen from './App/screens/WatchScreen';
import { persistor, store } from './App/state/store';

const Dashboard = Icons.dashboard_inactive
const DashboardActive = Icons.dashboard_inactive
//const MediaLibraryActive=Icons.media_active
const Watch = Icons.watch_active
const WatchActive = Icons.watch_active
const MediaLibrary = Icons.media_inactive
const More = Icons.more_inactive
const MoreActive = Icons.more_inactive

const Stack = createStackNavigator<MainStackParamList>();
const Tab = createBottomTabNavigator<MyTabParamList>();
const WatchStackNav = createStackNavigator<WatchStackParamList>()

const WatchStack = () => {

  return (
    <WatchStackNav.Navigator
      screenOptions={{ headerShown: false }} >
      <WatchStackNav.Screen
        name={'WatchScreen'}
        component={WatchScreen}
      />
      <WatchStackNav.Screen
        name={'SearchScreen'}
        component={SearchScreen}
      />
    </WatchStackNav.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ tabBarStyle: styles.tabBar, tabBarHideOnKeyboard: true }} initialRouteName='Watch'>
      <Tab.Screen name="Dashboard" component={DashboardScreen} options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => focused ? <DashboardActive /> : <Dashboard />,
        tabBarLabel: ({ focused }) => <Text style={[styles.tabBarlabel, focused && styles.labelFocused]}>Dashboard</Text>
      }} />
      <Tab.Screen name="Watch" component={WatchStack} options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => focused ? <WatchActive /> : <Watch />,
        tabBarLabel: ({ focused }) => <Text style={[styles.tabBarlabel, focused && styles.labelFocused]}>Watch</Text>
      }} />
      <Tab.Screen name="MediaLibrary" component={MediaLibraryScreen} options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => focused ? <MediaLibrary /> : <MediaLibrary />,
        tabBarLabel: ({ focused }) => <Text style={[styles.tabBarlabel, focused && styles.labelFocused]}>Media Library</Text>
      }} />
      <Tab.Screen name="More" component={MoreScreen} options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => focused ? <MoreActive /> : <More />,
        tabBarLabel: ({ focused }) => <Text style={[styles.tabBarlabel, focused && styles.labelFocused]}>More</Text>
      }} />
    </Tab.Navigator>
  );
}


const MainStack = () => {


  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }} >
      <Stack.Screen
        name={'BottomTabs'}
        component={MyTabs}
      />
      <WatchStackNav.Screen
        name={'MovieDetailScreen'}
        component={MovieDetailScreen}
      />
      <WatchStackNav.Screen
        name={'BookingScreen'}
        component={BookingScreen}
      />
      <WatchStackNav.Screen
        name={'BookingConfirmationScreen'}
        component={BookingConfirmationScreen}
      />
      <WatchStackNav.Screen
        name={'TrailerScreen'}
        component={TrailerScreen}
      />
    </Stack.Navigator>
  );
};




export default function App() {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <SafeAreaProvider>
            <MainStack />
          </SafeAreaProvider>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingBottom: 16,
    height: 87,
    paddingTop: 12,
    backgroundColor: '#2E2739'
  },
  tabBarlabel: {
    color: '#827D88',
    fontSize: 12,
    fontFamily: Fonts.base
  },
  labelFocused: {
    color: '#fff',
    fontSize: 12,
    fontFamily: Fonts.semiBold
  }
});
