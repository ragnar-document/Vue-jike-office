<template>
  <ul class="project-list">
    <li class="project-item" v-for="item in datas" :key="item.id">
      <p class="project-item-desc">{{ item.name }}</p>
      <p class="project-item-description">{{ item.description }}</p>
      <a href="" class="project-item-challenge">立即挑战</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "v-card-project",
  props: {
    datas: {
      type: Array,
      // 对象或数组默认值必须从一个工厂函数获取
      default: () => []
    }
  }
};
</script>

<style lang="less" scope>
.project-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .project-item {
    width: 203px;
    height: 120px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.04);
    border-radius: 5px;
    margin-bottom: 16px;
    transition: all ease 0.3s;
    cursor: pointer;
    &:hover {
      box-shadow: 2px 2px 20px 0px rgba(0, 0, 0, 0.3);
      .project-item-description {
        display: none;
      }
      .project-item-challenge {
        transition: all ease 0.3s;
        display: block;
      }
    }
    .project-item-desc {
      padding: 22px 16px;
      font-size: 15px;
      line-height: 22px;
      color: #333;
    }
    .project-item-description {
      height: 36px;
      background: rgba(131, 140, 161, 1);
      color: #fff;
      font-size: 13px;
      line-height: 13px;
      padding: 12px 0;
      text-align: center;
      border-radius: 0px 0px 5px 5px;
    }
    .project-item-challenge {
      height: 36px;
      background: rgba(0, 110, 218, 1);
      border-radius: 0px 0px 5px 5px;
      color: #fff;
      font-size: 13px;
      line-height: 13px;
      padding: 12px 0;
      text-align: center;
      display: none;
      text-decoration: none;
    }
  }
}
</style>
