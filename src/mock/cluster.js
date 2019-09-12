import Mock from 'mockjs'
import url from 'url'

export const list = options => {
  const query = url.parse(options.url, true).query
  let template = { total: 100 }
  template[`results|${query.limit}`] = [
    {
      'id|+1': 1,
      name: '@word(2, 20)',
      version: '@float(1, 1, 2, 2)',
      'status|1': ['CREATING', 'ACTIVE', 'UPDATING', 'DELETING', 'DELETED']
    }
  ]
  return Mock.mock(template)
}

export const retrieve = () => {
  return Mock.mock({
    id: '@natural(1, 20)',
    name: '@word(2, 20)',
    version: '@float(1, 1, 2, 2)',
    endpoint: /https:\/\/[A-Z]{32}\.[a-z0-9]{3}\.[a-z]{2}-[a-z]{4,6}-[0-9]\.eks\.amazonaws\.com/,
    certificate: '@word(1024)',
    'status|1': ['CREATING', 'ACTIVE', 'UPDATING', 'DELETING', 'DELETED'],
    arn: /arn:aws:eks:[a-z]{2}-[a-z]{4,6}-[0-9]:\d{12}:cluster\/[a-zA-Z]{2,20}/,
    role_arn: /arn:aws:iam::\d{12}:role:eksServiceRole/,
    vpc_id: /vpc-[a-z0-9]{8}/,
    'subnets|4': [/subnet-[a-z0-9]{8}/],
    'security_groups|1-2': [/sg-[a-z0-9]{8}/],
    created_at: '@datetime("yyyy-MM-dd HH:mm:ss")',
    node_config: {
      desired: '@natural(5, 10)',
      min_size: '@natural(0, 5)',
      max_size: '@natural(10, 20)',
      image_id: /ami-[a-z0-9]{17}/,
      'instance_type|1': ['t3.medium', 'm5.large', 'c5.large', 'r5.large'],
      key_name: '@word(5, 10)',
      volume_size: '@natural(20, 30)',
      spot_price: '@float(0, 0, 2, 2)',
      associate_public_ip: '@boolean',
      kubelet_args: '',
      'subnets|2': [/subnet-[a-z0-9]{8}/],
      'security_groups|1-2': [/sg-[a-z0-9]{8}/]
    }
  })
}
