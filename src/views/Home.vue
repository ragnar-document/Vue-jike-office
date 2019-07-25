<template>
  <div>
    <div class="page-mainer">
      <div class="banner-section">
        <div class="container">
          <el-carousel :interval="5000" arrow="always">
            <el-carousel-item v-for="item in bannerImg" :key="item.id">
              <a
                :style="{
                  background: 'url(' + item.cover_file_path + ')',
                  height: '100%',
                  width: '100%',
                  display: 'inline-block',
                  'background-position': 'center'
                }"
              ></a>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div class="shizhan-section">
        <div class="container">
          <h2 class="shizhan-title">实战营</h2>
          <p class="shizhan-subtitle">刻苦学习，成就真才实学</p>
          <v-card-long :datas="ying_goods" />
        </div>
      </div>
      <div class="lesson-section">
        <div class="container">
          <h2 class="lesson-title">课程</h2>
          <p class="lesson-subtitle">最新的课程是最好的课程</p>
          <v-card-class :datas="video_courses" />
        </div>
      </div>
      <div class="project-section">
        <div class="container">
          <h2 class="project-title">项目挑战</h2>
          <p class="project-subtitle">项目是最好的学习方式</p>
          <v-card-project :datas="projects" />
        </div>
      </div>
      <!-- <div class="lab-section">
        <div class="container">
          <h2 class="lab-title">实验</h2>
          <p class="lab-subtitle">项目是最好的学习方式</p>
          <v-card-sm :lab="experiment" />
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import commdService from "@/global/service/commdService.js";
export default {
  data() {
    return {
      projects: [],
      video_courses: [],
      ying_goods: [],
      bannerImg: []
    };
  },
  created() {
    Promise.all([commdService.indexData(), commdService.switchImages()])
      .then(res => {
        this.projects = res[0].data.projects;
        this.video_courses = res[0].data.video_courses;
        this.ying_goods = res[0].data.ying_goods;
        this.bannerImg = res[1].data;
        console.log(res[1].data);
      })
      .catch(e => {
        console.log(e);
      });
  }
};
</script>

<style lang="less">
.page-mainer {
  min-width: 1080px;
  padding-top: 20px;
  background: #f8fafc;
  padding-bottom: 24px;
  .banner-section {
    margin-bottom: 40px;
    .container {
      width: 1080px;
      margin: 0 auto;
      height: 320px;
      position: relative;
      .swiper-pagination-list {
        position: absolute;
        left: 50%;
        bottom: 10px;
        transform: translate(-50%);
        .swiper-pagination-item {
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.9);
          margin-right: 6px;
          cursor: pointer;
          &.active {
            background: rgba(0, 110, 218, 1);
          }
        }
      }
    }
  }
  .shizhan-section {
    margin-bottom: 24px;
    .container {
      width: 1080px;
      margin: 0 auto;
      text-align: center;
    }
    .shizhan-title {
      font-size: 20px;
      color: #333;
      line-height: 20px;
      margin-bottom: 10px;
    }
    .shizhan-subtitle {
      font-size: 14px;
      line-height: 14px;
      color: #666;
      margin-bottom: 20px;
    }
    .shizhan-list {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }
  .lesson-section {
    margin-bottom: 24px;
    .container {
      width: 1080px;
      margin: 0 auto;
      text-align: center;
      .lesson-title {
        font-size: 20px;
        line-height: 20px;
        color: #333;
        margin-bottom: 10px;
      }
      .lesson-subtitle {
        font-size: 14px;
        color: #666;
        line-height: 14px;
        margin-bottom: 20px;
      }
    }
  }
  .project-section {
    margin-bottom: 24px;
    .container {
      width: 1080px;
      margin: 0 auto;
      text-align: center;
      .project-title {
        font-size: 20px;
        line-height: 20px;
        color: #333;
        margin-bottom: 10px;
      }
      .project-subtitle {
        font-size: 14px;
        line-height: 14px;
        color: #666;
        margin-bottom: 20px;
      }
    }
  }
  .lab-section {
    .container {
      width: 1080px;
      margin: 0 auto;
      text-align: center;
      .lab-title {
        font-size: 20px;
        line-height: 20px;
        color: #333;
        margin-bottom: 10px;
      }
      .lab-subtitle {
        font-size: 14px;
        color: #666;
        line-height: 14px;
        margin-bottom: 23px;
      }
    }
  }
}
</style>
