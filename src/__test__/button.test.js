import React from 'react';
import ReactDom from 'react-dom';
import Button from './button';
import {render,cleanup} from '@testing-library/react';

afterEach (cleanup);

it("render without crashing",()=>{
    const div = document.createElement("div");
    ReactDom.render=(<Button></Button>,div)
}
)

it("renders button correctly",() => {
 const {getByTestId} = render(<Button label="click me"></Button>)
 expect (getByTestId('button')).toHaveTextContent("click me")
}
)

it("renders button correctly",() => {
    const {getByTestId} = render(<Button label="save"></Button>)
    expect (getByTestId('button')).toHaveTextContent("save")
   }
   )