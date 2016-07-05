import URI from 'urijs';

const API_URL = 'http://localhost:5000';

export function fetchTermCounts(query) {
  var uri = URI(API_URL)
    .path('/terms/counts/')
    .query(query);
  return fetch(uri)
    .then(response => response.json());
}

export function fetchTermYearCounts(query) {
  var uri = URI(API_URL)
    .path('/terms/counts/year/')
    .query(query);
  return fetch(uri)
    .then(response => response.json());
}
