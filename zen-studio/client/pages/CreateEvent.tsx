import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, Clock, Upload, Plus } from "lucide-react";
import AppLayout from "@/components/AppLayout";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Select from "@/components/Select";
import StepIndicator from "@/components/StepIndicator";
import Checkbox from "@/components/Checkbox";

export default function CreateEvent() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    {
      number: 1,
      label: "Event information",
      isActive: currentStep === 1,
      isCompleted: currentStep > 1,
    },
    {
      number: 2,
      label: "Location and socials",
      isActive: currentStep === 2,
      isCompleted: currentStep > 2,
    },
    {
      number: 3,
      label: "Manage tickets",
      isActive: currentStep === 3,
      isCompleted: false,
    },
  ];

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      // Finish - navigate to events page
      navigate("/");
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <AppLayout>
      <div className="p-10">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-figtree text-[32px] font-black leading-[40px] text-chekpass-black-main">
            Create event
          </h1>
          <Button icon={<Plus className="w-4 h-4" />}>
            Create new event
          </Button>
        </div>

        {/* Step Indicator */}
        <div className="mb-8">
          <StepIndicator steps={steps} />
        </div>

        {/* Step Content */}
        {currentStep === 1 && <Step1 />}
        {currentStep === 2 && <Step2 />}
        {currentStep === 3 && <Step3 />}

        {/* Navigation Buttons */}
        <div className="flex flex-col items-center gap-4 mt-10">
          <div className="flex gap-6">
            {currentStep > 1 && (
              <Button variant="secondary" onClick={handlePrevious} className="w-60">
                Previous
              </Button>
            )}
            <Button onClick={handleNext} className="w-60">
              {currentStep === 3 ? "Finish" : "Next"}
            </Button>
          </div>
          <Button variant="tertiary">Save for later</Button>
        </div>
      </div>
    </AppLayout>
  );
}

function Step1() {
  return (
    <div className="space-y-8">
      <h2 className="font-figtree text-2xl font-black leading-[120%] tracking-[-0.48px] text-chekpass-black-main">
        Step 1: Event Information
      </h2>

      <div className="grid grid-cols-2 gap-10">
        {/* Upload Design */}
        <div className="row-span-2">
          <div className="flex flex-col items-center gap-6 py-6 px-0 border-2 border-dashed border-chekpass-black-main rounded bg-chekpass-black-100 h-[257px] justify-center">
            <div className="text-center space-y-6">
              <p className="font-lato text-base font-bold leading-[150%] text-chekpass-black-main">
                Upload event design
              </p>
              <Upload className="w-16 h-16 text-chekpass-black-main mx-auto" />
              <div className="space-y-4">
                <div className="flex items-center gap-1 justify-center">
                  <span className="font-lato text-base font-bold text-chekpass-black-main">
                    Drag and drop files here or
                  </span>
                  <button className="font-lato text-base font-extrabold text-chekpass-black-main underline">
                    browse
                  </button>
                </div>
                <p className="font-lato text-sm leading-[120%] text-chekpass-black-370">
                  Supported formats: JPEG, PNG. Best in 800*800px
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Event Details */}
        <div className="space-y-6">
          <Input placeholder="Event name*" />
          <Select label="Event category*" />
          <div className="relative">
            <textarea
              placeholder="Event description*"
              className="w-full px-4 py-3 border border-chekpass-black-150 rounded font-lato text-base leading-[150%] text-chekpass-black-370 placeholder:text-chekpass-black-370 outline-none min-h-[180px] resize-none"
            />
          </div>
        </div>
      </div>

      {/* Event URLs */}
      <div className="grid grid-cols-2 gap-10">
        <div className="space-y-0.5">
          <label className="block font-lato text-[10px] leading-[100%] text-chekpass-black-370 px-4 mb-1">
            Event custom URL*
          </label>
          <Input value="https://chekpass.com/" readOnly className="bg-chekpass-black-100" />
        </div>
        <div className="space-y-0.5">
          <label className="block font-lato text-[10px] leading-[100%] text-chekpass-black-370 px-4 mb-1">
            Event custom URL*
          </label>
          <Input value="https://checkpass.com/" readOnly className="bg-chekpass-black-100" />
        </div>
      </div>

      {/* Date & Time */}
      <div className="space-y-6">
        <h3 className="font-figtree text-xl font-black leading-[100%] tracking-[-0.4px] text-chekpass-black-main">
          Date & time
        </h3>
        <div className="grid grid-cols-2 gap-6">
          <Input placeholder="Event start date*" icon={<Calendar className="w-6 h-6 text-chekpass-black-250" />} />
          <Input placeholder="Event start time*" icon={<Clock className="w-6 h-6 text-chekpass-black-250" />} />
          <Input placeholder="Event closing date" icon={<Calendar className="w-6 h-6 text-chekpass-black-250" />} />
          <Input placeholder="Event closing time" icon={<Clock className="w-6 h-6 text-chekpass-black-250" />} />
          <Input placeholder="Check-in start date*" icon={<Calendar className="w-6 h-6 text-chekpass-black-250" />} />
          <Input placeholder="Check-in start time*" icon={<Clock className="w-6 h-6 text-chekpass-black-250" />} />
          <Input placeholder="Check-in end date" icon={<Calendar className="w-6 h-6 text-chekpass-black-250" />} />
          <Input placeholder="Check-in end time" icon={<Clock className="w-6 h-6 text-chekpass-black-250" />} />
        </div>
      </div>
    </div>
  );
}

function Step2() {
  return (
    <div className="space-y-8">
      <h2 className="font-figtree text-2xl font-black leading-[120%] tracking-[-0.48px] text-chekpass-black-main">
        Step 2: Event location and social
      </h2>

      {/* Location */}
      <div className="grid grid-cols-2 gap-6">
        <Select label="Country*" />
        <Input placeholder="Address*" icon={<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none"><path d="M12 5.625C11.1842 5.625 10.3866 5.86693 9.70827 6.32019C9.02992 6.77345 8.50121 7.41769 8.189 8.17143C7.87679 8.92518 7.7951 9.75458 7.95426 10.5547C8.11343 11.3549 8.50629 12.0899 9.08318 12.6668C9.66008 13.2437 10.3951 13.6366 11.1953 13.7957C11.9954 13.9549 12.8248 13.8732 13.5786 13.561C14.3323 13.2488 14.9766 12.7201 15.4298 12.0417C15.8831 11.3634 16.125 10.5658 16.125 9.75C16.1238 8.65636 15.6888 7.60787 14.9154 6.83455C14.1421 6.06124 13.0936 5.62624 12 5.625ZM12 11.625C11.6292 11.625 11.2666 11.515 10.9583 11.309C10.65 11.103 10.4096 10.8101 10.2677 10.4675C10.1258 10.1249 10.0887 9.74792 10.161 9.3842C10.2334 9.02049 10.412 8.6864 10.6742 8.42417C10.9364 8.16195 11.2705 7.98337 11.6342 7.91103C11.9979 7.83868 12.3749 7.87581 12.7175 8.01772C13.0601 8.15964 13.353 8.39996 13.559 8.70831C13.765 9.01665 13.875 9.37916 13.875 9.75C13.875 10.2473 13.6775 10.7242 13.3258 11.0758C12.9742 11.4275 12.4973 11.625 12 11.625Z" fill="#9B9B9B"/></svg>} />
        <Select label="State*" />
        <Input placeholder="Directions" />
      </div>

      {/* Social */}
      <div className="space-y-6">
        <h3 className="font-figtree text-xl font-black leading-[100%] tracking-[-0.4px] text-chekpass-black-main">
          Social
        </h3>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-0.5">
            <label className="block font-lato text-[10px] leading-[100%] text-chekpass-black-370 px-4 mb-1">
              Instagram handle
            </label>
            <Input value="https://" className="bg-white" />
          </div>
          <div className="space-y-0.5">
            <label className="block font-lato text-[10px] leading-[100%] text-chekpass-black-370 px-4 mb-1">
              Twitter handle
            </label>
            <Input value="https://" className="bg-white" />
          </div>
          <div className="space-y-0.5">
            <label className="block font-lato text-[10px] leading-[100%] text-chekpass-black-370 px-4 mb-1">
              Facebook handle
            </label>
            <Input value="https://" className="bg-white" />
          </div>
          <div className="space-y-0.5">
            <label className="block font-lato text-[10px] leading-[100%] text-chekpass-black-370 px-4 mb-1">
              Tiktok handle
            </label>
            <Input value="https://" className="bg-white" />
          </div>
        </div>
        <Checkbox label="Save as default social details" />
      </div>
    </div>
  );
}

function Step3() {
  const tickets = [
    { name: "Regular", price: 5000, deadline: "Mar 14, 2024 • 6:00PM", qty: "Unlimited", buyLimit: 5, feeBy: "By me" },
    { name: "VIP", price: 5000, deadline: "Mar 14, 2024 • 6:00PM", qty: 60, buyLimit: 4, feeBy: "By guest" },
    { name: "VVIP", price: 5000, deadline: "Mar 14, 2024 • 6:00PM", qty: "Unlimited", buyLimit: 4, feeBy: "By me" },
    { name: "Table for 4", price: 0, deadline: "Mar 14, 2024 • 6:00PM", qty: "Unlimited", buyLimit: 5, feeBy: "By me" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="font-figtree text-2xl font-black leading-[120%] tracking-[-0.48px] text-chekpass-black-main">
          Step 3: Manage tickets
        </h2>
        <Button icon={<Plus className="w-4 h-4" />}>
          Add ticket
        </Button>
      </div>

      {/* Search and View Toggle */}
      <div className="flex items-center gap-6">
        <div className="flex-1 max-w-[363px]">
          <Input
            placeholder="Search"
            icon={<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none"><path d="M21.7953 20.2034L17.3431 15.7494C18.678 14.0098 19.3013 11.8276 19.0864 9.64545C18.8715 7.46328 17.8347 5.44454 16.1861 3.99875C14.5376 2.55295 12.4008 1.78837 10.2092 1.86009C8.01768 1.93182 5.93546 2.83448 4.38497 4.38497C2.83448 5.93546 1.93182 8.01768 1.86009 10.2092C1.78837 12.4008 2.55295 14.5376 3.99875 16.1861C5.44454 17.8347 7.46328 18.8715 9.64545 19.0864C11.8276 19.3013 14.0098 18.678 15.7494 17.3431L20.2053 21.8C20.31 21.9047 20.4342 21.9877 20.5709 22.0443C20.7077 22.1009 20.8542 22.1301 21.0022 22.1301C21.1502 22.1301 21.2967 22.1009 21.4335 22.0443C21.5702 21.9877 21.6944 21.9047 21.7991 21.8C21.9037 21.6954 21.9867 21.5711 22.0434 21.4344C22.1 21.2977 22.1291 21.1511 22.1291 21.0031C22.1291 20.8551 22.1 20.7086 22.0434 20.5719C21.9867 20.4351 21.9037 20.3109 21.7991 20.2063L21.7953 20.2034Z" fill="#9B9B9B"/></svg>}
          />
        </div>
        <div className="flex items-center -ml-px">
          <button className="w-12 h-12 flex items-center justify-center border border-chekpass-black-150 rounded-l bg-chekpass-black-200">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none"><path d="M7.125 6C7.125 5.70163 7.24353 5.41548 7.45451 5.2045C7.66548 4.99353 7.95163 4.875 8.25 4.875H20.25C20.5484 4.875 20.8345 4.99353 21.0455 5.2045C21.2565 5.41548 21.375 5.70163 21.375 6C21.375 6.29837 21.2565 6.58452 21.0455 6.7955C20.8345 7.00647 20.5484 7.125 20.25 7.125H8.25C7.95163 7.125 7.66548 7.00647 7.45451 6.7955C7.24353 6.58452 7.125 6.29837 7.125 6Z" fill="#1E1E1E"/></svg>
          </button>
          <button className="w-12 h-12 flex items-center justify-center border border-l-0 border-chekpass-black-150 rounded-r bg-white">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none"><path d="M9.75 3.75H5.25C4.85218 3.75 4.47064 3.90804 4.18934 4.18934C3.90804 4.47064 3.75 4.85218 3.75 5.25V9.75C3.75 10.1478 3.90804 10.5294 4.18934 10.8107C4.47064 11.092 4.85218 11.25 5.25 11.25H9.75C10.1478 11.25 10.5294 11.092 10.8107 10.8107C11.092 10.5294 11.25 10.1478 11.25 9.75V5.25C11.25 4.85218 11.092 4.47064 10.8107 4.18934C10.5294 3.90804 10.1478 3.75 9.75 3.75Z" fill="#787878"/></svg>
          </button>
        </div>
      </div>

      {/* Tickets Table */}
      <div className="border border-chekpass-black-150 rounded-lg overflow-hidden">
        {/* Table Header */}
        <div className="bg-chekpass-black-100 px-6 py-5 border-b border-chekpass-black-150">
          <div className="grid grid-cols-[2fr,1fr,2fr,1fr,1fr,1fr] gap-4 font-lato text-xs font-black leading-[120%] text-chekpass-black-main">
            <div>NAME</div>
            <div>PRICE (NGN)</div>
            <div>DEADLINE</div>
            <div>QTY</div>
            <div>BUY LIMIT</div>
            <div>FEE BY</div>
          </div>
        </div>

        {/* Table Rows */}
        {tickets.map((ticket, index) => (
          <div
            key={index}
            className="px-6 py-6 border-b border-chekpass-black-150 last:border-b-0 bg-white hover:bg-chekpass-black-100/50 transition-colors"
          >
            <div className="grid grid-cols-[2fr,1fr,2fr,1fr,1fr,1fr] gap-4 items-center font-lato text-base leading-[150%] text-chekpass-black-main">
              <div className="truncate">{ticket.name}</div>
              <div>{ticket.price}</div>
              <div className="flex items-center gap-1">
                <span>{ticket.deadline.split(" • ")[0]}</span>
                <span className="w-1 h-1 rounded-full bg-chekpass-black-main"></span>
                <span className="text-chekpass-black-370">{ticket.deadline.split(" • ")[1]}</span>
              </div>
              <div>{ticket.qty}</div>
              <div>{ticket.buyLimit}</div>
              <div className="flex items-center justify-between">
                <span>{ticket.feeBy}</span>
                <button className="p-1">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <path d="M14.625 12C14.625 12.5192 14.471 13.0267 14.1826 13.4584C13.8942 13.8901 13.4842 14.2265 13.0045 14.4252C12.5249 14.6239 11.9971 14.6758 11.4879 14.5746C10.9787 14.4733 10.511 14.2233 10.1438 13.8562C9.77673 13.489 9.52673 13.0213 9.42544 12.5121C9.32415 12.0029 9.37614 11.4751 9.57482 10.9955C9.7735 10.5158 10.11 10.1058 10.5416 9.81739C10.9733 9.52896 11.4808 9.375 12 9.375C12.6962 9.375 13.3639 9.65156 13.8562 10.1438C14.3484 10.6361 14.625 11.3038 14.625 12Z" fill="#1E1E1E"/>
                    <path d="M12 7.125C12.5192 7.125 13.0267 6.97105 13.4584 6.68261C13.8901 6.39417 14.2265 5.9842 14.4252 5.50455C14.6239 5.02489 14.6758 4.49709 14.5746 3.98789C14.4733 3.47869 14.2233 3.01096 13.8562 2.64385C13.489 2.27673 13.0213 2.02673 12.5121 1.92544C12.0029 1.82415 11.4751 1.87614 10.9955 2.07482C10.5158 2.2735 10.1058 2.60995 9.81739 3.04163C9.52895 3.47331 9.375 3.98083 9.375 4.5C9.375 5.19619 9.65156 5.86387 10.1438 6.35616C10.6361 6.84844 11.3038 7.125 12 7.125Z" fill="#1E1E1E"/>
                    <path d="M12 16.875C11.4808 16.875 10.9733 17.029 10.5416 17.3174C10.11 17.6058 9.7735 18.0158 9.57482 18.4955C9.37614 18.9751 9.32415 19.5029 9.42544 20.0121C9.52673 20.5213 9.77673 20.989 10.1438 21.3562C10.511 21.7233 10.9787 21.9733 11.4879 22.0746C11.9971 22.1758 12.5249 22.1239 13.0045 21.9252C13.4842 21.7265 13.8942 21.3901 14.1826 20.9584C14.471 20.5267 14.625 20.0192 14.625 19.5C14.625 18.8038 14.3484 18.1361 13.8562 17.6438C13.3639 17.1516 12.6962 16.875 12 16.875Z" fill="#1E1E1E"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-end gap-8 text-sm">
        <div className="flex items-center gap-2">
          <span className="text-chekpass-black-250">Items per page:</span>
          <select className="border-b border-black bg-transparent outline-none text-chekpass-black-main">
            <option>25</option>
            <option>50</option>
            <option>100</option>
          </select>
        </div>
        <span className="text-chekpass-black-250">1 - 5 out of 20</span>
        <div className="flex gap-2">
          <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-chekpass-black-100 disabled:opacity-30" disabled>
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none"><path d="M6.62685 8.70587C6.23632 8.31535 6.23632 7.68218 6.62685 7.29166L11.9602 1.95832C12.3507 1.5678 12.9839 1.5678 13.3744 1.95832C13.7649 2.34885 13.7649 2.98201 13.3744 3.37254L8.74817 7.99877L13.3744 12.625C13.7649 13.0155 13.7649 13.6487 13.3744 14.0392C12.9839 14.4297 12.3507 14.4297 11.9602 14.0392L6.62685 8.70587Z" fill="#E0E0E0"/></svg>
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-chekpass-black-100">
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none"><path d="M9.37506 7.29423C9.76559 7.68476 9.76559 8.31792 9.37506 8.70845L4.04173 14.0418C3.6512 14.4323 3.01804 14.4323 2.62752 14.0418C2.23699 13.6512 2.23699 13.0181 2.62752 12.6276L7.25375 8.00134L2.62752 3.37511C2.23699 2.98458 2.23699 2.35142 2.62752 1.96089C3.01804 1.57037 3.6512 1.57037 4.04173 1.96089L9.37506 7.29423Z" fill="#E0E0E0"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
