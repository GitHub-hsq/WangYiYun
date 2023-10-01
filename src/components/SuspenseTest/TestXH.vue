<template>
  <div >
    <div class="videosEdit">
        <VueAliplayerV2  @ended="nextPlay" ref="VueAliplayerV2" style="display: flex; justify-content: center; width: 310px; height: 550px;" :source="playurl()"  :cover="picurl()" v-if="isShowVideos"></VueAliplayerV2>
    </div>
    <div class="videosEdit">
        <el-button @click="play()">播放视频</el-button>
        <el-button @click="pause()">暂停视频</el-button>
        <el-button @click="lastPlay()">上一条视频</el-button>
        <el-button @click="nextPlay()">下一条视频</el-button>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
import VueAliplayerV2 from "vue-aliplayer-v2";
export default {
    name:"TestXH",
    components: {
        VueAliplayerV2,
    },
    data(){
        return {
            isShowVideos: false,//视频
            videoWidth: '400px',
            Total:0,
            playVideos:{
                list: [],
                total: 0,
                listLenght: 0,//list的长度
                tp: 0,//当前指针所指的位置
            },
        }
    },
    mounted(){
       this.postEmail();
    },
    methods:{
        //视频
        postEmail(){
            axios({
                method:'get',
                url:'/emailTest%99/api/getMiniVideo',
                //url:'/emailTest%99/api/getHaoKanVideo',
                params:{
                    page: 0,
                    size: 10,
                },

            }).then(res=>{   
                this.playVideos.list = res.data.result.list;
                this.playVideos.total = res.data.result.total;
                this.playVideos.listLenght = res.data.result.list.length;
                this.playVideos.tp = -1;//每次刷新时重置指针
                this.isShowVideos = true;
                this.nextPlay();
                //this.play();
            }).catch(error => {
                console.log(error)
            })
        },
        play() {
            this.$refs.VueAliplayerV2.play();
        },

        pause() {
            this.$refs.VueAliplayerV2.pause();
        },

        replay() {
            this.$refs.VueAliplayerV2.replay();
        },
        nextPlay(){
            
            this.playVideos.tp +=1;
            this.playurl();
            this.picurl();
            if(this.playVideos.tp === 9) {this.postEmail();}
            console.log("此时的tp",this.playVideos.tp)
        },
        lastPlay(){
            if(this.playVideos.tp === 0) return;
            this.playVideos.tp -=1;
            this.playurl();
            this.picurl();
        },
        playurl(){
            return this.playVideos.list[this.playVideos.tp].playurl;
        },
        picurl(){
            return this.playVideos.list[this.playVideos.tp].picurl;
        },
    }
}
</script>

<style  scoped>
.pagination-wrapper {
  display: flex;
  justify-content: flex-end;
}

.multi-content {
    width: 100%;
}

.videosEdit {
    display: flex;
    justify-content: center;
    margin: 10px 10px;
}
</style>