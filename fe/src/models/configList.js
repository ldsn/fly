export default {

  namespace: 'configList',

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
          list: [{
            id: 1,
            title: '数据分析'
          }, {
            id: 2,
            title: '首页logo'
          }, {
            id: 3,
            title: '首页轮播图'
          }]
        }
      });
    },
    * del({ payload }) {
      const id = payload;
      alert(id)
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
