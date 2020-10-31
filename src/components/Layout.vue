<template>
  <a-layout id="app-layout">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo">
        <img src="../assets/logo.png" />
      </div>
      <a-menu
        theme="dark"
        mode="inline"
        @select="onMenuSelect"
        v-model:selectedKeys="selectedKeys"
        v-model:openKeys="openKeys"
      >
        <template v-for="route in routes">
          <a-menu-item v-if="!route.children || !route.children.length" :key="route.path">
            <Icon :type="route.icon" />
            <span>{{ route.name }}</span>
          </a-menu-item>
          <a-sub-menu :key="route.path" v-else>
            <template v-slot:title>
              <span>
                <Icon :type="route.icon" />
                <span>{{ route.name }}</span>
              </span>
            </template>
            <a-menu-item v-for="menu in route.children" :key="menu.path">
              <span>{{ menu.name }}</span>
            </a-menu-item>
          </a-sub-menu>
        </template>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff;padding-left:0" class="flex-hcb">
        <Icon
          type="menu-unfold-outlined"
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <Icon
          type="menu-fold-outlined"
          v-else
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />

        <a-dropdown :trigger="['click']">
          <a-avatar style="backgroundColor:#1890ff" size="large">刘备</a-avatar>
          <template v-slot:overlay>
            <a-menu style="width:120px">
              <a-menu-item @click="onLogOut">
                <Icon type="LogoutOutlined" />
                退出登录
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </a-layout-header>
      <a-layout-content class="layout-content">
        <HeadBread />
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { routes } from '@/router/index';
import HeadBread from './HeadBread';
import { Storage } from '../utils';

export default {
  components: { HeadBread },

  setup() {
    // 使用useRouter获取router 进行跳转
    const router = useRouter();
    const route = useRoute();
    console.log(route.path);

    const findRoute =
      routes.find(({ children }) => children && children.some(v => v.path === route.path)) || {};

    const data = reactive({
      selectedKeys: [route.path],
      openKeys: [findRoute.path || '/'],
      collapsed: false,
    });

    // 退出登录
    function onLogOut() {
      Storage.setLocalItem('TOKEN');
      router.replace('/login');
    }

    function onMenuSelect(item) {
      console.log(item);
      router.push(item.key);
    }

    return {
      ...toRefs(data),
      routes: routes.filter(v => !v.hiden),
      onLogOut,
      onMenuSelect,
    };
  },
};
</script>

<style lang="scss" scoped>
#app-layout {
  height: 100vh;
  .layout-content {
    margin: 20px 15px;
    padding: 24px;
    padding-top: 15px;
    background: #fff;
    min-height: 280px;
  }
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: #1890ff;
    }
  }
  .logo {
    text-align: center;
    margin: 10px;
    img {
      width: 40px;
    }
  }
}
</style>
