<template>
  <div class="course-page">
    <div class="page-mainer">
      <div class="page-container">
        <div class="catalog-section">
          <div class="container">
            <dl class="catalog-list" v-for="item in category" :key="item.id">
              <dt class="catalog-list-title" :style="{ color: item.color }">
                {{ item.name }}
              </dt>
              <dd
                class="catalog-list-item"
                v-for="index in item.contents"
                :key="index.id"
              >
                <router-link :to="{ path: `/course/${index.id}` }">{{
                  index.name
                }}</router-link>
              </dd>
            </dl>
          </div>
        </div>
        <div class="course-section">
          <div class="container">
            <div class="course-information">
              <div class="information-left">
                <span class="course-name">JAV</span>
                <p class="course-info">
                  {{
                    couresNum
                  }}门课程&nbsp;&nbsp;&nbsp;177课时&nbsp;&nbsp;&nbsp;1805小时&nbsp;&nbsp;&nbsp;
                </p>
              </div>
              <div class="information-right">
                <div class="information-level">
                  <span class="level-title">难度级别</span>
                  <ul class="show-list">
                    <li class="show-item"><a href="">初级</a></li>
                    <li class="show-item"><a href="">中级</a></li>
                    <li class="show-item"><a href="">高级</a></li>
                    <li class="show-item"><a href="">全部</a></li>
                  </ul>
                </div>
                <div class="information-new">
                  <span class="new-title">最新</span>
                </div>
              </div>
            </div>
            <v-card-class :datas="courses" />
            <!-- <ul class="course-list">
              <li class="course-item" v-for="item in datas" :key="item.id">
                <div class="course-item-photo">
                  <img :src="item.images" class="course-item-img" />
                </div>
                <div class="course-item-infomation">
                  <p class="course-item-title">{{ item.title }}</p>
                  <p class="course-item-info">
                    <span class="course-item-info-level">{{ item.level }}</span>
                    <span class="course-item-info-time"
                      >{{ item.time }}min</span
                    >
                    <span class="course-item-info-number">{{
                      item.number
                    }}</span>
                  </p>
                </div>
                <span class="course-item-tag">最新</span>
              </li>
            </ul> -->
            <div class="course-jumpage">
              <div class="jumpage-link">
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import courseService from "@/global/service/courseService.js";
export default {
  data() {
    return {
      courses: [],
      category: [],
      couresNum: ""
    };
  },
  created() {
    Promise.all([courseService.category(), courseService.course()])
      .then(res => {
        let couresNum = res[1].data.list.length;
        this.couresNum = couresNum;
        for (let i = 0; i < couresNum; i++) {
          this.courses.push(res[1].data.list[i]);
        }
        let categoryNum = res[0].data.categories.length;
        for (let i = 0; i < categoryNum; i++) {
          this.category.push(res[0].data.categories[i]);
        }
      })
      .catch(e => {
        console.log(e);
      });
  },
  methods: {}
};
</script>

<style type="text/css" lang="less" scoped>
.page-mainer {
  padding-top: 20px;
  background: #f8fafc;
  padding-bottom: 60px;
  .page-container {
    display: flex;
    width: 1080px;
    margin: 0 auto;
  }
  .catalog-section {
    width: 250px;
    padding-top: 24px;
    padding-left: 16px;
    margin-right: 24px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.04);
    border-radius: 5px;
    display: inline-block;
    .container {
      text-align: left;
      .catalog-list {
        margin-bottom: 40px;
        .catalog-list-title {
          font-size: 16px;
          color: #333;
          line-height: 16px;
          margin-bottom: 12px;
          font-weight: 500;
          font-family: PingFangSC-Medium;
        }
        .catalog-list-item,
        a {
          text-decoration: none;
          font-size: 14px;
          line-height: 14px;
          color: #666;
          margin-right: 20px;
          display: inline-block;
          &.active {
            color: #35b558;
          }
        }
      }
    }
  }
  .course-section {
    display: inline-block;
    width: 806px;
    vertical-align: top;
    .container {
      width: 806px;
      .course-information {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 806px;
        height: 46px;
        border-radius: 3px;
        box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.04);
        background: #fff;
        margin-bottom: 16px;
        .information-left {
          margin-left: 20px;
          .course-name {
            display: inline-block;
            font-size: 14px;
            line-height: 14px;
            color: #333;
            font-weight: 400;
            margin-right: 32px;
            position: relative;
            &:after {
              position: absolute;
              right: -15px;
              bottom: 1px;
              display: inline-block;
              content: "";
              width: 1px;
              height: 12px;
              background: #999;
            }
          }
          .course-info {
            font-size: 12px;
            line-height: 12px;
            color: #666;
            display: inline-block;
          }
        }
        .information-right {
          margin-right: 43px;
          .information-level {
            display: inline-block;
            position: relative;
            &:hover {
              .show-list {
                display: block;
              }
            }
            .level-title {
              font-size: 12px;
              color: #666;
              line-height: 12px;
            }
            .show-list {
              width: 100px;
              background: #fff;
              position: absolute;
              z-index: 23;
              display: none;
              top: 30px;
              left: -16px;
              .show-item {
                padding-left: 18px;
                width: 100px;
                height: 46px;
                line-height: 46px;
                text-align: left;
                a {
                  font-size: 12px;
                  line-height: 12px;
                  color: #666;
                  text-decoration: none;
                }
              }
            }
          }
          .information-new {
            font-size: 12px;
            color: #666;
            line-height: 12px;
            margin-left: 43px;
            display: inline-block;
          }
        }
      }
      .course-list {
        width: 806px;
        z-index: 21;
      }
    }
  }
}
</style>
