import { query } from '../services/example'
const namespace = 'example'
export default {
  namespace,
  state: {
    dataList: [],
    searchConf: {

    }
  },

  // subscriptions: { // 一般用不上
  //   setup({ dispatch, history }) {  // eslint-disable-line
  //   },
  // },

  effects: {
    *fetch({ payload }, { call, put, select }) {  // eslint-disable-line
      const searchCond = yield select(state => state[namespace].searchCond);
      const rsp = yield call(query, searchCond) 
      console.log(rsp)
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, {payload}) {
      return { 
        ...state, 
        dataList: payload
       }
    }
  }
}
