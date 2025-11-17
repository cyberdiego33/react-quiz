function Header() {
  return (
    <header className="flex items-center justify-center space-x-4 my-10">
      <img className="size-10 md:size-17" src="logo512.png" alt="React logo" />
      <h1 className="cody-font text-3xl md:text-5xl text-semibold">
        The React Quiz
      </h1>
    </header>
  );
}

export default Header;
