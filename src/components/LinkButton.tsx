import { Button } from "@mui/material";

import Link from "next/link";

const LinkButton = ({ icon, href, text }: { icon: any, href: string, text: string }) => {
  return (
    <Button startIcon={icon} href={href} LinkComponent={Link}>
      {text}
    </Button>
  );
};

export default LinkButton;