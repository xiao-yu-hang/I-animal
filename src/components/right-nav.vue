<template>
  <div class="right-nav">
    <ul class="navbar">
      <li class="navbar-item"><a><img src="../assets/me.png"></a></li>
      <li class="navbar-item"><a><img src="../assets/cart.png"></a></li>
      <li class="navbar-item"><a><img src="../assets/share.png"></a></li>
      <li class="navbar-item"><a><img src="../assets/up.png"></a></li>    
    </ul>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  .right-nav{
    position:fixed;
    right:50px;
    bottom:50px;
  }
  .navbar{
    width:50px;
    height: 200px;
    list-style: none;
    display:flex;
    flex-direction:column;

  }
  .navbar-item{
    height:50px;
    background:#fff;
    line-height:50px;
    position:relative;
    border-radius:3px;
  }
  .navbar-item a{
    display:block;
    width:100%;height:100%;
    cursor:pointer;
  }
  .navbar-item a:hover{
    background:#cf0210;
  }
  .navbar-item img{
    width:25px;
    height:25px;
    position:absolute;
    top:50%;
    left:50%;
    margin-top:-12.5px;
    margin-left:-12.5px;
  }
  .navbar-item+.navbar-item{
    margin-top:1px;
  }
</style>