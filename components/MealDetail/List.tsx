import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface ListProps {
	data: Array<any>
}

const List = ({ data }: ListProps) => {
	return data.map((item) => (
		<View style={styles.listItem} key={item}>
			<Text style={styles.itemText}>{item}</Text>
		</View>
	))
}

export default List

const styles = StyleSheet.create({
	listItem: {
		borderRadius: 6,
		paddingHorizontal: 8,
		paddingVertical: 4,
		marginVertical: 4,
		marginHorizontal: 12,
		backgroundColor: '#734103',
	},
	itemText: {
		color: '#FFF',
		textAlign: 'center',
	},
})
