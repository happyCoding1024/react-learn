import * as constants from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
});

const changeList = (data) => ({
  type: constants.CHANGE_LIST,
  // 老师说，这个地方要写成这样的形式，因为在reducer.js中创建的是一个immutable对象，即使list是一个[]（空数组）
  // 但是在转换为immutable对象的过程中也会将里面的引用类型属性转换为immutable对象，所以list实际上是一个immutable对象
  // 而如果这里用 data： data，在reducer中， return state.set('list', action.data);时就是将一个js对象替换list immutable对象
  // 会导致错误，但是经过测试不会出现这种情况，有可能react版本升级改进了这个问题。
  data: fromJS(data)

});

// 利用 Ajax 请求获取搜索框中的推荐内容
export const getList = () => {
  return (dispatch) => {
    // 学到一点新知识：平常老说接口接口，其实这个headererList.json文件就是一个接口
    // 在真正开发的过程中，这个时候就需要和后端的小伙伴进行沟通了，我需要从哪里取数据呢？
    // 经过一致商量之后，咱们就约定在当前目录api文件夹下的headerList.json吧。
    // 前端人员在开发时建立一个api文件夹和一个headerList.json文件，在上线时使用后端提供的
    // ./api/headerList.json 文件，将自己的删掉。
    axios.get('/api/headerList.json').then((res) => {
      const data = res.data;
      dispatch(changeList(data.data));
    }).catch(() => {
      console.log('error');
    })
  }
};

