import axios from 'axios';
import { constants } from './';

const changeHomeData = (result) => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList
});

const addHomeList = (list, nextPage) => ({
  type: constants.ADD_HOME_LIST,
  articleList: list,
  nextPage
});

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data;
      const action = changeHomeData(result);
      dispatch(action);
    });
  }
};

export const getMoreList = (page) => {
  return (dispatch) => {
    // 向后端请求数据时带上一个page，表示请求的页数
    axios.get('/api/homeList.json?page=' + page).then((res) => {
      const result = res.data.data;
      const action = addHomeList(result, page + 1);
      console.log(action);
      dispatch(action);
    });
  }
};
