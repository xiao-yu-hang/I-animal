<template>
  <div class="container">
    <div class="cart">
      <h1>购物车</h1>
      <hr>
      <p class="counts">
        <span>
          已选
          <span class="count">
            {{count}}
          </span>
          件商品
        </span>
        <span>
          合计(不含运费)：
          <span class="count">
            {{price}}
          </span>
          元
        </span>
      </p>
      <hr>
      <div class="lists">
        <div class="list">
          <div class="info">
            <img class="thumbnail" src="@/assets/logo.png">
            <span>{{desc}}</span>
          </div>
          <div class="option">
            <i class="el-icon-circle-plus-outline"></i>
            <i class="el-icon-remove-outline"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count:0,
      price:0,
      desc:"描述",
    }
  },
};
</script>
<style scoped>
.btn{
  border: none;
}
.container{
  display: flex;
  justify-content: center;
}
.cart{
  width: 600px;height: 600px;
  border: 1px solid #000;
}
.counts{
  display: flex;
  justify-content: space-around;
}
.count{
  color: #f00;
}
.lists{
  display: flex;
  flex-flow: column;
  align-items: center;
}
.list,.info,.option{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.thumbnail{
  width: 50px;height: 50px;
}
</style>