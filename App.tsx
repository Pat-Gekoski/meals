import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MealsOverviewScreen from './screens/MealsOverviewScreen'
import CategoriesScreen from './screens/CategoriesScreen'
import MealDetailsScreen from './screens/MealDetailsScreen'
import { createDrawerNavigator } from '@react-navigation/drawer'
import FavoritesScreen from './screens/FavoritesScreen'
import { Ionicons } from '@expo/vector-icons'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

function DrawerNavigator() {
	return (
		<Drawer.Navigator
			screenOptions={{
				headerStyle: { backgroundColor: '#eaebeb' },
				headerTintColor: '#191818',
				drawerContentStyle: {
					backgroundColor: '#ffffff',
				},
				drawerInactiveTintColor: '#3f3f3f',
				drawerActiveTintColor: '#ffffff',
				drawerActiveBackgroundColor: '#418bb8',
			}}
		>
			<Drawer.Screen
				name='Categories'
				component={CategoriesScreen}
				options={{
					title: 'Categories',
					drawerIcon: ({ color, size }) => <Ionicons name='list' size={size} color={color} />,
				}}
			/>
			<Drawer.Screen
				name='Favorites'
				component={FavoritesScreen}
				options={{
					title: 'Favorites',
					drawerIcon: ({ color, size }) => <Ionicons name='star' size={size} color={color} />,
				}}
			/>
		</Drawer.Navigator>
	)
}

export default function App() {
	return (
		<>
			<StatusBar style='dark' />
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName='Drawer'
					screenOptions={{ headerStyle: { backgroundColor: '#eaebeb' }, headerTintColor: '#191818' }}
				>
					<Stack.Screen name='Drawer' component={DrawerNavigator} options={{ title: 'Categories', headerShown: false }} />
					<Stack.Screen name='MealsOverview' component={MealsOverviewScreen} />
					<Stack.Screen name='MealDetails' component={MealDetailsScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})
