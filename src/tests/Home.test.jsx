import Home from "../routes/Home";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";

describe("Test Home page content", () => {
  test("title text is displayed", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(screen.getByText("Ix Issue 1288")).toBeDefined();
  });

  test("other text is displayed", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(screen.getByText("Hello World")).toBeDefined();
  });
});
