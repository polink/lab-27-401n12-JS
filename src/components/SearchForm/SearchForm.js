import React from 'react';

export default class SearchForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchFormBoard : '',
            searchFormLimit : 10,
        };
    }

    handleChange = event => {
        this.setState({searchTitle: event.target.value});
    };

    handleSubmit = event => {
        event.preventDefault();
        // this.props.
    };

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    name="searchTitle"
                    value="enter something!"
                    onChange={this.handleChange}
                    type="text"
                />
                <input
                    type="number"
                    name="# of results"
                    value={this.state.limit}
                    onChange={this.handleChange}
                    placeholder="10"
                />
                <button type="submit">Search</button>
            </form>
        );
    }
}