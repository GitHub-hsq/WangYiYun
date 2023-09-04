<template>
  <div class="shang1">

    <div class="sousuo">
        <div class="sousuok" id="sou">
          <div style="width:250px;">
              <el-input
            placeholder="请输入关键字"
            suffix-icon="el-icon-search"
            clearable
            @clear="handleClear"
            v-model="filterMassege">
            </el-input>
          </div>
                
        </div>
        
        <div class="leixing" id="sou">
             <span class="vertical-center">类型</span><el-select v-model="value1" placeholder="请选择" >
                <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
        </div>
    
        <div class="renyuan" id="sou">
          <span class="vertical-center">创建人员</span><el-select v-model="value2" placeholder="请选择" >
                <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </div>
    </div>

    <br/>
    <div class="anniu">
        <el-row>
            <el-button type="primary" @click="Searchdata">查询</el-button>
            <el-button @click="searchReset">重置</el-button>
            <el-button type="primary" @click="open">新增</el-button>
            <el-button @click="RemovetableData">删除</el-button>
            <el-button @click="viewData">查看数据</el-button>
        </el-row>
    </div>

    <AddModelVue v-if="addHandle" ref="addModel"></AddModelVue>
  </div>
</template>

<script>
import AddModelVue from './AddModel.vue';

export default {
    name:"SouSuo",
    components:{
      AddModelVue,
    },
    data() {
      return {
        filterMassege:"",//搜索框的信息
        addHandle:false,//设置弹窗不可见
        options1: [{
          value: '集团',
          label: '集团'
        }, {
          value: '行业',
          label: '行业'
        }, {
          value: '区域',
          label: '区域'
        }, {
          value: '工厂',
          label: '工厂'
        },],
        options2: [{
          value: '张三',
          label: '张三'
        }, {
          value: '李四',
          label: '李四'
        }, {
          value: '王五',
          label: '王五'
        }, {
          value: '王二麻子',
          label: '王二麻子'
        },],
        value1: '',
        value2: '',
      }
    },
    methods:{
      //查看数据
      viewData(){
        this.$router.push({
          path:"/viweData",
          query:{
            id:110,
          }
        });
  
      },
        //重置搜索框的数据
        searchReset(){
          this.filterMassege='';//清空搜索框
          //恢复类型为初始状态
          this.value1='';
          //恢复创建人员为初始状态
          this.value2='';

          this.$bus.$emit('reset')//重置
        },
        handleClear(){
         //清空搜索后的操作
         //  恢复原数据
         this.$bus.$emit('reset')//重置   
        }, 
        Searchdata(){//设置过滤条件
          if(this.filterMassege||this.value1||this.value2){//当三个中有一个存在时才触发
            console.log("拿到的数据是",this.filterMassege+"+",this.value1+"+",this.value2);
            this.$bus.$emit('dataFilter',this.filterMassege,this.value1,this.value2);
          }
          
        },
        RemovetableData(){
          this.$bus.$emit('removerow')//触发SousuoMassege删除事件
        },
        //设置弹出的逻辑
        open(){
          this.addHandle=true;
          this.$nextTick(()=>{//下一个周期dom更新执行的函数
          this.$refs.addModel.init()//调用init函数初始化
          })
        }
      }
}
</script>

<style scoped>
.leixing > * {
  margin-right: 10px;
}
.renyuan > * {
  margin-right: 10px;
}
.sousuo{
    display: flex;
}
#sou{
    flex: 0.33;/*每个盒子占比*/
    display: flex;
    justify-content: center;
    text-align: center;
}
.anniu{
    float: right;
    margin: 10px;
}
.vertical-center {
  display: flex;
  align-items: center;
}
</style>