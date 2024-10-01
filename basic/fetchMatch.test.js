test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});

 const fetchData = require('./fetchMatch.js')

  test('the data is "data"', async () => {
  const data = await fetchData();
  expect(data).toBe("data");
});


