function MainSection({ children }) {
  return (
    <div className="flex w-full flex-col p-6 desktop:items-center desktop:justify-center">
      {children}
    </div>
  );
}

export default MainSection;
