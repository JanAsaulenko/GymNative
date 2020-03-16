/**
 * @format
 */

import("react-native");
import React from "react";
import { shallow } from "enzyme"
const { Form } = require('../Components/Form');



describe('rendering', () =>
{
  it('create snapshot', () =>
  {
    const component = shallow(<Form />);
    expect(component).toMatchSnapshot();
  });
  it('equals', () =>
  {
    expect(2 + 3).toBe(5)
  });

});
