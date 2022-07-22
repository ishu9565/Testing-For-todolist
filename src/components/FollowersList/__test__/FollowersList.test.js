import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from '../FollowersList';

const MockFollowersList=()=>{
    return (
        <BrowserRouter>
        <FollowersList/>
        </BrowserRouter>
    )

}
describe("FollowersList", ()=>{

//   beforeEach(() =>{
//     console.log("Running before each test")
//   })

//   beforeAll(() =>{
//     console.log("Running Once before each test")
//   })

//   afterEach(() =>{
//     console.log("Running after each test")
//   })
  
//   afterAll(() =>{
//     console.log("Running Once after All test")
//   })



test('Should render follower items', async () => {
  render(<MockFollowersList />);
  const followerdivElement = await screen.findByTestId("follower-item-0");
  // screen.debug()
  expect(followerdivElement).toBeInTheDocument();
});
// test('Should render multiple follower items', async () => {
//     render(<MockFollowersList title="My Header" />);
//     const followerdivElements = await screen.findAllByTestId(/follower-item/i);
//     expect(followerdivElements.length).toBe(5);
//   });
})