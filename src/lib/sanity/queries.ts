export const RECIPES_QY = `*[_type == 'recipe'] | order(sortOrder asc) {
	title,
	slug,
	image,
	description,
	nutrition
}`

export const RECIPE_BY_SLUG_QY = `*[_type == 'recipe' && slug.current == $slug][0] {
	title,
	slug,
	seo,
	image,
	description,
	categories[]-> {
		title,
		slug
	},
	preparationTime,
	cookingTime,
	totalTime,
	ingredients,
	instructions,
	nutrition
}`

export const RECIPE_SLUGS_QY = `*[_type == 'recipe' && defined(slug.current)] {
	slug
}`

export const CATEGORIES_QY = `*[_type == 'category'] | order(sortOrder asc) {
	title,
	slug,
	description
}`

export const CATEGORY_BY_SLUG_QY = `*[_type == 'category' && slug.current == $slug][0] {
	title,
	slug,
	description
}`

export const CATEGORY_SLUGS_QY = `*[_type == 'category' && defined(slug.current)] {
	slug
}`
