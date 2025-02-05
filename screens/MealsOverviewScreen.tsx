import { StyleSheet } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { CATEGORIES, MEALS } from '../data/dummy-data'
import { NavigationProp, RouteProp } from '@react-navigation/native'
import MealsList from '../components/MealsList/MealsList'

interface MealsOverviewScreenProps {
	navigation: NavigationProp<any>
	route: RouteProp<any, any>
}

const MealsOverviewScreen = ({ navigation, route }: MealsOverviewScreenProps) => {
	const categoryId = route?.params?.categoryId

	const displayedMeals = MEALS.filter((meal) => meal.categoryIds?.includes(categoryId))

	const categoryTitle = CATEGORIES.find((category) => category.id === categoryId)?.title

	useLayoutEffect(() => {
		navigation.setOptions({
			title: categoryTitle,
		})
	}, [navigation, categoryTitle])

	return <MealsList meals={displayedMeals} />
}

export default MealsOverviewScreen
