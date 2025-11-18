import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useMemo } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from '../screens/Home';
import About from '../screens/About';


const TabBar = props => {
  const { state, navigation } = props;
  const currentRouteName = state.routes[state.index].name;
  const isSelected = useMemo(
    () => screenName => currentRouteName === screenName,
    [currentRouteName],
  );

  const tabItems = useMemo(
    () => [
      {
        screen: "Home",
        label: 'Home',
        icon: 'H',
        activeIcon: 'H'
      },
      {
        screen: "About",
        label: 'About',
        icon: 'A',
        activeIcon: 'A'
      },
    ],
    [],
  );
  return (
    <SafeAreaView edges={['bottom']}>
      <View style={styles.TabBarView}>

        {tabItems?.map(item => {
          const Icon = isSelected(item.screen) ? item.activeIcon : item.icon;
          const isActive = isSelected(item.screen);
          return (
            <TouchableOpacity
              key={item.screen}
              onPress={() => navigation.navigate(item.screen)}
              activeOpacity={0.8}
              style={[
                styles.bottomTouchable,
              ]}
            >
              <View
                style={
                  styles.centerButtonContainer
                }
              >
                <Text style={{color: isActive ? 'white' : 'black'}}>{Icon}</Text>
              </View>
            
                <Text
                  style={[
                    styles.text,
                    {
                      color: isActive ? "#1A73E8" : "#000"
                    },
                  ]}
                >
                  {item.label}
                </Text>

            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};




const BottomTabNavigator = () => {
const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      tabBar={props => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen name={"Home"} component={Home} />
      <Tab.Screen name={"About"} component={About} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator

export const styles = StyleSheet.create({
  TabBarView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    borderTopWidth: 1,

  },
  bottomTouchable: {
    alignItems: 'center',
    flex: 1,
  },
  text: {
    textAlign: 'center',
  },

  centerTab: {
    position: 'relative',
  },

  centerButtonContainer: {
    backgroundColor:"#1A73E8",
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});