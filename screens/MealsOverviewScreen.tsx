import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { CATEGORIES, MEALS } from '../data/dummy-data'
import { NavigationProp, RouteProp } from '@react-navigation/native'
import Meal from '../models/meal'
import MealItem from '../components/MealItem'

interface MealsOverviewScreenProps {
	navigation: NavigationProp<any>
	route: RouteProp<any, any>
}

const MealsOverviewScreen = ({ navigation, route }: MealsOverviewScreenProps) => {
	const categoryId = route?.params?.categoryId

	const displayedMeals = MEALS.filter((meal) => meal.categoryIds?.includes(categoryId))

	console.log(displayedMeals)

	function renderMealItem({ item }: { item: Meal }) {
		return <MealItem meal={item} />
	}

	const categoryTitle = CATEGORIES.find((category) => category.id === categoryId)?.title

	useLayoutEffect(() => {
		navigation.setOptions({
			title: categoryTitle,
		})
	}, [navigation, categoryTitle])

	return (
		<View style={styles.container}>
			<FlatList
				data={displayedMeals}
				renderItem={renderMealItem}
				keyExtractor={(item) => item.id}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	)
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
})
