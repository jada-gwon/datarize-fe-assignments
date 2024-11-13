export const PATH = {
  root: '/' as const,
  statistics: {
    root: '/statistics' as const,
    purchase: {
      path: () => ''.concat(PATH.statistics.root, '/purchase'),
      getUrl: () => ''.concat(PATH.statistics.root, '/purchase'),
    },
  },
  customer: {
    root: '/customer' as const,
    list: {
      path: () => ''.concat(PATH.customer.root),
      getUrl: () => ''.concat(PATH.customer.root),
    },
    detail: {
      path: () => ''.concat(PATH.customer.root, `/:customerId`),
      getUrl: (params: { customerId: string }) => ''.concat(PATH.customer.root, `/${params.customerId}`),
    },
  },
}
