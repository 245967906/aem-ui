import Mock from 'mockjs'

export const retrieve = () => {
  return Mock.mock({
    id: '@natural(1, 20)',
    name: '@first',
    email: '@email',
    role: 0,
    is_active: '@boolean',
    last_login: '@datetime("yyyy-MM-dd HH:mm:ss")'
  })
}

export const update = options => {
  const data = JSON.parse(options.body)
  return Mock.mock({
    id: data.id,
    name: data.name,
    email: data.email,
    role: data.role,
    is_active: data.is_active,
    last_login: data.last_login
  })
}
