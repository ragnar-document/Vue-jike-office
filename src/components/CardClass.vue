<template>
  <ul class="lesson-list">
    <li class="lesson-item" v-for="val in datas" :key="val.id">
      <div class="lesson-item-photo">
        <img :src="val.imegas" class="lesson-item-img" />
      </div>
      <div class="lesson-item-text">
        <p class="lesson-item-desc">
          {{ val.title }}
        </p>
        <p class="lesson-item-info">
          <span class="level">{{ val.level }}</span>
          <span class="time">{{ val.duration }}min</span>
          <span class="person-number">{{ val.number }}</span>
        </p>
      </div>
      <span class="new-tag">{{ val.tag }}</span>
    </li>
  </ul>
</template>

<script>
export default {
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
.lesson-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .lesson-item {
    cursor: pointer;
    border-radius: 5px;
    width: 258px;
    height: 240px;
    margin-bottom: 40px;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.04);
    position: relative;
    transition: all ease 0.3s;

    &:hover {
      box-shadow: 2px 2px 20px 0px rgba(0, 0, 0, 0.3);
    }
    .lesson-item-photo {
      width: 258px;
      height: 139px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .lesson-item-text {
      padding: 13px 16px 17px;
      background: #fff;
      .lesson-item-desc {
        color: #333;
        font-size: 15px;
        line-height: 20px;
        text-align: left;
        margin-bottom: 19px;
        letter-spacing: 1px;
        font-family: PingFangSC-Regular;
      }
      .lesson-item-info {
        padding-left: 17px;
        text-align: left;
        .level {
          font-size: 12px;
          color: #666;
          line-height: 12px;
          position: relative;
          margin-right: 40px;
          &:before {
            position: absolute;
            content: "";
            display: block;
            width: 12px;
            height: 12px;
            background: url("~@/assets/images/fill.svg");
            left: -16px;
            bottom: 2px;
          }
        }
        .time {
          font-size: 12px;
          color: #666;
          line-height: 12px;
          position: relative;
          margin-right: 86px;
          &:before {
            position: absolute;
            content: "";
            display: block;
            width: 12px;
            height: 12px;
            background: url("~@/assets/images/time.svg");
            left: -16px;
            bottom: 2px;
          }
        }
        .person-number {
          font-size: 12px;
          color: #666;
          line-height: 12px;
          position: relative;
          &:before {
            position: absolute;
            content: "";
            display: block;
            width: 12px;
            height: 12px;
            background: url("~@/assets/images/personnum.svg");
            left: -16px;
            bottom: 2px;
          }
        }
      }
    }
    .new-tag {
      display: block;
      position: absolute;
      width: 42px;
      height: 20px;
      background: linear-gradient(
        180deg,
        rgba(229, 198, 118, 1) 0%,
        rgba(230, 162, 60, 1) 100%
      );
      color: #fff;
      font-size: 12px;
      top: -2px;
      right: 15px;
    }
  }
}
</style>
