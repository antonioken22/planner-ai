import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <SignIn
      appearance={{
        elements: {
          headerTitle: "text-maroon-800",
          formFieldInput: "focus:ring-maroon-800 focus:border-maroon-800",
          formButtonPrimary: "bg-maroon-800 hover:bg-maroon-900",
          footerActionLink: "text-maroon-800 hover:text-maroon-900",
          formFieldAction: "text-maroon-800 hover:text-maroon-900",
          headerBackLink: "text-maroon-800 hover:text-maroon-900",
          headerBackIcon: "text-maroon-800 hover:text-maroon-900",
          identityPreviewEditButtonIcon:
            "text-maroon-800 hover:text-maroon-900",
        },
      }}
    />
  );
}
