<template>
    <div class="newsinfo-container">
        <!-- 大标题 -->
        <h3 class="title">{{ newsinfo.title }}</h3>
        <!-- 子标题 -->
        <p class="subtitle">
            <span>发表时间：{{ newsinfo.ptime | dateFormat }}</span>
            <span>点击：{{ newsinfo.tcount }}次</span>
        </p>

        <hr>

        <!-- 内容区域 -->
        <div class="content" v-html="newsinfo.link"></div>

        <!-- 评论子组件区域 | 因为开放 API 接口的问题，这里有所改动，以方便项目进行-->
        <!-- <comment-box :id="this.id"></comment-box> -->
        <comment-box></comment-box>
    </div>
</template>

<script>
// 1. 导入 评论子组件
import comment from "../subcomponents/comment.vue";

export default {
  data() {
    return {
      //id: this.$route.params.id, // 将 URL 地址中传递过来的 Id值，挂载到 data上，方便以后调用
      newsinfo: {} // 新闻对象
    };
  },
  created() {
    this.getNewsInfo();
  },
  methods: {
    getNewsInfo() {console.log('info')
      // 获取新闻详情
      this.$http.get("https://www.apiopen.top/journalismApi").then(result => {
        if(result.status === 200){
            console.log(result.data.data.auto[0]);
            this.newsinfo = result.data.data.auto[0];
        }else{
            Toast("获取新闻列表失败！");
        };
      });
    }
  },
  components: {
    // 用来注册子组件的节点
    "comment-box": comment
  }
};
</script>

<style lang="scss">
.newsinfo-container {
  padding: 0 4px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .subtitle {
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
  .content {
    img {
      width: 100%;
    }
  }
}
</style>
