<template>
  <div class="d-flex justify-content-center">
    <div class="mt-5">
      <h2 :style="{ color: color }">{{ Addres }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddresPages",
  props: {
    Addres: {
      type: String,
    },
    color: {
      type: String,
      default: "#000",
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  position: relative;
  font-size: 46px;
  color: black;
  font-weight: 900;
  margin-top: 75px;
  padding-bottom: 15px;
  z-index: 2;
}
h2::after {
  position: absolute;
  content: "";
  height: 2px;
  width: 120px;
  background-color: var(--primary-color);
  bottom: 0;
  right: 0;
}
</style>
