// *** Banners ***

export const BANNERS_QY = `*[_type == 'banner'] | order(sortOrder asc) {
	_id,
	title,
	resourceReference-> {
		_id,
		_type,
		title,
		slug,
	},
	image,
}`

// *** Recipes ***

export const RECIPES_QY = `*[_type == 'recipe'] | order(sortOrder asc) {
	_id,
	title,
	slug,
	image,
	description,
	nutrition
}`

export const RECIPES_CARD = `*[_type == 'recipe']{
	_id,
  title,
  slug,
  image,
  categories[]-> {
		_id,
		title,
		slug
		},
  description,
}`

export const RECIPE_BY_SLUG_QY = `*[_type == 'recipe' && slug.current == $slug][0] {
	_id,
	title,
	slug,
	seo,
	image,
	description,
	categories[]-> {
		_id,
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

// *** Categories ***

export const CATEGORIES_QY = `*[_type == 'category'] | order(sortOrder asc) {
	_id,
	title,
	slug,
	
}`

export const CATEGORY_BY_SLUG_QY = `*[_type == 'category' && slug.current == $slug][0] {
	_id,
	title,
	slug,
	description
}`

export const CATEGORY_SLUGS_QY = `*[_type == 'category' && defined(slug.current)] {
	slug
}`
