import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

//mock api
const handlers = [
  http.get("http://localhost:3000/random", () => {
    return HttpResponse.json({
      content: "test content",
      author: "test author",
    });
  }),
];

const server = setupServer(...handlers);

server.listen();

test("should display new quote and author text on the screen when new quote button is pressed", async () => {
  const user = userEvent.setup();
  render(<App />);

  const button = screen.getByRole("button", { name: /new quote/i });
  await user.click(button);

  screen.getByText(/test content/i);
  screen.getByText(/test author/i);
});
