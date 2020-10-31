<template>
  <div class="mb-10">
    <a-breadcrumb>
      <a-breadcrumb-item v-for="(bread, i) in pathData" :key="i">
        {{ bread.name }}
      </a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router';

import { routes } from '@/router/index';
import { reactive, toRefs } from 'vue';
export default {
  name: 'HeadBread',
  setup() {
    const route = useRoute();
    const router = useRouter();
    console.log(route, router);

    const data = reactive({
      pathData: updatePathData(route.path),
    });

    // 路由改变，修改面包屑
    router.beforeEach((next, pre, nextAction) => {
      data.pathData = updatePathData(next.path);
      nextAction();
    });

    function updatePathData(currentPath) {
      let paths = [];
      let findRoute = routes.find(
        v =>
          currentPath.startsWith(v.path) &&
          v.children &&
          v.children.some(child => child.path === currentPath),
      );
      if (findRoute) {
        console.log(findRoute);
        const { path, name, children } = findRoute;
        paths.push({ name, path });
        children.forEach(child => {
          if (
            currentPath.startsWith(child.path) &&
            (child.path === currentPath || child.path !== findRoute.path)
          ) {
            paths.push(child);
          }
        });
      }

      return paths;
    }

    return {
      routes,
      ...toRefs(data),
    };
  },
};
</script>
