<template>
    <div class="videoFather">
        <div id="mse"></div>
    </div>
</template>
<script>
import axios from 'axios';
import Player from 'xgplayer';
export default {
    name:"TestCard",
    components: {
    },
    mounted(){
        axios({
            method: "get",
            url: '/emailTest%99/api/getMiniVideo',
            params: {
                page:0,
                size: 1,
            }
        }).then(res =>{
            this.videoData = res.data.result.list;
            new Player({
                el:document.querySelector('#mse'),
                url: this.videoData[0].playurl,
                poster: this.videoData[0].picurl,
                width: 200,
                height: 150,
                controls: false,//关闭控制条
                ignores: ['replay','play'],//关闭内置控件
            });
            console.log(this.videoData,110);
        });
 
    }
}
</script>

<style scoped lang="less">
</style>
  
  