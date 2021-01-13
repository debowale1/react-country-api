import React, {Component} from 'react';

const Context = React.createContext();


export class Provider extends Component {
  state = {
    countries:[]
  }

  componentDidMount(){
     fetch('https://restcountries.eu/rest/v2/all')
          .then(res => res.json())
          .then(countries => {
            this.setState({ countries: countries });
          });
   }

  render(){
    return (
      <Context.Provider value={this.state} >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;