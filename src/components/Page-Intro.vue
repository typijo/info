<template>
  <div>
    <el-date-picker v-model="datetime" type="datetime" placeholder="select date" />
  </div>
</template>

<script>
export default {
  data: () => {
    return {datetime: ''}
  }
}
</script>

<style>
</style>
