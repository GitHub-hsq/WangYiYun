<template>
  <div class="father">
    <div class="Header">
        <div class="Logo"><img ></div>
        <div class="Serchar">
            <el-autocomplete
            v-model="state" :fetch-suggestions="querySearchAsync" placeholder="请输入" @select="handleSelect">
            </el-autocomplete>
        </div>
    </div>
    <div class="Bodys">
        <div class="Sidebars">这是侧边栏</div>
        <div class="Sections">这是部分</div>
    </div>
    <div class="Footer"></div>
  </div>
</template>

<script>
import axios from 'axios';
import VueAliplayerV2 from "vue-aliplayer-v2";
export default {
    name: 'WyY',
    components:{
        VueAliplayerV2
    },
    data(){
        return {
            state: '',//
            restaurants: [],//远程搜索得到的数据
        }
    },
    mounted(){
        
    },
    methods:{
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
                console.log("出错了")
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
@footer_height: 90px;
@bodys_height: calc(100vh - @header_height - @footer_height);
.borders(){/**不输出的混合 */
    border: 2px solid #333;
}
.father {
    display: flex;
    flex-direction: column;
    margin: 0;

}
.Header {
    height: @header_height;
    background-color: antiquewhite;
    .borders();
    display: flex;
    align-items: center;
    justify-content: space-around;
    .Logo {
        img {
            src: @logo;
            width: 125px;
        }
    }
}
.Bodys {
    height: @bodys_height;
    background-color: rgb(8, 250, 0);
    .borders();
    display: flex;
    .Sidebars {
        flex: 1;
        background-color: #333;
    }
    .Sections{
        flex: 3;
        background-color: aqua;
    }
}
.Footer {
    height: @footer_height;
    background-color: rgb(250, 142, 0);
    .borders();
}
</style>