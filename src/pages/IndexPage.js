import React, { Component } from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import Editor from "../components/Editor";

const namespace = 'example'

@connect(({ example, loading }) => ({ example, dataLoading: loading.effects[`${namespace}/fetchList`] }))
class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.child = React.createRef();
  }
  componentDidMount() {
    this.props.dispatch({
      type: `${namespace}/fetchList`
    });
  }

toTest = () => {
  console.log(this.child.current.getEditorValue())
}
  render() {
    return (
      <div>
        <Editor value={'<h1>123456</h1>'} id={'editor'} width={'100%'} height={'500'} ref={this.child}/>
        <Button type="primary" onClick={() => this.toTest()}>默认按钮</Button>
      </div>
    )
  }
}

export default IndexPage
