<template>
  <div class="planmode">
    <div class="navigation">
      <NavigAtion></NavigAtion>
    </div>
    <div class="tabal">
      <FatherBox></FatherBox>
    </div>
    

    <el-button @click="fetchData">点我打开遮罩vuex</el-button>

  </div>
</template>

<script>
import FatherBox from "../components/FatherBox.vue";
import NavigAtion from "../components/NavigAtion.vue"
import { mapActions } from 'vuex';
export default {
  components: {
    FatherBox,
    NavigAtion,
  },
  data(){
    return{
      rloading: [],
    }
  },
  methods:{
    ...mapActions('overlay', ['showOverlay', 'hideOverlay']),
    fetchData() {
      this.showOverlay(); // 显示全局遮罩

      //模拟异步请求
      setTimeout(() => {
        this.hideOverlay(); // 隐藏全局遮罩
      }, 2000);
    }
  }
};
</script>

<style scoped>
.navigation{
  background-color: #fff;
}
.planmode{
  margin-top:-10px;

}
.tabal{
    margin-top:30px;
}
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
#nh{
  flex:0.5;
  float: right;
  text-align: right;/*文本靠右对其*/
}
.jm{
  justify-content: center;
  margin-top: 25px;
  margin-left: 30px;
}
.ww{
  margin-top:35px;
  margin-right: 40px;
}
</style>