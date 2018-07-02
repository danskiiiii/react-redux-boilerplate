import React, { Component } from 'react';
import './App.css';

import DataTable from './components/DataTable';
import ActionButton from './components/ActionButton';

import { connect } from 'react-redux';
import { onGetSingleClick, onGetMultipleClick } from './actions/buttonActions';

class App extends Component {
  render() {
    return (
      <div className='App' > 
        <ActionButton text='GET Single Post' 
                      onClickProp={() => {this.props.onGetSingleClick();}} /> &nbsp;

        <ActionButton text='GET Multiple Posts' 
                      onClickProp={() => {this.props.onGetMultipleClick();}} />     
        
        <DataTable/>        
      </div>
    );
  }
}

export default connect( null, {onGetSingleClick,onGetMultipleClick})(App); //just action creators
