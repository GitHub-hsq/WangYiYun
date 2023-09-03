<template>
  <!--通过计算属性实现页面数据显示的条数-->
  <div class="xiamian">
    <el-table :header-cell-style="getRowClass" ref="multipleTable" :data="pagedTableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column prop="xuhao" label="序号" width="70"> </el-table-column>
      <el-table-column prop="leixing" label="类型" width="100">
      </el-table-column>
      <el-table-column prop="name" label="名称" width="120"> </el-table-column>
      <el-table-column prop="bianma" label="编码" width="120">
      </el-table-column>
      <el-table-column prop="data" label="创建时间" width="120">
      </el-table-column>
      <el-table-column prop="chuangjr" label="创建人员" width="120">
      </el-table-column>
      <el-table-column prop="wangguan" label="网关列表"> </el-table-column>
      <!--操作选项-->
      <el-table-column fixed="right" label="操作" width="90">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">详情</el-button>
          <el-button @click="addOrUpdateHandle(scope.row)" type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="block">
      <!--分页管理-->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handlePageChange"
        background
        :page-sizes="[5, 10]"
        :page-size="pageSize"
        :current-page="currentPage"
        layout=" sizes, prev, pager, next, jumper"
        :total="datalenght"
      >
      </el-pagination>
    </div>
    <add-or-update v-if="addOrUpdateVisible" ref="addOrUpdate" ></add-or-update>
    <AddModel v-if="showObj" ref="showuser"></AddModel>
  </div>
</template>

<script>
import AddOrUpdate from './rtdxSrcFrom.vue'
import AddModel from './AddModel.vue';
export default {
  name: "SousuoMassege",
  components:{
    AddOrUpdate,
    AddModel,
  },
  data() {
    return {
      currentPage: 1, // 当前页码
      pageSize: 5, // 默认每页显示的条数
      datalenght: null, //计算页面数据条数
      addOrUpdateVisible:false,//v-if触发弹窗
      showObj:false,//详情数据展示
      filterMassege: "", //设置三个搜索的属性并监视他们
      InitialQuantity:8,//初始数据
      val1: "",
      val2: "",
      tableData: [
        {
          xuhao: 1,
          leixing: "集团",
          name: "海螺集团",
          bianma: "32533",
          data: "2016-05-03",
          chuangjr: "张三",
          wangguan: "xxx25",
          desc:"",//备注
          latitude:"34",//纬度
          longitude:"110",//经度
          address:"山西省 运城市 盐湖区  ",//选择的位置信息
        },
        {
          xuhao: 2,
          leixing: "集团",
          name: "上汽集团",
          bianma: "32533",
          data: "2016-05-03",
          chuangjr: "李四",
          wangguan: "xxx25",
          desc:"",//备注
          latitude:"34",//纬度
          longitude:"111",//经度
          address:"河南省 三门峡市 湖滨区 三门峡服务区 ",//选择的位置信息
        },
        {
          xuhao: 3,
          leixing: "工厂",
          name: "水泵工厂",
          bianma: "32533",
          data: "2016-05-03",
          chuangjr: "王五",
          wangguan: "xxx25",
          desc:"",//备注
          latitude:"34",//纬度
          longitude:"111",//经度
          address:"河南省 三门峡市 陕州区 G310(连共线) ",//选择的位置信息
        },
        {
          xuhao: 4,
          leixing: "行业",
          name: "工业互联网",
          bianma: "32533",
          data: "2016-05-03",
          chuangjr: "王二麻子",
          wangguan: "5x25",
          desc:"",//备注
          latitude:"36",//纬度
          longitude:"113",//经度
          address:"山西省 长治市 潞城区 潞阳大道辅路 ",//选择的位置信息
        },
        {
          xuhao: 5,
          leixing: "行业",
          name: "盘柜制造",
          bianma: "5878",
          data: "2016-05-03",
          chuangjr: "李四",
          wangguan: "2255",
          desc:"",//备注
          latitude:"35",//纬度
          longitude:"113",//经度
          address:"河南省 新乡市 牧野区 中原路 283号",//选择的位置信息
        },
        {
          xuhao: 6,
          leixing: "工厂",
          name: "水泥工厂",
          bianma: "489554",
          data: "2018-11-03",
          chuangjr: "张三",
          wangguan: "xxx25",
          desc:"",//备注
          latitude:"35",//纬度
          longitude:"116",//经度
          address:"山东省 济宁市 任城区 环城北路 9-27号",//选择的位置信息
        },
        {
          xuhao: 7,
          leixing: "区域",
          name: "河南省",
          bianma: "32533",
          data: "2016-05-03",
          chuangjr: "李四",
          wangguan: "yyy666",
          desc:"",//备注
          latitude:"36",//纬度
          longitude:"118",//经度
          address:"山东省 淄博市 张店区 ",//选择的位置信息
        },
        {
          xuhao: 8,
          leixing: "工厂",
          name: "工厂1",
          bianma: "32533",
          data: "2016-05-03",
          chuangjr: "张三",
          wangguan: "xxx25",
          desc:"",//备注
          latitude:"36",//纬度
          longitude:"120",//经度
          address:"山东省 青岛市 城阳区 ",//选择的位置信息
        },
      ],

      //设置好选择的项目
      multipleSelection: [],
    };
  },
  computed: {
    //对表进行过滤和统计数量
    pagedTableData() {
      let data = this.tableData;
      if (this.filterMassege || this.val1 || this.val2) {
        //如果需要过滤的话
        if (this.filterMassege) {
        data = data.filter((item)=>{//过滤搜索框
             // 只有搜索值
             const searchValue = this.filterMassege.toLowerCase();//转成小写      
             // 利用数组的一些方法进行搜索匹配
             if (
               [item.xuhao, item.leixing, item.name, item.bianma, item.data, item.chuangjr, item.wangguan]
                 .some(value => String(value).toLowerCase().includes(searchValue))
             ) {return item;}
        })}

        if(this.val1){
        data = data.filter((item)=>{//过滤第二个值
            return item.leixing == this.val1;
        })}

        if(this.val2){
        data = data.filter((item)=>{//过滤第三个值
            return item.chuangjr == this.val2; 
        })}

        this.dataFilter(data); //将过滤好的数据进行统计
      } else {
        this.dataFilter(this.tableData); //如果不过滤，则统计原来的数据条目
      }
      //计算起始索引
      const startIndex = (this.currentPage - 1) * this.pageSize;
      //计算结束索引
      const endIndex = startIndex + this.pageSize;
      //计算数据条数
      //通过切片得到需要展示的数据
      return data.slice(startIndex, endIndex) || [];
    },
  },

  methods: {
    //弹窗
    addOrUpdateHandle(obj){
      this.addOrUpdateVisible = true
      this.$nextTick(()=>{//下一个周期dom更新执行的函数
        console.log(obj);
        this.$refs.addOrUpdate.init(obj);//调用init函数

      })
    },
    //重置数据筛选
    Reset() {
      this.filterMassege = "";
      this.val1 = "";
      this.val2 = "";
      this.handlePageChange(1); //重置当前页面到第一页
    },
    search(massege, v1, v2) {
      //触发信息过滤
      this.filterMassege = massege;
      this.val1 = v1;
      this.val2 = v2;
    },
    //计算数据条数
    dataFilter(data) {
      this.datalenght = data.length;
    },
    //设置当前页面数据数量
    handleSizeChange(val) {
      this.pageSize = val;
    },
    //更新当前页数
    handlePageChange(val) {
      this.currentPage = val;
    },
    handleClick(row) {
      console.log("详情", row);
      this.showObj = true;
      this.$nextTick(()=>{//下一个周期dom更新执行的函数
        this.$refs.showuser.informationDetails(row);//调用init函数
      })
    },
    //监听哪些行被选中了
    handleSelectionChange(selection) {
      this.multipleSelection = selection;
    },
    //添加数据
    addObject(obj){
      let p = sessionStorage.getItem("lastid");
      let newp = JSON.parse(p)+1;
      sessionStorage.setItem("lastid",JSON.stringify(newp));

      function NewObj() {
        this.xuhao = null;
        this.leixing = "";
        this.name = "";
        this.bianma = "";
        this.data = "";
        this.chuangjr = "";
        this.wangguan = "";
      }

      let newobj = new NewObj();

      newobj.xuhao = newp;
      newobj.leixing = obj.type1;
      newobj.name = obj.name;
      newobj.bianma = obj.encode;
      newobj.chuangjr = obj.founder;
      newobj.data = obj.ontime;
      newobj.latitude = obj.latitude;
      newobj.longitude = obj.longitude;
      newobj.address = obj.address;
      newobj.desc = obj.desc;//备注

      console.log("新增的数据是：",newobj);

      this.tableData.push(newobj);//将数据插入列表
    },
    //编辑更新数据
    updataObject(obj){
      this.tableData.forEach(element => {
        if(element.xuhao == obj.id){
          element.leixing = obj.region;
          element.leixing = obj.type1;
          element.name = obj.name;
          element.bianma = obj.encode;
          element.desc = obj.desc;

        }
      });
    },
    //删除被选中的数据
    handleBatchDelete() {
      this.tableData = this.tableData.filter(
        (item) => !this.multipleSelection.includes(item)
      );
      this.multipleSelection = [];
    },
    //表头背景颜色
    getRowClass({ rowIndex}) {
      if (rowIndex == 0) {
       return "background:rgba(231,246,255);";
      }
    },
  },
  mounted() {
    //组件挂载完成后执行的钩子
    sessionStorage.setItem("lastid",JSON.stringify(8));
    
    this.$bus.$on("removerow", this.handleBatchDelete); //给这个组件绑定事件
    this.$bus.$on("dataFilter", this.search); //绑定搜索过滤事件
    this.$bus.$on("reset", this.Reset); //重置数据展示
    this.$bus.$on("addObj",this.addObject);//添加数据对象
    this.$bus.$on("updataObj",this.updataObject);//更新数据对象

  },
};
</script>

<style scoped>
.xiamian {
  margin: 10px;
  padding: 5px;
}
.block {
  float: right;
}
</style>