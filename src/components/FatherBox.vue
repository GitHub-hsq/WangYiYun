<template>
  <div class="fatherbox">
    <div class="left1">
      <LeftBox />
    </div>
    <div class="right1">
      <RightBox />
    </div>
  </div>
</template>

<script>
import LeftBox from "./LeftBox.vue";
import RightBox from "./RightBox.vue";
export default {
  name: "FatherBox",
  components: {
    LeftBox,
    RightBox,
  },
};
</script>

<style scoped>
.fatherbox {
  width: 1200px;
  /*height: calc(100vh - 100px);*/
  display: flex;
  align-items: stretch; /* 让盒子高度自适应 */
  background-color: #ffffff;

  box-shadow: 0px 5px 10px 0px rgba(148, 138, 138, 0.5);
  margin-left: auto;
  margin-right: auto;
}
.left1 {
  float: left;
  flex: 1;
  padding: 10px;
  border-right: 1px solid #e0e0e0;
  height: 550px;/*左边树形图的高度*/
}
.right1 {
  float: right;
  margin: 10px;
}
.fatherbox {
  display: flex;
}
</style>