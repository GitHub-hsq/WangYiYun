<template>
    <el-dialog title="位置选择" :visible.sync="openMap" width="500px" append-to-body>

      <div class="zzz">
      <el-input size="medium" name="address_detail" type="text" id="suggestId" v-model="searchAddresKeywords" placeholder="请输入地址来直接查找相关位置">
      </el-input>
      
      <!-- 地图盒子 -->
      <div >
        <baidu-map id="allmap" class="map" style="height=400px" @ready="handler"></baidu-map>
      </div>
      </div> 

      <!-- 最下方的按钮 -->
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="confirmSelect">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </template>
  
  <script>

  import  BMap  from 'vue-baidu-map'
  export default {
    data() {
      return {
        address_detail: null,
        userlocation: { lng: "", lat: "" },
        searchAddresKeywords: "",//搜索框的内容
        addressInfo: {
          // 地址信息
          longitude: "", // 经度
          latitude: "", // 纬度
          province: "", // 省
          city: "", // 市
          district: "", // 区
          street:"",//街道
          streetNumber:"",//门牌号
          address: "", // 详细地址
        },
        clickPoint:{
          lat:0,
          lng:0
        },
        openMap: false,
      };
    },
    methods: {
      handler({BMap,map}){
        var th = this;
        // 创建Map实例
        var map = new BMap.Map("allmap");
        // 初始化地图,设置中心点坐标，
        var point = new BMap.Point(120.39,36.28);
        // 创建点坐标，汉得公司的经纬度坐标
        map.centerAndZoom(point, 12);
        map.enableScrollWheelZoom();//开启地图缩放
        var cityCtrl = new BMap.CityListControl();  // 添加城市列表控件
        map.addControl(cityCtrl);
        //添加平移控件
        var navControl = new BMap.NavigationControl({//平移控件
          //anchor:BMAP_ANCHOR_TOP_RIGHT ,//显示在右上角
          offset: new BMap.Size(395, 20),
          type:BMAP_NAVIGATION_CONTROL_SMALL//显示小型的平移缩放空间
        });
        map.addControl(navControl);
        //添加比例尺控件
        var opts = new BMap.ScaleControl({
          offset: new BMap.Size(0, 53)
        });
        map.addControl(opts);

                // 监听地图点击事件，获取点击位置的坐标
        map.addEventListener("click",  (e)=> {
          //添加标注
          var clickpt = e.point; // 点击的坐标
          map.clearOverlays(); // 移除地图上的标注
          var marker = new BMap.Marker(clickpt); // 创建标注
          map.addOverlay(marker); // 将标注添加到地图中
          //地址逆向解析
          var geoc = new BMap.Geocoder();
          geoc.getLocation(clickpt,(rs)=>{//解析后返回一个包含详细地址信息的对象这里用rs接收
            if(rs){
              th.addressInfo.longitude = clickpt.lng;//设置经度
              th.addressInfo.latitude = clickpt.lat;//设置纬度
             
              var addComp = rs.addressComponents;
              th.searchAddresKeywords = addComp.province + " " + addComp.city + " " +
              addComp.district + " " + addComp.street + " "+ addComp.streetNumber;
              /*封装准备传输的对象*/
              this.addressInfo.province = addComp.province;
              this.addressInfo.city = addComp.city;
              this.addressInfo.district = addComp.district;
              this.addressInfo.street = addComp.street;
              this.addressInfo.streetNumber = addComp.streetNumber;
              
            }else{
              alert("地址解析失败！");
            }  
          });
        });

        //建立一个自动完成的对象
        var ac = new BMap.Autocomplete({
          input: "suggestId",
          location: th.map,
        });

        var myValue;

        //鼠标点击下拉列表后的事件
        ac.addEventListener("onconfirm", function (e) {
          var _value = e.item.value;
          myValue =
            _value.province +
            _value.city +
            _value.district +
            _value.street +
            _value.business;
          this.address_detail = myValue;
          th.addressInfo.address =  _value.business;
         
          setPlace();
        });

        function setPlace() {
          //清除地图上所有覆盖物
          map.clearOverlays();

          //智能搜索
          var local = new BMap.LocalSearch(map, {
            onSearchComplete: myFun,
          });

          function myFun() {
            //获取第一个智能搜索的结果
            th.userlocation = local.getResults().getPoi(0).point;
            map.centerAndZoom(th.userlocation, 15);
            //添加标注
            map.addOverlay(new BMap.Marker(th.userlocation));
            
            var lastpoint = local.getResults().getPoi(0).point;
            //地址逆向解析
            var geoc = new BMap.Geocoder();
            geoc.getLocation(lastpoint,(rs)=>{//解析后返回一个包含详细地址信息的对象这里用rs接收
              if(rs){
                th.addressInfo.longitude = lastpoint.lng;//设置经度
                th.addressInfo.latitude = lastpoint.lat;//设置纬度
                var addComp = rs.addressComponents;
                /*封装准备传输的对象*/
                th.addressInfo.province = addComp.province;//省
                th.addressInfo.city = addComp.city;//城市
                th.addressInfo.district = addComp.district;//区
                th.addressInfo.street = addComp.street;//街道
                th.addressInfo.streetNumber = addComp.streetNumber;//门牌号

              }else{
                alert("地址解析失败！");
              }  
            });

          }
          
          local.search(myValue);
        }
      },
      // 初始化百度地图
      // handler({BMap,map}) {
      //   let that = this;
      //   this.point = new BMap.Point(120.39,36.28);
      //   this.clickPoint = this.point;//点击的位置
      //   map.centerAndZoom(this.point,12);// 地图初始化，同时设置地图展示级别
      //   // 开启地图缩放功能
      //   map.enableScrollWheelZoom(true);//开启地图缩放
      //   var cityCtrl = new BMap.CityListControl();  // 添加城市列表控件
      //   map.addControl(cityCtrl);
      //   //添加平移控件
      //   var navControl = new BMap.NavigationControl({//平移控件
      //     //anchor:BMAP_ANCHOR_TOP_RIGHT ,//显示在右上角
      //     offset: new BMap.Size(395, 20),
      //     type:BMAP_NAVIGATION_CONTROL_SMALL//显示小型的平移缩放空间
      //   });
      //   map.addControl(navControl);
      //   //添加比例尺控件
      //   var opts = new BMap.ScaleControl({
      //     offset: new BMap.Size(0, 53)
      //   });
      //   map.addControl(opts);

      // //建立一个自动完成的对象
      // var ac = new BMap.Autocomplete({
      //   input: "suggestId",
      //   location: that.map,
      // });

      // ac.addEventListener("onconfirm",()=>{
      //   console.log("点击了下拉框");
      // });


      //   // 监听地图点击事件，获取点击位置的坐标
      //   map.addEventListener("click",  (e)=> {
      //     //添加标注
      //     var clickpt = e.point; // 点击的坐标
      //     map.clearOverlays(); // 移除地图上的标注
      //     var marker = new BMap.Marker(clickpt); // 创建标注
      //     map.addOverlay(marker); // 将标注添加到地图中
      //     //地址逆向解析
      //     var geoc = new BMap.Geocoder();
      //     geoc.getLocation(clickpt,(rs)=>{//解析后返回一个包含详细地址信息的对象这里用rs接收
      //       if(rs){
      //         that.addressInfo.longitude = clickpt.lng;//设置经度
      //         that.addressInfo.latitude = clickpt.lat;//设置纬度
      //         var addComp = rs.addressComponents;
      //         that.searchAddresKeywords = addComp.province + " " + addComp.city + " " +
      //         addComp.district + " " + addComp.street + " "+ addComp.streetNumber;
      //         // this.addressInfo.longitude = rs.lng;
      //         // this.addressInfo.latitude = rs.lat;
      //         this.addressInfo.province = addComp.province;
      //         this.addressInfo.city = addComp.city;
      //         this.addressInfo.district = addComp.district;
      //         this.addressInfo.street = addComp.street;
      //         this.addressInfo.streetNumber = addComp.streetNumber;
            
              
      //       }else{
      //         alert("地址解析失败！");
      //       }  
      //     });
      //   });


      //   /** 搜索地址Start */


      //   /** 搜索地址End */

      //   this.BMap = map;
      // },
  
      /** 打开地图选择 */
      show() {
        this.openMap = true;
      },
  
      confirmSelect() {//确认选择
          this.openMap = false;//关闭地图
          this.$bus.$emit("configaddress",  this.addressInfo);//发送地址信息
      },

      cancel() {//取消选择
          this.openMap = false;
      }
    }, 
  };
  </script>
  
  <style >
  .tangram-suggestion-main {
    z-index: 999999;
}

  .el-input--medium {
    margin-bottom: 20px;

  }

  .map{
    height: 400px;
    width: 100%;
  }
  
  </style>
  