import {
  ArrowLeftStartOnRectangleIcon,
  Cog6ToothIcon,
  CreditCardIcon,
  UserIcon,
} from "@heroicons/react/16/solid";
import React from "react";

const Profile: React.FC = () => {
  const buttons = [
    { id: 1, title: "Account Settings", icon: UserIcon },
    { id: 2, title: "Privacy Settings", icon: Cog6ToothIcon },
    { id: 3, title: "Payment Methods", icon: CreditCardIcon },
    { id: 4, title: "Logout", icon: ArrowLeftStartOnRectangleIcon },
  ];
  return (
    <div className="xl:w-[30%] ml-14 w-full flex flex-col xl:bg-[#fbfccf] bg-white rounded-r-2xl border-1 border-[#e5e5e5]/70 p-8">
      <div className="w-full flex flex-col items-center justify-center gap-3">
        <div className="rounded-full bg-[#c5edfd] h-32.5 w-32.5 flex items-center justify-center">
          <img
            src="https://res.cloudinary.com/dhzekqgvu/image/upload/v1750784220/user_bg0675.png"
            alt="user"
            className="w-[70%]"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="text-2xl font-semibold text-primary">Fuad</span>
          <span className="text-sm text-primary">
            fuad.beybutov099@gmail.com
          </span>
        </div>
        <div className="w-full flex items-center justify-around mt-6">
          <div className="flex flex-col items-center justify-center gap-1">
            <span className="text-sm text-primary">Total Balance</span>
            <span className="text-2xl font-semibold text-primary">
              $10, 654, 23
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <span className="text-sm text-primary">Account Status</span>
            <span className="text-2xl font-semibold text-green-500">
              Active
            </span>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 mt-5">
          {buttons.map(({ id, title, icon: Icon }) => (
            <div
              key={id}
              className="w-full mx-auto bg-[#f0f0f0] rounded-lg py-5 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Icon className="w-[22px] h-[22px] text-primary" />
              <span className="text-primary font-semibold">{title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
