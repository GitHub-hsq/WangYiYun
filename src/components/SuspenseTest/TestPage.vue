<template>
  <div class="echartstest" id="testdiv">
    <!-- 页面内容 -->
  </div>
</template>
  
<script>
import * as echarts from "../../../echarts/echarts.min.js"; //导入echarts

export default {
  components: {},
  mounted() {
    console.log(this.$route.query.id); // 输出：123
    //1. 显示基本的中国地图
    //2. 将空气质量的数据设置给series下的对象
    //3. 将series下的数据和geo关联起来
    //4. 配置visualMap
    var mCharts = echarts.init(document.querySelector(".echartstest"))
    // pieData就是需要设置给饼图的数据, 数组,数组中包含一个又一个的对象, 每一个对象中, 需要有name和value
    var pieData = [{ name: '淘宝',value: 11231},{ name: '京东',value: 22673},{ name: '唯品会',value: 6123},{ name: '1号店',value: 8989},{ name: '聚美优品',value: 6700}
    ]
    var option = {
      series: [
        {
          type: 'pie',//饼图
          data: pieData,
          label: { // 饼图文字的显示
            show: true, // 显示文字
            formatter: function(arg){
              return arg.name + '平台' + arg.value + '元\n' + arg.percent + '%'
            }
          },
          roseType: 'radius', // 南丁格尔图 饼图的每一个区域的半径是不同的
          // selectedMode: 'single', // 选中的效果,能够将选中的区域偏离圆点一小段距离
          selectedMode: 'multiple',
          selectedOffset: 30
        }
      ]
    }
    mCharts.setOption(option)
    window.addEventListener('resize', function() {
    mCharts.resize();
  });
  },
};
</script>
  
<style>
.echartstest {
  width: 70vw;
  height: 45vw;
  border: 3px solid black;
}
</style>
  