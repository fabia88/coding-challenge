import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import { fetchData } from '../helpers/general.utils';

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  let label = '';
  if (suggestion._type === 'autocomplete_value') {
    label = suggestion.value.artist_group || suggestion.value.occasion
  } else {
    label = suggestion._type
  }
  return (
    <div class='suggestions'>
      <p><strong>{suggestion.name}</strong></p>
      <p>{label}</p>
    </div>
  );
}

class AutosuggestInput extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = async ({ value }) => {
    this.setState({
      suggestions: await fetchData(value)
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

export default AutosuggestInput;
