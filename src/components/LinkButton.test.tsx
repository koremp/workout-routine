import { render } from '@testing-library/react';

import LinkButton from './LinkButton';
import { Add } from '@mui/icons-material';

describe('LinkButton', () => {
  const icon = <Add />;
  const href = "href";
  const text = "text";

  const renderLinkButton = () => {
    return (
      render(
        <LinkButton
          icon={icon}
          href={href}
          text={text}
        />
      )
    );
  };

  it('renders text.', () => {
    const { getByText } = renderLinkButton();

    expect(getByText(text).textContent).toEqual(text);
  });

  it('renders icon.', () => {
    const { getByTestId } = renderLinkButton();

    expect(getByTestId("AddIcon"));
  });

  it('has href.', () => {
    const { getByRole } = renderLinkButton();

    expect(getByRole('link', { name: text }))
      .toHaveAttribute('href', href);
  });
});