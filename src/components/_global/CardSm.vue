<template>
  <ul class="lab-list">
    <li class="lab-item" v-for="item in experiment" :key="item.id">
      <div class="lab-item-photo">
        <img :src="item.imegas" class="lab-item-img" />
      </div>
      <div class="lab-item-text">
        <p class="lab-item-desc">{{ item.desc }}</p>
        <p class="lab-item-info">
          <span class="level">{{ item.level }}</span>
          <span class="time">{{ item.time }}min</span>
          <span class="person-number">{{ item.number }}</span>
        </p>
      </div>
      <span class="shangji-tag">上机</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "v-card-sm",
  props: ["lab"],
  data: function() {
    return {
      experiment: this.lab
    };
  }
};
</script>

<style lang="less" scope>
.lab-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .lab-item {
    width: 203px;
    height: 210px;
    margin-bottom: 16px;
    cursor: pointer;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.04);
    transition: all ease 0.3s;
    position: relative;
    &:hover {
      box-shadow: 2px 2px 20px 0px rgba(0, 0, 0, 0.3);
    }
    .lab-item-photo {
      width: 203px;
      height: 110px;
      border-radius: 5px 5px 0px 0px;
      img {
        height: 100%;
        widows: 100%;
      }
    }
    .lab-item-text {
      height: 100px;
      background: #fff;
      padding: 12px 18px 0px 16px;
      border-radius: 0px 0px 5px 5px;
      .lab-item-desc {
        font-size: 15px;
        color: #333;
        line-height: 22px;
        text-align: left;
        margin-bottom: 19px;
      }
      .lab-item-info {
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
          margin-right: 29px;
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
    .shangji-tag {
      width: 42px;
      height: 20px;
      display: block;
      position: absolute;
      background: linear-gradient(
        180deg,
        rgba(40, 148, 255, 1) 0%,
        rgba(0, 110, 218, 1) 100%
      );
      font-size: 12px;
      color: #fff;
      text-align: center;
      line-height: 20px;
      font-weight: 400;
      right: 10px;
      top: -2px;
    }
  }
}
</style>
