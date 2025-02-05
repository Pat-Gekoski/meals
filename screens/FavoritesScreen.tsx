import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useFavorites } from '../store/context/favorites-context'
import MealsList from '../components/MealsList/MealsList'
import { MEALS } from '../data/dummy-data'
import { useSelector } from 'react-redux'
import { RootState } from '../store/redux/favorites'

const FavoritesScreen = () => {
	// const { ids: favorites } = useFavorites()
	const { ids: favorites } = useSelector((state: RootState) => state.favorites)

	const favoriteMeals = MEALS.filter((meal) => favorites.includes(meal.id))

	if (favoriteMeals.length === 0 || !favoriteMeals) {
		return (
			<View style={styles.root}>
				<Text style={styles.text}>You have no favorite meals yet.</Text>
			</View>
		)
	}

	return <MealsList meals={favoriteMeals} />
}

export default FavoritesScreen

const styles = StyleSheet.create({
	root: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 18,
		fontWeight: 'bold',
	},
})
