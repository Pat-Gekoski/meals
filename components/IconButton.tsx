import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

interface IconButtonProps {
	onPress: () => any
	icon: keyof typeof Ionicons.glyphMap
	color: string
}

const IconButton = ({ onPress, icon, color }: IconButtonProps) => {
	return (
		<Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
			<Ionicons name={icon} size={24} color={color} />
		</Pressable>
	)
}

export default IconButton

const styles = StyleSheet.create({
	pressed: {
		opacity: 0.7,
	},
})
