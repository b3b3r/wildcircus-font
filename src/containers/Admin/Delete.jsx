import React from 'react';
import { Button } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { asyncFetchDeleteCircus } from '../../actions/deleteCircus';
import { connect } from 'react-redux';

function Delete({ asyncFetchDeleteCircus, index }) {
  return (
    <div className="Delete">
      <Button color="primary" onClick={() => asyncFetchDeleteCircus(index)} >Supprimer</Button>{' '}
    </div>
  );
}

const mdtp = dispatch => bindActionCreators({
  asyncFetchDeleteCircus,
}, dispatch)

export default connect(null, mdtp)(Delete);