'use strict';
describe('Karma', function () {
  it('Set up', function () {
    expect(1).toBe(1);
  });
});

describe('Fetch', function () {
  fetchMock.mock(/.*/, { status: 200, body: { foo: 'bar' } })
  it('Set up', function (done) {
    fetch('foo')
      .then(fetchResponse)
      .then(jsonResponse)
      .then(done);

    function fetchResponse(response) {
      expect(response).toBeDefined();
      return response.json();
    }

    function jsonResponse(data) {
      expect(data).toEqual({ foo: 'bar' })
      return data;
    }
  });
});