import React from 'react'
import { shallow } from 'enzyme'

import LoadingSpinner from  '../../../../shared/components/UIElements/LoadingSpinner'

test('Should render LoadingSpinner as overlay correctly', () => {
  const wrapper = shallow(<LoadingSpinner asOverlay />)
  expect(wrapper).toMatchSnapshot()
})

test('Should render LoadingSpinner without overlay correctly', () => {
  const wrapper = shallow(<LoadingSpinner />)
  expect(wrapper).toMatchSnapshot()
})