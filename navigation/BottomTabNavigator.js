import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import Noticias from '../screens/Noticias';
import Podcast from '../screens/Podcast';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient(
  {
    uri: 'https://testdo.radioformula.com.mx/graphql',
  }
);
const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator ( { navigation, route } ) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions( { headerTitle: getHeaderTitle( route ) } );

  return (
    <ApolloProvider client={client}>

      <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}
        tabBarOptions={{
          activeTintColor: '#08f',
          style: {
            backgroundColor: '#000000',
          }

        }} >
        <BottomTab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Inicio',
            tabBarIcon: ( { focused } ) => <TabBarIcon focused={focused} name="md-home" />,
          }}
        />
        <BottomTab.Screen
          name="Links"
          component={LinksScreen}
          options={{
            title: 'En Vivo',
            tabBarIcon: ( { focused } ) => <TabBarIcon focused={focused} name="md-radio" />,
          }}
        />
        <BottomTab.Screen
          name="Noticias"
          component={Noticias}
          options={{
            title: 'Noticias',
            tabBarIcon: ( { focused } ) => <TabBarIcon focused={focused} name="md-paper" />,
          }}
        />
        <BottomTab.Screen
          name="Podcast"
          component={Noticias}
          options={{
            title: 'Podcast',
            tabBarIcon: ( { focused } ) => <TabBarIcon focused={focused} name="md-mic" />,
          }}
        />
      </BottomTab.Navigator >
    </ApolloProvider>

  );
}

function getHeaderTitle ( route ) {
  const routeName = route.state?.routes[ route.state.index ]?.name ?? INITIAL_ROUTE_NAME;

  switch ( routeName ) {
    case 'Home':
      return 'Radio Fórmula';
    case 'Links':
      return 'Escucha Y Mira En Vivo';
    case 'Noticias':
      return 'Noticias';
    case 'Podcast':
      return 'Lista De Podcast';
  }
}
