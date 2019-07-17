import React, { Component } from 'react';
import CardCircus from './Card';
import { bindActionCreators } from 'redux';
import { asyncFetchCircus } from '../../actions/fetchCircus';
import { asyncFetchTheme } from '../../actions/fetchTheme';
import { connect } from 'react-redux';

class Circus extends Component {
  componentDidMount() {
    const { asyncFetchCircus, asyncFetchTheme } = this.props;
    asyncFetchCircus();
    asyncFetchTheme()
  }
  render() {
    const { circus } = this.props;
    return (
      <div className="Circus">
        <h1>Nos cirques</h1>
        {circus.map(circus => <CardCircus name={circus.name} price={circus.price} place={circus.place} url={circus.url} />)}
      </div>
    );
  }
}

const mstp = state => ({
  circus: state.circus.circus
});


const mdtp = dispatch => bindActionCreators({
  asyncFetchCircus,
  asyncFetchTheme,
}, dispatch);

export default connect(mstp, mdtp)(Circus);