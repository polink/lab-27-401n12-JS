import React from 'react';
import superagent from 'superagent';
import SearchResultList from '../SearchResultList/SearchResultList'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.state.redditSearch = [];
  }

  async componentDidMount(){
    // Vinicio - making this an async function since I'll await a function
    await this.loadRedditSearch();
  }

  loadRedditSearch = async  () => {
    let searchFormBoard;
    let searchFormLimit;
    const REDDITS = `https://www.reddit.com/r/${searchFormBoard}.json?limit=${searchFormLimit}`;

    return superagent.get(REDDITS)
      .then(response => {
        this.setState({
          searchResults: response.body.data
        });
      })
      .catch(console.error);
  };
// selftext = post text
// TITLE = POST TITLE

  // handlePokemonUpdate = (updatedPokemon) => {
  //   this.setState((previousState) => {
  //     return {
  //       pokemon: previousState.pokemon.map(current =>
  //         current.url === updatedPokemon.url ? updatedPokemon : current
  //       )
  //     }
  //   });
  // };
  //
  // handleNameChange = (oldName, newName) => {
  //   this.setState((previousState) => {
  //     return {
  //       pokemon: previousState.pokemon.map(current =>
  //         current.name === oldName ? {...current, name: newName}: current
  //       )
  //     }
  //   });
  // };

  render() {
    return(
      <main>
        <ul>
        {
          this.state.redditSearch.map((search, index) =>
            <SearchResultList
              redditSearch = {search}
            />
          )
        }
        </ul>
      </main>
    );
  }
}