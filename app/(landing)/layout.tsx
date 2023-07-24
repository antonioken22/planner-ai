const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main
      className="h-full overflow-auto"
      style={{
        backgroundImage: `url('/landing-page.jpg')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto max-w-screen-xl h-full w-full">{children}</div>
    </main>
  );
};

export default LandingLayout;
