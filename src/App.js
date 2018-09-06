import React, { Component } from 'react';
import './App.css';
import { Modal, Button } from 'antd';

const { confirm, info } = Modal;

const showConfirm = function() {
  confirm({
    title: 'Do you want to delete these items?',
    content: 'When clicked the OK button, this dialog will be closed after 1 second',
    onOk() {
      return new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
      }).catch(() => console.log('Ooops errors!'));
    },
    onCancel() {},
  });
}

function showInfo () {
  info({
    title: 'Do you want to delete these items?',
    content: 'When clicked the OK button, this dialog will be closed after 1 second',
    onOk() {}
  });
}

class App extends Component {

  state = {
    visible: false,
    confirmLoading: false
  }

  showModal = () => {
    this.setState({ visible: true })
  }

  handle = () => {
    this.setState({ confirmLoading: true });

    setTimeout(() => {
      this.setState({ 
        visible: false,
        confirmLoading: false
      });
    }, 2000)
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }

  render() {
    return (
      <div className="App">
        <Button type="primary" onClick={ this.showModal }>
          open Modal
        </Button>
        {' '}
        <Button onClick={showConfirm}>
          confirm
        </Button>
        {' '}
        <Button onClick={showInfo}>
          info
        </Button>
        {' '}
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          confirmLoading={this.state.confirmLoading}
          onOk={this.handle}
          onCancel={this.handleCancel}
        >
          <p>Some components</p>
          <p>Some components</p>
          <p>Some components</p>
        </Modal>
      </div>
    );
  }
}

export default App;
