import { createQueryKeyStore } from '@lukemorales/query-key-factory'

export const queryKeys = createQueryKeyStore({
  users: {
    getAll: (query) => [query],
    getById: (productId) => productId,
  },
  products: null
})
