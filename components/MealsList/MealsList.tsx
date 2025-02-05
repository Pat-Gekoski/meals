import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Meal from '../../models/meal'
import MealItem from './MealItem'

interface MealsListProps {
	meals: Meal[]
}

const MealsList = ({ meals }: MealsListProps) => {
	function renderMealItem({ item }: { item: Meal }) {
		return <MealItem meal={item} />
	}

	return (
		<View style={styles.container}>
			<FlatList data={meals} renderItem={renderMealItem} keyExtractor={(item) => item.id} showsVerticalScrollIndicator={false} />
		</View>
	)
}

export default MealsList

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
})
