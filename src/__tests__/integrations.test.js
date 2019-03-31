import React, { Component } from "react";
import { mount } from "enzyme";
import Root from "Root";
import App from "components/App";
import moxios from "moxios";

beforeEach(() => {
  moxios.install();
  moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [{ name: "Fetched #1" }, { name: "Fetched #2" }]
  });
});

afterEach(() => {
  moxios.uninstall();
});

it("can fetch a list of comments and display then", done => {
  //Attempt to render the *entire* App
  const wrap = mount(
    <Root>
      {" "}
      <App />{" "}
    </Root>
  );

  //find the fetchComments button and click it
  wrap.find(".fetch-comments").simulate("click");

  //Expect to find a list of comments
  moxios.wait(() => {
    wrap.update();
    expect(wrap.find("li").length).toEqual(2);
    done();
    wrap.unmount()
  });
});
