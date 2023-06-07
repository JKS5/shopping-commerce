type ChangeUiPicProps = {
  onClick: () => void;
};
// interface ChangeUiPicProps2 {
//   onClick:()=>void;
// }

export default function ChangeUiPic({ onClick }: ChangeUiPicProps) {
  return (
    <div
      className="inline-block text-2xl bg-black w-10 h-1 rounded-md cursor-pointer"
      onClick={onClick}
    ></div>
  );
}
