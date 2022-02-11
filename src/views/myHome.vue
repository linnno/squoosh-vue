<template>
  <div class="home">
    <img v-for="(item, index) in list" :key="index" :src="item" alt="">
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      list: [
        require('@/assets/imgs/1.png'),
        require('@/assets/imgs/2.png?as=webp')
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  .home{
    img{
      width: 100%;
    }
  }
</style>
