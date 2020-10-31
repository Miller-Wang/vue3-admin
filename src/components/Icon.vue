<template>
  <component :is="type"></component>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    type: String,
  },
};
</script>
