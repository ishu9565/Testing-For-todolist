import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';
import { BrowserRouter} from "react-router-dom"

const MockTodoFooter  =({numberOfIncompleteTasks})=>{
   return (
    <BrowserRouter>
    <TodoFooter
        numberOfIncompleteTasks={numberOfIncompleteTasks}
        />
    </BrowserRouter>
   )
}

describe("TodoFooter", ()=>{
    
    test('Should render the corrent amount of incomplete tasks', () => {
        render(
          <MockTodoFooter
          numberOfIncompleteTasks={5}
          />
        );
        const ParagraphElement = screen.getByText(/5 tasks left/i);
        expect(ParagraphElement).toBeInTheDocument();
      });
      
      test('Should render "task" when the number of incomplete tasks is one', () => {
          render(
            <MockTodoFooter
            numberOfIncompleteTasks={1}
            />
          );
          const ParagraphElement = screen.getByText(/1 task left/i);
          expect(ParagraphElement).toBeInTheDocument();
        });
}
)

//   test('Should render "task" when the number of incomplete tasks is one', () => {
//     render(
//       <MockTodoFooter
//       numberOfIncompleteTasks={1}
//       />
//     );
//     const ParagraphElement = screen.getByText(/1 task left/i);
//     expect(ParagraphElement).toBeVisible()
//   });

//   test('Should render "task" when the number of incomplete tasks is one', () => {
//     render(
//       <MockTodoFooter
//       numberOfIncompleteTasks={1}
//       />
//     );
//     const ParagraphElement = screen.getByText(/1 task left/i);
//     expect(ParagraphElement).toBeTruthy()
//   });

//   test('Should render "task" when the number of incomplete tasks is one', () => {
//     render(
//       <MockTodoFooter
//       numberOfIncompleteTasks={1}
//       />
//     );
//     const ParagraphElement = screen.getByText(/1 task left/i);
//     expect(ParagraphElement).toContainHTML("p")
//   });

//   test('Should render "task" when the number of incomplete tasks is one', () => {
//     render(
//       <MockTodoFooter
//       numberOfIncompleteTasks={1}
//       />
//     );
//     const ParagraphElement = screen.getByTestId("para");
//     expect(ParagraphElement).toHaveTextContent("1 task left")
//   });

//   test('Should render "task" when the number of incomplete tasks is one', () => {
//     render(
//       <MockTodoFooter
//       numberOfIncompleteTasks={1}
//       />
//     );
//     const ParagraphElement = screen.getByTestId("para");
//     expect(ParagraphElement).not.toBeFalsy
//   });

//   test('Should render "task" when the number of incomplete tasks is one', () => {
//     render(
//       <MockTodoFooter
//       numberOfIncompleteTasks={1}
//       />
//     );
//     const ParagraphElement = screen.getByTestId("para");
//     expect(ParagraphElement.textContent  ).toBe("1 task left")
//   });