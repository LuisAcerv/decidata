import React from "react";
import { shallow } from "enzyme";
import DetectionsTable from "../";

describe("DetectionsTable", () => {
  it("should render correctly", () => {
    let wrapper;
    wrapper = shallow(<DetectionsTable />);
    expect(wrapper).toMatchSnapshot();
  });
});
