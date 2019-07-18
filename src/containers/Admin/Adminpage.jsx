import React, { Component } from 'react';
import { connect } from 'react-redux';
import { asyncFetchCircus } from '../../actions/fetchCircus';
import { asyncFetchTheme } from '../../actions/fetchTheme';
import { addCircus } from '../../actions/addCircus';
import { modifyCircus } from '../../actions/modifyCircus';
import { bindActionCreators } from 'redux';
import { Button } from 'reactstrap';
import Addcircus from './Addcircus';
import Delete from './Delete';
import ModifyCircus from './ModifyCircus';
import './Adminpage.scss';

class Adminpage extends Component {

  componentDidMount() {
    const { asyncFetchCircus, asyncFetchTheme } = this.props;
    asyncFetchCircus();
    asyncFetchTheme()
  }

  render() {
    const { circus, addornot, modifyornot, addCircus, modifyCircus } = this.props;
    return (
      <div className="Adminpage container">
        <ul>{circus.map((circus, index) =>
          <li key={circus.id}>
            <div className="container">
              <div className="row col-6">
                {`${circus.name}
        ${circus.place}
        ${circus.price}€`}
                <ul>${circus.theme.map((theme, index) => <li key={index}>{theme}</li>)}</ul>
              </div>
              <div className="row">
                <img className="vignette" src={circus.url} alt={circus.name} />
              </div>
              <div className="row">
                <Delete
                  id={circus.id}
                />
                <Button
                  color="primary"
                  onClick={() => modifyCircus()}

                >
                  Modifier
            </Button>{' '}
                <ModifyCircus
                  oldName={circus.name}
                  oldPrice={circus.price}
                  oldPlace={circus.place}
                  oldUrl={circus.url}
                  id={circus.id}
                  index={index}
                  display={modifyornot ? 'Modifycircus' : 'Modifycircus-none'} />
              </div>
            </div>
          </li>
        )}
        </ul>
        <Button color="primary" onClick={() => addCircus()} >Ajouter</Button>{' '}
        <Addcircus display={addornot ? 'Addcircus' : 'Addcircus-none'} />
      </div>
    );
  }
}

const mstp = state => ({
  addornot: state.admin.addcircus,
  modifyornot: state.admin.modifycircus,
  circus: state.circus.circus
});

const mdtp = dispatch => bindActionCreators({
  asyncFetchCircus,
  asyncFetchTheme,
  addCircus,
  modifyCircus
}, dispatch);

export default connect(mstp, mdtp)(Adminpage);