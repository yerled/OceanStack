import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

const zh = {
  menu: {
    overview: '概览',
    computing: '计算',
    instance: '云主机',
    image: '镜像',
    keypair: '密钥对',
    storage: '存储',
    volume: '云硬盘',
    objectstorage: '对象存储',
    snapshot: '快照',
    security: '安全',
    securitygroup: '安全组',
    db_cache: '数据库及缓存',
    database: '数据库',
    cache: '缓存',
  },
  resource: {
    instance: '云主机',
    image: '主机快照',
    snapshot: '硬盘快照',
    volume: '云硬盘',
    router: '路由器',
    listener: '监听器',
    floatingip: '公网IP',
    alarm: '监控报警',
    highway: '高速通道',
  },
  ...zhLocale,
}

export default zh
