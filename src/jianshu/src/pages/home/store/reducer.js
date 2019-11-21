import { fromJS } from 'immutable';
import { constants } from './'

const defaultState = fromJS({ // fromJS(JS对象)将一个JS对象转换为immutable对象
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScroll: false
});

const changeHomeData = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    recommendList: fromJS(action.recommendList)
  });
};

const addHomeList = (state, action) => {
  state.merge({
    'articleList': state.get('articleList').concat(fromJS(action.articleList)),
    'articlePage': action.nextPage
  });
};

export default (state=defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      // action.topicList 是一个JS对象，state中的topicList是一个immutable对象，故需要转换一下
      // 这种写法和下面分开写的作用相同
      return changeHomeData(state, action);
    // 分开写
    // state.set('topicList', fromJS(action.topicList));
    // state.set('articleList', fromJS(action.articleList));
    // state.set('recommend', fromJS(action.recommendList));
    case constants.ADD_HOME_LIST:
      // return state.set('articleList', state.get('articleList').concat(fromJS(action.articleList)));
      return addHomeList(state, action);
      // 处理scrollTop大于100时出现返回顶部按钮
    case constants.TOGGLE_SCROLL_SHOW:
      return state.set('showScroll', action.show);
    default:
      return state;
  }
}
