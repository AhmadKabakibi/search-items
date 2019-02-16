import createHistory from 'history/createBrowserHistory'
import createMemoryHistory from 'history/createMemoryHistory'
import ReactDOM from 'react-dom'

jest.mock('history/createBrowserHistory')
jest.mock('react-dom')

// replace browser with memory history (there is no browser in test env)
const mockedHistory = createHistory as jest.Mock
mockedHistory.mockImplementation(createMemoryHistory)

describe('Index', () => {
  const index = require('./index')
  it('should create history', () => {
    expect(mockedHistory).toHaveBeenCalledTimes(1)
  })

  it('should attach the app to the DOM', () => {
    index.init('testEl')
    expect(ReactDOM.render).toHaveBeenCalledWith(index.WrappedApp, 'testEl')

    index.init()
    expect(ReactDOM.render).toHaveBeenCalledTimes(1)
  })
})
