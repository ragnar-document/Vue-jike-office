<template>
  <ul class="shizhan-list">
    <li class="shizhan-item" v-for="item in datas" :key="item.id">
      <div class="shizhan-item-text">
        <h3 class="shizhan-item-title">{{ item.title }}</h3>
        <p class="shizhan-item-desc">{{ item.desc }}</p>
        <p class="shizhan-item-info">
          <span class="name">{{ item.name }} </span> /&nbsp;{{ item.deed }}
        </p>
      </div>
      <div class="shizhan-item-photo">
        <img :src="item.imegas" class="shizhan-item-img" />
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "v-card-long",
  props: {
    datas: {
      type: Array,
      // 对象或数组默认值必须从一个工厂函数获取
      default: () => []
    }
  }
};
</script>

<style lang="less">
.shizhan-item {
  list-style: none;
  width: 532px;
  height: 150px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.04);
  border-radius: 5px;
  padding-top: 28px;
  padding-left: 30px;
  position: relative;
  margin-bottom: 16px;
  box-sizing: border-box;
  cursor: pointer;
  transition: all ease 0.3s;
  &:hover {
    box-shadow: 2px 2px 20px 0px rgba(0, 0, 0, 0.3);
  }
  .shizhan-item-text {
    text-align: left;
    .shizhan-item-title {
      font-size: 20px;
      line-height: 20px;
      color: #333;
      margin-bottom: 12px;
    }
    .shizhan-item-desc {
      font-size: 14px;
      line-height: 20px;
      color: #666;
      margin-bottom: 13px;
    }
    .shizhan-item-info {
      font-size: 12px;
      color: #666;
      line-height: 12px;
      font-weight: 400;
      .name {
        font-size: 12px;
        color: #006eda;
      }
    }
  }
  .shizhan-item-photo {
    width: 104px;
    height: 125px;
    position: absolute;
    bottom: 0px;
    right: 30px;
    .shizhan-item-img {
      width: 100%;
    }
  }
}
</style>
