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

  handleClick = e => {
    const { asyncFetchCircus } = this.props;
    asyncFetchCircus(e.target.id);
  }

  render() {
    const { circus, themes } = this.props;
    return (
      <div className="Circus">
        <h1>Nos cirques</h1>
        <label>Sélectionner un thème: </label>
        <select>
          {themes.map((theme, index) => <option key={index} id={theme.name}  onClick={this.handleClick}>{theme.name}</option>)}
        </select>
        {circus.map(circus => <CardCircus name={circus.name} price={circus.price} place={circus.place} url={circus.url} theme={circus.theme} />)}
      </div>
    );
  }
}

const mstp = state => ({
  circus: state.circus.circus,
  themes: state.themes.themes,
});


const mdtp = dispatch => bindActionCreators({
  asyncFetchCircus,
  asyncFetchTheme,
}, dispatch);

export default connect(mstp, mdtp)(Circus);