import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    //* Arrange
    render(<Greeting />);
    //* Act
    //* nothing...(for now)

    //* Assert
    //* exact:true MEANS W should be a W not a w (EXACT MATCH)
    //* exact:false MEANS W is either a W or a w (IT COULD BE IN A SENTENCE)
    const helloWorldElement = screen.getByText("Hello World", {
      exact: false,
    });
    // const helloWorldElement =  screen.getByText(/hello world/i);

    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders it's good to see you if the button is NOT clicked", () => {
    //* Arrange
    render(<Greeting />);

    //* Act
    //* we don't click the button to test the text rendered

    const paragraphElement = screen.getByText("it's good to see you", {
      exact: false,
    });
    expect(paragraphElement).toBeInTheDocument();
  });

  test("render Changed if the button IS clicked", () => {
    //* Arrange
    render(<Greeting />);

    //* Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //* Assert
    const paragraphElement = screen.getByText("Changed", { exact: false });
    expect(paragraphElement).toBeInTheDocument();
  });
});
