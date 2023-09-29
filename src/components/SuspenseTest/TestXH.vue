<template>
  <div >
    <!-- <el-button @click="getList">获取数据</el-button>
    <el-button @click="getName">智能取名</el-button> -->
    <h2>js中 in 遍历的是下标， of 遍历的是对象</h2>
    <el-table :data="getNewData()" style="width: 100%" max-height="500">
        <el-table-column fixed prop="hashId" label="ID" width="250"></el-table-column>
        <el-table-column prop="content" label="段子">
            <template slot-scope="scope">
                {{ scope.row.content }}
                <el-tooltip effect="dark" content="复制段子内容" placement="top">
                <el-button icon="el-icon-document-copy" @click="copyContent(scope.row.content)" size="mini" class="copy-button"></el-button>
                </el-tooltip> 
            </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="120">
        <template slot-scope="scope">
            <el-button
            @click.native.prevent="deleteRow(scope.$index, shuJu)"
            type="text"
            size="small">
            移除
            </el-button>
        </template>
        </el-table-column>
    </el-table>
    <div class="pagination-wrapper">
        <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        
        :current-page="currentPage"
        :page-sizes="[5, 10, 15]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="Total">
        </el-pagination>
    </div>

    <div class="videosEdit">
        <VueAliplayerV2  @ended="nextPlay" ref="VueAliplayerV2" style="display: flex; justify-content: center; width: 310px; height: 550px;" :source="playurl()"  :cover="picurl()" v-if="isShowVideos"></VueAliplayerV2>
    </div>
    <div class="videosEdit">
        <el-button @click="play()">播放视频</el-button>
        <el-button @click="pause()">暂停视频</el-button>
        <el-button @click="lastPlay()">上一条视频</el-button>
        <el-button @click="nextPlay()">下一条视频</el-button>
    </div>
    <h2 class="title">
        <span>
            Lsdfsdfsd fsdfasdf sdfsa dfsadf sd fsd fsdfasdf
            aasdf dsfa  asdfwe rtetw ert enter-to-class=""
            werqwerr qwer
            qerw werq rwerqwerwqerwr23 fgbfghfgd
        </span>
    </h2>
    <p>
        <el-button @click="getListImage">获取照片</el-button>
    </p>
    <el-button @click="getMovi()">播放电影</el-button>
    <!-- <el-button @click="getMiusc">播放音乐</el-button> -->
    <!-- <video :src="playVideos.list[0].playurl" width="400px" v-if="isShowVideos" controls :poster="playVideos.list[0].picurl"></video> -->
    <div style="border: 3px solid #000;" >
        <el-skeleton style="width: 300px; display: flex; flex-wrap: wrap;" :loading="loading" animated :count="10">
            <template slot="template">
                <el-skeleton-item variant="image" style="width: 15vw; height: 30vh;border: 3px solid #21d111;"/>
                <div style="padding: 5px; width: 14vw; border: 3px solid #cf1e1e;">
                    <el-skeleton-item variant="h3" style="width: 30%;" />
                    <div style="display: flex; align-items: center; justify-items: space-around; margin-top: 16px; height: 16px;">
                        <el-skeleton-item variant="text" style="margin-right: 15px; width: 60%;" />
                        <el-skeleton-item variant="text" style="width: 25%;" />
                    </div>
                </div>
            </template>
            <template>
                <el-card :body-style="{ padding: '10px', marginBottom: '1px', 'margin': '10px 10px'}" v-for="item in images" :key="item.videoId">
                    <img :src="item.cover" class="image multi-content"/>
                    <div style="padding: 14px;">
                        <span>{{ item.videoType }}</span>
                        <div class="bottom card-header">
                            <span class="time">{{ item.descs }}</span>
                            <el-button type="text" class="button">操作按钮</el-button>
                        </div>
                    </div>
                </el-card>
            </template>
        </el-skeleton>
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
            loading: true,//图片加载
            isShowImg: false,//是否显示图片
            currentPage: 1, // 当前页码
            pageSize: 5, // 默认每页显示的条数
            Total:0,
            shuJu:[],
            Names:[],
            images:[],
            playVideos:{
                list: [],
                total: 0,
                listLenght: 0,//list的长度
                tp: 0,//当前指针所指的位置
            },
            movieQuery:{
                key:'蜘蛛侠'
            }
        }
    },
    mounted(){
       // this.getList();
       // this.getNewData();
       //this.postEmail();
    },
    methods:{
        //视频
        getMovi(){
            axios({
                method:'get',         
                url:`/movie/video/search/title/${'蜘蛛侠'}/1/10`,
            }).then(res=>{   
                this.images = res.data.data;
                this.loading = false;
                console.log(res,111)
            }).catch(error => {
                console.log(error)
            })
        },
        //发送邮件
        getMiusc(){
            axios({
                method:'post',
                url:'/emailTest%99/api/sendVerificationCode',
                // headers:{
                //     token : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjk3NywiaWQiOjk3NywiY3JlYXRlZEF0IjoiMjAyMy0wOS0yOCAxMDozNDo0MiIsInVwZGF0ZWRBdCI6IjIwMjMtMDktMjggMTA6MzQ6NDIiLCJkZWxldGVkQXQiOm51bGwsImFjY291bnQiOiIzMTU3Nzc0ODg0QHFxLmNvbSIsImxldmVsIjowLCJleHAiOjE2OTY0NzMyODIsImlzcyI6ImFwaV9vcGVuIiwibmJmIjoxNjk1ODY3NDgyfQ.HiS-OjWJxx-lFDCTBJ0-Yo8RMnXXvrcVqkGa6MPwNmY',

                // },
                params:{
                    mail: '3157774884@qq.com',
                },

            }).then(res=>{    
                console.log("操作成功！",res);
            }).catch(error => {
                console.log(error)
            })
        },
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
                this.play();
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
        //照片
        getListImage(){
            this.isShowImg = true;
            axios({
                method:'get',
                url:'/images@5/api/getImages',
                params:{
                    //type: 'beauty',
                    page: 0,
                    size: 5,
                },

            }).then(res=>{
                this.images = res.data.result.list;
                this.loading = false;
                console.log(res.data.result,111)
            })
        },
        //复制
        copyContent(content,massege){
            var aux = document.createElement("input"); 
            aux.setAttribute("value", content); 
            document.body.appendChild(aux); 
            aux.select();
            document.execCommand("copy"); 
            document.body.removeChild(aux);
        },
        //每次更新表格的数据的操作
        getNewData(){
            // 根据当前页码和每页显示的条数计算起始索引和结束索引
            const startIndex = (this.currentPage - 1) * this.pageSize;
            const endIndex = startIndex + this.pageSize;
            
            // 使用数组的 slice 方法截取数据列表
            return  this.shuJu.slice(startIndex, endIndex);
        },
        //设置当前页面数据数量
        handleSizeChange(val) {
            this.pageSize = val;
            this.getNewData();
        },
        //更新当前页数
        handleCurrentChange(val) {
            this.currentPage = val;
            this.getNewData();
        },
        deleteRow(index, rows) {//执行删除操作  
            let unIndex = (this.currentPage - 1) * this.pageSize + index;
            rows.splice(unIndex, 1);
            this.Total-=1;
        },
        getList(){
            let times = Math.floor(Math.random() * 10) + 1;
            let tim = Math.floor(new Date().valueOf() / 1000);//获取当前时间的时间戳减一个随机数，精确到秒
            axios({
                method:'get',
                url:'/api%88/joke/content/list.php', // 使用代理配置的路径
                headers: {
                    'Content-Type' : 'application/x-www-form-urlencoded', // 请求中的数据采用 URL 编码格式
                },
                params:{
                    sort: 'desc',
                    time: tim - times,
                    key: '03471e0bf35c4a9a9476c619655bd35f'
                }
            }).then((res)=>{
                let xhData = res.data.result.data;
                this.shuJu = xhData;
                this.Total = xhData.length;
            }).catch(err=>{console.log(err.message);})
        },
        getName () {
            axios({
                method: 'get',
                url: '/appb9#2/fapigw/naming/query',
                headers: {
                    'Content-Type' : 'application/x-www-form-urlencoded', // 请求中的数据采用 URL 编码格式
                },
                params:{
                    key:'6c40927e2243c294bf69d984a351da29',
                    surname: '黄'
                }
            }).then(res=>{
                this.Names = res.data.result.data;
            }).catch(err=>{console.log(err.message);})
        }
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

.title {
    color: #333;
    line-height: 2;/**行高 */
}

.title span {
    background: linear-gradient(to right, #edfc4d, #28c840) no-repeat right bottom;
    background-size: 0px 2px;
    transition: background-size 0.5s;
}
.title span:hover {
    background-position: left bottom;
    background-size: 100% 2px;
}
</style>