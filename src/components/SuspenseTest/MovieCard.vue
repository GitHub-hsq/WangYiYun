<template>
    <div>
        <div class="BodyDiv">
            <el-skeleton class="BodyDiv_skeleton"  :loading="loading" animated :count="1">
                <div class="BodyDiv_skeleton_template" slot="template">
                    <el-col style="width: 200px;" v-for="(item,index) in lists" :key="index" >
                        <el-skeleton-item variant="image" style="width: 200px; height: 145px;"/>
                        <div style="width: 200px; padding:5px 0px;">
                            <el-skeleton-item variant="h3" style="width: 50%;" />
                            <div style="display: flex; align-items: center; justify-items: space-between; margin-top: 16px; height: 16px;">
                                <el-skeleton-item variant="text" style="margin-right: 16px;" />
                                <el-skeleton-item variant="text" style="width: 30%;" />
                            </div>
                        </div>
                    </el-col>
                </div>

                <template>
                    <div class="Cardfather" v-for="(item,index) in lists" :key="index"
                    style="padding: 10px 10px;"
                    :class="{'Card_hover': activeIndex === index}" 
                    @mouseenter="changeSize(index)" 
                    @mouseleave="resetSize()">

                        <el-card shadow="hover" :body-style="{ padding: '0px', marginBottom: '1px' }">
                            <img :src="item.cover" class="image multi-content" alt="暂无资源"/>
                            <div class="Card_bottom_div" style="padding:2px 10px;">
                                <span>{{ item.title}}</span>
                                <div class="bottom card-header Card_bottom_div_mini">
                                    <span class="time">{{'导演：'+ item.director }}</span>
                                    <el-button type="text" class="button el-icon-video-play" ></el-button>
                                </div>
                            </div>
                            <div class="Card_bottom_divtwo" v-show="activeIndex === index">
                                <p>&nbsp;{{ item.descs }}</p>
                            </div>
                        </el-card>                                                   
                    </div>    
                </template>
            </el-skeleton>
        </div>
    </div>

</template>
  
<script>
import axios from 'axios'
export default {
    name:"SectionsCard",
    data() {
    return {
        loading: true,
        currentDate: '2021-06-01',
        lists: [],
        activeIndex: null,//当前激活的卡片索引
    }
    },
    mounted() {
        this.getMovi();
    },
    methods: {
        getMovi(){//获取电影资料
            this.loading = true
            axios({
                method:'get',         
                url:`/movie/video/search/title/${'钢铁侠'}/1/9`,
            }).then(res=>{   
                this.lists = res.data.data;
                setTimeout(() => (this.loading = false), 500);
                console.log(this.lists,111);
            }).catch(error => {
                console.log(error)
            })
        },
        setLoading() {
            this.loading = true
            setTimeout(() => (this.loading = false), 500)
        },
        //鼠标放到卡片上激活
        changeSize(index){
            this.activeIndex = index;//激活的卡片索引
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
        height: 145px; /* 图片高度设置为100%以填充整个容器 */
        object-fit: cover; /* 图片按比例缩放并填充容器 */
    }
    .Card_bottom_divtwo {
        font-size: 8px;
        height: 107px;
        overflow: hidden;
        text-overflow: ellipsis; /* 超出部分显示省略号 */
        p {
            margin: 0 3px; /* 清除段落默认外边距 */
            letter-spacing: 1px;
            height: 100%;
            overflow: hidden;
        }
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