import * as result from './'

test('Expect components to be exported.', () => {
  const expected = [
    'TableComponent',
    'Cell',
    'TextCell',
    'BadgeCell',
    'TooltipCell',
    'DefaultFilter',
    'GlobalFilter',
    'SelectFilter',
    'useApi'
  ]
  expect(Object.keys(result)).toEqual(expect.arrayContaining(expected))
})