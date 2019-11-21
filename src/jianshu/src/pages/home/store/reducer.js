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
  }],

  articleList: [{
    id: 1,
    title: '别以为看字就是读书，深阅读，才能撬动你的灵魂！',                  
    desc: '文/俊英子 一月，我从一个二手平台买了一些书，当翻到《深阅读》的一刹那我就停下了，第一次见到透明的，类似磨砂的书皮！从外观上来看是我见过最有艺术...',
    imgUrl: '//upload-images.jianshu.io/upload_images/4458735-24da0a0e13018970.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },{
    id: 2,
    title: '别以为看字就是读书，深阅读，才能撬动你的灵魂！',                  
    desc: '文/俊英子 一月，我从一个二手平台买了一些书，当翻到《深阅读》的一刹那我就停下了，第一次见到透明的，类似磨砂的书皮！从外观上来看是我见过最有艺术...',
    imgUrl: '//upload-images.jianshu.io/upload_images/4458735-24da0a0e13018970.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },{
    id: 3,
    title: '别以为看字就是读书，深阅读，才能撬动你的灵魂！',                  
    desc: '文/俊英子 一月，我从一个二手平台买了一些书，当翻到《深阅读》的一刹那我就停下了，第一次见到透明的，类似磨砂的书皮！从外观上来看是我见过最有艺术...',
    imgUrl: '//upload-images.jianshu.io/upload_images/4458735-24da0a0e13018970.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },{
    id: 4,
    title: '别以为看字就是读书，深阅读，才能撬动你的灵魂！',                  
    desc: '文/俊英子 一月，我从一个二手平台买了一些书，当翻到《深阅读》的一刹那我就停下了，第一次见到透明的，类似磨砂的书皮！从外观上来看是我见过最有艺术...',
    imgUrl: '//upload-images.jianshu.io/upload_images/4458735-24da0a0e13018970.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }],
  recommendList: [{
    id: 1,
    imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
  },{
    id: 2,
    imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
  },{
    id: 3,
    imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
  },{
    id: 4,
    imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
  },{
    id: 5,
    imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
  },{
    id: 6,
    imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
  }]
});

export default (state=defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}
