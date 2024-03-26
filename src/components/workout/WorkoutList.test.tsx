import { render } from "@testing-library/react";

import WorkoutList from "./WorkoutList";

describe("Workout Create Routine", () => {
  it("renders ", () => {
    const { getByText } = render(<WorkoutList />);

    expect(getByText("Workout List")).not.toBeNull();
  });
});