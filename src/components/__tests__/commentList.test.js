import React from "react";
import { mount } from "enzyme";

import CommentList from "src/components/CommentList";
import Root from "Root";

let wrap;

beforeEach(() => {
  wrap = mount(
    <Root>
      <CommentList />
    </Root>
  );
});

it("creates one LI per comment", () => {});
