import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const propTypes = {
  text: PropTypes.string,
  singleObj: PropTypes.object,
  multipleObjArray: PropTypes.array
}
const defaultProps = {
  text: 'You forgot to attach a data source!',
  singleObj: {},
  multipleObjArray: []
}  

class DataTable extends Component {

    renderTableFromArray() {
        return(
          <table className="table">
            <thead>
               <tr>
                  <th>UsedID</th>
                  <th>Title</th>
                  <th>Body</th>
               </tr>
            </thead>
            <tbody>
            {this.props.multipleObjArray.map((data, key) => {
               return (
               <tr key={key}>
                 <td>{data.userId}</td>
                 <td>{data.title}</td>
                 <td>{data.body}</td>
               </tr>
               )
            })}
            </tbody>
          </table>
        ) 
      }

    renderTableFromObject() {
        return(
          <table className="table">
            <thead>
               <tr>
                  <th>UserId</th>
                  <th>Title</th>
                  <th>Body</th>
               </tr>
            </thead>
            <tbody>            
               <tr >
                 <td>{this.props.singleObj.userId}</td>
                 <td>{this.props.singleObj.title}</td>
                 <td>{this.props.singleObj.body}</td>
               </tr>               
            </tbody>
          </table>
        ) 
      }

    render() {
      const { text } = this.props;

      return (
      <div > 
        <p className='alert alert-warning' style={{ color:'black' }} > {text} </p> 
       { this.renderTableFromObject() }
       { this.renderTableFromArray()  }
      </div>
      );
    }
  }

DataTable.propTypes = propTypes;
DataTable.defaultProps = defaultProps;

const mapStateToProps = (state) => ({
    text: 'Stringified data: ' + state.data.testData,
    singleObj: state.data.testDataObj,
    multipleObjArray: state.data.testDataArray
  });

export default connect(mapStateToProps)(DataTable);

