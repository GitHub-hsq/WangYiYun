<template>
    <div>
        <el-button @click="getVideoList()">点我播放视频</el-button>
        <audio :src="musicList[0].palayurl" controls v-if="loading"></audio>
        <div class="BodyDiv">
            <el-skeleton class="BodyDiv_skeleton"  :loading="loading" animated :count="1">
                <!-- <div class="BodyDiv_skeleton_template" slot="template">
                    <el-col style="width: 200px;" v-for="(item,index) in playVideos" :key="index" >
                        <el-skeleton-item variant="image" style="width: 200px; height: 133px;"/>
                        <div style="width: 200px; padding:5px 0px;">
                            <el-skeleton-item variant="h3" style="width: 50%;" />
                            <div style="display: flex; align-items: center; justify-items: space-between; margin-top: 16px; height: 16px;">
                                <el-skeleton-item variant="text" style="margin-right: 16px;" />
                                <el-skeleton-item variant="text" style="width: 30%;" />
                            </div>
                        </div>
                    </el-col>
                </div> -->

                <template>

                    <div class="Cardfather" v-for="(item,index) in playVideos.list" :key="index"
                    style="padding: 10px 10px;"
                    :class="{'Card_hover': activeIndex === index}" 
                    @mouseenter="changeSize(index)" 
                    @mouseleave="resetSize()">

                        <el-card shadow="hover" :body-style="{ padding: '0px', marginBottom: '1px' }">
                            <!-- <img :src="item.imgUrl" class="image multi-content" /> -->
                            <TestXH :playurl="item.playurl" :picurl="item.picurl" 
                             ref="activeChildRef" ></TestXH>
                        </el-card>                                                   
                    </div>

                    
                </template>
            </el-skeleton>
        </div>
    </div>

</template>
  
<script>
import axios from 'axios';
import TestXH from './TestXH.vue';
export default {
    name:"TestCard",
    components:{
        TestXH
    },
    data() {
    return {
        loading: false,
        playVideos: {
            list: [],
            total: 0,
            listLenght: 0,
        },
        activeIndex: null,//当前激活的卡片索引
    }
    },
    mounted() {
        this.getVideoList();
    },
    methods: {
        getVideoList(){
            //视频
            axios({
                method:'get',
                url:'/emailTest%99/api/getMiniVideo',
                //url:'/emailTest%99/api/getHaoKanVideo',
                params:{
                    page: 0,
                    size: 1,
                },

            }).then(res=>{   
                this.playVideos.list = res.data.result.list;
                this.playVideos.total = res.data.result.total;
                this.playVideos.listLenght = res.data.result.list.length;
                console.log("返回的数据",res.data.result);
            }).catch(error => {
                console.log(error)
            })
        },
        //鼠标放到卡片上激活
        changeSize(index){
            this.activeIndex = index;//激活的卡片索引
            const child = this.$refs.activeChildRef;
            if(child){
                child[0].mouseenter();
            }

        },
        resetSize(){
            this.activeIndex = null;//重置卡片索引
        }
    },
}
</script>

<style lang="less" scoped>
.BodyDiv {
    display: flex;
    .BodyDiv_skeleton {
        transition: 0.3s;
        width: 100%;
        height: 800px;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        font-weight: 300;//设置字体粗细
        align-content: space-evenly;

        .BodyDiv_skeleton_template {
            display: flex;
            justify-content: space-evenly;
            flex-wrap: wrap;
            align-items: space-evenly;
        }
        .Card_bottom_div {
            display: flex;
            flex-direction: column;
            
            .Card_bottom_div_mini {
                height: 40px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                span {
                    font-size: 14px;
                    height: 14px;
                    line-height: 14px;
                }
                .button {
                    font-size: 35px;
                }
            }
        }
        .Card_hover {
            position: relative; /* 确保浮空盒子相对于此盒子定位 */
            width: 201.6px;
            .el-card {
                transition: 0.5s;
                position: absolute;
                z-index: 1;
                transform: translateY(-10px);
                width: 210px;
                height: 315px;

            }

        }
    }
    .image {
        width: 100%;
    }
    .el-card {
        width: 200px;
        height: 210px;
    }
    .Cardfather {
        transition: 0.5s;
        width: 201.6px;
        height: 231.6px;
    }
}

</style>