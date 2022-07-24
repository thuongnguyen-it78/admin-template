import { cloneDeep } from 'lodash'
import queryString from 'query-string'
import { useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { defaultPagination } from 'constants/common'
import { formatFilterBeforeSyncURL, formatFilterValue } from 'utils/filter'
const defaultFilter = { filter: {}, apiFilter: {} }

function useFilter(filterList) {
  const location = useLocation()
  const navigation = useNavigate()

  const { filter, apiFilter } = useMemo(() => {
    const params = queryString.parse(location.search)

    try {
      const queryParams = filterList
        ? filterList.reduce(
            (previous, current) => {
              previous.filter[current.name] = formatFilterValue({ value: params[current.name], ...current.hookProps })
              previous.apiFilter[current.name] = params[current.name]
              return previous
            },
            { filter: { ...params }, apiFilter: { ...params } }
          )
        : defaultFilter

      return queryParams
    } catch (error) {
      return defaultFilter
    }
  }, [location.search, filterList])

  const handleFilterChange = (newFilter) => {
    const cloneFilter = cloneDeep(newFilter)
    if (!cloneFilter.page) {
      cloneFilter.page = defaultPagination.page
    }

    navigation({
      pathname: location.pathname,
      search: queryString.stringify(formatFilterBeforeSyncURL({ ...filter, ...cloneFilter })),
    })
  }

  const handleResetFilter = () => {
    navigation({
      pathname: location.pathname,
      search: queryString.stringify({}),
    })
  }

  return {
    filter,
    apiFilter,
    onFilterChange: handleFilterChange,
    onResetFilter: handleResetFilter,
  }
}

useFilter.propTypes = {}

export default useFilter
