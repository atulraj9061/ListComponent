import React from 'react'
import Paragraph from '../component/Paragraph'


const List = ({ items }) => {
  if (items.length === 0)  {
    return <Paragraph>This list is empty</Paragraph>
  }

  function greet(name) {
    return `Hello ${name}!`;
  }
  
  function greetWorld(greettingFn) {
    return greetingFn('world');
  }
  
  greetWorld(greet);

  function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
      callback(items[index]);
    }
  }

  function Button ({mockCallBack}){
  return mockCallBack();
  }

  return (
    <div>
      { items.map(item => (
        <div key={item.id} class='item'>
          { item.body }
        </div>
      )) }

   <Button onClick={mockCallBack}>Ok!</Button>

    </div>
  )
}

dataFunction (data) 
  {
    return 10*data;
  }

export default List