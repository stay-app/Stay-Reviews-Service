import React from 'react';
import Review from '../client/components/Review.jsx';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme'
Enzyme.configure({ adapter: new Adapter() });



describe('Addition', () => {
  test('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });
});

describe('Review', () => {
  const reviewData={
    name:"jinjing",
    review_data:"3/14/19",
    comments:"it is good"
  }

  const wrapper = shallow(<Review data={reviewData}/>)
  test('check the prop',() => {
    expect(
      wrapper.containsMatchingElement(
        <div>jinjing</div>
      )
    ).toBe(true)
  })
})

// describte('Review component', () => {
//   it('starts with a cou'), () => {
//     const wrapper = sh
//   }
// })



