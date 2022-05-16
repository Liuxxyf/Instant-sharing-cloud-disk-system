<template>
  <div class="photoshow">
    <div class="show">
      <img :src="src" alt="" class="img" />
    </div>
    <img
      src="../img/close.png"
      alt=""
      class="close"
      id="close"
      @click="close"
    />
  </div>
</template>
<script>
import bus from "../utils/bus";
export default {
  name: "Photo",
  data() {
    return {
      src: "",
    };
  },
  mounted() {
    bus.$off("ImgResources");
    bus.$on("ImgResources", this.datahangle);
  },
  methods: {
    datahangle(data) {
      console.log(data);
      this.src =
        "https://www.netdisc.cloud/" + data.groupName + "/" + data.Path;
    },
    close() {
      let photodiv = document.getElementsByClassName("photodiv")[0];
      photodiv.style.display = "none";
    },
  },
};
</script>
<style scoped>
.show {
  position: absolute;
  height: 80%;
  width: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.close {
  position: absolute;
  height: 40px;
  width: 40px;
  right: 5%;
  top: 5%;
  cursor: pointer;
}
.img {
  position: absolute;
  height: 100%;
  width: auto;
  left: 50%;
  transform: translate(-50%, 0%);
}
</style>