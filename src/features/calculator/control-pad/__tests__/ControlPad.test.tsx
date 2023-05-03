import renderer from "react-test-renderer"
import "@testing-library/jest-dom"
import configureStore from "redux-mock-store"
import { Provider } from "react-redux"
import ControlPad from "../ControlPad"

const mockStore = configureStore([])

describe("Control Pad", () => {
  let store
  let component
  const initialState = {
    currentValue: 0,
    previousValue: 0,
    operator: "",
  }

  const setup = () => {
    store = mockStore({
      calculator: { calculator: initialState },
    })
    component = renderer.create(
      <Provider store={store}>
        <ControlPad />
      </Provider>,
    )
  }

  beforeEach(() => {
    setup()
  })

  it("should match snapshot", () => {
    // arrange
    // act
    // assert
    expect(component.toJSON()).toMatchSnapshot()
  })
})
