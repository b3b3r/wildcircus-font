import React, { Component } from 'react';
import { connect } from 'react-redux';
import { asyncFetchCircus } from '../../actions/fetchCircus';
import { asyncFetchTheme } from '../../actions/fetchTheme';
import { addCircus } from '../../actions/addCircus';
import { bindActionCreators } from 'redux';
import { Button } from 'reactstrap';
import Addcircus from './Addcircus';
import Delete from './Delete';

class Adminpage extends Component {

  componentDidMount() {
    const { asyncFetchCircus, asyncFetchTheme } = this.props;
    asyncFetchCircus();
    asyncFetchTheme()
  }

  render() {
    const { circus, addornot, addCircus } = this.props;
    return (
      <div className="Adminpage">
        <p>Je suis sur la page admin</p>
        <ul>{circus.map(circus => <li key={circus.id}>{`${circus.name} ${circus.place} ${circus.price}€`} <Delete index={circus.id} /></li>)}</ul>
        <Addcircus display={addornot === true ? 'Addcircus' : 'Addcircus-none'} />
        <Button color="primary" onClick={() => addCircus()} >Ajouter</Button>{' '}

      </div>
    );
  }
}

const mstp = state => ({
  addornot: state.admin.addcircus,
  circus: state.circus.circus
});

const mdtp = dispatch => bindActionCreators({
  asyncFetchCircus,
  asyncFetchTheme,
  addCircus
}, dispatch);

export default connect(mstp, mdtp)(Adminpage);