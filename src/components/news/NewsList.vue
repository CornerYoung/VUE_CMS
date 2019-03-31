<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.docid">
                <!-- <router-link :to="'/home/newsinfo/' + item.docid"> -->
                <router-link to="/home/newsinfo">
                <img class="mui-media-object mui-pull-left" :src="item.picInfo[0].url">
                <div class="mui-media-body">
                    <h1>{{ item.title }}</h1>
                    <p class='mui-ellipsis'>
                    <span>发表时间：{{ item.ptime | dateFormat }}</span>
                    <span>点击：{{item.tcount}}次</span>
                    </p>
                </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newslist: [] // 新闻列表
        }
    },
    created() {
        this.getNewsList();
    },
    methods: {
        getNewsList() {
        // 获取新闻列表
            this.$http.get("https://www.apiopen.top/journalismApi").then(result => {
                if(result.status === 200){
                    //console.log(result.data.data.auto);
                    this.newslist = result.data.data.auto;
                }else{
                    Toast("获取新闻列表失败！");
                };
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.mui-table-view {
  li {
    h1 {
      font-size: 14px;
    }
    .mui-ellipsis {
      font-size: 12px;
      color: #226aff;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
