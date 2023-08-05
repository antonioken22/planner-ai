import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <SignUp
      appearance={{
        elements: {
          headerTitle: "text-maroon-800",
          formButtonPrimary: "bg-maroon-800 hover:bg-maroon-900",
          footerActionLink: "text-maroon-800 hover:text-maroon-900",
          identityPreviewEditButtonIcon:
            "text-maroon-800 hover:text-maroon-900",
        },
      }}
    />
  );
}
