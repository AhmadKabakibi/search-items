import Enzyme, { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { createSerializer } from 'enzyme-to-json'
import 'jest-styled-components'

/* eslint-disable no-undef */

// Add to JSON automaticly to snapshots
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }))

/* eslint-enable no-undef */

// Fail tests on any warning
console.error = message => {
  throw new Error(message)
}

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() })
// Make Enzyme functions available in all test files without importing
global.shallow = shallow
global.render = render
global.mount = mount
