import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe("Header", ()=>{
test('Should render same text passes into the title prop', () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});
})
test('Should render same text passes into the title group', () => {
    render(<Header title="My Header" />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument();
  });

  test('Should render same text passes into the title group', () => {
    render(<Header title="My Header" />);
    const headingElement = screen.getByRole("heading",{ name: "My Header"});
    expect(headingElement).toBeInTheDocument();
  });

//   test('Should render same text passes into the title group', () => {
//     render(<Header title="My Header" />);
//     const headingElement = screen.getByTitle("Header");
//     expect(headingElement).toBeInTheDocument();
//   });

  test('Should render same text passes into the title group', () => {
    render(<Header title="My Header" />);
    const headingElement = screen.getByTestId("header-1");
    expect(headingElement).toBeInTheDocument();
  });

  test('Should render same text passes into the title group',async () => {
    render(<Header title="My Header" />);
    const headingElement =await screen.findByText(/my header/i);
    expect(headingElement).toBeInTheDocument();
  });
  
  test('Should render same text passes into the title group',async () => {
    render(<Header title="My Header" />);
    const headingElement = screen.queryByText(/dogs/i);
    expect(headingElement).not.toBeInTheDocument();
  });
  
  // test('Should render same text passes into the title group',async () => {
  //   render(<Header title="My Header" />);
  //   const headingElement = screen.getAllByRole("heading");
  //   expect(headingElement.length).toBe(2);
  // });