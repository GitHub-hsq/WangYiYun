<template>
    <div>
        <div class="BodyDiv">
            <el-skeleton class="BodyDiv_skeleton"  :loading="loading" animated :count="1">
                <div class="BodyDiv_skeleton_template" slot="template">
                    <el-col style="width: 200px;" v-for="(item,index) in lists" :key="index" >
                        <el-skeleton-item variant="image" style="width: 200px; height: 133px;"/>
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
                            <img :src="item.imgUrl" class="image multi-content" />
                            <div class="Card_bottom_div" style="padding:5px 10px;">
                                <span>{{ item.name + index }}</span>
                                <div class="bottom card-header Card_bottom_div_mini">
                                    <span class="time">{{ currentDate }}</span>
                                    <el-button type="text" class="button el-icon-video-play" ></el-button>
                                </div>
                            </div>
                        </el-card>                                                   
                    </div>

                    
                </template>
            </el-skeleton>
        </div>
    </div>

</template>
  
<script>
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
        this.loading = false
        this.lists = [
            {
            imgUrl:
                'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
            name: '鹿',
            },
            {
            imgUrl:
                'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
            name: '马',
            },
            {
            imgUrl:
                'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
            name: '山狮',
            },
            {
            imgUrl:
                'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
            name: '鹿',
            },
            {
            imgUrl:
                'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
            name: '马',
            },
            {
            imgUrl:
                'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
            name: '山狮',
            },
            {
            imgUrl:
                'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
            name: '鹿',
            },
            {
            imgUrl:
                'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
            name: '马',
            },
            {
            imgUrl:
                'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
            name: '山狮',
            },
            {
            imgUrl:
                'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
            name: '鹿',
            },
            {
            imgUrl:
                'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
            name: '马',
            },
            {
            imgUrl:
                'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
            name: '山狮',
            },
            
        ]
    },
    methods: {
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