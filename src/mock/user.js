import Mock from 'mockjs'
import url from 'url'

export const list = options => {
  const query = url.parse(options.url, true).query
  let template = { total: 100 }
  template[`results|${query.limit}`] = [
    {
      'id|+1': 1,
      name: '@first',
      email: '@email',
      role: '@natural(0, 2)',
      is_active: '@boolean',
      last_login: '@datetime("yyyy-MM-dd HH:mm:ss")'
    }
  ]
  return Mock.mock(template)
}

export const retrieve = () => {
  return Mock.mock({
    id: '@natural',
    name: '@first',
    email: Mock.Random.email(),
    role: 0,
    is_active: Mock.Random.boolean(),
    last_login: Mock.Random.datetime('yyyy-MM-ddTHH:mm:ss')
  })
}
