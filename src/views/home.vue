<template>
  <div class="home">
    <el-container>
      <el-aside width="500px">
        <el-menu
          style="width: 300px;"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          router
          unique-opened
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <template v-for="(item, index) in $store.state.menuList">
            <MenuItem :item="item" :key="index"> </MenuItem>
          </template>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import MenuItem from "../components/menuItem";
export default {
  name: "Home",
  components: {
    MenuItem,
  },
};
</script>
<style scoped>
.home{
  text-align: left;
}
</style>