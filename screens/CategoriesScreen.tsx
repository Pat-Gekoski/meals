import { FlatList, StyleSheet, Text, View, ListRenderItemInfo } from 'react-native'
import React from 'react'
import { CATEGORIES } from '../data/dummy-data'
import Category from '../models/category'
import CategoryGridTile from '../components/CategoryGridTile'

function renderCategoryItem(itemData: ListRenderItemInfo<Category>) {
	return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
}

const CategoriesScreen = () => {
	return <FlatList data={CATEGORIES} renderItem={renderCategoryItem} keyExtractor={(item) => item.id} numColumns={2} />
}

export default CategoriesScreen

const styles = StyleSheet.create({})
