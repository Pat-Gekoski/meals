import { FlatList, StyleSheet, Text, View, ListRenderItemInfo } from 'react-native'
import React from 'react'
import { CATEGORIES } from '../data/dummy-data'
import Category from '../models/category'
import CategoryGridTile from '../components/CategoryGridTile'

import { NavigationProp } from '@react-navigation/native'

const CategoriesScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
	const renderCategoryItem = ({ item }: ListRenderItemInfo<Category>) => {
		return (
			<CategoryGridTile
				title={item.title}
				color={item.color}
				onPress={() => navigation.navigate('MealsOverview', { categoryId: item.id })}
			/>
		)
	}

	return <FlatList data={CATEGORIES} renderItem={renderCategoryItem} keyExtractor={(item) => item.id} numColumns={2} />
}

export default CategoriesScreen

const styles = StyleSheet.create({})
