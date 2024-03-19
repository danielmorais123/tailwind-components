import DialogExem from "../dialog/Dialog";
import FlyoutMenu from "../menu/FlyoutMenu";

export default function Nav() {
  return (
    <div className="flex justify-between items-center px-8 w-full">
      <img
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt=""
        className="h-14 w-14"
      />
      <div className="flex items-center gap-10">
        <a href="#" className="font-semibold text-sm leading-6">
          Product
        </a>
        <a href="#" className="font-semibold text-sm leading-6">
          Features
        </a>
        <a href="#" className="font-semibold text-sm leading-6">
          Marketplace
        </a>
        <DialogExem />
        <FlyoutMenu />
      </div>
      <div>
        <a className="bg-[#4e46e5] hover:opacity-85 transition text-white text-sm px-6 cursor-pointer py-2 rounded-[4px]">
          Log In{" "}
        </a>
      </div>
    </div>
  );
}
