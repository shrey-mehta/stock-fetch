import React, { Component } from 'react';
import _ from 'lodash';
import axios from 'axios';
import fire from '../config/Fire'

import SearchBar from './SearchBar/SearchBar';
import StockList from './StockList/StockList';


class Home extends Component {
    logout = () => {
        fire.auth().signOut();
    }
    
    
  constructor() {
    super();

    this.state = {
      stocks: [],
      term: null,
      value: ''
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleClick(e) {
    if(e) e.preventDefault();
    this.setState({
      value: '',
      term: this.state.value
    });

    let term = this.state.value;
    const key = 'S9T01LQ9EYR3ZSPP';
    const url = `https://www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&symbols=${term}&apikey=${key}`;

    axios.get(url)
    .then(res => {
      console.log(res.data);
      let stocks = _.flattenDeep( Array.from(res.data['Stock Quotes']).map((stock) => [{symbol: stock['1. symbol'], price: stock['2. price'], volume: stock['3. volume'], timestamp: stock['4. timestamp']}]) );
      console.log(stocks);
      this.setState((state, props) => {
        return {
          ...state,
        stocks
        }
      })
    })
    .catch(error => console.log(error))
  }
  
  render () {
    let stocks = this.state.stocks;
    const value = this.state.value;

    return (
        
      <div className="App">
          <div className="text">
        <h1 className="App__Title">Stock Search</h1>
        <SearchBar value={ value }
                   onChange={ this.handleChange }
                   onClick={ this.handleClick }/>
        <StockList stockItems={ this.state.stocks }/>
        <button onClick={this.logout}>Logout</button>
        </div>
      </div>
    );
  }
}

export default Home;