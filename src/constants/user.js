// export const ACTIVE_STATUS = { id: 1, name: 'Active' }
// export const INACTIVE_STATUS = { id: -1, name: 'Inactive' }
// export const STATUSES = [ACTIVE, INACTIVE]

// using
// import * as USER from 'constants/user'. USER.ACTIVE_STATUS. USER.STATUSES

export const userStatus = {
  active: { id: 1, name: 'Active' },
  inactive: { id: -1, name: 'Inactive' },
}

export const userStatusList = Object.values(userStatus)
