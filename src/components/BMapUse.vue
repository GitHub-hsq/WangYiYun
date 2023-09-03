<template>
    <div class="app-container">
      <el-row>
        <el-col :span="12">
          <el-form ref="addressInfo" :model="addressInfo" :rules="rules" label-width="100px">
            <el-form-item label="门店地址" prop="address">
              <el-input placeholder="请选择门店地址" v-model="addressInfo.address" disabled>
                <el-button slot="append" icon="el-icon-map" @click="showMap" type="primary">选择地址</el-button>
              </el-input>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      
      <!-- 百度地图位置选择 -->
      <BMapAddressSelect ref="bmapAddressSelect" @confirmMapAddress="confirmMapAddress"></BMapAddressSelect>
  
    </div>
  </template>
  
  <script>
  
  import BMapAddressSelect from "./BMapAddressSelect.vue";
  
  export default {
    data() {
      return {
        // 位置信息
        addressInfo: {},
        // 表单校验
        rules: {},
      };
    },
    components: {
      BMapAddressSelect,
    },
    methods: {
      /** 显示地图 */
      showMap() {
        this.$refs.bmapAddressSelect.show();
      },
  
      /** 确认地图地址 */
      confirmMapAddress(addressInfo) {
        this.addressInfo = addressInfo;
      },
    },
  };
  </script>  