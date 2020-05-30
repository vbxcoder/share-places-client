import React from 'react'
import { shallow } from 'enzyme'

import Avatar from '../../../../shared/components/UIElements/Avatar'

test('Should render Avatar correctly', () => {

  const props = {
    className: 'test-className',
    image: 'test-img-src',
    alt: 'test-img-alt',
    width: 'test-width',
    style: 'test-style'
  }

  const wrapper = shallow(<Avatar {...props} />)
  expect(wrapper).toMatchSnapshot()
})