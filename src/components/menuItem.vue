<template>
  <el-submenu v-if="item.children.length > 0"  :index="item.auth">
    <template slot="title">
      {{ item.name}}
    </template>
    <template v-for="(m, j) in item.children">
      <menuList :item="m" :key="j"></menuList>
    </template>
  </el-submenu>
  <el-menu-item v-else :index="item.auth">
   {{ item.name}}
  </el-menu-item>
</template>

<script>
export default {
  name: "menuList",
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
<style>
#app {
  text-align: center;
}
</style>