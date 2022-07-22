import _ from 'lodash'
import queryString from 'query-string'
import { useMemo } from 'react'
import { unstable_HistoryRouter, useLocation } from 'react-router-dom'
import { defaultPagination } from 'utils/common'
import { formatFilterBeforeSyncURL, formatFilterValue } from 'utils/filter'
const defaultFilter = {}

function useFilter(filterList) {
  const location = useLocation()
  const history = unstable_HistoryRouter()

  const filter = useMemo(() => {
    const params = queryString.parse(location.search)

    try {
      const queryParams = filterList
        ? filterList.reduce((previous, current) => (previous[current.name] = formatFilterValue(current)), { ...params })
        : defaultFilter

      return queryParams
    } catch (error) {
      return defaultFilter
    }
  }, [location.search, filterList])

  const handleFilterChange = (newFilter) => {
    const cloneFilter = _.cloneDeep(newFilter)
    if (!cloneFilter.page) {
      cloneFilter.page = defaultPagination.page
    }


    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(formatFilterBeforeSyncURL({ ...filter, ...cloneFilter })),
    })
  }

  const handleResetFilter = () => {
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(defaultFilter),
    })
  }

  return { filter, onFilterChange: handleFilterChange, onResetFilter: handleResetFilter }
}

useFilter.propTypes = {}

export default useFilter

// const columns = [
//   {
//     key: 'name',
//     type: 'number',
//     defaultValue: 0,
//   },
//   {
//     key: 'statusIds',
//     type: 'array',
//     defaultValue: [],
//     split: ',',
//   },
// ]
