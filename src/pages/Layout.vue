<template>
  <el-container id="container">
    <el-header>
      <h1>
        <a href="/"></a>
      </h1>
      <ul>-------------------未完成的HEADER-------------------</ul>
    </el-header>
    <el-container>
      <el-aside>
        <el-scrollbar wrapClass="vScrollbar">
          <el-menu :default-active="activeMenu" @open="handleOpen" :default-openeds="['computing']"
            @close="handleClose" @select="handleSelect" background-color="#545c64"
            text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item  index="overview">
              {{$t('menu.overview')}}
            </el-menu-item>
            <el-submenu v-for="group of menu" :key="group.name" :index="group.name">
              <template slot="title">
                <span slot="title">{{$t(`menu.${group.name}`)}}</span>
              </template>
              <el-menu-item v-for="submenu of group.submenu" :key="submenu" :index="submenu">
                <Iconfont :icon="submenu"/>{{$t(`menu.${submenu}`)}}
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-main>
        <el-scrollbar class="container" wrapClass="vScrollbar containerScrollbar">
          <router-view/>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="less" scoped>
@import '../styles/variable.less';

#container {
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
    background-color: @color_aside;
    .el-scrollbar {
      height: 100%;
    }
  }
  .el-menu {
    border: none;
  }
  .el-main {
    padding: 0;
    background-color: #F1F4F6;
    .container {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

<script>
export default {
  name: 'layout',
  data () {
    return {
      app: 'apps',
      menu: [{
        name: 'computing',
        submenu: ['instance', 'image', 'keypair'],
      }, {
        name: 'storage',
        submenu: ['volume', 'objectstorage', 'snapshot'],
      }, {
        name: 'security',
        submenu: ['securitygroup'],
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
      this.$router.push(`/${this.$data.app}/${key}`)
    },
  },
}
</script>
