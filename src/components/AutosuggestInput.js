import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import { fetchData } from '../helpers/general.utils';

export const getSuggestionValue = suggestion => {
  return suggestion.name;
}

export const renderSuggestion = suggestion => {
  let label = '';
  if (suggestion._type === 'autocomplete_value') {
    label = suggestion.value.occasion || "Artist/group"
  } else {
    label = suggestion._type
  }
  return (
    <div class='suggestions'>
      <h3><strong>{suggestion.name}</strong></h3>
      <p>Category: {label}</p>
    </div>
  );
}

export class AutosuggestInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = async ({ value }) => {
    let suggestions = []
    try {
      suggestions = await fetchData(value)
    } catch(e) {
      console.log(e)
    }
    this.setState({
      suggestions
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      value,
      onChange: this.onChange
    };

    return (
      <div id='autosuggest'>
        <div id='title'><h1>
          What are you looking for?
        </h1></div>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
      </div>
    );
  }
}
