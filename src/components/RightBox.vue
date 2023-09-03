<template>

  <div class="sou">
    <div class="shang">
        <SouSuo/>
    </div>
    <br/>
    <div class="xiamian">
        <SousuoMassege/>
    </div>
  </div>

</template>

<script>
import SouSuo from './SouSuo.vue'
import SousuoMassege from './SousuoMassege.vue';

export default {
    name:"RightBox",
    components:{
        SouSuo,
        SousuoMassege,
    }
}
</script>

<style scoped>
.shang{
    margin-top:10px;
}
.sou{
    flex:1;
}
.xiamian{
    margin: 10px;
}
</style>