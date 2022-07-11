// import { toBeInTheDocument } from '@testing-library/jest-dom/dist/matchers';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo';

const MockTodo = () =>{
    return (
        <BrowserRouter>
        <Todo />
        </BrowserRouter>
    )
}

const addTask =(tasks)=>{
    const inputElement =screen.getByPlaceholderText(/Add a new task here.../i)
    const buttonElement =screen.getByRole("button",{name: /Add/i});
    tasks.forEach(task =>{fireEvent.change(inputElement, {target: { value: "Go Grocery Shopping"}})
    fireEvent.click(buttonElement)})
}
describe("Todo", ()=>{
test('Should render same text passes into the title prop', async() => {
  render(<MockTodo />);
 addTask(["Go Grocery Shopping"])
  const divElement =screen.getByText(/Go Grocery Shopping/i)
  expect(divElement).toBeInTheDocument()
});


test('Should render Multiple elements', async() => {
    render(<MockTodo />);
    addTask(["Go Grocery Shopping","pet my cat","Wash my hands"])
    const divElements =screen.getAllByTestId("task-container")
    // expect(divElements.length).toBe(3)
    expect(divElements.length).toBe(3)
  });

  test('Test should not have completed class when intially rendered', async() => {
    render(<MockTodo />);
    addTask(["Go Grocery Shopping"])
    const divElement =screen.getByText(/Go Grocery Shopping/i)
    // expect(divElements.length).toBe(3)
    expect(divElement).not.toHaveClass("todo-item-active")
  });

  test('Test should have completed class when intially rendered', async() => {
    render(<MockTodo />);
    addTask(["Go Grocery Shopping"])
    const divElement =screen.getByText(/Go Grocery Shopping/i)
    fireEvent.click(divElement)
    // expect(divElements.length).toBe(3)
    expect(divElement).toHaveClass("todo-item-active")
  });
})