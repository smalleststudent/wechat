<template>
  <div class="chart-container">
    <!-- 用词云图片替换热力图 -->
    <div class="chart">
      <img :src="wordcloudSrc" alt="聊天关键词云" class="wordcloud-img" />
    </div>

    <!-- 保持原有描述文字不变 -->
    <div class="desc">
      <div class="sum-up">
        聊天词云统计
      </div>
      <div class="left">
        <div>2025年，你们有 <span class="time-period">{{ Calendardata.daysChatted }}</span> 天在聊天</div>
        <div>
          <span class="time-period">{{ Calendardata.mostActiveYear }}</span>年
          <span class="time-period">{{ Calendardata.mostActiveMonth }}</span>月，
          你们聊天最多，
        </div>
        <div>平均每天聊天 <span class="time-period">{{ Calendardata.averageChats }}</span> 次</div>
        <div style="margin-top: 8px;">有你陪伴的日子都很有意义</div>
      </div>
      
     <div class="right">
        <div style="margin-top: 8px;">{{ poeticMessages[7] }}</div>
        <div>{{ poeticMessages[8] }}</div>
        <div>{{ poeticMessages[9] }}</div>
        <div>{{ poeticMessages[10] }}</div>
        </div>
    </div>
  </div>
</template>

<script setup name="Ciyun">
import { computed, ref } from 'vue'
import { Calendardata } from '../js/getdata.js'

const base = import.meta.env.BASE_URL
const wordcloudSrc = computed(() => `${base}header/wordcloud_filtered.png`)

const poeticMessages = ref({
  1: "这一天，指尖跃动如琴弦，每一句话都弹奏出心灵深处的共鸣",
  2: "这一天，消息如潮涌，彼此的心声在文字间交织成一曲悠扬的和鸣",
  3: "这一天，文字飞舞成诗，屏幕两端仿佛缩短了时空的距离",
  4: "这一天，言语如繁星闪烁，点亮了平凡日子里独特的夜空",
  5: "这一天，聊天框成了时光的画布，书写下不可复制的暖意和陪伴",
  6: "这一天，消息如雨落，滋润了彼此心田中未曾言说的渴望",
  7: "这片词云里，散落着我们每一次对话的印迹。",
  8: "那些频繁出现的词语，像心跳一样有节奏地跳动，",
  9: "它们不仅记录着日常的点滴，",
  10: "更见证了我们之间的温暖与陪伴。"
})
</script>

<style scoped>
@font-face {
  font-family: "Pacifico-Regular";
  src: url("../../public/font/Pacifico-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

.chart-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  height: 100vh;
  width: 100vw;
  padding: 20px 0 0 0;
  box-sizing: border-box;
  animation: fadeIn 1s;
}

.chart {
  display: flex;
  justify-content: center; /* 横向居中 */
  align-items: center;     /* 纵向居中 */
  width: 30%;              /* 控制整体大小，可以调成 70%/80% */
  margin: 0 auto;          /* 保证在父容器中居中 */
}

.wordcloud-img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.desc {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  font-size: 14px;
  color: #333;
  width: 40%;
}

.sum-up {
  font-size: 40px;
  color: white;
  text-align: left;
  width: 100%;
}

.left {
  text-align: left;
  width: 100%;
  font-size: 20px;
  font-family: 'Microsoft YaHei';
  color: #000;
}

.time-period {
  font-family: Pacifico-Regular;
  font-size: 24px;
  color: #fff;
  margin: 0 5px;
}

.right {
  text-align: right;
  width: 100%;
  font-size: 20px;
  font-family: 'Microsoft YaHei';
  color: #000;
  margin-top: -10px;
}

.left, .right {
  text-align: left;
  width: 100%;
  font-size: 20px;
  font-family: 'Microsoft YaHei';
  color: #000;
  line-height: 1.9;   /* 设置统一行距 */
}

.right {
  text-align: right;  /* 右边仍然右对齐 */
}

@media screen and (max-width: 768px) {
  .chart {
    width: 90%;
  }

  .desc {
    width: 80%;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@media (max-width: 480px) {
  .chart {
    width: 100%;
    padding: 0;
  }

  .desc {
    width: 80%;
  }
}

@media (max-width: 390px) {
  .chart {
    width: 90%;
    height: 200px;
  }

  .desc {
    width: 80%;
  }

  .left {
    text-align: left;
    width: 100%;
    font-size: 16px;
    font-family: 'Microsoft YaHei';
    color: #000;
  }

  .time-period {
    font-family: Pacifico-Regular;
    font-size: 22px;
    color: #fff;
  }

  .right {
    text-align: right;
    width: 100%;
    font-size: 16px;
    font-family: 'Microsoft YaHei';
    color: #000;
    margin-top: 0px;
  }
}
</style>
