<template>
  <div class="page-mainer">
    <div class="container">
      <div class="position-section">
        <span class="position-item first">课程 ></span>
        <span class="position-item second">后端开发 ></span>
        <span class="position-item third">Python ></span>
        <span class="position-item fourth"
          >架构设计专项课程之异步消息队列 ></span
        >
      </div>
      <div class="introduce-section">
        <div class="container">
          <div class="introduce-img">
            <img :src="course.cover_url" />
          </div>
          <div class="introduce-information">
            <h2 class="introduce-title">{{ course.core_content }}</h2>
            <p class="introduce-desc">
              {{ course.introduction }}
            </p>
            <p class="introduce-info">
              <span>课时数:</span><i>2个课程,24课时</i> <span>时长:</span
              ><i>{{ course.total_duration }}</i> <span>学习人数:</span
              ><i>{{ course.study_count }}</i>
            </p>
          </div>
        </div>
      </div>
      <div class="lesson-section">
        <div class="container">
          <div class="lesson-left">
            <dl
              class="lesson-list"
              v-for="(item, index) in courseChild"
              :key="item.id"
            >
              <dt class="lesson-list-title">
                第{{ index + 1 }}章 {{ item.name }}
              </dt>
              <dd
                class="lesson-list-item"
                v-for="(itemChild, indexChild) in item.children"
                :key="itemChild.id"
              >
                <span class="lesson-name"
                  >{{ index + 1 }}-{{ indexChild + 1 }}
                  {{ itemChild.name }}</span
                >
                <span class="lesson-time">{{ itemChild.duration }}</span>
              </dd>
              <!-- <dd class="lesson-list-item active">
                <span class="lesson-name">1-1 Swift课程介绍</span>
                <span class="lesson-time">03:25</span>
                <div class="lesson-button">
                  <a href="" class="start-btn">开始学习</a>
                  <a href="" class="buy-btn">购买后学习</a>
                </div>
              </dd> -->
            </dl>
          </div>
          <div class="lesson-right">
            <div class="lesson-study">
              <a href="" class="study-link">开始学习</a>
              <h3 class="bg-title">课程背景:</h3>
              <p class="bg-desc">
                {{ course.background }}
              </p>
              <h3 class="core-title">核心内容:</h3>
              <p class="core-desc">
                通过本课程的学习，您将学会:<br />1.如何配置和连接到AmazonAurora
                Serverless。<br />2.如何使用AWS Systems Manager在Amazon
                EC2实例上远程运行命令。
              </p>
              <h3 class="level-title">
                难度:<span>{{ course.difficulty_level }}</span>
              </h3>
              <h3 class="people-title">适合人群:</h3>
              <p class="people-desc">
                {{ course.suitable_people }}
              </p>
            </div>
            <div class="lesson-relevant">
              <h3 class="relevant-title">相关课程</h3>
              <ul class="relevant-list">
                <li class="relevant-item">
                  <div class="relevant-item-img">
                    <!-- <img src="@/assets/images/android.svg" /> -->
                  </div>
                  <div class="relevant-item-desc">
                    <p class="relevant-item-title">Android个人开发者盈利aaa</p>
                    <p class="relevant-item-info">
                      <span class="relevant-item-level">中级</span>
                      <span class="relevant-item-people">1103</span>
                    </p>
                  </div>
                </li>
                <!-- <li class="relevant-item">
                  <div class="relevant-item-img">
                    <img src="@/assets/images/android.svg" />
                  </div>
                  <div class="relevant-item-desc">
                    <p class="relevant-item-title">Android个人开发者盈利aaa</p>
                    <p class="relevant-item-info">
                      <span class="relevant-item-level">中级</span>
                      <span class="relevant-item-people">1103</span>
                    </p>
                  </div>
                </li>
                <li class="relevant-item">
                  <div class="relevant-item-img">
                    <img src="@/assets/images/android.svg" />
                  </div>
                  <div class="relevant-item-desc">
                    <p class="relevant-item-title">Android个人开发者盈利aaa</p>
                    <p class="relevant-item-info">
                      <span class="relevant-item-level">中级</span>
                      <span class="relevant-item-people">1103</span>
                    </p>
                  </div>
                </li>
                <li class="relevant-item">
                  <div class="relevant-item-img">
                    <img src="@/assets/images/android.svg" />
                  </div>
                  <div class="relevant-item-desc">
                    <p class="relevant-item-title">Android个人开发者盈利aaa</p>
                    <p class="relevant-item-info">
                      <span class="relevant-item-level">中级</span>
                      <span class="relevant-item-people">1103</span>
                    </p>
                  </div>
                </li> -->
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import courseService from "@/global/service/courseService.js";

export default {
  data() {
    return {
      course: [],
      courseChild: []
    };
  },
  created() {
    let id = this.$route.params.id;
    console.log(this.$route.params);
    courseService.courseItem(id).then(res => {
      this.course = res.data.course;
      this.courseChild = res.data.course.content;
      console.log(res.data.course.content);
    });
  }
};
</script>
<style type="text/css" lang="less" scoped>
.page-mainer {
  padding-top: 20px;
  background: #f8fafc;
  font-size: 0;
  .container {
    width: 1080px;
    margin: 0 auto;
  }
}
.position-section {
  margin-bottom: 20px;
  text-align: left;
  font-size: 12px;
  color: #666;
  line-height: 12px;
  .position-item {
  }
}
.introduce-section {
  font-size: 0;
  width: 1080px;
  height: 240px;
  margin-bottom: 20px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.04);
  .container {
    padding: 20px;
    display: flex;
    .introduce-img {
      margin-right: 20px;
      width: 300px;
      height: 200px;
      img {
        width: 100%;
      }
    }
    .introduce-information {
      width: 600px;
      text-align: left;
      .introduce-title {
        font-size: 20px;
        line-height: 20px;
        color: #333;
        margin-bottom: 18px;
      }
      .introduce-desc {
        font-size: 14px;
        color: #666;
        line-height: 24px;
        margin-bottom: 75px;
      }
      .introduce-info {
        font-size: 12px;
        line-height: 12px;
        color: #333;
        span {
          margin-right: 5px;
        }
        i {
          color: #999;
          margin-right: 30px;
          font-style: normal;
        }
      }
    }
  }
}
.lesson-section {
  width: 1080px;
  font-size: 0;
  .container {
    display: flex;
    justify-content: space-between;
    .lesson-left {
      width: 760px;
      .lesson-list {
        display: block;
        background: #fff;
        width: 760px;
        padding-top: 16px;
        margin-bottom: 16px;
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.04);
        border-radius: 5px;
        text-align: left;
        .lesson-list-title {
          font-size: 16px;
          color: #666;
          line-height: 16px;
          margin-bottom: 34px;
          padding-left: 20px;
        }
        .lesson-list-item {
          padding-left: 20px;
          padding-right: 20px;
          padding-top: 17px;
          padding-bottom: 17px;
          font-size: 14px;
          color: #333;
          line-height: 14px;
          display: flex;
          justify-content: space-between;
          position: relative;
          &.active {
            background: rgba(247, 247, 247, 1);
            .lesson-time {
              display: none;
            }
            .lesson-button {
              display: block;
            }
          }
          .lesson-name {
            position: relative;
            padding-left: 24px;
            &:before {
              position: absolute;
              display: inline-block;
              content: "";
              left: 0px;
              bottom: 0px;
              width: 14px;
              height: 14px;
              // background: url("~@/assets/images/bofang.svg");
            }
          }
          .lesson-time {
            color: #999;
          }
          .lesson-button {
            position: absolute;
            right: 20px;
            top: 15px;
            .start-btn {
              display: block;
              margin-bottom: 13px;
              width: 80px;
              height: 20px;
              font-size: 12px;
              border-radius: 10px;
              color: #fff;
              line-height: 20px;
              text-decoration: none;
              text-align: center;
              background: linear-gradient(
                180deg,
                rgba(69, 199, 105, 1) 0%,
                rgba(53, 181, 88, 1) 100%
              );
            }
            .buy-btn {
              display: block;
              width: 80px;
              height: 20px;
              font-size: 12px;
              border-radius: 10px;
              color: #fff;
              line-height: 20px;
              text-align: center;
              text-decoration: none;
              background: linear-gradient(
                180deg,
                rgba(240, 174, 74, 1) 0%,
                rgba(230, 162, 60, 1) 100%
              );
            }
          }
        }
      }
    }
    .lesson-right {
      width: 300px;
      .lesson-study {
        width: 300px;
        height: 420px;
        // background: url("~@/assets/images/Artwork.png");
        padding-top: 20px;
        padding-left: 16px;
        padding-right: 16px;
        text-align: left;
        margin-bottom: 16px;
        .study-link {
          width: 220px;
          height: 44px;
          display: block;
          margin: 0 auto;
          margin-bottom: 19px;
          background: linear-gradient(
            180deg,
            rgba(69, 199, 105, 1) 0%,
            rgba(53, 181, 88, 1) 100%
          );
          text-align: center;
          line-height: 44px;
          font-size: 20px;
          color: #fff;
          border-radius: 22px;
          text-decoration: none;
        }
        h3 {
          font-size: 14px;
          line-height: 14px;
          color: #333;
          margin-bottom: 7px;
          span {
            font-size: 12px;
            line-height: 14px;
            color: #666;
          }
        }
        .level-title {
          margin-bottom: 20px;
        }
        p {
          font-size: 12px;
          line-height: 18px;
          color: #666;
          margin-bottom: 20px;
        }
        .people-desc {
          padding-right: 45px;
        }
      }
      .lesson-relevant {
        width: 300px;
        background: #fff;
        padding: 13px 16px 0;
        .relevant-title {
          margin-bottom: 13px;
          font-size: 16px;
          line-height: 22px;
          color: #333;
        }
        .relevant-list {
          .relevant-item {
            margin-bottom: 16px;
            display: flex;
            .relevant-item-img {
              width: 92px;
              height: 61px;
              margin-right: 10px;
              img {
                width: 100%;
              }
            }
            .relevant-item-desc {
              padding-top: 10px;
              .relevant-item-title {
                margin-bottom: 13px;
                font-size: 14px;
                line-height: 14px;
                color: #333;
                width: 166px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              }
              .relevant-item-info {
                display: flex;
                font-size: 12px;
                line-height: 12px;
                color: #666;
                align-items: center;
                .relevant-item-level {
                  display: inline-flex;
                  align-items: center;
                  margin-right: 25px;
                  &:before {
                    content: "";
                    display: inline-block;
                    width: 12px;
                    height: 12px;
                    margin-right: 4px;
                    background: url("~@/assets/images/fill.svg");
                  }
                }
                .relevant-item-people {
                  display: inline-flex;
                  align-items: center;
                  &:before {
                    content: "";
                    display: inline-block;
                    width: 12px;
                    height: 12px;
                    margin-right: 4px;
                    background: url("~@/assets/images/personnum.svg");
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
