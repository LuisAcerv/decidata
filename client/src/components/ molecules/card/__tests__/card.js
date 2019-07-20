import React from "react";
import { shallow } from "enzyme";
import Card from "../";

describe("Card", () => {
  it("should render correctly", () => {
    let wrapper;
    wrapper = shallow(<Card />);
    expect(wrapper).toMatchSnapshot();
  });
});
