<template>
  <div>
    <!-- 弹出的表单 close-on-click-modal 属性设置点击遮罩层时是否关闭对话框-->
    <el-dialog width="500px" title="编辑" :close-on-click-modal="true" :visible.sync="visible">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm"> 
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
          <el-form-item label="备注" prop="desc">
            <el-input style="width: 330px;" type="textarea" :maxlength="100" :autosize="{ minRows: 5, maxRows: 5}" v-model="ruleForm.desc" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item class="from1">
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">取消</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
  </div>
</template>

<script>
export default {
    name:'AddOrUpdate',
    data(){
        return{
            visible:false,
            ruleForm: {
            id:null,
            region: "",//父级节点
            type1:"",//类型
            name: "",//名称
            encode:"",//编码
            delivery: false,
            desc: "",//备注
            },
            rules: {
                type1: [
                { required: true, message: '请选择类型', trigger: 'change' }
                ],
            }
        }
    },
    methods:{
        init(obj){
            this.visible = true;
            this.ruleForm.id = obj.xuhao;
            this.ruleForm.region = obj.leixing;
            this.ruleForm.type1 = obj.leixing;
            this.ruleForm.name = obj.name;
            this.ruleForm.encode = obj.bianma;
        },
        submitForm() {//提交数据
                this.$bus.$emit("updataObj",this.ruleForm);
                this.visible = false;//关闭页面

            
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();//清空表单
            this.visible = false;//关闭页面
        },

    }
}
</script>

<style >
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