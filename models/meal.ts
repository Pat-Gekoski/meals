interface MealInput {
	id: string
	categoryIds: Array<string>
	title: string
	affordability: string
	complexity: string
	imageUrl: string
	duration: number
	ingredients: Array<string>
	steps: Array<string>
	isGlutenFree: boolean
	isVegan: boolean
	isVegetarian: boolean
	isLactoseFree: boolean
}

class Meal {
	public id: string
	public categoryIds: Array<string>
	public title: string
	public affordability: string
	public complexity: string
	public imageUrl: string
	public duration: number
	public ingredients: Array<string>
	public steps: Array<string>
	public isGlutenFree: boolean
	public isVegan: boolean
	public isVegetarian: boolean
	public isLactoseFree: boolean

	constructor(data: MealInput) {
		this.id = data.id
		this.categoryIds = data.categoryIds
		this.title = data.title
		this.imageUrl = data.imageUrl
		this.ingredients = data.ingredients
		this.steps = data.steps
		this.duration = data.duration
		this.complexity = data.complexity
		this.affordability = data.affordability
		this.isGlutenFree = data.isGlutenFree
		this.isVegan = data.isVegan
		this.isVegetarian = data.isVegetarian
		this.isLactoseFree = data.isLactoseFree
	}
}

export default Meal
