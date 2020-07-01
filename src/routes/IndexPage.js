import React, { Component } from 'react';
import { connect } from 'dva';
import { Button , Modal} from 'antd';

const { confirm } = Modal;
const namespace = 'example'

@connect(({ example }) => ({ example }))
class IndexPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: `${namespace}/fetch`,
    });
  }

  toTest = () => {
  //   this.props.history.push({
  //     pathname: '/test',
  //     state: {
  //         id: 3
  //     }
  // })
  confirm({
    title: '提示',
    content: '无权限，需要登录，将页面跳转至登录页',
    okText: '确定',
    okType: 'warning',
    cancelText: '取消',
    onOk() {
      // location.href = BASEURL + '/user/login.html?redirect=' + encodeURIComponent(location.href);
    },
    onCancel() {
      console.log('Cancel')
    }
  })
}
  render() {
    return (
      <div>
        <Button type="primary" onClick={() => this.toTest()}>Primary Button</Button>
      </div>
    )
  }
}

export default IndexPage;
// export default IndexPage
