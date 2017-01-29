/**
 * 贴吧表情数据
 * Created by ganlv on 2017/1/28.
 */
var TiebaEmotion = TiebaEmotion || {};
/**
 * 贴吧UEditor表情列表，直接拿过来用的
 * http://tb1.bdstatic.com/tb/_/ueditor_emotion_7a7cad6.js
 */
TiebaEmotion.DATA = {
    path: "//tb2.bdstatic.com/tb/editor/images/",
    sequence: ["custom", "face", "ySmile", "bearchildren", "tiexing", "ali", "luoluobu", "qpx", "xyj", "lt", "bfmn", "zxh", "tsj", "wdj", "lxs", "baodong", "baodong_d", "bobo", "shadow", "ldw", "10th"],
    emotionConfig: {
        custom: {
            folder: "",
            name: "\u81EA\u5B9A\u4E49",
            css: {
                cols: 10,
                "class": "s_custom"
            },
            type: "custom",
            power: 0
        },
        face: {
            tip: ["\u5475\u5475", "\u54C8\u54C8", "\u5410\u820C", "\u554A", "\u9177", "\u6012", "\u5F00\u5FC3", "\u6C57", "\u6CEA", "\u9ED1\u7EBF", "\u9119\u89C6", "\u4E0D\u9AD8\u5174", "\u771F\u68D2", "\u94B1", "\u7591\u95EE", "\u9634\u9669", "\u5410", "\u54A6", "\u59D4\u5C48", "\u82B1\u5FC3", "\u547C~", "\u7B11\u773C", "\u51B7", "\u592A\u5F00\u5FC3", "\u6ED1\u7A3D", "\u52C9\u5F3A", "\u72C2\u6C57", "\u4E56", "\u7761\u89C9", "\u60CA\u54ED", "\u5347\u8D77", "\u60CA\u8BB6", "\u55B7", "\u7231\u5FC3", "\u5FC3\u788E", "\u73AB\u7470", "\u793C\u7269", "\u5F69\u8679", "\u661F\u661F\u6708\u4EAE", "\u592A\u9633", "\u94B1\u5E01", "\u706F\u6CE1", "\u8336\u676F", "\u86CB\u7CD5", "\u97F3\u4E50", "haha", "\u80DC\u5229", "\u5927\u62C7\u6307", "\u5F31", "OK", "\u4F24\u5FC3", "\u52A0\u6CB9", "\u5FC5\u80DC", "\u671F\u5F85", "\u725B\u903C", "\u80DC\u5229", "\u8DDF\u4E2B\u6B7B\u78D5", "\u8E22\u7403", "\u9762\u58C1", "\u9876", "\u5DF4\u897F\u6012", "\u4F34\u821E", "\u5954\u8DD1", "\u70B9\u8D5E\u624B", "\u52A0\u6CB9", "\u54ED\u6CE3", "\u4EAE\u7EA2\u724C", "\u7403\u8FF7", "\u8036", "\u8F6C\u5C41\u80A1"],
            num: 70,
            prev: "i_f",
            folder: "face/",
            suffix: "png",
            name: "\u9ED8\u8BA4",
            css: {
                cols: 10,
                "class": "s_face",
                width: 35,
                offset: 30
            },
            type: "img",
            power: 1
        },
        yxj: {
            tip: ["\u5B64\u72EC\u5BC2\u5BDE\u51B7", "\u5149\u68CD\u5403\u6839\u6CB9\u6761", "\u53EF\u601C\u6CA1\u4EBA\u7231", "\u53BBtmd\u5149\u68CD\u8282", "\u6765\u6361\u80A5\u7682\u554A", "\u7ED9\u8DEA\u4E86", "\u60CA\u5446\u4E86", "\u62FF\u53BB\u64B8", "\u54E6\u5973\u795E", "\u697C\u4E3B\u597D\u4EBA"],
            num: 10,
            prev: "yxj_0",
            folder: "yxj/",
            name: "\u75D2\u5C0F\u8D31",
            suffix: "gif",
            css: {
                cols: 10,
                "class": "s_yxj",
                width: 30,
                offset: 30
            },
            type: "img",
            power: 1
        },
        "10th": {
            tip: ["\u8E66\u8E66\u8DF3\u8DF3", "\u6643\u60A0", "\u6447\u6447\u6446\u6446", "\u5927\u6492\u82B1", "\u9AD8\u9AD8\u5174\u5174", "\u5F39\u5409\u4ED6", "\u9B54\u6CD5\u68D2", "\u625B\u5927\u65D7", "\u70B9\u8721\u70DB", "\u5927\u79E7\u6B4C", "\u8D34\u5427\u5341\u5468\u5E74", "\u5341\u5468\u5E74"],
            num: 12,
            prev: "10th_0",
            folder: "10th/",
            name: "\u5341\u5468\u5E74",
            css: {
                cols: 10,
                "class": "s_tyears",
                width: 42,
                offset: 42
            },
            type: "img",
            power: 1
        },
        ldw: {
            tip: ["\u4E00\u697C\u5582\u718A", "\u4FEF\u5367\u6491", "\u6253\u9171\u6CB9", "\u56E7", "\u5927\u7B11", "\u7011\u5E03\u6C57~", "\u60CA\u8BB6", "\u81ED\u7F8E", "\u50BB\u7B11", "\u629B\u5A9A\u773C", "\u53D1\u6012", "\u6211\u9519\u4E86", "money", "\u6C14\u6124", "\u6311\u9017", "\u543B", "\u6012", "\u80DC\u5229", "\u59D4\u5C48", "\u53D7\u4F24", "\u8BF4\u5565\u5462\uFF1F", "\u95ED\u5634", "\u4E0D", "\u9017\u4F60\u73A9\u513F", "\u98DE\u543B", "\u7729\u6655", "\u9B54\u6CD5", "\u6211\u6765\u4E86", "\u7761\u4E86", "\u6211\u6253", "\u95ED\u5634", "\u6253", "\u6253\u6655\u4E86", "\u5237\u7259", "\u7206\u63CD", "\u70B8\u5F39", "\u5012\u7ACB", "\u522E\u80E1\u5B50", "\u90AA\u6076\u7684\u7B11", "\u4E0D\u8981\u4E0D\u8981", "\u7231\u604B\u4E2D", "\u653E\u5927\u4ED4\u7EC6\u770B", "\u5077\u7AA5", "\u8D85\u9AD8\u5174", "\u6655", "\u677E\u53E3\u6C14", "\u6211\u8DD1", "\u4EAB\u53D7", "\u4FEE\u517B", "\u54ED", "\u6C57", "\u554A~", "\u70ED\u70C8\u6B22\u8FCE"],
            num: 53,
            prev: "w_00",
            folder: "ldw/",
            suffix: "gif",
            name: "\u7EFF\u8C46\u86D9",
            css: {
                cols: 10,
                "class": "s_ldw",
                width: 40,
                offset: 40
            },
            type: "img",
            power: 1
        },
        lxs: {
            tip: ["lxs\u4E0D\u60F3\u52A8", "lxs\u5403\u60CA", "lxs\u5439\u53E3\u54E8", "lxs\u6253\u6C14", "lxs\u6253\u5750", "lxs\u7B49\u5F85", "lxs\u6124\u6012", "lxs\u5E7B\u8C61", "lxs\u60CA\u559C", "lxs\u5F00\u5FC3", "lxs\u54ED\u557C", "lxs\u54ED\u7740\u8DD1", "lxs\u6CA1\u94B1", "lxs\u6015\u9B3C", "lxs\u629B\u5A9A\u773C", "lxs\u4E03\u5915", "lxs\u9A91\u9A6C\u821E", "lxs\u5347\u5929", "lxs\u77F3\u5316", "lxs\u6570\u94B1", "lxs\u5077\u5403", "lxs\u5077\u7B11", "lxs\u4E07\u5723\u8282", "lxs\u65E0\u804A", "lxs\u65E0\u5948", "lxs\u65E0\u8BED", "lxs\u59A9\u5A9A", "lxs\u6349\u6025", "lxs\u8F6C\u6655", "lxs\u649E\u8C46\u8150", "lxs\u8D58\u8089"],
            num: 31,
            prev: "lxs_0",
            folder: "lxs/",
            suffix: "gif",
            name: "\u51B7\u5148\u68EE",
            css: {
                cols: 10,
                "class": "s_lxs",
                width: 42,
                offset: 42
            },
            type: "img",
            power: 1
        },
        xyj: {
            tip: ["\u75AF\u5566", "\u62B1\u5934\u8DD1", "\u4E0D\u60F3\u7761", "\u4E0D\u8981\u5440", "\u82CD\u8747", "\u8E6D\u75D2", "\u5230\u7897\u91CC\u6765", "\u961F\u957F", "\u53D1\u8D22\u5566", "\u975E\u6D32\u821E", "\u9F13\u638C", "\u5E7F\u573A\u821E", "\u6EDA\u7B52", "\u6A2A\u884C", "\u6325\u624B", "\u706B\u821E\u9E21", "\u5BC2\u5BDE\u5440", "\u52A0\u6CB9", "\u6C5F\u5357style", "\u5A07\u7F9E", "\u60CA\u614C\u5931\u63AA", "\u7EA0\u7ED3", "\u5F00\u996D\u5566", "\u96F7\u795E", "\u6CEA\u5954", "\u804AQQ", "\u9EA6\u9738", "\u732B\u5973", "\u9B54\u5492", "\u5C3F\u6025", "\u626D\u5C41\u80A1", "\u7011\u5E03\u6C57", "\u6C42\u9976", "\u6492\u5A07", "\u5C11\u5973", "\u6C34\u51B0\u9E21", "\u5929\u7136\u5446", "\u5410\u8840", "\u73A9\u624B\u673A", "\u5A01\u6B66", "\u4E94\u9053\u6760", "\u821E\u52A8", "\u6D17\u6D17", "\u54B8\u86CB\u9E21", "\u5411\u65E5\u8475", "\u9E2D\u5B50\u821E", "\u6E38\u6CF3", "\u62DB\u8D22\u9E21", "\u7167\u955C\u5B50", "\u8718\u86DB\u9E21"],
            num: 50,
            prev: "xyj_0",
            folder: "xyj/",
            suffix: "gif",
            name: "\u5C0F\u5E7A\u9E21",
            css: {
                cols: 10,
                "class": "s_xyj",
                width: 42,
                offset: 42
            },
            type: "img",
            power: 1
        },
        ySmile: {
            tip: ["^_^", "(-__-)b", "\u2299\uFE4F\u2299\u2016", "\u2299\u25BD\u2299", " \u2267\u03B5 \u2266", "\u2533\uFF3F\u2533", "(\u256C\u25BC\u76BF\u25BC\uFF09", "\\(&quot;\u2594\u25A1\u2594)/", "\u2196(\uFFE3\u25BD\uFFE3&quot;) ", "(\u3065\uFFE33\uFFE3)\u3065 ", "(*\uFFE3\u25BD\uFFE3)y ", "o(\u2267\u53E3\u2266)o ", "(\uFFE3\u03B5\uFFE3*)", "/(\u3112o\u3112)/~~ ", "(\uFFE3\u03B5\uFFE3*)", "&lt;(\uFFE3\uFE36\uFFE3)&gt; ", "o(\u2267v\u2266)o", "\u256E(\u256F3\u2570)\u256D ", " \uFF61\u25D5\u203F\u25D5\uFF61", " \u7F52\u03C9\u7F52", "(\u25D5\u03C9\uFF1C)\u2606 ", "(\u273F\u272A\u203F\u272A\uFF61)\uFF89 ", "\uFF08\u25D5(\uFF6A)\u25D5\uFF09", "(\u25CF&#039;\u25E1&#039;\u25CF)\uFF89\u2665", "\u03A3(\u3063 °\u0414 °;)\u3063", "\u311F( \u2594, \u2594 )\u310F", "\u51F8(\u8279\u76BF\u8279 ) ", "m(_ _)m", "(\u2299x\u2299;)", "( =\u2229\u03C9\u2229= )", " \u256E(\u256F\u25BD\u2570)\u256D", "(\u22673\u2266)/ ", "(\uFF20_\uFF20;)?", " o(*\uFFE3\u25BD\uFFE3*)\u30D6", "(o\u309C\u25BD\u309C)o\u2606", "&quot;o((&gt;\u03C9&lt; ))o&quot; "],
            num: 36,
            prev: "",
            folder: "",
            name: "\u989C\u8868\u60C5",
            css: {
                cols: 6,
                "class": "s_ySmile"
            },
            type: "text",
            power: 1
        },
        wdj: {
            tip: [],
            num: 24,
            prev: "wdj_",
            suffix: "png",
            folder: "wdj/",
            name: "\u8C4C\u8C46\u835A",
            css: {
                cols: 10,
                "class": "s_wdj",
                width: 30,
                offset: 30
            },
            type: "img",
            power: 1
        },
        ali: {
            tip: ["\u8D56\u76AE", "\u611F\u52A8", "\u60CA\u8BB6", "\u6012\u6C14", "\u54ED\u6CE3", "\u5403\u60CA", "\u5632\u5F04", "\u98D8\u8FC7", "\u8F6C\u5708\u54ED", "\u795E\u7ECF\u75C5", "\u63EA\u8033\u6735", "\u60CA\u6C57", "\u9690\u8EAB", "\u4E0D\u8981", "\u9041", "\u4E0D\u516C\u5E73", "\u722C\u6765\u4E86", "\u86CB\u82B1\u54ED", "\u6E29\u6696", "\u70B9\u5934", "\u6492\u94B1", "\u732E\u82B1", "\u5BD2", "\u50BB\u7B11", "\u626D\u626D", "\u75AF", "\u6293\u72C2", "\u6293", "\u8737", "\u6320\u5899", "\u72C2\u7B11", "\u62B1\u6795", "\u543C\u53EB", "\u56B7", "\u5520\u53E8", "\u634F\u8138", "\u72C2\u7B11", "\u90C1\u95F7", "\u6F5C\u6C34", "\u5F00\u5FC3", "\u51B7\u7B11\u8BDD", "\u9876", "\u6F5C", "\u753B\u5708\u5708", "\u73A9\u7535\u8111", "\u5410", "\u54ED\u7740\u8DD1", "\u963F\u72F8\u4FA0", "\u51B7\u6B7B\u4E86", "\u60C6\u6005~", "\u6478\u5934", "\u8E6D", "\u6253\u6EDA", "\u53E9\u62DC", "\u6478", "\u6570\u94B1", "\u62D6\u8D70", "\u70ED", "\u52A01", "\u538B\u529B", "\u8868\u903C\u6211", "\u4EBA\u5462", "\u6447\u6643", "\u6253\u5730\u9F20", "\u8FD9\u4E2A\u5C4C", "\u6050\u614C", "\u6655\u4E4E\u4E4E", "\u6D6E\u4E91", "\u7ED9\u529B", "\u676F\u5177\u4E86"],
            num: 70,
            prev: "ali_0",
            folder: "ali/",
            name: "\u963F\u72F8",
            css: {
                cols: 10,
                "class": "s_ali",
                width: 42,
                offset: 42
            },
            type: "img",
            power: 1
        },
        luoluobu: {
            tip: ["hold\u4F4F", "\u963F\u95E8", "\u54CE\u54DF", "\u5509\uFF5E", "\u4E0D\u597D\u610F\u601D", "\u4E0D\u8981\u561B\uFF01", "\u5531\u6B4C", "\u626F\u809A\u76AE", "\u626F\u8138", "\u6413\u8138", "\u6413\u624B", "\u6253\u706F\u7B3C", "\u6253\u8D77\u7CBE\u795E", "\u70B9\u5934", "\u70B9\u59342", "\u52A8\u52A8\u811A", "\u52A8\u52A8\u811A2", "\u6296\u811A", "\u6296\u811A2", "\u55EF\uFF5E", "\u53D1\u5446", "\u9F13\u638C", "\u6EDA\u684C\u5B50", "\u597D\u95F2\u963F\uFF5E", "\u559D\u8336\u53D1\u5446", "\u54FC\uFF01", "\u6643", "\u54ED", "\u56F0\u4E86", "\u6269\u80F8\u8FD0\u52A8", "\u6765\u6765\u6765", "\u6765\u561B\uFF5E", "\u51B7\u9759\u51B7\u9759", "\u7F57\u7238\u7238\u626D\u626D", "\u7F57\u5988\u5988\u626D\u626D", "\u9E8B\u9E7F\u7F57\u7F57\u5E03", "\u626Dpp", "\u626Dpp2", "\u626D\u626D", "\u6B27\u4E5F", "\u8DB4\u7740", "\u5207\uFF01", "\u53BB\u53BB", "\u6492\u82B1", "\u4E0AWC", "\u5723\u8BDE\u8001\u4EBA", "\u5929\u4F7F\u7F57\u7F57\u5E03", "\u8DF3\u5440\u8DF3", "\u8DF3\u5440\u8DF32", "\u73A9\u4E2A\u7403", "\u6211\u6765\u4E86", "\u563B\u563B", "\u5411\u524D\u8FDB", "\u4E9A\u514B\u897F", "\u6447\u554A\u6447", "\u4E00\u8FB9\u5446\u7740\u53BB\uFF01", "\u4E00\u8D77\u626D", "\u6709\u793C\u4E86", "\u8FD9\u53A2\u6709\u793C\u4E86", "\u8D70\u5440\u8D70"],
            num: 60,
            prev: "llb_0",
            folder: "luoluobu/",
            name: "\u7F57\u7F57\u5E03",
            css: {
                cols: 10,
                "class": "s_luoluobu",
                width: 42,
                offset: 42
            },
            type: "img",
            power: 1
        },
        qpx: {
            tip: ["\u5FAE\u7B11", "\u5E05\u54E5", "\u7F8E\u5973", "\u8001\u5927", "\u54C8\u54C8\u54C8", "\u5978\u7B11", "\u50BB\u4E50", "\u98DE\u543B", "\u5BB3\u7F9E", "\u82B1\u75F4", "\u61A7\u61AC", "\u4F60\u725B", "\u9F13\u638C", "\u53EF\u7231", "\u59D4\u5C48", "\u5927\u54ED", "\u6CEA\u5954", "\u5BFB\u6B7B", "\u60CA\u8BB6", "\u7591\u95EE", "\u9119\u89C6", "\u5927\u9A82", "\u72C2\u6012", "\u56E7", "\u6655", "\u5455\u5410", "\u8D22\u8FF7", "\u7761\u4E86", "\u601D\u8003", "\u6C57", "\u65E0\u8BED", "\u62DC", "\u97A0\u8EAC", "\u7D2F\u4E86", "\u75C5\u4E86", "\u5899\u89D2", "\u8D85\u4EBA", "\u6233", "\u8DF3\u821E", "\u9B3C\u8138", "\u65E0\u804A", "\u649E\u5899", "\u9876", "HI", "\u996D", "\u86CB\u7CD5", "\u793C\u7269", "\u5FC3", "\u5FC3\u788E", "\u73AB\u7470", "\u70B8\u5F39", "\u96C6\u4F53\u821E", "\u6253\u4EBA", "\u62CD\u62CD", "\u4EB2\u4EB2", "\u63E1\u624B", "\u5B89\u6170", "\u77F3\u5934", "\u526A\u5B50", "\u5E03", "\u606D\u559C\u5566", "\u5575\u5575"],
            num: 62,
            prev: "b",
            folder: "qpx_n/",
            name: "\u6C14\u6CE1\u718A",
            css: {
                cols: 10,
                "class": "s_qpx",
                width: 35,
                offset: 35
            },
            type: "img",
            power: 1
        },
        zxh: {
            tip: ["+1", "\u54C0\u4F24", "\u9971", "\u6FD2\u6B7B", "\u75C5", "\u5403\u8D27", "\u4E0D\u6EE1", "\u5446", "\u5012\u540A", "\u70B9\u5B50", "\u9876", "\u9F13\u638C", "\u5BB3\u7F9E", "\u6C57", "\u5475\u5475\u5475", "\u52A0\u6CB9", "\u5978\u7B11", "\u5978\u8BC8", "\u60CA\u8BB6", "\u56E7", "\u770B", "\u62A0\u9F3B\u5B50", "\u54ED", "\u56F0", "\u4E50", "\u6E9C\u8D70", "\u8DEF\u8FC7", "\u4E70\u4F60\u59B9\u7684\u623F\u7EB8", "\u6572\u9523", "\u4EB2\u543B", "\u53BB\u4F60\u59B9\u7684\u5DE5\u4F5C", "\u6247\u98CE", "\u5931\u843D", "\u5237\u7259", "\u9003\u547D", "\u8DF3\u821E", "\u542C\u97F3\u4E50", "\u5077\u7B11", "\u5410", "\u65E0\u8BED", "\u559C", "\u7B11", "\u5174\u594B", "\u9E2D\u5B50\u8DF3", "\u54AC", "\u54AC", "\u793C\u7269", "\u8D5E", "\u9707\u60CA", "\u8FFD\u94B1", "\u505A\u9B3C\u8138"],
            num: 50,
            prev: "zxh_0",
            folder: "pczxh/",
            name: "\u5F20\u5C0F\u76D2",
            css: {
                cols: 10,
                "class": "s_zxh",
                width: 42,
                offset: 42
            },
            type: "img",
            power: 1
        },
        tsj: {
            tip: ["Kiss", "Love", "Yeah", "\u554A\uFF01", "\u80CC\u626D", "\u9876", "\u6296\u80F8", "88", "\u6C57", "\u778C\u7761", "\u9C81\u62C9", "\u62CD\u7816", "\u63C9\u8138", "\u751F\u65E5\u5FEB\u4E50", "\u644A\u624B", "\u7761\u89C9", "\u762B\u5750", "\u65E0\u804A", "\u661F\u661F\u95EA", "\u65CB\u8F6C", "\u4E5F\u4E0D\u884C", "\u90C1\u95F7", "\u6B63Music", "\u6293\u5899", "\u649E\u5899\u81F3\u6B7B", "\u6B6A\u5934", "\u6233\u773C", "\u98D8\u8FC7", "\u4E92\u76F8\u62CD\u7816", "\u780D\u6B7B\u4F60", "\u6254\u684C\u5B50", "\u5C11\u6797\u5BFA", "\u4EC0\u4E48\uFF1F", "\u8F6C\u5934", "\u6211\u7231\u725B\u5976", "\u6211\u8E22", "\u6447\u6643", "\u6655\u53A5", "\u5728\u7B3C\u5B50\u91CC", "\u9707\u8361"],
            num: 40,
            prev: "t_00",
            folder: "tsj/",
            name: "\u5154\u65AF\u57FA",
            css: {
                cols: 10,
                "class": "s_tsj",
                width: 35,
                offset: 35
            },
            type: "img",
            power: 1
        },
        baodong: {
            tip: ["\u5FC3\u7167\u4E0D\u5BA3", "\u84DD\u8138", "\u56F0\u60D1", "\u591F\u62FD", "\u77AA\u773C", "\u85D0\u89C6", "\u601D\u8003", "\u5475\u5475", "\u60F3\u8981\u59B9\u5B50", "\u5E7B\u60F3", "\u65E0\u5948\u7684\u7B11", "\u4E3A\u4EC0\u4E48", "\u9ED1\u4EBA\u6B6A\u5634", "\u6B6A\u5634\u7B11", "\u82E6\u903C", "\u9762\u762B", "\u54AF\u54AF\u54AF", "\u751F\u6C14", "\u9AD8\u5174", "\u559C\u6781\u800C\u6CE3", "\u544A\u8BC9\u6211", "\u6709\u4E86", "\u597D\u5427", "\u5B64\u72EC\u4E00\u751F", "\u560E\u560E", "\u66B4\u8E81", "\u7D2B\u6B6A\u5634", "\u7EA2\u6B6A\u5634", "\u8FD9\u4E0D\u79D1\u5B66", "\u7B11\u800C\u4E0D\u8BED", "\u56F4\u89C2", "\u725B\u4ED4\u6B6A\u5634", "\u65B9\u8098\u5B50", "\u9707\u60CA", "\u60CA\u8BB6", "\u98A0\u8986\u4E09\u89C2", "\u5C3C\u7F8E\u85D0\u89C6", "\u5C3C\u7F8E\u5475\u5475", "\u5C3C\u7F8E\u53D1\u5446", "\u5C3C\u7F8E\u6709\u4E86", "\u732B\u5634\u7B11", "\u601D\u6625", "\u5C3C\u7F8E\u82E6\u903C", "\u7B11\u5C3F", "\u5C3C\u7F8E\u54AF\u54AF", "\u5C3C\u7F8E\u6B6A\u5634", "\u5C3C\u7F8E\u59DA", "\u66B4\u8D70\u5C3C\u7F8E", "\u5A07\u7F9E", "\u5C3C\u7F8E\u9707\u60CA", "\u5B64\u72EC\u5C3C\u7F8E", "\u5C3C\u7F8E\u5927\u54ED", "\u5C3C\u7F8E\u6124\u6012", "\u5C3C\u7F8E\u560E\u560E", "\u5C3C\u7F8E\u6124\u61D1", "\u5C3C\u7F8E\u4E0D\u89E3"],
            num: 56,
            prev: "b_00",
            folder: "baodong/",
            name: "\u66B4\u6F2B\u9759\u6001",
            css: {
                cols: 10,
                "class": "s_baodong",
                width: 35,
                offset: 35
            },
            type: "img",
            power: 1
        },
        baodong_d: {
            tip: ["\u574F\u6DEB", "\u6293\u72C2", "\u60B2\u621A", "\u75DB\u54ED", "\u72AF\u8D31", "\u5978\u7B11", "\u5C4C\u4E1D", "\u9AD8\u547C", "\u611F\u53F9", "\u611F\u52A8", "\u618B\u5C48", "\u8212\u723D", "\u574F\u7B11", "\u5C41\u98A0", "\u77B3\u672F", "\u6742\u800D", "\u59DA\u8138", "\u5B64\u72EC", "\u66B4\u8D70", "\u6F47\u6D12", "\u5931\u671B", "\u540C\u684C", "\u53D8\u8138", "\u5F97\u745F", "\u8179\u9ED1\u7537", "\u8179\u9ED1\u5973", "\u591F\u62FD", "\u767D\u9886", "\u55B5\u5C3C\u739B", "\u6C6A\u5C3C\u739B", "\u563F\u563F\u5C3C\u739B", "\u52FE\u5F15", "\u53D1\u6CC4", "\u64CD\u64CD\u64CD"],
            num: 34,
            prev: "bd_00",
            folder: "baodong_d/",
            name: "\u66B4\u6F2B\u52A8\u6001",
            css: {
                cols: 10,
                "class": "s_baodong_d",
                width: 35,
                offset: 35
            },
            type: "img",
            power: 1
        },
        bobo: {
            tip: ["HI", "KISS", "\u4E0D\u8BF4", "\u4E0D\u8981", "\u626F\u82B1", "\u5927\u5FC3", "\u9876", "\u5927\u60CA", "\u98DE\u543B", "\u9B3C\u8138", "\u5BB3\u7F9E", "\u53E3\u6C34", "\u72C2\u54ED", "\u6765", "\u6CEA\u773C", "\u6D41\u6CEA", "\u751F\u6C14", "\u5410\u820C", "\u559C\u6B22", "\u65CB\u8F6C", "\u518D\u89C1", "\u6293\u72C2", "\u6C57", "\u9119\u89C6", "\u62DC", "\u5410\u8840", "\u5618", "\u6253\u4EBA", "\u8E66\u8DF3", "\u53D8\u8138", "\u626F\u8089", "\u5403To", "\u5403\u82B1", "\u5439\u6CE1\u6CE1\u7CD6", "\u5927\u53D8\u8EAB", "\u98DE\u5929\u821E", "\u56DE\u7738", "\u53EF\u601C", "\u731B\u62BD", "\u6CE1\u6CE1", "\u82F9\u679C", "\u4EB2", "", "\u9A9A\u821E", "\u70E7\u9999", "\u7761", "\u5957\u5A03\u5A03", "\u6345\u6345", "\u821E\u5012", "\u897F\u7EA2\u67FF", "\u7231\u6155", "\u6447", "\u6447\u6446", "\u6742\u800D", "\u62DB\u8D22", "\u88AB\u6BB4", "\u88AB\u7403\u95F7", "\u5927\u60CA", "\u7406\u60F3", "\u6B27\u6253", "\u5455\u5410", "\u788E", "\u5410\u75F0"],
            num: 63,
            prev: "B_00",
            folder: "bobo/",
            name: "\u6CE2\u6CE2",
            css: {
                cols: 10,
                "class": "s_bobo",
                width: 35,
                offset: 35
            },
            type: "img",
            power: 1
        },
        shadow: {
            tip: ["\u7126\u7CD6\u821E", "\u7FFB\u6EDA", "\u62CD\u5C41\u80A1\u505A\u9B3C\u8138", "\u4E0D", "\u6CB3\u87F9\u6389\u5566", "\u54E6\u8036", "\u6211\u5012", "\u6295\u964D", "\u542C\u97F3\u4E50", "\u88AB\u7838", "\u5410\u820C\u5934", "\u592A\u597D\u5566", "\u8D22\u6E90\u6EDA\u6EDA", "\u4EBA\u5462", "\u6325\u624B\u5E15", "\u5077\u7B11", "\u5377\u88AB", "\u770B\u697C\u4E0A", "\u6211\u62BD", "\u6709\u6728\u6709", "\u54ED", "\u6B22\u547C", "\u50BB\u516E\u516E", "\u6247\u6247\u5B50", "\u62CD\u624B", "\u7D27\u5F20", "\u6D17\u6FA1", "\u8036", "\u5403\u897F\u74DC", "\u7EB3\u5C3C", "\u6CA1\u6709\u94B1", "\u62FF\u73A9\u5076", "\u6765\u770B\u770B", "\u54C7\u54C7\u53EB", "\u62DB\u8D22\u732B", "\u653E\u5C41", "\u9686\u91CD\u4ECB\u7ECD", "\u6C42\u4F60\u4E86", "\u649E\u73BB\u7483", "\u773A\u671B", "\u6492\u82B1", "\u73A9\u94C3\u94DB", "\u601D\u8003\u8005", "\u62BD\u98CE", "\u5403\u82F9\u679C", "\u5149\u68CD"],
            num: 46,
            prev: "yz_0",
            folder: "shadow/",
            name: "\u5F71\u5B50",
            css: {
                cols: 10,
                "class": "s_shadow",
                width: 42,
                offset: 42
            },
            type: "img",
            power: 1
        },
        lt: {
            tip: ["\u4E2D\u7BAD", "LS\u53BB\u6B7B", "LS\u53BB\u6B7B\u5B50\u5F39", "LS\u53BB\u6B7B\u589E\u5F3A", "LS\u53BB\u6B7B\u70AE\u5F39", "\u677F\u51F3", "\u4E0D\u723D", "\u4E0D\u8981", "\u8D85\u4EBA", "\u5403\u96F6\u98DF", "\u62BD\u70DF", "\u4E32", "\u6253\u72D7", "\u6253\u9171\u6CB9", "\u6253\u4F60", "\u6234\u58A8\u955C", "\u86CB", "\u8361\u6F3E", "\u9876\u7834\u697C\u4E0A", "\u53D1\u61F5", "\u653E\u5C41", "\u8D1F\u5206\u6EDA\u7C97", "\u559D\u5927\u4E86", "\u547C\u5566\u5708\u513F", "\u62A4", "\u6ED1\u51B0", "\u753B\u5708\u5708", "\u706B\u94B3\u5218", "\u8D31\u8D31\u7684", "\u60CA\u5413", "\u62A0\u811A", "lt\u54ED", "\u62C9\u7C91\u7C91", "\u64B8", "\u6320PP", "\u95F9", "\u6392\u7403", "\u524D\u6392", "\u6572\u624B\u9F13", "\u6C99\u53D1", "\u5254\u7259", "\u5154\u5B50\u8E66\u8D77\u6765", "\u6316\u9F3B\u5C4E", "\u65E0\u8BED", "\u778E\u4E86", "\u79C0\u808C\u8089", "\u6447\u6EDA", "\u610F\u5916\u60CA\u559C", "\u9707\u60CA", "\u6B63\u6B65"],
            num: 50,
            prev: "ltn_0",
            folder: "lt/",
            name: "\u51B7\u5154",
            css: {
                cols: 10,
                "class": "s_lt",
                width: 42,
                offset: 42
            },
            type: "img",
            power: 1
        },
        bfmn: {
            tip: ["\u7231\u4F60", "\u50B2\u5A07", "\u6253\u4F60", "\u5E26\u56DE\u53BB\u538B\u5BE8", "\u7ED9\u8138\u4E0D\u8981\u8138", "\u6EDA\uFF08\u767E\u5EA6\u72EC\u5BB6\uFF09", "\u6EDA", "\u597D\u559C\u6B22", "\u6CEA\u5954", "\u5973\u5C4C\u4E1D", "\u6DF1\u4E95\u51B0", "\u7B97\u4F60\u72E0", "\u6211\u7F8E", "\u867E\u7C73", "\u4E0D\u8981", "\u597D\u5D07\u62DC", "\u6CEA\u5954", "\u4F60\u59B9\u554A", "\u4F60\u9020\u4E48", "\u6C42\u4EA4\u5F80", "\u9A9A\u5E74", "\u571F\u8C6A\u505A\u670B\u53CB\uFF08\u767E\u5EA6\u72EC\u5BB6\uFF09", "\u56F4\u89C2", "\u65E0\u836F\u53EF\u533B", "\u518D\u89C1", "\u5728\u4E48", "call-me", "no-zuo-no-die"],
            num: 28,
            prev: "bfmn_0",
            folder: "bfmn/",
            name: "\u767D\u53D1\u9B54\u5973",
            css: {
                cols: 10,
                "class": "s_bfmn",
                width: 40,
                offset: 41
            },
            type: "img",
            power: 1
        },
        bearchildren: {
            tip: ["88", "HI", "\u4EBA\u8270\u4E0D\u62C6", "\u5565", "\u5927\u54ED", "\u5931\u843D", "\u6012\u8D5E", "\u60CA\u5446\u4E86", "\u674E\u83CA\u798F", "\u6765\u4FE1\u780D", "\u6B22\u8FCE\u5165\u7FA4", "\u725B\u95EA\u95EA", "\u751F\u65E5\u5FEB\u4E50", "\u77F3\u5316", "\u7F9E\u7F9E\u54D2", "\u80A5\u7682\u5FC5\u6740", "\u8C22\u8C22\u4F60", "\u8DF3\u821E", "\u9739\u96F3\u821E", "\u9F13\u638C", "\u5077\u5185\u88E4", "\u54E6\u8036", "\u54ED", "\u559C\u6B22", "\u597D\u68D2", "\u6454", "\u6C42\u7B7E\u540D", "\u83CA\u82B1", "\u5C41", "\u54ED", "\u9876", "+1", "biu", "\u4EB2\u4EB2", "\u97AD\u5211", "\u80E1\u5B50", "\u50F5\u5C38", "\u6349\u6025", "\u626D\u626D", "\u63D2\u697C\u4E0A", "\u559C\u6B22", "\u8DEA\u6C42", "\u7F9E\u7F9E", "\u62A0\u9F3B\u5B50", "\u4F11\u606F\u4E00\u4E0B", "\u5DF2\u6B7B", "\u5FD9\u7740\u5462", "\u6C57", "\u6DA8\u59FF\u52BF", "\u7CCA\u4F60\u718A\u8138", "\u8C1C\u56E2", "\u98DE\u543B", "love", "\u54E6\u8036", "\u54ED", "\u5D29\u6E83", "\u561A\u745F", "\u65AD\u7F51", "\u6D17\u6FA1", "\u8D2D\u7269"],
            num: 60,
            prev: "bearchildren_",
            folder: "bearchildren/",
            name: "\u718A\u5B69\u5B50",
            css: {
                cols: 10,
                "class": "s_bearchildren",
                width: 40,
                offset: 40
            },
            type: "img",
            power: 1
        },
        tiexing: {
            tip: ["ILOVEU", "\u4E0A\u73ED\u4E2D", "\u4E0D\u8981\u561B", "\u4E2D\u7BAD", "\u4EF0\u5367\u8D77\u5750", "\u4F53\u64CD", "\u54C8\u54C8", "\u54ED", "\u597D\u57FA\u53CB", "\u5BC2\u5BDE", "\u561A\u745F", "\u60CA\u5446\u4E86", "\u6311\u8845", "\u6413\u6FA1", "\u649E\u5934", "\u65E0\u804A", "\u6D17\u6FA1", "\u6D17\u8863\u670D", "\u70B9\u624B\u6307", "\u725B\u903C", "\u73A9\u6C34\u679C", "\u751F\u75C5", "\u76AE\u97AD\u4F3A\u5019", "\u7761\u89C9", "\u793A\u7231", "\u7ED9\u8DEA\u4E86", "\u80DC\u5229", "\u8BA8\u538C", "\u8DDF\u4E2B\u6B7B\u78D5", "\u8E22\u7403", "\u8EBA\u67AA", "\u9001\u7EB8", "\u9003\u8DD1", "\u9876", "\u9A6C\u8428\u5409", "\u4E0D\u670D", "\u4EB2\u543B", "\u4F24\u5FC3", "\u5207\u514B\u95F9", "\u52A0\u6CB9", "\u52FE\u5F15", "\u5343\u5E74\u6740", "\u53BBtmd", "\u53D1\u6296", "\u5403", "\u547C\u54C8", "\u54ED", "\u5931\u843D", "\u5B64\u72EC", "\u5E86\u795D", "\u561A\u745F", "\u5FC5\u80DC", "\u60CA", "\u62BD", "\u62BD\u4E2B\u7684", "\u6311\u8845", "\u6361\u80A5\u7682", "\u6492\u82B1", "\u649E\u5899", "\u671F\u5F85", "\u677F\u51F3", "\u72AF\u8D31", "\u7B11", "\u8DEF\u8FC7", "\u9119\u89C6", "\u9762\u58C1", "\u9876", "\u9876\u697C\u4E0A", "\u9C81", "\u9F13\u638C"],
            num: 70,
            prev: "tiexing_",
            folder: "tiexing/",
            name: "\u75D2\u5C0F\u8D31",
            css: {
                cols: 10,
                "class": "s_tiexing",
                width: 40,
                offset: 40
            },
            type: "img",
            power: 1
        }
    }
};