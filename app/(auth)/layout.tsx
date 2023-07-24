const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main
      className="h-full flex items-center justify-center"
      style={{
        backgroundImage: `url('/user-auth.jpg')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {children}
    </main>
  );
};

export default AuthLayout;
