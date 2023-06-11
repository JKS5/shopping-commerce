type ChangeUiPicProps = {
  onClick: () => void;
  slidekey: number;
  currentIndex: number;
  previousIndex: number;
};

export default function ChangeUiPic({
  onClick,
  slidekey,
  currentIndex,
  previousIndex,
}: ChangeUiPicProps) {
  const isActive = currentIndex === slidekey;
  const isPreviouslyClicked = previousIndex === slidekey;

  return (
    <div className="">
      <div
        onClick={onClick}
        className={`inline-flex text-6xl ${
          isActive
            ? "bg-red-600 animate-width-color-transition w-12 h-1 rounded-md cursor-pointer"
            : isPreviouslyClicked
            ? "bg-gray-500 animate-width-color-transition-reverse w-4 h-1 rounded-md cursor-pointer"
            : "bg-gray-500 w-4 h-1 rounded-md cursor-pointer"
        }`}
      ></div>
    </div>
  );
}
