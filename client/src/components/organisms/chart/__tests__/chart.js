import React from "react";
import { shallow } from "enzyme";
import Chart from "../";

describe("Chart", () => {
  it("should render correctly", () => {
    let wrapper;
    wrapper = shallow(<Chart />);
    expect(wrapper).toMatchSnapshot();
  });
});
