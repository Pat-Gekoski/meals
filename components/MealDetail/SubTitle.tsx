import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SubTitle = ({ subTitle }: { subTitle: string }) => {
	return (
		<View style={styles.subTitleContainer}>
			<Text style={styles.subTitle}>{subTitle}</Text>
		</View>
	)
}

export default SubTitle

const styles = StyleSheet.create({
	subTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#734103',
		textAlign: 'center',
	},
	subTitleContainer: {
		padding: 6,
		borderBottomColor: '#734103',
		borderBottomWidth: 1,
		marginHorizontal: '5%',
		marginVertical: 4,
	},
})
