import { ref } from 'vue';
import * as echarts from 'echarts';

export var key = '';

export const myavatar = ref('./header/1.webp');
export const hisavatar = ref('./header/2.webp');
export const mynickname = ref('涂涂');
export const hisnickname = ref('天天');

export const CardData = ref({
    myavatarSrc: './header/1.webp',
    hisavatarSrc: './header/2.webp',
    mynickname: '涂涂',
    hisnickname: '天天',
    summaryText: '真挚浪漫的熬夜冠军',
    firstChatDate: '2025-07-31',
    mostChatYear: '2025',
    mostChatMonth: '8~9',
    mostChatCount: 18886,
    leftTags: [
        {
            "label": "聊天天数",
            "value": 52,
            "unit": "天"
        },
        {
            "label": "发送消息",
            "value": 10916,
            "unit": "条"
        },
        {
            "label": "收到消息",
            "value": 12850,
            "unit": "条"
        },
        {
            "label": "总字数",
            "value": 125274,
            "unit": "字"
        }],
    rightTags: [
        {
            "label": "关键词",
            "value": "宝宝"
        },
        {
            "label": "活跃时段",
            "value": "22:00-02:00"
        },
        {
            "label": "常用表情包",
            "image": "./header/4.webp"
        }
    ],
});

export const daysSinceFirstChat = ref(52);
export const cardName = ref('聊天记录报告');


function getVirtualData(year) {
    const date = +echarts.time.parse(year + '-01-01');
    const end = +echarts.time.parse(+year + 1 + '-01-01');
    const dayTime = 3600 * 24 * 1000;
    const data = [];
    for (let time = date; time < end; time += dayTime) {
        data.push([
            echarts.time.format(time, '{yyyy}-{MM}-{dd}', false),
            Math.floor(Math.random() * 10000)
        ]);
    }
    return data;
}

export const Calendardata = ref({
    daysChatted: 52,
    mostActiveYear: "2025",
    mostActiveMonth: "08",
    averageChats: 528,
    peakChatYear: "2025",
    peakChatMonth: "05",
    peakChatDay: "18",
    peakChats: 265,
    data: getVirtualData('2025'),
    max_day_count: 10000,
    min_day_count: 0
});

export const chatData = ref({
    mynickname: "涂涂",
    hisnickname: "天天",
    totalmessages:18886,
    totalwords: 125274,
    totalvoice: 1227,
    totalimages: 1755,
    totalemojis: 114,
    send_msg_num:12850,
    receive_msg_num:10916,
    total_message_size:2519, // 聊天数据大小，单位：MB
    my_type_count:[['文本',9351],['图片',822],['视频',19],['表情包',2018],['语音',89]],
    ta_type_count:[['文本',8423],['图片',463],['视频',7],['表情包',962],['语音',322]],
});

export const quarterData = ref([
    {
        'season': '春',
        'title': '春的呢喃',
        'text': '春天的气息悄然降临，万物复苏，花瓣在阳光下轻舞，似乎在低语着生命的奥秘。每一次呼吸都充满希望，梦想在心中悄然绽放。'
    },
    {
        'season': '夏',
        'title': '夏日的热情',
        'text': '炎炎夏日，阳光如金，海浪轻拍岸边，带来无限的欢愉。树荫下的微风，似乎诉说着青春的故事，令人心向往之，乐在其中。'
    },
    {
        'season': '秋',
        'title': '秋的沉思',
        'text': '秋天的落叶如诗，轻轻飘落，仿佛在叙述过往的回忆。金黄的田野上，丰收的喜悦萦绕心头，静谧中透出深邃的思考与感悟。'
    },
    {
        'season': '冬',
        'title': '冬的静谧',
        'text': '寒冬降临，银装素裹，世界在白雪的覆盖下沉睡。炉火旁的温暖，仿佛是心灵的慰藉，静静等待着春的再次来临，重燃希望。'
    }
]);

export const FirstData_isReady = ref(true);
export const firstChatData = ref({
    "firstChatDate": {
        "year": "2025",
        "month": "07",
        "day": "31"
    },
    "initiator": "天天",
    "conversation": [
        {
            "side": "right",
            "avatarSrc": "/header/header13.webp",
            "content": "我是盐焗马戏团腰果"
        },
        {
            "side": "left",
            "avatarSrc": "/header/header45.webp",
            "content": "你好呀，世界上最好惹的人"
        },
        {
            "side": "left",
            "avatarSrc": "/header/header45.webp",
            "content": "哈哈哈"
        },
        {
            "side": "right",
            "avatarSrc": "/header/header13.webp",
            "content": "你好捏"
        }
    ]
})

export const keyWordsData = ref({
    "mykeyWord": {
        "keyWord": "嘿嘿嘿",
        "keyWordCount": 297
    },
    "takeyWord": {
        "keyWord": "宝宝",
        "keyWordCount": 326
    },
    "messages": [
        {
            "side": "right",
            "content": "爱你老婆",
        },
        {
            "side": "right",
            "content": "嘿嘿嘿",
        },
        {
            "side": "left",
            "content": "嗯呢",
        },
        {
            "side": "left",
            "content": "爱你宝宝",
        },
        {
            "side": "left",
            "content": "喜欢你",
        },
        {
            "side": "right",
            "content": "那你跟我结婚吧"
        }
    ]
});

export const mykeyWord = ref({
    "keyWord": "嘿嘿嘿",
    "keyWordCount": 297
});

export const takeyWord = ref({
    "keyWord": "宝宝",
    "keyWordCount": 326
});

export const isReady = ref(false);
export const visibleText = ref([]);
export const currentIndex = ref(0);

export const Welcome_data = {
    descriptionText: {
        hello: "Hello World!",
        text1: "时光飞逝，转眼间我们已经在一起一个月啦。",
        text2: "在过去的52天里，从深夜的长谈到清晨的问候，从刚认识的朋友到热恋情侣……",
        text3: "这些聊天记录，是属于我们的独家记忆。",
        text4: "打开报告，开启我们的专属记忆吧！"
    }
}

export const allText = ref([
    Welcome_data.descriptionText.hello,
    Welcome_data.descriptionText.text1,
    Welcome_data.descriptionText.text2,
    Welcome_data.descriptionText.text3,
    Welcome_data.descriptionText.text4
])

export const chatdescription = ref({
    "timedes": "深夜的",
    "summary": "你们最爱在深夜聊天",
    "timePeriod": "22:00-02:00",
    "quote": [
        "每一次热烈的对话",
        "都是灵魂的一次旅行"
    ],
    "data": [2279, 2022, 1073, 22, 0, 2, 11, 14, 68, 715, 851, 957, 1629, 895, 983, 829, 1119, 1419, 1641, 1351, 1243, 1184, 1930, 1529],
    "remarks": [
        "你们聊到很晚",
        "那天一定有你们难忘的回忆吧"
    ],
    "favoriteChatDate": {
        "is_exist": 1,
        "year": "2025",
        "month": "9",
        "day": "16"
    }
});

export const summaryText = ref('真挚浪漫的熬夜冠军');

export const wxid = 'wxid_1234567890';

// 头像链接
export const reportName = '微信聊天报告';
// 网站链接
export const websiteUrl = 'https://memotrace.cn';
// 网站链接文本显示内容
export const websiteUrlText = 'memotrace.cn';
// 底部文本
export const bottomText = '扫一扫制作专属你的微信聊天报告';

export const UPLOAD_URL = ''