<template>
    <div class="Sections">

        <!-- <el-button @click="getList()">点我获取音乐列表</el-button> -->
        <!-- <el-button @click="getData()">查看组件信息</el-button> -->

        <div class="musicComponent" v-if="isPlayRead">            
            <div class="leftPlay">
                <img :src="musicList[musicTp].cover" alt="照片">
                <div class="musicData" v-if="isPlayRead">
                    <span>{{musicList[musicTp].name}}</span>
                    <span >歌手</span>
                </div>
                
            </div>
            <div class="playComponent">
                <div class="musicPlay" v-if="isPlayRead">
                    <i class="el-icon-d-arrow-left" @click=";lastPlay()"></i>
                    <i :class="{'el-icon-video-pause': isPlay, 'el-icon-video-play': !isPlay}" @click="musicPlay()"></i>
                    <i class="el-icon-d-arrow-right" @click="nextPlay()"></i>
                </div>

                <mini-audio v-if="isPlayRead" ref="MiniAudio" class="miusicBody"
                style="margin: 0; height: 40px;"
                :audio-source="musicList[musicTp].palayurl"
                :autoplay="true"
                > </mini-audio>
            </div>
            <div class="rightPlay">                
                <i class="el-icon-s-promotion"></i>
                <i class="el-icon-s-unfold" @click="table = true"></i>
            </div>
        </div>

        <el-drawer
            title="播放列表"
            :visible.sync="table"
            direction="rtl"
            size="20%" class="drawerBG">
            <el-table :data="musicList" style="width: 100%">
                <el-table-column
                    prop="name"
                    label="歌名"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="vid"
                    label="歌曲ID"
                    width="280">
                </el-table-column>
            </el-table>
        </el-drawer>
    </div>

</template>

<script>
import axios from 'axios';
export default {
    name: 'MusicPlay',
    components: {
    },
    data(){
        return {
            musicList:[],
            musicListLength:4,//列表长度
            musicTp:0,//当前播放的歌曲指针
            isPlayRead: false,//数据加载完成才渲染播放组件
            isPlay: false,//切换播放暂停的类

            table: false,//抽屉是否展示
        }
        
    },
    computed: {
        musicProgress() {
            const progress = this.getMusicProgress();
            console.log("歌曲的进度：",progress);
            if (progress > 0.99) {
                this.nextPlay();
            }
            return progress;
        }
    },
    mounted(){
        this.getList();
    },
    methods: {
        getData(){
            console.log(this.getMusicProgress())
        },
        getMusicProgress(){
           return this.$refs.MiniAudio.progress                      
        },
        lastPlay(){
            this.isPlay = false;
            if(this.musicTp === 0) return;//当前已经是第一首了

            this.musicTp-=1;//切换指针为上一首歌
            this.$nextTick(()=>{
                setTimeout(()=>{
                    this.isPlay = true;
                },300)               
            })
            // this.$nextTick(()=>{//当组件渲染完成后再进行，否则不起作用                
            //     let miniAudio = this.$refs.MiniAudio;
            //     this.isPlay = this.$refs.MiniAudio.playing;
            //     miniAudio.play();
            //     console.log("此时的playing",miniAudio); 
            // }) 
        },
        musicPlay(){
            let miniAudio = this.$refs.MiniAudio;
            miniAudio.togglePlayback(); 
            this.$nextTick(()=>{
                this.isPlay = !this.$refs.MiniAudio.playing;
            })
            //this.isPlay = !this.isPlay;       
        },
        nextPlay(){
            this.isPlay = false;
            if(this.musicTp === this.musicListLength - 1){
                this.musicTp = -1;//到底了，切回第一首重新播放
            }
            this.musicTp+=1;//播放下一首
            this.$nextTick(()=>{
                setTimeout(()=>{
                    this.isPlay = true;
                },300)               
            })
            //以后可以做个判断是听收藏还是随便听，随便听就一直获取新歌
            this.getOneMusic();
            // this.$nextTick(()=>{//当组件渲染完成后再进行，否则不起作用                
            //     let miniAudio = this.$refs.MiniAudio;
            //     this.isPlay = this.$refs.MiniAudio.playing;
            //     miniAudio.play();
            //     console.log("此时的playing",miniAudio); 
            // })           
        },
        getList() {
            axios({
                method: 'get',
                url:'/bbj%8/api/netease/',
            }).then(res=>{
                this.musicList.push({
                    palayurl: res.data.data.play_url,
                    cover: res.data.data.img,
                    name: res.data.data.song_name,
                    vid: res.data.data.song_id
                })
                this.musicListLength+=1;
                this.isPlayRead = true;
            }).catch(error => {
                console.log(error)
            });
            axios({
                method: 'get',
                url: '/sbjk%8/wqwlapi/wyy_random.php?type=json'
            }).then(res=>{
                this.musicList.push({
                   palayurl: res.data.data.url,
                   cover: res.data.data.picurl,
                   name: res.data.data.name,
                   vid: res.data.data.id
                });
                this.musicListLength+=1;
                this.isPlayRead = true;
            }).catch(error => {
                console.log(error)
            });            
        },
        getOneMusic(){
            axios({
                method: 'get',
                url: '/sbjk%8/wqwlapi/wyy_random.php?type=json'
            }).then(res=>{
                this.musicList.push({
                   palayurl: res.data.data.url,
                   cover: res.data.data.picurl,
                   name: res.data.data.name,
                   vid: res.data.data.id
                });
                this.musicListLength+=1;
                this.isPlayRead = true;
            }).catch(error => {
                console.log(error)
            });
        }
    }

}
</script>

<style lang="less" scoped>
.musicComponent {
    background-image: linear-gradient(90deg,#9ca5f5,#7ff5ae);
    display: flex;
    justify-content: space-around;

    .leftPlay {
        width: 300px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        img {
            width: 60px;
            height: 68px;
        }
    }
    .rightPlay {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        font-size: 20px;
        width: 100px;
    }
    .playComponent {
        display: flex;
        flex-direction: column;
        width: 500px;
        .musicPlay {
            font-size: 28px;
            display: flex;
            justify-content: space-around;
            width: 400px;
            padding-top: 5px;
        }
        .miusicBody {
            width: 400px;
            background-image: none;
            padding: 0;
            box-shadow: none;
            border-radius: 0%;
            overflow: hidden;
            justify-content: space-evenly;

            .operate {
                .iconfont {
                    display: none;
                }
            }

        }
    }
    .drawerBG {
        background-image: linear-gradient(90deg,#9ca5f5,#7ff5ae);
    }
}


</style>