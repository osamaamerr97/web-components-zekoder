<template>
  <div class="container" :style="styleObject">
    <div v-if="showName && namePosition != 'right'" class="user">
      <span class="username">{{ firstName }} {{ lastName }}</span>
      <span v-if="status" class="status"> {{ status }} </span>
    </div>
    <a :title="`${firstName} ${lastName}`">
      <img v-if="avatar" class="avatar" :src="avatar" alt="avater" />
      <div
        v-else
        class="avatar"
        alt="avater"
        :style="{
          backgroundColor: getRandomColor(),
        }"
      >
        <span>{{ firstName[0] }}. {{ lastName[0] }}.</span>
      </div>
    </a>
    <div v-if="showName && namePosition == 'right'" class="user">
      <span class="username">{{ firstName }} {{ lastName }}</span>
      <span v-if="status" class="status"> {{ status }} </span>
    </div>
    <i
      v-if="dropdownLinks.length > 0"
      @click="toggle = !toggle"
      :class="toggle ? 'fa fa-angle-up' : 'fa fa-angle-down'"
      style="cursor: pointer"
    />
    <div v-if="toggle" class="dropdown" :style="dropdownStyleObj">
      <a v-for="(link, i) in dropdownLinks" :key="i" :href="link.url">{{
        link.label
      }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ZekUserInfo",
  props: {
    avatar: {
      type: String,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    showName: {
      type: Boolean,
      default: true,
    },
    namePosition: {
      type: String,
      default: "right",
    },
    status: {
      type: String,
    },
    dropdownLinks: {
      type: Array,
    },
    styleObj: {
      type: Object,
    },
    dropdownStyleObj: {
      type: Object,
    },
  },
  data() {
    return {
      toggle: false,
    };
  },
  created() {
    this.styleObject = {
      ...this.styleObj,
    };
  },
  computed: {
    styleObject() {
      return {
        ...this.styleObj,
      };
    },
  },
  methods: {
    getRandomColor() {
      return "#" + Math.floor(Math.random() * 16777215).toString(16);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 20px;
  height: 40px;
  position: relative;
}
.container a .avatar {
  user-select: none;
  width: 37px;
  height: 34px;
  border-radius: 50%;
  margin: 0 5px;
  box-shadow: -1px 1px 6px rgba(0, 0, 0, 0.235413);
  text-align: center;
  vertical-align: middle;
  font-size: 14px;
  line-height: 34px;
}
.container .user {
  display: flex;
  flex-direction: column;
  margin: 0 5px;
}
.container .user .username {
  font-size: 14px;
  line-height: 17px;
  color: #333;
}
.container .user .status {
  font-size: 11px;
  line-height: 13px;
  color: #999;
  text-align: right;
}
.container .dropdown {
  position: absolute;
  top: 45px;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  width: 150px;
  font-size: 16px;
}
.container .dropdown a {
  display: block;
  padding: 2px 5px;
  color: #333;
  text-decoration: none;
  width: 100%;
  border-bottom: 1px solid #ccc;
}
.container .dropdown a:hover {
  background-color: #f5f5f5;
}
</style>