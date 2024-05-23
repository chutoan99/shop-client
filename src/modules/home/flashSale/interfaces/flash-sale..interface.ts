export interface IFlashSaleResponse {
	err: number
	total: string
	response: IFlashSale[]
	msg: string
}
export interface IFlashSale {
	id: number
	shopid: number
	catid: null
	name: string
	image: string
	price: number
	price_before_discount: number
	stock: number
	historical_sold: null
	discount: string
	shop_rating?: number
	filename: null
	liked: number
	is_official_shop?: number
	is_service_by_shopee?: number
	show_free_shipping: null
	start_time: String
	end_time: String
	createdAt: String
	updatedAt: String
}
