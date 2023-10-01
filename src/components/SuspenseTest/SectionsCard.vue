<template>
    <div>
        <p>
            <el-button @click="setLoading">点我重新加载</el-button>
        </p>
        <div class="BodyDiv">
            <el-skeleton class="BodyDiv_skeleton"  :loading="loading" animated :count="3">
                <template slot="template">
                    <div style="width: 200px;">
                        <el-skeleton-item variant="image" style="width: 200px; height: 133px;"/>
                        <div style="width: 200px; padding:5px 0px;">
                            <el-skeleton-item variant="h3" style="width: 50%;" />
                            <div style="display: flex; align-items: center; justify-items: space-between; margin-top: 16px; height: 16px;">
                                <el-skeleton-item variant="text" style="margin-right: 16px;" />
                                <el-skeleton-item variant="text" style="width: 30%;" />
                            </div>
                        </div>
                    </div>
                </template>
                <template>
                    <el-card shadow="hover" class="Card_hover" :body-style="{ padding: '0px', marginBottom: '1px' }" v-for="item in lists" :key="item.name">
                        <img :src="item.imgUrl" class="image multi-content" />
                        <div class="Card_bottom_div" style="padding:5px 10px;">
                            <span>{{ item.name }}</span>
                            <div class="bottom card-header Card_bottom_div_mini">
                                <span class="time">{{ currentDate }}</span>
                                <el-button type="text" class="button el-icon-video-play" ></el-button>
                            </div>
                        </div>
                    </el-card>
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
        ]
    },
        methods: {
        setLoading() {
            this.loading = true
            setTimeout(() => (this.loading = false), 500)
        },
    },
}
</script>

<style lang="less" scoped>
.BodyDiv {
    display: flex;
    .BodyDiv_skeleton {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        .el-skeleton {
            width: 100%;
            display: flex;
            justify-content: space-evenly;
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
            transition: width 0.3s ease-in-out, height 0.3s ease-in-out;
            &:hover {
                width: 210px;
                //height: 110%;
            }
        }
    }
    .image {
        width: 100%;
    }
    .el-card {
        width: 200px;
    }
}



</style>