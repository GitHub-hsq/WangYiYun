<template>
  <div class="leftbox">
    <div class="inputk">
      <el-input
        placeholder="请输入关键字"
        suffix-icon="el-icon-search"
        clearable
        @clear="handleClear"
        v-model="filterText">
      </el-input>
    </div>
    
    <div class="treek">
      <el-tree
        class="filter-tree"
        :data="data"
        :props="defaultProps"
        default-expand-all
        :filter-node-method="filterNode"
        ref="tree"
      >
      </el-tree>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftBox",
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val); //过滤掉不是val的
    },
  },

  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    handleClear() {
      //清空搜索后的操作
    },
  },

  data() {
    return {
      filterText: "",
      data: [
        {
          id: 1,
          label: "集团",
          children: [
            {
              id: 4,
              label: "工厂1",
              children: [
                {
                  id: 9,
                  label: "水泥行业",
                  children: [
                    {
                      id: 11,
                      label: "工厂2",
                    },{
                      id: 12,
                      label: "广东省",
                    },
                  ],
                }
              ],
            },
            {
              id: 4,
              label: "制造车间",
              children: [
                {
                  id: 9,
                  label: "车间1",
                },
                {
                  id: 10,
                  label: "车间2",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1",
            },
            {
              id: 6,
              label: "二级 2-2",
            },
          ],
        },
        {
          id: 3,
          label: "一级 3",
          children: [
            {
              id: 7,
              label: "二级 3-1",
            },
            {
              id: 8,
              label: "二级 3-2",
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
};
</script>

<style scoped>
.treek{
  margin-top: 15px;
  margin-left: 10px;
}
.leftbox {
  flex: 1; /*设置和父组件等高*/
  margin-top:10px;
}
</style>