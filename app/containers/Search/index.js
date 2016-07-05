/*
 *
 * Search
 *
 */

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Select from 'react-select';

import Chart from '../../components/Chart';

import selectSearch from './selectors';
import * as searchActions from './actions';
import { fetchTermCounts } from './api';

import styles from './styles.css';
import 'react-select/dist/react-select.css';

const loadOptions = (input, callback) => {
  fetchTermCounts({term: input})
    .then(data => {
      callback(null, {
        options: data.results.map(result => {
          return {
            value: result.cui,
            label: result.term
          }
        })
      });
    });
};

const filterOption = (option, filter) => {
  return true;
}

const getChartData = (terms, counts) => {
  if (terms && counts) {
    const groups = counts.results.reduce((acc, result) => {
      acc[result.fy] = acc[result.fy] || {year: result.fy};
      acc[result.fy][result.term] = result.count;
      return acc;
    }, {});
    return {
      json: Object.values(groups),
      keys: {
        x: 'year',
        value: terms.map(term => term.label)
      }
    };
  }

  return {json: []};
}

export class Search extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { terms, counts, selectTerm } = this.props;
    return (
      <div>
        <Select.Async
            name="search-term"
            value={terms}
            onChange={selectTerm}
            loadOptions={loadOptions}
            filterOption={filterOption}
            multi={true}
          />
        <Chart
            data={getChartData(terms, counts)}
            axis={{
              x: {label: 'Year'},
              y: {label: 'Count'}
            }}
          />
      </div>
    );
  }
}

const mapStateToProps = selectSearch();

function mapDispatchToProps(dispatch) {
  return bindActionCreators(searchActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
