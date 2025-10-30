const routes = [
  {
    path: '/category/:category',
    name: 'CategoryList',
    component: CategoryList
  },
  {
    path: '/category/:category/spot/:spotId',
    name: 'SpotDetail',
    component: SpotDetail
  }
]
