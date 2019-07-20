import React from "react";
import { shallow } from "enzyme";
import CardHolder from "../";

describe("CardHolder", () => {
  it("should render correctly", () => {
    let wrapper;
    wrapper = shallow(<CardHolder />);
    expect(wrapper).toMatchSnapshot();
  });
});
