import React from "react";
import { create } from "react-test-renderer";
import {fetchData} from "../helpers/general.utils"
import { renderSuggestion } from "../components/AutosuggestInput";
import { syncify } from '../setupTests'

const fetchMock = require('fetch-mock');

// tests error handling for API call
describe('data fetching', () => {
  afterEach(() => {
    fetchMock.restore();
  });
  test('it fetches the right data', async () => {
    fetchMock.get('https://api.earlytestabc.plugify.nl/autocomplete.json?query=a', {results: ["world"]});
    const response = await fetchData('a');
    expect(response).toEqual(["world"]);
  });

  test('it throws an error when API call fails', async () => {
    fetchMock.get('https://api.earlytestabc.plugify.nl/autocomplete.json?query=a', { status: 500, body: JSON.stringify("bad data") });
    const response = await syncify(async () => {
      return await fetchData('a');
    });
    expect(response).toThrow('Bad Request');
  });
});

// test displaying of right content
describe('data display', () => {
  test('suggestion info is displayed correctly', () => {
    const suggestion = {
      autocomplete: {
        _type: 'autocomplete_value',
        name: 'singer1',
        value: {
          occasion: "birthday"
        }
      },
      city: {
        _type: 'city',
        name: 'Amsterdam'
      }
    }
    const response1 = renderSuggestion(suggestion.autocomplete);
    const dataDisplayed1 = response1.props.children[1].props.children[1];
    expect(dataDisplayed1).toBe('birthday');

    const response2 = renderSuggestion(suggestion.city);
    const dataDisplayed2 = response2.props.children[1].props.children[1];
    expect(dataDisplayed2).toBe('city')
  })
});
