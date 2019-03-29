import React from "react";
import { mount } from "enzyme";

import CommentList from "components/CommentList";
import Root from "Root";

let wrap;

beforeEach(() => {

  const initialState = {
    comment: ['Comment 1', 'Comment 2'],
  }

  wrap = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it("creates one LI per comment", () => {
  expect(wrap.find('li').length).toEqual(2)
});

it("checks the text for each comment", () => {
  expect(wrap.render().text()).toContain('Comment 1')
  expect(wrap.render().text()).toContain('Comment 2')
})
