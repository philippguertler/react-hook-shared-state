import expect from 'expect'

const message = 'Please add some tests.'

describe('Module template', () => {
  it('displays a welcome message', () => {
    expect(message).toContain('Please add some tests.')
  })
})
