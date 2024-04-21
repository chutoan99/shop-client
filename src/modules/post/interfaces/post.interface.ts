export interface IPostSimpleResponse {
	err: number
	msg: string
	offset: number
	limit: number
	total: number
	totalPage: number
	currentPage: number
	response: IPostSimple[]
}

export interface IPostIdResponse {
	err: number
	msg: string
	response: IProductDetail
}

export interface IPostSimple {
	id: number
	shopid: number
	catid: number
	name: string
	image: string
	historical_sold: number
	discount: null | string
	show_free_shipping: number
	is_official_shop: number
	is_service_by_shopee: number
	shop_rating: number
	filename: null
	shop_name: string
	liked: number
	stock: number
	price_before_discount: number
	price_min_before_discount: number
	price_min: number
	price: number
	price_max: number
	price_max_before_discount: number
	total: number
}
export interface IProductDetail {
	id: number
	shopid: number
	catid: number
	discountid: number
	currency: string
	stock: number
	status: number
	sold: number
	liked_count: number
	cmt_count: number
	discount: string
	raw_discount: number
	shop_name: string
	description?: null
	view_count: number
	name: string
	image: string
	price: number
	price_min: number
	price_max: number
	historical_sold: number
	price_before_discount: number
	price_min_before_discount: number
	price_max_before_discount: number
	shop_rating: number
	liked: number
	is_official_shop: number
	is_service_by_shop: number
	show_free_shipping: number
	name_attributes?: null[] | null
	value_attributes?: string[] | null
	name_tierVariations: string
	option_tierVariations?: string[] | null
	images_tierVariations?: null[] | null
	images?: string[] | null
	is_active: number
	createdAt?: null
	updatedAt?: null
	shop_info: ShopInfo | null
	voucher: Voucher | null
	deep_discount_skin?: null
	video?: null
	category?: Category | null
}

interface Category {
	id: number
	level: number
	images: string
	parent_catid?: null
	category_name: string
}

interface Voucher {
	id: number
	label: string
	voucher_code: string
}

interface ShopInfo {
	id: number
	name: string
	cover: string
	status: number
	userid: number
	country: string
	deleteAt?: null
	followed: number
	portrait: string
	username: string
	createdAt: string
	updatedAt: string
	item_count: number
	rating_bad: number
	description: string
	rating_good: number
	rating_star: number
	rating_normal: number
	response_rate: number
	shop_location: string
	follower_count: number
	is_official_shop: number
	last_active_time: number
}