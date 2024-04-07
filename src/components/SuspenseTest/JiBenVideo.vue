<template>
    <div class="videoFathersb">
        <div class="videoFather" @mouseenter="mouseenter()" @mouseleave="mouseleave()" v-if="isReady">
            <video :muted="isMuted" id="allmuted" @click="zpvideo()" 
                :src="videoData.url" 
                :class="{'videoBody':isRadius, 'videoPlays':!isRadius}"
                ref="video"
                loop
            ></video>
            <div class="videoDatas">
                <div class="videoDatas_title">
                    <span style="width: 164px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">{{ videoData.title }}34476575675675475</span>
                    <span style="color: #606060;">&nbsp;2.4亿次观看</span>
                </div>
                
                <i :class="{'el-icon-close-notification':isMuted, 'el-icon-bell':!isMuted}" @click="switchAudio()"></i>
            </div>
        </div>
    </div>

  </template>
  
<script>
import axios from 'axios';
export default {
    name: "JiBenVideo",
    props:{
        isisMuted:Boolean,
    },
    data(){
        return{
            isShowvideo: false, 
            ifOneClick: 1,
            isReady:false,//视频是否准备好
            isMuted:true,//是否静音
            isRadius:true,//视频窗口是否圆角
            videoData:{
                url: null,
                cover: null,
                title: null,
                id: null,
            },
        }
    },

    mounted() {
        this.isMuted = this.isisMuted;
        this.getVideoList();
        this.$bus.$on('setMuted',this.setMuted);
    },
    methods: {
        setMuted(Muteds){
            this.isMuted = Muteds;
        },
        //切换静音
        switchAudio(){            
            this.isMuted = !this.isMuted;
            this.$bus.$emit('swtchSin', this.isMuted);
        },
        getVideoList(){
            //视频
            axios({
                method:'get',
                url:'https://api.apiopen.top/api/getMiniVideo',
                params:{
                    page: 0,
                    size: 1,
                },

            }).then(res=>{  
                this.videoData.url = res.data.result.list[0].playurl;
                this.videoData.cover = res.data.result.list[0].picuser;
                this.videoData.title = res.data.result.list[0].title;
                this.videoData.id = res.data.result.list[0].id;
                this.isReady = true;
            }).catch(error => {
                console.log(error)
            })
        },
        zpvideo(){
            //判断当前视频处于播放还是暂停来决定点击后是播放还是暂停
            let video = this.$refs.video; // 获取视频元素
            if (video.paused) { // 判断是否处于暂停状态
                video.muted = false;//解除静音
                this.isMuted = false;
                this.$bus.$emit('swtchSin', this.isMuted);//所有的视频都解除了静音
                video.play(); // 播放视频
            } else {
                video.pause(); // 暂停视频
            }
        },
        mouseenter() {
            this.isRadius = false;
            let video = this.$refs.video; // 获取视频元素
            video.play();
        },
        mouseleave() {
            this.isRadius = true;
            let video = this.$refs.video; // 获取视频元素
            video.pause();
        },
    },
};
</script>
  
<style scoped lang="less">
.videoFathersb{
    margin: 20px 35px;
  .videoFather {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    width: 200px;
    height: 415.55px;
    cursor: pointer;
    .videoBody {
        width: 100%; 
        border-radius: 10px;
        transition: 0.3s;
    }
    .videoPlays {
        width: 100%; 
        transition: 0.3s;
    }
    .videoDatas {
        display: flex;
        height: 50px;
        padding: 5px;
        justify-content: space-between;
        .videoDatas_title {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            font-size: 14px;
            width: 164px;
        }
        i {
            font-size: 20px;
            padding: 0px 3px;
            height: 20px;
        }

    }
  }
}
</style>
  