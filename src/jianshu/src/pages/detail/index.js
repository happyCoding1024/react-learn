import React, { PureComponent } from 'react';
import { DetailWrapper, Header, Content } from "./style";
// withRouter的作用是使得
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Detail extends PureComponent {

	render() {
	  console.log(this.props);
	  const { title, content } = this.props;
		return (
      <DetailWrapper>
        <Header>
          {title}
        </Header>
        <Content
          dangerouslySetInnerHTML={{__html:content}}
        />
      </DetailWrapper>
			)
	}

	componentDidMount() {
	  this.props.getDetail(this.props.match.params.id);
  }
}

const mapState = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
});

const mapDispatch = (dispatch) => ({
  getDetail(id) {
    dispatch(actionCreators.getDetail(id));
  }
});
// withRouter 的作用是使得Detail这个组件有能力获取到Router中的所有内容
export default connect(mapState, mapDispatch)(withRouter(Detail));