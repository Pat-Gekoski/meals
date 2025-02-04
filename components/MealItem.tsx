import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Image } from 'expo-image'
import React from 'react'
import Meal from '../models/meal'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import MealDetails from './MealDetails'

interface MealItemProps {
	meal: Meal
}

const MealItem = ({ meal }: MealItemProps) => {
	const navigation = useNavigation<NavigationProp<any>>()

	return (
		<View style={styles.mealItem}>
			<Pressable
				style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
				onPress={() => navigation.navigate('MealDetails', { mealId: meal.id })}
			>
				<View>
					<Image source={{ uri: meal.imageUrl }} style={styles.image} />
					<Text style={styles.title}>{meal.title}</Text>
				</View>

				<MealDetails meal={meal} />
			</Pressable>
		</View>
	)
}

export default MealItem

const styles = StyleSheet.create({
	mealItem: {
		margin: 16,
		borderRadius: 8,
		overflow: 'hidden',
		backgroundColor: '#FFF',
		boxShadow: '0 2px 8px rgba(0, 0, 0, 0.26)',
	},
	image: {
		width: '100%',
		height: 200,
	},
	title: {
		fontWeight: 'bold',
		textAlign: 'center',
		fontSize: 18,
		margin: 8,
	},

	detailItem: {
		marginHorizontal: 4,
		fontSize: 12,
	},
})
