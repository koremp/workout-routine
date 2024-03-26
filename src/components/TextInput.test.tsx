import { render } from "@testing-library/react";

import TextInput from "./TextInput";

describe("TextInput", () => {
  it("renders label.", () => {
    const label = "label example";
    const { container } = render(
      <TextInput label={label} />
    );

    expect(container).toHaveTextContent(label);
  });
});
