<template>
  <div>
    <div class="gcnh" >
        <div id="gc">
          <div class="jm">
            <span>工厂建模</span>
          </div>
  
        </div>
        <div id="nh">
          <div class="ww">
            <span>你好，王伟!</span>
          </div>
      
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name:"NavigAtion",
}
</script>

<style scoped>
.gcnh{
    display: flex;
    height: 70px;
    margin-bottom:10px;
    box-shadow: 1px 4px 10px rgba(131, 124, 124, 0.5);
  }
  #gc{
    flex: 0.5;
    float: left;
    justify-content: center;/*垂直居中*/
    font-weight: bold;/*/字体加粗*/
    font-size:25px;/*调整字体大小*/
  }
  .jm{
    justify-content: center;
    margin-top: 25px;
    margin-left: 30px;
  }
  #nh{
    flex:0.5;
    float: right;
    text-align: right;/*文本靠右对其*/
  }
  .ww{
    margin-top:35px;
    margin-right: 40px;
  }
</style>