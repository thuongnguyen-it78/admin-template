// export const ACTIVE_STATUS = { id: 1, name: 'Active' }
// export const INACTIVE_STATUS = { id: -1, name: 'Inactive' }
// export const STATUSES = [ACTIVE, INACTIVE]

import { Color } from "./theme"

// using
// import * as USER from 'constants/user'. USER.ACTIVE_STATUS. USER.STATUSES

export const userStatus = {
  active: { id: 1, name: 'Active', color: Color.green, changeIds: [-1] },
  inactive: { id: -1, name: 'Inactive', color: Color.red },
}

export const userStatusList = Object.values(userStatus)
