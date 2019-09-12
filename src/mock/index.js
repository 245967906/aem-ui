import Mock from 'mockjs'
import * as auth from '@/mock/auth'
import * as profile from '@/mock/profile'
import * as user from '@/mock/user'
import * as cluster from '@/mock/cluster'

Mock.setup({ timeout: '200-300' })

Mock.mock('/api/tokens', 'post', auth.login())
Mock.mock('/api/confirmations', 'post', {})
Mock.mock('/api/password', 'post', {})
Mock.mock('/api/me', 'get', profile.retrieve())
Mock.mock('/api/me', 'patch', profile.update)
Mock.mock(RegExp('/api/users\\?.*'), 'get', user.list)
Mock.mock(RegExp('/api/users/.*'), 'get', user.retrieve)
Mock.mock(RegExp('/api/users'), 'post', {})
Mock.mock(RegExp('/api/users/.*'), 'patch', {})
Mock.mock(RegExp('/api/users/.*'), 'delete', {})
Mock.mock(RegExp('/api/clusters\\?.*'), 'get', cluster.list)
Mock.mock(RegExp('/api/clusters/.*'), 'get', cluster.retrieve)
Mock.mock(RegExp('/api/clusters'), 'post', {})
Mock.mock(RegExp('/api/clusters/.*'), 'patch', {})
Mock.mock(RegExp('/api/clusters/.*'), 'delete', {})

export default Mock
