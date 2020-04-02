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
 
  return (
    <div>
      { items.map(item => (
        <div key={item.id} class='item'>
          { item.body }
        </div>
      )) }
    </div>
  )
}

dataFunction (data) 
  {
    return 10*data;
  }

export default List