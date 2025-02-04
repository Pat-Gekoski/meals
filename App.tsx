import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MealsOverviewScreen from './screens/MealsOverviewScreen'
import CategoriesScreen from './screens/CategoriesScreen'
import MealDetailsScreen from './screens/MealDetailsScreen'

const Stack = createNativeStackNavigator()

export default function App() {
	return (
		<>
			<StatusBar style='dark' />
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName='Mealsategories'
					screenOptions={{ headerStyle: { backgroundColor: '#eaebeb' }, headerTintColor: '#191818' }}
				>
					<Stack.Screen name='Mealsategories' component={CategoriesScreen} options={{ title: 'Categories' }} />
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
