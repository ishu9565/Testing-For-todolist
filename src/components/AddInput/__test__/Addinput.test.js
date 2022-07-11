import { render, screen,fireEvent } from '@testing-library/react';
import Addinput from '../Addinput';

const mockedSetTodo =jest.fn()
describe("Addinput", ()=>{
test('Should remeber the element', () => {
  render(
     <Addinput
     todos={[]}
           setTodos={mockedSetTodo}     
     />  
    );
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  expect(inputElement).toBeInTheDocument();
});

test('Should be able to type input', () => {
    render(
       <Addinput
       todos={[]}
             setTodos={mockedSetTodo}     
       />  
      );
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputElement,{ target: { value: "Go grocery Shopping"}})
    expect(inputElement.value).toBe("Go grocery Shopping");
  });

  test('Should have empty input when add button is clicked', () => {
    render(
       <Addinput
       todos={[]}
             setTodos={mockedSetTodo}     
       />  
      );
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement =screen.getByRole("button",{name: /Add/i})
    fireEvent.change(inputElement,{ target: { value: "Go grocery Shopping"}})
    fireEvent.click(buttonElement)
    expect(inputElement.value).toBe("");
  });
})


