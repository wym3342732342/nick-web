<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Button type="primary">哈哈</Button>
    <ForwardOutlined />
  </div>
</template>

<script>
  import {Button} from "ant-design-vue";
  import { ForwardOutlined } from '@ant-design/icons-vue';
  export default {
    name: "about",
    components: {
      Button,
      ForwardOutlined
    }
  }
</script>
