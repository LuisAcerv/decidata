import React from "react";
import { shallow } from "enzyme";
import Dashboard from "../";

describe("Dashboard", () => {
  it("should render correctly", () => {
    let wrapper;
    wrapper = shallow(<Dashboard />);
    expect(wrapper).toMatchSnapshot();
  });
});
