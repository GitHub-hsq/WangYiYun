<template>
  <div class="chinaMap" ref="chinaMap" style="width: 500px;height: 300px;"></div>
</template>

<script>


export default {
  mounted() {
    this.initCharts()
  },
  methods: {
    initCharts() {
      let mapcharts = this.$echarts.init(this.$refs.chinaMap);
       //窗口尺寸改变
      window.addEventListener("resize",function(){
        mapcharts.resize();
      })
 
      // 绘制图表
      mapcharts.setOption({
        series: [{
           type: 'map',
           map: 'china',
           layoutCenter: ['40%', '50%'], // 地图布局中心点
           layoutSize: 270, 
           label: {
            show: true,
            color: '#ffffff',
            fontSize: 10,
           },
           itemStyle: {
               areaColor: '#eee',
               borderColor: '#24dafe',
           },
           roam: true,
           zoom: 1.2,
           emphasis: {
            label: {
                color: '#fff',
                fontSize: 12,
                fontWeight:'bold'
            },
            itemStyle: {
                areaColor: 'none',
                borderColor: '#77ebff',
                borderWidth: 2
            }
           },
           data: [
           { name: '北京', value: 17 },
           { name: '天津', value: 12 },
           { name: '上海', value: 15 },
           { name: '重庆', value: 15 },
           { name: '河北', value: 15 },
           { name: '河南', value: 15 },
           { name: '云南', value: 5 },
           { name: '辽宁', value: 15 },
           { name: '黑龙江', value: 15 },
           { name: '湖南', value: 2 },
           { name: '安徽', value: 15 },
           { name: '山东', value: 15 },
           { name: '新疆', value: 3 },
           { name: '江苏', value: 3 },
           { name: '浙江', value: 9 },
           { name: '江西', value: 15 },
           { name: '湖北', value: 4 },
           { name: '广西', value: 4 },
           { name: '甘肃', value: 10 },
           { name: '山西', value: 15 },
           { name: '内蒙古', value: 15 },
           { name: '陕西', value: 9 },
           { name: '吉林', value: 8 },
           { name: '福建', value: 9 },
           { name: '贵州', value: 9 },
           { name: '广东', value: 8 },
           { name: '青海', value: 3 },
           { name: '西藏', value: 9 },
           { name: '四川', value: 0 },
           { name: '宁夏', value: 15 },
           { name: '海南', value: 7 },
           { name: '台湾', value: 4 },
           { name: '香港', value: 4 },
           { name: '澳门', value: 3 }
           ]
        }],
        visualMap: [{
          type: 'piecewise',
          show: true,
          pieces: [
              { min: 0, max:4 },
              { min: 5, max: 9 },
              { min: 10, max: 14},
              { min: 14},
          ],
          textStyle: {
             color: '#828994'
          },
          itemWidth: 64, // 每个图元的宽度
          itemHeight:12,
          top: "top",                               
          right: "0",
          inRange: {
              borderRadius: 4,
              color: [ 
                  '#84bbff',
                  '#70b4ff',
                  '#61a7ff',
                  '#4d90f2',
              ]
          },
        }],
        tooltip: { 
          trigger: 'item',  //数据项图形触发
          backgroundColor: "#fff",  
          borderWidth: 0,    
          formatter: '地区：{b}<br/>数据：{c}'
        },
      });
    }
   }
}
</script>
