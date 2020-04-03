import React from 'react';
import { shallow } from 'enzyme';
import List from '../component/List';
import Paragraph from '../component/Paragraph';
import renderer from 'react-test-renderer';


describe("List", () => {
  it("should render my List", () => {
    const wrapper = shallow(<List />);
  });
});

describe('List', () => {
  it('should render `This list is empty` inside a Paragraph component if items is an empty array', () => {
    const wrapper = shallow(<List items={[]} />)
    const paragraph = wrapper.find(Paragraph)
    expect(paragraph.props().children).toEqual('This list is empty')
  })
  
   describe('the greeting function properly', () => {
    it('should Test the function',()=> {
    const mockFn = jest.fn(greetImplementation);
    const value = greetWorld(mockFn);
    expect(mockFn).toHaveBeenCalled();
    expect(mockFn).toHaveBeenCalledWith('world');
    expect(value).toBe('Hey, world!');
  });
})
 
  describe('function',()=> {
  it('should Test the function',()=> {
  const mockCallback = jest.fn(x => 42 + x);
  forEach([0, 1], mockCallback); 
  expect(mockCallback.mock.calls.length).toBe(2);
  expect(mockCallback.mock.calls[0][0]).toBe(0);
  expect(mockCallback.mock.calls[1][0]).toBe(1);
  expect(mockCallback.mock.results[0].value).toBe(42);
});
});

  describe('Test Button', () => {
    it('Test click event', () => {
      const mockCallBack = jest.fn();
      const button = shallow((<Button onClick={mockCallBack}>Ok!</Button>));
      button.find('button').simulate('click');
      expect(mockCallBack.mock.calls.length).toEqual(1);
    });
  });

  it('should render a list with the body of each item inside a div', () => {
    const itemsArray = [{ id: 1, body: 'Shopping' }, { id: 2, body: 'Exercise' }, { id: 3, body: 'Cook' }]
    const wrapper = shallow(<List items={itemsArray} />)
    const items = wrapper.find('div[class="item"]')
    expect(items).toHaveLength(itemsArray.length)
    expect(items.first().text()).toEqual('Shopping')
  })
})

 describe('function',()=> {
 it (" should test function properly",()=>{
  let component = renderer.create(<List/>).getInstance();
  let tree = component.dataFunction(10);
  expect(tree).toBe(100)
}
)
});