/**
 * @format
 */

import("react-native");
import React from "react";
import { shallow } from "enzyme";
import { ButtonAdd } from "../src/components/ButtonAdd";
import { Text } from "react-native"

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


  it("should render a button", () =>
  {

    const component = shallow(<ButtonAdd />);
    expect(component).toMatchSnapshot()
  })



});

describe("renedr button", () =>
{

  it('should press a button', () =>
  {

    const mockPress = jest.fn();

    const component = shallow(
      <ButtonAdd destinationScreen={ "text" } handlePress={ mockPress } />
    )
    console.log(component.props());

    expect(component.find(Text)).toHaveLength(1)

  })
})