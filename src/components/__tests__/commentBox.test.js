import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";
import Root from "Root";

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapper.unmount();
});

it("has a texta area and a button", () => {
  expect(wrapper.find("textarea").length).toEqual(1);
  expect(wrapper.find("button").length).toEqual(2);
});

describe("The text area", () => {
  beforeEach(() => {
    wrapper.find("textarea").simulate("change", {
      target: { value: "new comment" }
    });
    wrapper.update();
  });

  it("has a text area that users can type in it", () => {
    expect(wrapper.find("textarea").prop("value")).toEqual("new comment");
  });

  it("submits form and checks if textArea has no text", () => {
    wrapper.find("textarea").simulate("submit");
    expect(wrapper.find("textarea").prop("value")).toEqual("");
  });
});
