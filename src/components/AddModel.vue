<template>
  <div>
    <!-- 弹出的表单 close-on-click-modal 属性设置点击遮罩层时是否关闭对话框-->
    <el-dialog  width="500px" :title="title" :close-on-click-modal="true" :visible.sync="visible">
      <el-form :model="ruleForm"  :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" :disabled="disabled"> 
      <el-form-item label="所属父级" prop="region">
        <el-select style="width: 330px;" v-model="ruleForm.region" placeholder="默认选中的节点">
          <el-option label="区域" value="shanghai"></el-option>
          <el-option label="顶级" value="dingji"></el-option>
        </el-select>
      </el-form-item>

        <el-form-item  label="类型" prop="type1" >
          <el-select style="width: 330px;" v-model="ruleForm.type1" placeholder="请选择">
            <el-option label="集团" value="集团"></el-option>
            <el-option label="行业" value="行业"></el-option>
            <el-option label="区域" value="区域"></el-option>
            <el-option label="工厂" value="工厂"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item  label="名称" prop="name" >
            <el-input  style="width: 330px;" v-model="ruleForm.name" placeholder="请输入"></el-input>
        </el-form-item>

        <el-form-item  label="编码" prop="encode">
            <el-input style="width: 330px;" v-model="ruleForm.encode" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item v-if="ruleForm.type1" label="纬度" prop="latitude">
            <el-input style="width: 200px; margin-right:20px;" v-model="ruleForm.latitude" placeholder="请输入"></el-input>
            <template>
                <el-radio v-model="ruleForm.radio1" label="1">N</el-radio>
                <el-radio v-model="ruleForm.radio1" label="2">S</el-radio>
            </template> 
        </el-form-item>
        <el-form-item v-if="ruleForm.type1" label="经度" prop="longitude">
            <el-input style="width: 200px; margin-right:20px;" v-model="ruleForm.longitude" placeholder="请输入"></el-input>
            <template>
                <el-radio v-model="ruleForm.radio2" label="3">E</el-radio>
                <el-radio v-model="ruleForm.radio2" label="4">W</el-radio>
            </template>
        </el-form-item>
        <el-form-item v-if="ruleForm.type1" label="定位" prop="address">
            <!-- <el-input style="width: 330px;" v-model="ruleForm.name" placeholder="请输入" suffix-icon="el-icon-location" @click="openMap"></el-input> -->
            <el-input ref="configaddress" style="width: 330px;" v-model="ruleForm.address" placeholder="请输入" :type="textarea" :autosize="textsize">
                <i slot="suffix" v-if="!disabled" class="el-icon-location" @click="openMap"></i>
            </el-input>
        </el-form-item>
        <el-form-item label="备注" prop="desc">
          <el-input style="width: 330px;" type="textarea" :maxlength="100" :autosize="{ minRows: 5, maxRows: 5}" v-model="ruleForm.desc" placeholder="请输入"></el-input>
        </el-form-item>

        <el-form-item v-if="!founderTime" class="from1">
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">取消</el-button>
        </el-form-item>

        <!-- 一行一个:column="1" -->
        <el-descriptions v-if="founderTime" :column="1">
          <el-descriptions-item label="创建人员" >{{ruleForm.founder}}</el-descriptions-item><br/>
          <el-descriptions-item label="创建时间" >{{ruleForm.ontime}}</el-descriptions-item>
        </el-descriptions>

      </el-form>
      <BMapAddressSelect ref="bmapAddressSelect" @confirmMapAddress="confirmMapAddress"></BMapAddressSelect>
    </el-dialog>
  </div>
</template>
  
<script>
import BMapAddressSelect from './BMapAddressSelect.vue';
export default {
  name: "AddModel",
  data() {
    return {
      visible: false, //设置是否可见
      disabled:false,//是否禁用表单
      textsize:{},//防止内容超过长度
      textarea:"",//设置定位展示类型
      founderTime:false,//创建人和时间
      title:"新增工厂建模",
      // 位置信息
      addressInfo:{},
      ruleForm: {
        region: "",//父级节点
        type1:"",//类型
        name: "",//名称
        encode:"",//编码
        latitude:"",//纬度
        longitude:"",//经度
        radio1:"1",//选择了N或者S纬度
        radio2:"3",//选择了E或者W经度
        positioning:"",//定位
        address:"",//选择的位置信息
        delivery: false,
        type: [],
        resource: "",
        desc: "",//备注
        founder:"",//创始人
        ontime:"",//创建时间
      },
      rules: {
          type1: [
            { required: true, message: '请选择类型', trigger: 'change' }
          ],
        }
    };
  },
  watch:{
     'ruleForm.latitude'(){//需要使用引号
        this.ruleForm.radio1 = this.ruleForm.latitude >= 0 ? "1" : "2" ;
    },
    'ruleForm.longitude'(){
      this.ruleForm.radio2 = this.ruleForm.longitude >= 0 ? "3" : "4" ;
    },
  },
  methods: {
    //设置定位输入框的信息
    addressInput(addComp){
      console.log("得到了信息:",addComp);
      this.ruleForm.address = addComp.province + " " + addComp.city + " " +
      addComp.district + " " + addComp.street + " "+ addComp.streetNumber + addComp.address;
      this.ruleForm.longitude = addComp.longitude | 0 ;
      if(this.ruleForm.longitude<0)this.ruleForm.radio1="2";//南纬
      this.ruleForm.latitude = addComp.latitude | 0;  
      if(this.ruleForm.latitude<0)this.ruleForm.radio2="4";//西经
    },
    //打开地图选择位置
    openMap() {
        // 在这里调用百度地图的API打开地图窗口
        this.$refs.bmapAddressSelect.show();//打开地图选择窗口
  },
        /** 确认地图地址 */
        confirmMapAddress(addressInfo) {
        this.addressInfo = addressInfo;
      },
    init() {
      this.visible = true;
      this.$nextTick(() => {
        //执行操作逻辑
      });
    },
    informationDetails(obj){
      this.visible = true;
      this.title = "查看工厂建模";
      this.ruleForm.region = obj.leixing;
      this.ruleForm.type1 = obj.leixing;
      this.ruleForm.name = obj.name;
      this.ruleForm.encode = obj.bianma;
      this.ruleForm.latitude = obj.latitude;
      this.ruleForm.longitude = obj.longitude;
      this.ruleForm.address = obj.address;
      this.ruleForm.desc = obj.desc;
      this.ruleForm.ontime = obj.data;
      this.ruleForm.founder = obj.chuangjr;

      this.textsize = { minRows: 2, maxRows: 3};//最低两行，最高五行
      this.textarea = "textarea";
      this.disabled = true ;//禁用表单组件
      this.founderTime = true;//去掉确认和取消的按钮
    },
    submitForm(formName) {//提交数据
      console.log("提交的数据是:",this.ruleForm);
      const timestamp = Date.now();
      const date = new Date(timestamp);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;//月份从 0 开始，所以需要加1
      const day = date.getDate();
      this.ruleForm.ontime = year+"-"+month+"-"+day;//设置创建时间
      const founders = ["张三", "李四", "王五", "王二麻子"];
      const randomIndex = Math.floor(Math.random() * founders.length);
      this.ruleForm.founder = founders[randomIndex];
      this.$bus.$emit("addObj",this.ruleForm);
      this.$refs[formName].resetFields();//清空表单
      this.visible = false;//关闭页面

    },
    resetForm(formName) {
      this.$refs[formName].resetFields();//清空表单
      this.visible = false;//关闭页面
    },
  },
  components:{
    BMapAddressSelect,
  },
  mounted(){
      this.$bus.$on("configaddress", this.addressInput); //得到提交过来的地址信息
      this.$bus.$on("detail", this.informationDetails); //得到提交过来的信息进行展示
      
  },
};
</script>
  
<style>
.from1{
  display: flex;
  justify-content: right;
}
.el-dialog__header{
    background-color: rgba(248,248,248);
}
.el-icon-location:before{
    color: rgba(24,144,255);
    margin-right: 10px;
    font-size: 20px;
}
</style>