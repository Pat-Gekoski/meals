import { createContext, ReactNode, useContext, useState } from 'react'

const initialState = {
	ids: [] as string[],
	addFavorite: (id: string) => {},
	removeFavorite: (id: string) => {},
}

const FavoritesContext = createContext(initialState)

export function FavoritesProvider({ children }: { children: ReactNode }) {
	const [mealIds, setMealIds] = useState<string[]>([])

	const addFavorite = (id: string) => {
		setMealIds((currentMealIds) => [...currentMealIds, id])
	}

	const removeFavorite = (id: string) => {
		setMealIds((currentMealIds) => currentMealIds.filter((mealId) => mealId !== id))
	}

	return <FavoritesContext.Provider value={{ ids: mealIds, addFavorite, removeFavorite }}>{children}</FavoritesContext.Provider>
}

export const useFavorites = () => {
	const context = useContext(FavoritesContext)

	if (!context) {
		throw new Error('useFavorites must be used within a FavoritesProvider')
	}

	return context
}
