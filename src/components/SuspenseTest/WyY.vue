<template>
  <div class="father">
    <div class="Header">
        <div class="Logo">
            <a href="#">
                <img src="../../assets/images/WyY_log.png" alt="图片加载失败">
                <span>网亦云</span>
            </a>
            
        </div>
        <div class="rightHrader">
            <ul class="HeaderNav">
                <li><span><a href="#">发现音乐</a></span></li>
                <li><span><a href="#">MV</a></span></li>
                <li><span><a href="#">精选图片</a></span></li>
                <li><span><a href="#">封神榜</a></span></li>
            </ul>
            <div class="Search">
                <el-autocomplete class="Search_Body"
                v-model="state" :fetch-suggestions="querySearchAsync" clearable placeholder="请输入" @select="handleSelect">
                <i class="el-icon-search el-input__icon" slot="prefix"></i>
                </el-autocomplete>
            </div>
            <div class="Edit">
                <el-link class="Edit_link" :underline="false" icon="el-icon-s-promotion ">探索星球</el-link>
            </div>
        </div>
    </div>
    <div class="Bodys">
        <div class="Sidebars">
            <div class="Sidebars-one">
                <el-menu default-active="1" :default-openeds="['1','2','3','4','5']" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                background-color="#444" text-color="#fff" active-text-color="#ffd04b">
                    <el-submenu index="1">
                        <template slot="title">
                        <i class="el-icon-video-camera-solid" style="color: #ffd04b;"></i>
                        <span>电影推荐</span>
                        </template>
                        <el-menu-item-group>
                        <template slot="title">分类</template>
                        <el-menu-item index="1-1">科幻</el-menu-item>
                        <el-menu-item index="1-2">悬疑</el-menu-item>
                        <el-menu-item index="1-3">灾难</el-menu-item>
                        </el-menu-item-group>

                    </el-submenu>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">音乐推荐</span>
                    </el-menu-item>
                    <el-menu-item index="3" disabled>
                        <i class="el-icon-document"></i>
                        <span slot="title">暂未开通</span>
                    </el-menu-item>
                    <el-submenu index="4">
                        <template slot="title">
                        <i class="el-icon-video-camera-solid" style="color: #ffd04b;"></i>
                        <span>精选图片推荐</span>
                        </template>
                        <el-menu-item-group>
                        <template slot="title">分类</template>
                        <el-menu-item index="4-1">美女</el-menu-item>
                        <el-menu-item index="4-2">汽车</el-menu-item>
                        <el-menu-item index="4-3">科幻</el-menu-item>
                        </el-menu-item-group>

                    </el-submenu>
                    <el-menu-item index="5">
                        <i class="el-icon-setting"></i>
                        <span slot="title">设置</span>
                    </el-menu-item>
                </el-menu>
            </div>
            <!-- <div class="Sidebars-two">
                <el-menu default-active="2" :default-openeds="['1','2','3','4','5']" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                background-color="#444" text-color="#fff" active-text-color="#ffd04b">
                    <el-submenu index="1">
                        <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>音乐推荐</span>
                        </template>
                        <el-menu-item-group>
                        <template slot="title">分组一</template>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                        <el-menu-item index="1-3">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="1-4-1">选项1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">导航二</span>
                    </el-menu-item>
                    <el-menu-item index="3" disabled>
                        <i class="el-icon-document"></i>
                        <span slot="title">导航三</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span slot="title">导航四</span>
                    </el-menu-item>
                </el-menu>
            </div> -->
        </div>

        <div class="Sections">
            <div class="Top_Sections">
                <div class="Carousel">
                    <el-carousel  :interval="4000" type="card" style="width: 95%;"  height="190px">
                        <el-carousel-item v-for="item in carouselIMG" :key="item.src">
                            <img :src="item" />
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <div class="recommend">
                    <div class="recommend_son">
                        <span>为你推荐</span>
                        <i class="el-icon-arrow-right"></i>
                    </div>

                </div>
                <!-- <SectionsCard class="SectionsCard"></SectionsCard> -->
                <!-- 下面是短视频的组件 -->
                <ShortVideo class="SectionsCard"></ShortVideo>
            </div>


            <div class="Footer">
                <MusicPlay></MusicPlay>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import MusicPlay from './MusicPlay.vue';
import ShortVideo from './ShortVideo.vue'
export default {
    name: 'WyY',
    components:{
        MusicPlay,
        ShortVideo
    },
    data(){
        return {
            state: '',//
            restaurants: [],//远程搜索得到的数据
            carouselIMG:[
                require("../../assets/images/lunbotu1.jpg"),
                require("../../assets/images/lunbotu2.jpg"),
                require("../../assets/images/lunbotu3.jpg"),
                require("../../assets/images/lunbotu4.jpg"),
                require("../../assets/images/lunbotu5.jpg"),
            ],//轮播图地址
        }
    },
    mounted(){
        
    },
    methods:{
        //侧栏展开关闭
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        //远程搜索函数
        querySearchAsync(queryString,cb){
            this.restaurants = [];
            axios({
                method:'get',         
                url:`/movie/video/search/title/${queryString}/1/10`,
            }).then(res=>{
                res.data.data.forEach(items => {
                    this.restaurants.push({
                        value: items.title,
                        obj: ""
                    })
                });
                console.log("添加后的数组是：",this.restaurants);
                var restaurants = this.restaurants;
                var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;//第二个restaurants是没有输入输入的情况，可以放排行榜进行推荐
                cb(results);
            }).catch(error => {
                console.log("出错了",error)
            });
        },
        //返回匹配的下标
        createStateFilter(queryString) {
            return (state) => {
                return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            };
        },
        //选择以后的回调函数
        handleSelect(item){
            console.log(item);
        },
    }
}
</script>

<style lang="less" scoped>
@logo:"../../assets/images/Wyy_logo2.jfif";
@header_height: 70px;
@footer_height: 73px;
@bodys_height: calc(100vh - @header_height);
@img_height: calc(@header_height / 1.74);
.borders(){/**不输出的混合 */
    border: 2px solid #00ff3c;
}
.overflowY(){
    overflow-y: auto;
        // 滚动条宽度
        &::-webkit-scrollbar {
            width: 6px;
        }
        // 滚动条轨道
        &::-webkit-scrollbar-track {
            background: #e0e0e0;
        }
        // 小滑块
        &::-webkit-scrollbar-thumb {
            background: #a7a7a7;
            border-radius: 10px;
        }
        &::-webkit-scrollbar-thumb:hover {
            background: #999;
        }
}
.father {
    display: flex;
    flex-direction: column;
    margin: 0;
    overflow: hidden;
    background: linear-gradient(to top right,#c6e2fc,#fbc7ff);

}
.Header {
    height: @header_height;
    background-color: #333;
    display: flex;
    align-items: center;/**侧轴对其方式 */
    justify-content: space-around;/**主轴对其方式 */
    .Logo {
        flex: 1;
        height: 100%;
        a {
            text-decoration: none;//取消下划线
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%; 
            width: 95%;
            img{       
                height: @img_height;
                border-radius: calc(@img_height / 2);
            }
            span {
                margin-left: 5px;
                font-size: 21px;
                letter-spacing: 2px; /* 设置文字间距为2像素 */
                color: rgb(254, 254, 254);
            }
        }

    }
    .rightHrader {
        flex: 5.5;
        display: flex;
        height: 100%;
        justify-content: space-around;
            .HeaderNav {
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                height: @header_height;
                padding-left: 0px;
                font-size: 16px;
                margin: 0;
                flex-basis: 300px;/**设置基准长度 */
                li {
                    flex: 1;
                    list-style-type: none;
                    height: @header_height;
                    display: flex;
                    justify-content: center;
                    span {
                        display: inline-block;
                        width: 100%;
                        
                        a {
                            width: 100%;
                            display: inline-block;
                            line-height: @header_height;
                            text-align: center;
                            height: @header_height;
                            color: #ccc;
                            text-decoration: none;
                            &:hover {
                                color: #fff;
                                background-color: #000;
                            }
                        }
                    }

                }

            }
            .Search {
                width: 360px;
                display: flex;
                justify-content: center;
                align-content: center;
                .Search_Body {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
            .Edit {
                width: 100px;
                display: flex;
                justify-content: space-around;
                align-items: center;
                .Edit_link {
                    font-size: 17px;
                    letter-spacing: 1px;
                    color: rgb(254, 254, 254);
                    span {
                        margin-left: 0;
                    } 
                }
            }
    }

}
.Bodys {
    display: flex;
    height: @bodys_height;

    .Sidebars {//侧栏
        flex: 1;
        background-color: #444;
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow-x: hidden;
        .overflowY();
        .Sidebars-one {
            letter-spacing: 1px;
            width: 100%;


        }
        .Sidebars-two {
            letter-spacing: 1px;
            width: 100%;
        }
    }
    .Sections{
        flex: 5.5;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        width: 100%;
        
        .Top_Sections {
            display: flex;
            flex-direction: column;
            height: @bodys_height;
            .overflowY();
            .Carousel {
                flex: 1;
                padding-top: 5px;
                display: flex;
                justify-content: center;
                img {
                    width: 100%;
                }
            }

            .recommend {
                .recommend_son {
                    margin-left: 20px;
                    margin-top: 10px;
                    font-size: 20px;
                }
                
            }
            .SectionsCard {
                flex: 2;
                width: 100%;
                display: flex;
            // height: 346px;
            }
        }

        .Footer {
            height: @footer_height;
            width: 100%;
            display: flex;
            img {
                height: 100%;
                width: 100%;
            }
        }
    }
}
.el-menu {
    height: 0px;
}

</style>