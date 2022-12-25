import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const mock = new MockAdapter(axios)

// Save a reference to the mock adapter so that we can later reuse it
// var mockAdapter = axios.defaults.adapter;

// Removing mocking behavior
mock.restore();

// Add mocking behavior again
// axios.defaults.adapter = mockAdapter;

export default mock
