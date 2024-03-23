import { render } from '@testing-library/react';

import PageContainer from '../PageContainer';

describe("PageContainer", () => {
  it("renders children.", () => {
    const text = "text example";
    const { getByText } = render(
      <PageContainer>
        {text}
      </PageContainer>
    );

    expect(getByText(text)).not.toBeNull();
  });
});
