import { useEffect, useState } from "react";
import { buttonSubmit } from "../components/general/IndividualComponents/Buttons";

type ActiveDevicesProps = {
DeviceType: string
Location: string
LastUse: string
DeviceState: string
};

export function ActiveDevices({
DeviceType,
Location,
LastUse,
DeviceState
}: ActiveDevicesProps) {
  return (
    <div>
      <div className="py-3.5 border-b-[0.67px] border-zinc-300 inline-flex justify-start items-center gap-24">
          <div className="inline-flex flex-col justify-start items-start gap-[5px]">
              <div className="self-stretch justify-start text-black text-base font-medium ">
                {DeviceType}
              </div>
              <div className="w-72 justify-start text-black/20 text-xs font-medium ">
                {Location} · {LastUse}
              </div>
          </div>
          <div className="min-w-[90px] mx-auto">
            <div
              className={`px-2.5 py-[5px]
                flex items-center justify-center
                rounded-[52px] outline outline-[0.67px] outline-offset-[-0.67px]
                ${
                  DeviceState === "Current"
                    ? "outline-emerald-600 text-emerald-600"
                    : "outline-red-600 text-red-600"
                }`}
            >
              <span className="text-[10px] font-bold uppercase">
                {DeviceState}
              </span>
            </div>
          </div>
      </div>   
    </div>
  );
}

const DashboardSettings = () => {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [originalTwoFactorEnabled, setOriginalTwoFactorEnabled] = useState(false);

  useEffect(() => {
    const load2FA = async () => {
      const enabled = true; // value from DB

      setTwoFactorEnabled(enabled);
      setOriginalTwoFactorEnabled(enabled);
    };

    load2FA();
  }, []);

  const hasChanges =
    twoFactorEnabled !== originalTwoFactorEnabled;

  //LOAD THE USER 2FA THEN SET IT
  return (
    <div className="flex min-h-screen min-w-screen bg-navy text-white">
          {/* WidgetStart */}
      <div className="flex mx-auto ">
          <div className="mx-auto max-w-7xl px-6 py-6">       
    
            <div className="mx-auto mt-8 max-w-[550px] rounded-[20px] bg-white/95 p-8 shadow-[0_5px_10px_rgba(0,0,0,0.6)] text-slate-900 backdrop-blur-xl sm:p-10">
            {/* Title */}
            <section className="mt-2">
              <h1 className="mt-4 max-w-4xl text-2xl font-bold leading-tight text-navy ">
                Two-Factor Authentication
              </h1>
              <p className="mt-2 mb-5 max-w-2xl text-navy text-slate-800 font-semibold text-lg">
                Add a second layer of security to your account.
              </p>

              <div className="flex item-center justify-center gap-40">
                <div>
                  <p className="mt-2 max-w-2xl text-navy text-slate-800 font-semibold text-lg">
                    Enable
                  </p>    
                  <p className="mb-2 max-w-2xl text-navy text-slate-800 font-semibold text-sm">
                    Use an authenticator app or SMS code on sign-in.
                  </p>  
                </div>
                <div className="my-auto">                                                  
                  <button
                    onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
                    className={`
                      relative w-16 h-8 rounded-full transition-colors duration-200
                      ${twoFactorEnabled ? "bg-navy" : "bg-gray-200"}
                    `}
                  >
                    <div
                      className={`
                        absolute top-1 h-6 w-6 rounded-full bg-white shadow-md
                        transition-all duration-200
                        ${twoFactorEnabled ? "left-[36px]" : "left-[4px]"}
                      `}
                    />
                  </button>
                </div>
              </div>
              
            <button
              disabled={!hasChanges}
              className={`${buttonSubmit} mt-2 py-4`}
              onClick={() => setOriginalTwoFactorEnabled(twoFactorEnabled)}
            >
              Save Changes
            </button>                     
            </section>          
          
          </div>
          </div>
  

  {/* Active Sessions */}

  <div className="flex-1 mx-auto max-w-7xl px-6 py-6">       
    
            <div className="mx-auto mt-8 max-w-[550px] rounded-[20px] bg-white/95 p-8 shadow-[0_5px_10px_rgba(0,0,0,0.6)] text-slate-900 backdrop-blur-xl sm:p-10">
            {/* Title */}
            <section className="mt-2">
              <h1 className="mt-4 max-w-4xl text-2xl font-bold leading-tight text-navy ">
                Active Sessions
              </h1>
              <p className="mt-2 mb-5 max-w-2xl text-navy text-slate-800 font-semibold text-lg">
                Devices currently signed in to your account.
              </p>

              <ActiveDevices 
                DeviceType="Windows PC"
                Location = "Toronto, ON"
                LastUse = "Now"
                DeviceState = "Current"
              />

              <ActiveDevices 
                DeviceType="iPhone 15"
                Location = "Toronto, ON"
                LastUse = "2h ago"
                DeviceState = "Signed Out"
              />              
            </section>          
          
          </div>
          </div>
      </div>
  </div>
  );
};

export default DashboardSettings;
