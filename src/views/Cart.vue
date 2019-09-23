<template>
  <div class="container">
    <div class="cart">
      <div>
        <h1>购物车</h1>
        <hr />
      </div>
      <div>
        <p class="counts">
          <el-checkbox @change="checkAll" v-model="checked">全选</el-checkbox>
          <span>
            已选
            <span class="count">{{count}}</span>
            件商品
          </span>
          <span>
            合计(不含运费)：
            <span class="count">{{total}}</span>
            元
          </span>
        </p>
        <hr />
      </div>
      <div @change="check" class="lists">
        <div v-for="(good,i) of goods" :key="i" class="list">
          <el-checkbox v-model="good.checked"></el-checkbox>
          <div class="info">
            <img class="thumbnail" :src="good.img" />
            <span>{{good.desc}}</span>
            <span>单价：{{good.price}}</span>
            <span>小计：{{good.price*good.count}}</span>
          </div>
          <div class="option" @click="del">
            <el-input-number
              v-model="good.count"
              @change="`goodCount`"
              :min="1"
              :max="10"
              label="商品计数"
            ></el-input-number>
            <el-button type="danger" icon="el-icon-delete"></el-button>
          </div>
        </div>
      </div>
      <div class="cart-option">
        <el-button @click="dels" class="del" type="danger" icon="el-icon-delete">清空</el-button>
        <el-button @click="buy" class="buy" type="success" icon="el-icon-goods">购买</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: false,
      goods: [
        {
          checked: true,
          img: "@/assets/logo.png",
          desc: "描述1",
          price: 5000,
          count: 1
        },
        {
          checked: false,
          img: "@/assets/logo.png",
          desc: "描述2",
          price: 8000,
          count: 2
        }
      ]
    };
  },
  methods: {
    checkAll(value){
      for(var good of this.goods){
        good.checked=value
      }
    },
    check(e){
      console.log(e);
    },
    del() {},
    dels() {},
    buy() {
      console.log(this.goods);
    }
  },
  computed: {
    count() {
      var i = 0;
      for (var good of this.goods) {
        good.checked ? i++ : "";
      }
      return i;
    },
    total() {
      var total=0
      for (var good of this.goods) {
        if (good.checked) {
          total+=good.price*good.count
        }
      }
      return total
    }
  }
};
</script>
<style scoped>
.btn {
  border: none;
}
.container {
  display: flex;
  justify-content: center;
}
.cart {
  display: flex;
  flex-flow: column;
  align-items: stretch;
  width: 600px;
  height: 600px;
  border: 1px solid #000;
}
.counts {
  display: flex;
  justify-content: space-around;
}
.count {
  color: #f00;
}
.lists {
  display: flex;
  flex-flow: column;
  align-items: center;
}
.list,
.info,
.option {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.lists {
  padding: 10px;
}
.list {
  width: 100%;
  justify-content: flex-start;
}
.info {
  margin: 10px;
}
.info span{
  margin-left: 10px;
}
.option,
.cart-option {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}
.thumbnail {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}
.cart-option {
  flex-flow: column;
}
.del {
  width: 100%;
}
.buy {
  width: 100%;
  margin: 0 !important;
}
</style>