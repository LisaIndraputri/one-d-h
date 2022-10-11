import React from 'react';
import { shallow } from 'enzyme';
import Card from '../../components/Card';
describe("MyComponent", () => {
  it("should render my component", () => {
    const data = {
      title: 'test',
      price: {}
    }
    const wrapper = shallow(
      <Card 
        data={data}
      />
    );
  });
});