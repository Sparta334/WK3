
import React, { useState } from 'react';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Pressable } from 'native-base'

import HomeScreen from '../screens/Home';
import DetailScreen from '../screens/Detail';
import WishlistScreen from '../screens/Wishlist';
import MyBooksScreen from '../screens/MyBooks';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const Navigation = () => {
  return (
    <NavigationContainer >
      <MTabs />

    </NavigationContainer>
  );
}



const MTabs = () => {


  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarActiveTintColor: '#6200EE',
        headerShown: false
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
          title: "Home",
          titleStyle: { fontWeight: 'bold' },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26}  />
          ),
        }}
      />
      <Tab.Screen
        name="WishlistStack"
        component={WishlistStack}
        options={{
          headerShown: false,
          title: "Wishlist",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bookmark" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="MyBooksStack"
        component={MyBooksStack}
        options={{
          headerShown: false,
          title: "My books",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book-open" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}



const HomeStack = ({ navigation }) => {
  const [toggle, setToggle] = useState(true);
  const toggleFunction = () => {
    setToggle(!toggle);
  };


  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "",
          headerShadowVisible: false,
          headerTitleStyle: {
            elevation: 0,
            backgroundColor: "#fff",
            shadowOpacity: 0,
            shadowOffset: 0,
            
          },
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'menu'}
              size={28}
            
            />
          ),
          headerRight: () => (
            <>
           
             <MaterialCommunityIcons
                  name={'magnify'}
                  size={28}
                />
             

            
            </>
          ),
        }}
      />

      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={({ route }) => ({
          title: "",
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerShadowVisible: false,
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'chevron-left'}
              size={30}
              onPress={() => navigation.goBack(null)}
              style={{ marginLeft: 8 }}
            />
          ),
          headerRight: () => (
            <Pressable onPress={() => toggleFunction()}>
              {toggle ? <MaterialCommunityIcons name={'bookmark-outline'} color={'black'} size={26} /> :
                <MaterialCommunityIcons name={'bookmark'} color={'#6200EE'} size={26} />}
            </Pressable>
          ),
        })}
      />
    </Stack.Navigator>
  );
}



const WishlistStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Wishlist"
        component={WishlistScreen}
        options={{
          title: "",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'menu'}
              size={28}
           onPress={() => navigation.openDrawer()}
            />
          ),
          headerRight: () => (
            <MaterialCommunityIcons
              name={'magnify'}
              size={28}
            
            />
          )
        }}
      />
    </Stack.Navigator>
  );
}

const MyBooksStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyBooks"
        component={MyBooksScreen}
        options={{
          title: "",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'menu'}
              size={28}
             
            />
          ),
          headerRight: () => (
            <MaterialCommunityIcons
              name={'magnify'}
              size={28}
           
            />
          )
        }}
      />
    </Stack.Navigator>
  );
}

export default Navigation;

