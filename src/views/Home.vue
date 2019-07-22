<template>
  <div>
    <div class="page-mainer">
      <div class="banner-section">
        <div class="container">
          <el-carousel :interval="5000" arrow="always">
            <el-carousel-item v-for="item in bannerImg" :key="item.id">
              <div
                :style="{
                  background: 'url(' + item.image + ')',
                  height: '100%',
                  'background-position': 'center'
                }"
              ></div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div class="shizhan-section">
        <div class="container">
          <h2 class="shizhan-title">实战营</h2>
          <p class="shizhan-subtitle">刻苦学习，成就真才实学</p>
          <v-card-long :datas="actual" />
        </div>
      </div>
      <div class="lesson-section">
        <div class="container">
          <h2 class="lesson-title">课程</h2>
          <p class="lesson-subtitle">最新的课程是最好的课程</p>
          <v-card-class :datas="labs" />
        </div>
      </div>
      <div class="project-section">
        <div class="container">
          <h2 class="project-title">项目挑战</h2>
          <p class="project-subtitle">项目是最好的学习方式</p>
          <v-card-project :datas="Projects" />
        </div>
      </div>
      <div class="lab-section">
        <div class="container">
          <h2 class="lab-title">实验</h2>
          <p class="lab-subtitle">项目是最好的学习方式</p>
          <v-card-sm :lab="experiment" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //  Classes:[],
      //  Projects:[],
      //  Lab:[]
      bannerImg: [
        {
          id: 1,
          image:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563363704153&di=48df2a33be9955b25021d16b7d515739&imgtype=0&src=http%3A%2F%2Fpic.97ui.com%2Fyc_pic%2F00%2F00%2F08%2F79%2F53e3829fe1012cf8b092a602b7ba0e16.jpg%2521w1200"
        },
        {
          id: 2,
          image:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563363784183&di=0330ad143047f15264145e5a470dcb7c&imgtype=0&src=http%3A%2F%2Fwww.czt.cn%2FUpImage%2FRelate%2F20170623115550.jpg"
        }
      ]
    };
  },
  computed: {
    labs: function() {
      let res = new Array(8).fill("").map((data, index) => {
        return {
          id: index,
          title: "只需10余分钟学会在AWS上启动堆栈堆栈",
          imegas:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563789264&di=9aac74317a417bc16b6d2f2c8870218f&imgtype=jpg&er=1&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F3f292560aea3c9ca693514382ae00a033625a89a999a0-PT69XR_fw658",
          level: "中级",
          duration: "30",
          number: "1232",
          tag: "最新"
        };
      });
      return res;
    },
    Projects: function() {
      let res = new Array(10).fill("").map((data, index) => {
        return {
          id: index,
          desc: "随便填充点文字好吧",
          description: "随便填充点文字好吧"
        };
      });
      return res;
    },
    experiment: function() {
      let res = new Array(10).fill("").map((data, index) => {
        return {
          id: index,
          desc: "随便填充点文字好吧",
          imegas:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563789264&di=9aac74317a417bc16b6d2f2c8870218f&imgtype=jpg&er=1&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F3f292560aea3c9ca693514382ae00a033625a89a999a0-PT69XR_fw658",
          level: "中级",
          number: "1232",
          time: "30"
        };
      });
      return res;
    },
    actual: function() {
      let res = new Array(4).fill("").map((data, index) => {
        return {
          id: index,
          title: "随便填充点文字好吧",
          desc: "随便填充点文字好吧",
          imegas: require("../assets/images/ice.png"),
          name: "大众化",
          deed: "《人间天堂》作者"
        };
      });
      return res;
    }
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
