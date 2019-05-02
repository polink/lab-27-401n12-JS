import React from 'react';
import superagent from 'superagent';

import SearchForm from '../SearchForm/SearchForm';

export default class SearchResultList extends React.Component {
    render() {
        const {searchResults} = this.props;
        return(
            <li>
                <p>{searchResults.title}</p>
                {searchResults.title}
                {searchResults.selftext}
                <SearchForm
                    searchFormBoard = {searchFormBoard}
                    searchFormLimit = {searchFormLimit}
                />
            </li>
        )
    }
}