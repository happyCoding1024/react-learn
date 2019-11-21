import styled from 'styled-components';

export const HomeWrapper = styled.div`
  overflow: hidden; 
	width: 960px;
	margin: 0 auto;
`;

export const HomeLeft = styled.div`
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  float: left;
  .banner-img {
    width: 625px;
    height: 270px;
  }
  .banner-topic {
    background: pink;
  }
`;

export const HomeRight = styled.div`
  width: 280px;
  float: right;
`;

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px; // 目的是充分利用宽度，先向左边对齐，
                      // 如果距离左边元素不足-18px，那么margin-left就为0。
  border-bottom: 1px solid #dcdcdc;               
`;

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  padding-right: 10px;
  margin-bottom: 10px;
  margin-left: 18px;
  font-size: 14px;
  color: #000;
  background: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topic-pic {
    height: 32px;
    width: 32px;
    // 上面这样写时会导致文字偏下显示，加上下面两句话后文字就会居中显示了，原因不明，复习html时理解清楚
    display：block; 
    float: left;
    margin-right: 10px;
  }
`;

// List 组件样式
export const ListItem = styled.div`{
  overflow: hidden;
  padding: 20px, 0;
  border-bottom:  1px solid #dcdcdc;
  .pic {
    width: 125px;
    height: 100px;
    display: block;
    float: right;
    border-radius: 10px;
  }
}
`;

export const ListInfo = styled.div`
  float: left;
  width: 500px;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`;

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`;

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  // 接收父组件传递过来值的方法 
  background: url(${(props) => props.imgUrl});
  background-size: contain;
`;

export const WriterWrapper = styled.div`
  width: 278px;
  border: 1px solid #dcdcdc;
  height:  300px;
  line-height: 300px;
  text-align: center;
`;
