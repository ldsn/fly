export default {

  namespace: 'config',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) { // eslint-disable-line
      dispatch({ type: 'fetch' })
    },
  },

  effects: {
    * fetch({ payload }, { call, put }) { // eslint-disable-line
      yield put({
        type: 'save',
        payload: {
          id: 1,
          title: '数据分析',
          content: '{"errorno":0,"web":{"version":"Web版","publish":"2016-10-10 16:40", "feature_tips":""},"windows":{"version":"Windows版 V3.9.6","publish":"2015-11-18 15:10","size":"6.63MB","system":"XP/vista/win7/win8", "feature_tips":"windows版可以xxx啦"},"android":{"version":"Android版 V8.0.0","url":"http://issuecdn.baidupcs.com/issue/netdisk/apk/BaiduNetdisk_8.0.0.apk","publish":"2017-11-01 14:20:00","size":"23M","system":"Android 2.3及以上版本", "feature_tips":""},"iphone":{"version":"iPhone版 V8.0.2","publish":"2017-11-08 17:13:27","size":"79.8MB","system":"iOS7.0及以上版本", "feature_tips":""},"ipad":{"version":"iPad版 V4.6.1","publish":"2017-03-28 16:05:30","size":"33.4MB","system":"iOS7.0及以上版本", "feature_tips":""},"winphone":{"version":"WinPhone版 V3.1.0","publish":"2013-06-15 11:52","size":"3M","system":"Windows Phone 7.5 及Windows Phone 8", "feature_tips":""},"guanjia":{"version":"百度网盘PC版 V5.7.1","url":"http://issuecdn.baidupcs.com/issue/netdisk/yunguanjia/BaiduNetdisk_5.7.1.exe","publish":"2017-11-02 21:40:00","size":"29.5MB","system":"XP/vista/win7/win8/win10", "feature_tips":""},"mac":{"version":"Mac版 V2.2.0","url":"http://issuecdn.baidupcs.com/issue/netdisk/MACguanjia/BaiduNetdisk_mac_2.2.0.dmg","publish":"2017-05-24 19:30:33","size":"11.5M","system":"Mac OS X 10.10+", "feature_tips":"mac版可以xxx啦"}}'
        }
      });
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
