import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationProp, RouteProp } from '@react-navigation/native'
import { Image } from 'expo-image'
import { MEALS } from '../data/dummy-data'
import MealDetails from '../components/MealDetails'
import SubTitle from '../components/MealDetail/SubTitle'
import List from '../components/MealDetail/List'

interface MealDetailsScreenProps {
	navigation: NavigationProp<any>
	route: RouteProp<any, any>
}

const MealDetailsScreen = ({ route }: MealDetailsScreenProps) => {
	const mealId = route?.params?.mealId

	console.log('MealID: ', mealId)

	const selectedMeal = MEALS.find((meal) => meal.id === mealId)
	console.log(selectedMeal)

	if (!selectedMeal) {
		return (
			<View>
				<Text>Meal not found!</Text>
			</View>
		)
	}

	return (
		<ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
			<Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
			<Text style={styles.title}>{selectedMeal.title}</Text>
			<MealDetails meal={selectedMeal} />

			<View style={{ maxWidth: '90%', alignSelf: 'center' }}>
				<SubTitle subTitle='Ingredients' />
				<List data={selectedMeal.ingredients} />
				<SubTitle subTitle='Steps' />
				<List data={selectedMeal.steps} />
			</View>
		</ScrollView>
	)
}

export default MealDetailsScreen

const styles = StyleSheet.create({
	root: {
		marginBottom: 32,
	},
	image: {
		width: '100%',
		height: 350,
	},
	title: {
		fontWeight: 'bold',
		fontSize: 24,
		textAlign: 'center',
		margin: 8,
	},
})
