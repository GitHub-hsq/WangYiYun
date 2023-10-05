<template>
  <div>
    <div class="shortVideos" >
        <JiBenVideoVue v-for="(item,index) in videoList" :key="index" :isisMuted="Muted"></JiBenVideoVue>
    </div>

  </div>
</template>

<script>
import JiBenVideoVue from './JiBenVideo.vue'
export default {
    name: 'ShortVideo',
    components: {
        JiBenVideoVue
    },
    data(){
        return {
            isActivation: null,
            videoList:[1,2,3,4,5,6,7,8,9],
            Muted:true,//所有子组件的声音开关,这样子以后加载新的视频组件就不用重新开启声音
        }
    },
    mounted(){
        this.$bus.$on('swtchSin',this.handleMuteStateChanged);//切换所有的声音的事件总线
    },
    methods: {
        handleMuteStateChanged(isMuted) {
            // 遍历所有子组件并设置静音状态
            this.Muted = isMuted;
            this.$bus.$emit('setMuted',this.Muted);
        },
    }
}
</script>

<style scoped lang="less">
.shortVideos {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
</style>