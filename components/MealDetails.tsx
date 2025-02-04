import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Meal from '../models/meal'

interface MealDetailsProps {
	meal: Meal
}

const MealDetails = ({ meal }: MealDetailsProps) => {
	return (
		<View style={styles.details}>
			<Text style={styles.details}>{meal.duration}m</Text>
			<Text style={styles.details}>{meal.complexity.toUpperCase()}</Text>
			<Text style={styles.details}>{meal.affordability.toUpperCase()}</Text>
		</View>
	)
}

export default MealDetails

const styles = StyleSheet.create({
	details: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 8,
	},
})
