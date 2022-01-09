<template>
  <el-row :gutter="20">
    <el-col
      :span="Math.floor(20 / cols)"
      v-for="(o, idx) in targets.length" :key="o" :offset="idx % cols == 0 ? 2 : 0">
      <el-card
        :body-style="{ padding: '5px' }" class="card">
        <div class="imageframe">
          <img
            :src="targets[idx].img"
            class="image" :alt="targets[idx].alt">
        </div>
        <div style="padding: 7px;">
          <span v-html="targets[idx].desc"></span>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props: [
    'targets', 'cols'
  ]
}
</script>

<style>
.image {
  max-width: 190px;
  max-height: 150px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.imageframe {
  height: 150px;
  position: relative;
}

.card {
  width: 200px;
  height: 260px;
  margin-bottom: 20px;
}
</style>
