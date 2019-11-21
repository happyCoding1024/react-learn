import { fromJS } from 'immutable';
import { constants } from './'

const defaultState = fromJS({ // fromJS(JS对象)将一个JS对象转换为immutable对象
  topicList: [],
  articleList: [],
  recommendList: []
});

export default (state=defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      // action.topicList 是一个JS对象，state中的topicList是一个immutable对象，故需要转换一下
      // 这种写法和下面分开写的作用相同
      console.log(action);
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
      });
      // 分开写
      // state.set('topicList', fromJS(action.topicList));
      // state.set('articleList', fromJS(action.articleList));
      // state.set('recommend', fromJS(action.recommendList));
    default:
      return state;
  }
}
