//? LIBRARY
import { useEffect, memo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { LoadingDefaultComponent } from '../../modules/shared/loading'
import { SearchEmptyComponent } from '../../modules/shared/searchEmpty'
import ProductListComponent from '../../modules/post/components/product-list.component'
import { PaginationComponent } from '../../modules/shared'
import { ICategoryQuery } from '../../modules/home/category/interfaces'
import { useSearchCategoriesQuery } from '../../modules/home/category/hooks'
import { CONSTANT } from '../../modules/home/category/resources'
import FilterComponent from '../../modules/home/category/components/filter/filter.component'
import { SortBarsComponent } from '../../modules/home/category/components'
//? APPS

function CategoryPage(): JSX.Element {
	const { display_name } = useParams()
	const [totalPage, setTotalPage] = useState<number>(0)
	const [payload, setPayload] = useState<ICategoryQuery>({
		category_name: encodeURIComponent(display_name as string),
		limit: CONSTANT.LIMIT,
		page: CONSTANT.PAGE
	})
	const { data, isLoading } = useSearchCategoriesQuery(payload)

	useEffect(() => {
		data?.totalPage && setTotalPage(data?.totalPage)
	}, [payload, data])

	return (
		<>
			{isLoading && <LoadingDefaultComponent />}
			{data?.response.length === 0 ? (
				<SearchEmptyComponent />
			) : (
				<div className='row sm-gutter pt-[30px]'>
					<div className='col l-2 col-smo-3 c-3'>
						<FilterComponent />
					</div>
					<div className='col l-10'>
						<div className='padding-search mob:pt-[50px] mob:hidden block'></div>
						<SortBarsComponent />
						<ProductListComponent
							col={'col l-2-4 mo-4 c-6'}
							items={data?.response || []}
							loading={isLoading}
						/>
						<PaginationComponent setPayload={setPayload} totalPage={totalPage || 0} />
					</div>
				</div>
			)}
		</>
	)
}
export default memo(CategoryPage)
