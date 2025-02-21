export const COLLECTIONS_QY = `*[_type == 'collection'] | order(sortOrder asc) {
	title,
	slug,
	description,
	products[]-> {
		title,
		slug,
		description,
		price,
		discountPrice,
		images,
		category-> {
			title,
			slug
		},
		variants,
		reviews,
		inStock,
		tags,
		collections[]-> {
			title,
			slug
		}
	}
}`

export const COLLECTION_BY_SLUG_QY = `*[_type == 'collection' && slug.current == $slug][0] {
	title,
	slug,
	description,
	products[]-> {
		title,
		slug,
		description,
		price,
		discountPrice,
		images,
		category-> {
			title,
			slug
		},
		variants,
		reviews,
		inStock,
		tags,
		collections[]-> {
			title,
			slug
		}
	}
}`

export const COLLECTION_SLUGS_QY = `*[_type == 'collection' && defined(slug.current)] {
	slug
}`

export const PRODUCTS_QY = `*[_type == 'product'] | order(sortOrder asc) {
	title,
	slug,
	description,
	price,
	discountPrice,
	images,
	category-> {
		title,
		slug
	},
	variants,
	reviews,
	inStock,
	tags,
	collections[]-> {
		title,
		slug
	}
}`

export const PRODUCT_BY_SLUG_QY = `*[_type == 'product' && slug.current == $slug][0] {
	title,
	slug,
	description,
	price,
	discountPrice,
	images,
	category-> {
		title,
		slug
	},
	variants,
	reviews,
	inStock,
	tags,
	collections[]-> {
		title,
		slug
	}
}`

export const PRODUCT_SLUGS_QY = `*[_type == 'product' && defined(slug.current)] {
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

export const REVIEWS_QY = `*[_type == 'review'] | order(createdAt desc) {
	user,
	product-> {
		title,
		slug
	},
	rating,
	comment,
	createdAt
}`

export const REVIEWS_BY_PRODUCT_QY = `*[_type == 'review' && product.slug.current == $slug] | order(createdAt desc) {
	user,
	product-> {
		title,
		slug
	},
	rating,
	comment,
	createdAt
}`
