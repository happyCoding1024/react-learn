import { fromJS } from 'immutable';


const defaultState = fromJS({ // fromJS(JS对象)将一个JS对象转换为immutable对象
  topicList: [{
    id: 1,
    title: "社会热点",
    imgUrl: "//upload.jianshu.io/users/upload_avatars/1211570/a02b7997-3ccb-4857-9e95-9fbd9deca9ee.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
  },{
    id: 2,
    title: "手绘",
    imgUrl: "//upload.jianshu.io/users/upload_avatars/1211570/a02b7997-3ccb-4857-9e95-9fbd9deca9ee.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
  }]
});

export default (state=defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}
