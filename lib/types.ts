export interface IPost {
	id: string
	title: string
	slug: string
	html: string
	feature_image: string
	visibility: string
	created_at: string
	published_at: string
	excerpt: string
}

export interface ICard {
	title: string
	description: string
	imgSrc: string
	href: string
}
