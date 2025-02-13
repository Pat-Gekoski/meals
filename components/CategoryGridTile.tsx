import { Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface CategoryGridTileProps {
	title: string
	color: string
	onPress: () => void
}

const CategoryGridTile = ({ title, color, onPress }: CategoryGridTileProps) => {
	return (
		<View style={[styles.gridItem]}>
			<Pressable
				android_ripple={{ color: color }}
				style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
				onPress={onPress}
			>
				<View style={[styles.innerContainer, { backgroundColor: color }]}>
					<Text style={styles.title}>{title}</Text>
				</View>
			</Pressable>
		</View>
	)
}

export default CategoryGridTile

const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		margin: 16,
		height: 150,
		borderRadius: 8,
		boxShadow: '0 2px 8px rgba(0, 0, 0, 0.26)',
		overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
	},
	button: {
		flex: 1,
	},
	buttonPressed: {
		opacity: 0.5,
	},
	innerContainer: {
		flex: 1,
		padding: 16,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 8,
	},
	title: {
		fontWeight: 'bold',
		fontSize: 18,
	},
})
