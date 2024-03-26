import { render } from "@testing-library/react";

import NavigationBar from "./NavigationBar";

import {
  navigationActions,
} from "./interfaces/NavigationAction";

describe("NavigationBar", () => {
  it("renders labels.", () => {
    const actions = navigationActions.map(
      ({ label, icon }) => {
        return {
          label, icon, testId: icon.name,
        };
      }
    );

    const { getByText } = render(<NavigationBar />);

    actions.forEach(({ label, icon, testId }) => {
      expect(getByText(label)).toBe(true);
    });
  });
});