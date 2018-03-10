<template>
  <el-container class="container">
    <el-header>
      <h1>
        <a href="/"></a>
      </h1>
      <ul>-------------------未完成的HEADER</ul>
    </el-header>
    <el-container>
      <el-aside>
        <el-menu :default-active="activeMenu" class="menu" @open="handleOpen"
          @close="handleClose" @select="handleSelect" background-color="#545c64"
          text-color="#fff" active-text-color="#ffd04b">
          <el-menu-item  index="overview">
            <i class="el-icon-location"></i>{{$t('menu.overview')}}
          </el-menu-item>
          <el-submenu v-for="group of menu" :key="group.name" :index="group.name">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">{{$t(`menu.${group.name}`)}}</span>
            </template>
            <el-menu-item v-for="submenu of group.submenu" :key="submenu"
                :index="submenu">
              <i class="el-icon-location"></i>{{$t(`menu.${submenu}`)}}
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
          <el-scrollbar>
            <router-view/>
          </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="less" scoped>
.container {
  height: 100vh;
  .el-header {
    background-color: #1d2b40;
    h1 {
      margin: 0;
      float: left;
      width: 280px;
      height: 60px;
      a {
        display: inline-block;
        width: 100%;
        height: 100%;
        background: url('/static/png/logo.png') no-repeat 0 -10px;
        background-size: 200px;
      }
    }
    ul {
      float: right;
    }
  }
  .el-aside {
    background-color: #545c64;
    overflow-y: auto;
  }
}
</style>

<script>
export default {
  name: 'layout',
  data () {
    return {
      app: 'apps/',
      menu: [{
        name: 'computing',
        submenu: ['instance', 'image', 'keypair'],
      }, {
        name: 'storage',
        submenu: ['volume', 'object_storage', 'snapshot'],
      }, {
        name: 'security',
        submenu: ['security_group'],
      }, {
        name: 'db_cache',
        submenu: ['database', 'cache'],
      }],
      activeMenu: 'overview',
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    handleSelect (key, keyPath) {
      let app = this.$data.app
      console.log(`/${app}${key}`)
      this.$router.push(`/${app}${key}`)
    },
  },
}
</script>
