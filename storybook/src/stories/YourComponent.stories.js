// YourComponent.stories.js

import React from "react";

import YourComponent from "./YourComponent";

//👇 This default export determines where your story goes in the story list
export default {
  title: "YourComponent",
  component: YourComponent,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <YourComponent {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /*👇 The args you need here will depend on your component */
};
