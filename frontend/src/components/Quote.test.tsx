import { test, vi, expect, beforeEach } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen, cleanup } from "@testing-library/react";
import Quote from "./Quote";

beforeEach(() => {
  cleanup();
});

test("quote should appear on page", () => {
  render(
    <Quote
      quote={{ content: "hi there", author: "sue" }}
      newQuoteOnClick={() => {}}
      changePageOnClick={() => {}}
    />
  );

  screen.getByText("hi there");
  screen.getByText(/sue/);
});

test("should call newQuoteOnClick function, when new quote button is clicked", async () => {
  const spy = vi.fn();
  const user = userEvent.setup();
  render(
    <Quote
      quote={{ content: "", author: "" }}
      newQuoteOnClick={spy}
      changePageOnClick={() => {}}
    />
  );

  const button = screen.getByRole("button", { name: /new quote/i });
  await user.click(button);

  expect(spy).toHaveBeenCalled();
});

test("should call changePageOnClick function, when add quote button is clicked", async () => {
  const spy = vi.fn();
  const user = userEvent.setup();
  render(
    <Quote
      newQuoteOnClick={() => {}}
      changePageOnClick={spy}
      quote={{ content: "", author: "" }}
    ></Quote>
  );

  const button = screen.getByRole("button", { name: /add quote/i });
  await user.click(button);

  expect(spy).toHaveBeenCalled();
});
