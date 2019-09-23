<template>
  <div class="container">
    <div class="cart">
      <div>
        <h1>购物车</h1>
        <hr>
      </div>
      <div>
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
      </div>
      <div class="lists">
        <div v-for="(good,i) of goods" :key="i" class="list">
          <div class="info">
            <img class="thumbnail" :src="good.img">
            <span>{{good.desc}}</span>
          </div>
          <div class="option">
            <el-input-number v-model="good.count" @change="`goodCount`" :min="1" :max="10" label="商品计数"></el-input-number>
          </div>
        </div>
      </div>
      <div class="cart-option">
        <el-button class="del" type="danger" icon="el-icon-delete">清空</el-button>
        <el-button class="buy" type="success" icon="el-icon-goods">购买</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import { log } from 'util'
export default {
  data() {
    return {
      count:0,
      price:0,
      goods:[
        {
        img:"@/assets/logo.png",
        desc:"描述1",
        count:1
        },
        {
        img:"@/assets/logo.png",
        desc:"描述2",
        count:2
        },
      ],
    }
  },
  methods: {
    goodCount(value){
      console.log(value);
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
  display: flex;
  flex-flow: column;
  align-items: stretch;
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
.lists{
  padding: 10px;
}
.list{
  width: 100%;
  margin: 10px;
}
.thumbnail{
  width: 50px;height: 50px;
}
.cart-option{
  flex-grow: 1;
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
}
.del{
  width: 100%;
}
.buy{
  width: 100%;
  margin: 0!important;
}
</style>