import { ClerkProvider } from "@clerk/nextjs";

import { Toaster } from "sonner";

const PlatformLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <ClerkProvider>


        {children}

    </ClerkProvider>
  );
};

export default PlatformLayout;
