<template>
    <div class="videoFather">
        <video muted id="index" @click="zpvideo()"
            :src="playurl" :poster="picurl"
            width="190px" height="205px" ref="video"
        ></video>

    </div>
  </template>
  
  <script>
  export default {
    name: "TestCard",
    props:{
        playurl:String,
        picurl:String,
    },
    data(){
        return{
            isShowvideo: false, 
            ifOneClick: 1,
        }
    },
    mounted() {
        console.log("收到的播放地址是:",this.playurl)
        console.log("收到的封面地址是:",this.picurl)
    },
    methods: {
        showVideo(){
            this.isShowvideo = true;
        },
        zpvideo(){
            console.log("子组件函数被调用");
            //判断当前视频处于播放还是暂停来决定点击后是播放还是暂停
            let video = this.$refs.video; // 获取视频元素
            if (video.paused) { // 判断是否处于暂停状态
                video.muted = false;
                video.play(); // 播放视频
            } else {
                video.pause(); // 暂停视频
            }
        },
        mouseenter() {
            console.log("进入视频");
            let video = document.querySelector("#index");
            video.play();

        },
        mouseleave() {
            console.log("离开视频");
            let video = document.querySelector("#index");
            video.pause();
        },
    },
  };
  </script>
  
  <style scoped lang="less">
  .videoFather {
    display: flex;
    justify-content: space-evenly;
  }
  </style>
  