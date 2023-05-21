'use client';
import React , {useState , useRef} from 'react'
import NameIcon from "../public/icons/name.svg" 
import EmailIcon from "../public/icons/email.svg" 
import PhoneIcon from "../public/icons/phone.svg" 
import CompanyIcon from "../public/icons/company.svg" 
import WebDesignIcon from "../public/icons/webDesign.svg" 
import WebDevelopmentIcon from "../public/icons/webDevelopment.svg" 
import MarketingIcon from "../public/icons/marketing.svg" 
import SettingsIcon from "../public/icons/settings.svg" 
import CheckIcon from "../public/icons/check.svg" 
import StepProgressBar, { StepProgressBarRef } from '@components/stepProgressBar';
import RadioButton from '@components/radioButton';
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';



interface formAllData {

  name: string;
  email: string;
  phoneNumber: number;
  companyName: string;
  services: string;
  projectBudget: string;
}

interface findAllErrors {

  name: boolean;
  email: boolean;
  phoneNumber: boolean;
  companyName: boolean;
}


const Home: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [maxStep  , setMaxStep] = useState<number>(4);
  const [selectedOption, setSelectedOption] = useState<string>('option1');
  const [modal, setModal] = useState<boolean>(false);
  const childRef = useRef<StepProgressBarRef>(null);
  const [formData, setFormData] = useState<formAllData>({
    name: "",
    email: "",
    phoneNumber: 0,
    companyName: "",
    services: "Development",
    projectBudget: "$5.000 - $10.000",
  });
  
  const [findErrors, setFindErrors] = useState<findAllErrors>({
    name: false,
    email: false,
    phoneNumber: false,
    companyName: false,
  });
  
  const [valForm, setValForm] = useState<boolean>(true);

  const validateForm = () => {
    if(formData.name.length !== 0 && formData.email.length !== 0 && formData.companyName.length !== 0 && formData.phoneNumber.toString().length !== 0){
      setValForm(true)
      return true
    }else {
      setValForm(false)
      return false
    }
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    let validInput: boolean
    if(e.target.value.length === 0 ){
      validInput = false
    } else {
      validInput = true
    }
    setFindErrors({ ...findErrors, [e.target.name]: validInput });
  };

  const handleOptionChange = (value: string , label: string) => {
    setSelectedOption(value);
    setFormData({ ...formData, projectBudget: label});
  };

  const handleNextStep = () => {
    if(validateForm()){
      if (childRef.current) {
        childRef.current.handleNextStep();
      }
      setCurrentStep((prevStep) => prevStep + 1);
    }

  };
  const handlePreviousStep = () => {
    if (childRef.current) {
      childRef.current.handlePreviousStep();
    }
    setCurrentStep((prevStep) => prevStep - 1);
  };
  
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setModal(true)
  };



  const step1Content = (
    <div className="content1">
      <div className="mb-6">
        <h2 className="text-left font-bold text-neutral-800  text-2xl  ">
          Contact details
        </h2>
        <p className=" text_gray pt-3 pb-3 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div>
      <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-8 ">
        {/* Name */}
        <div>
          <label className="block">
            <span className="  block  font-medium  text-neutral-800 pb-2 text-lg">
              Name
            </span>
            <div className="relative flex items-center ">
              <NameIcon
                className={`absolute ml-52 pr-2 pt-1 w-7 h-7 max-sm:hidden   
                ${!valForm ? !findErrors.name  ? "text-red-500 " : "text-gray-500" : ""}`}
              />
              <input
                type="text"
                name="name"
                onChange={handleInputChange}
                value={formData.name}
                pattern="[A-Za-z]+"
                className={`mt-1 px-3 py-3 w-full sm:w-max pr-10 gray_outline_focusBlue  
                ${!valForm ? !findErrors.name ? "ring-red-500 focus:ring-red-500 placeholder-red-500 " : "" : "" } `}
                placeholder={`${!valForm ? !findErrors.name ? "Name is required " : "John Carter " : ""}`}
              />
            </div>
          </label>
        </div>
        {/* Email */}
        <div>
          <label className="block">
            <span className=" block  font-medium text-neutral-800 pb-2 text-lg">
              Email
            </span>
            <div className="relative flex items-center">
              <EmailIcon
                className={`absolute ml-52 pr-2 pt-1 w-7 h-7 max-sm:hidden   
                ${ !valForm ? !findErrors.email ? "text-red-500 " : "text-gray-500" : ""}`}
              />
              <input
                type="email"
                name="email"
                onChange={handleInputChange}
                value={formData.email}
                className={`mt-1 px-3 py-3 w-full sm:w-max pr-10 gray_outline_focusBlue  
                ${!valForm ? !findErrors.email ? "ring-red-500 focus:ring-red-500 placeholder-red-500 " : "" : "" } `}
                placeholder={`${!valForm ? !findErrors.email  ? "Email Address is required " : "Email Address " : ""}`}
              />
            </div>
          </label>
        </div>
        {/* phone */}
        <div>
          <label className="block">
            <span className=" block  font-medium text-neutral-800 pb-2 text-lg">
              Phone Number
            </span>
            <div className="relative flex items-center">
              <PhoneIcon
                className={`absolute ml-52 pr-2 pt-1 w-7 h-7 max-sm:hidden  
                 ${ !valForm ? !findErrors.phoneNumber ? "text-red-500 " : "text-gray-500" : "" }`}
              />
              <input
                type="number"
                name="phoneNumber"
                onChange={handleInputChange}
                value={formData.phoneNumber === 0 ? "" : formData.phoneNumber}
                className={`mt-1 px-3 py-3 w-full sm:w-max pr-10 gray_outline_focusBlue 
                 ${ !valForm? !findErrors.phoneNumber ? "ring-red-500 focus:ring-red-500 placeholder-red-500 " : "" : ""} `}
                placeholder={`${!valForm ? !findErrors.phoneNumber ? "Phone Number is required " : "(123) 456 - 7890" : ""}`}
              />
            </div>
          </label>
        </div>
        {/* company */}
        <div>
          <label className="block">
            <span className=" block  font-medium text-neutral-800  pb-2 text-lg">
              Company
            </span>
            <div className="relative flex items-center">
              <CompanyIcon
                className={`absolute ml-52 pr-2 pt-1 w-7 h-7 max-sm:hidden  
                ${ !valForm ? !findErrors.companyName ? "text-red-500 " : "text-gray-500" : ""}`}
              />
              <input
                type="text"
                onChange={handleInputChange}
                value={formData.companyName}
                name="companyName"
                className={`mt-1 px-3 py-3 w-full sm:w-max pr-10 gray_outline_focusBlue  
                ${ !valForm ? !findErrors.companyName ? "ring-red-500 focus:ring-red-500 placeholder-red-500 " : "" : ""} `}
                placeholder={`${ !valForm ? !findErrors.companyName ? "Company is required " : "Company Name" : ""}`}
              />
            </div>
          </label>
        </div>
      </div>
    </div>
  );

  const step2Content = (
    <div className="content2">
      <div className="mb-6">
        <h2 className="text-left font-bold text-neutral-800  text-2xl  ">
          Our services
        </h2>
        <p className=" text_gray pt-3 pb-3 text-lg">
          Please select which service ur interested in
        </p>
      </div>
      <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-8 ">
        {/* web development */}
        <div className=" flex justify-center items-center">
          <button
            autoFocus
            onClick={() => setFormData({ ...formData, services: "Development" })
            }
            className=" py-4 flex justify-start pl-6 items-center w-full h-full  gray_outline_focusBlue_btn "
          >
            <div className="w-16 h-16 rounded-full bg-neutral-400 flex flex-row  justify-center items-center">
              <WebDevelopmentIcon className=" w-9 h-9  text-primaryColor1 " />
            </div>
            <span className="text-lg text-neutral-800 font-medium pl-3">
              Development
            </span>
          </button>
        </div>
        {/* web design */}
        <div className=" flex justify-center items-center focus:">
          <button
            onClick={() => setFormData({ ...formData, services: "Web Design" })}
            className=" py-4 flex justify-start pl-6 items-center w-full h-full  gray_outline_focusBlue_btn "
          >
            <div className="w-16 h-16 rounded-full bg-neutral-400 flex flex-row  justify-center items-center">
              <WebDesignIcon className=" w-9 h-9  text-primaryColor1 " />
            </div>
            <span className="text-lg text-neutral-800 font-medium pl-3">
              Web Design
            </span>
          </button>
        </div>
        {/* Marketing */}
        <div className=" flex justify-center items-center">
          <button
            onClick={() => setFormData({ ...formData, services: "Marketing" })}
            className=" py-4 flex justify-start pl-6 items-center w-full h-full  gray_outline_focusBlue_btn "
          >
            <div className="w-16 h-16 rounded-full bg-neutral-400 flex flex-row  justify-center items-center">
              <MarketingIcon className=" w-9 h-9  text-primaryColor1 " />
            </div>
            <span className="text-lg text-neutral-800 font-medium pl-3">
              Marketing
            </span>
          </button>
        </div>
        {/* Other */}
        <div className=" flex justify-center items-center">
          <button
            onClick={() => setFormData({ ...formData, services: "Other" })}
            className=" py-4 flex justify-start pl-6 items-center w-full h-full  gray_outline_focusBlue_btn "
          >
            <div className="w-16 h-16 rounded-full bg-neutral-400 flex flex-row  justify-center items-center">
              <SettingsIcon className=" w-9 h-9  text-primaryColor1 " />
            </div>
            <span className="text-lg text-neutral-800 font-medium pl-3">
              Other
            </span>
          </button>
        </div>
      </div>
    </div>
  );
  const step3Content = (
    <div className="content3">
      <div className="mb-6">
        <h2 className="text-left font-bold text-neutral-800  text-2xl  ">
          What's your project budget?
        </h2>
        <p className=" text_gray pt-3 pb-3 text-lg">
          Please select the project budget range you have in mind.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-8 ">
        {/* radio 1*/}
        <div className=" flex justify-center items-center ">
          <RadioButton
            label="$5.000 - $10.000"
            value="option1"
            checked={selectedOption === "option1"}
            onChange={handleOptionChange}
          />
        </div>
        {/* radio 2*/}
        <div className=" flex justify-center items-center ">
          <RadioButton
            label="$10.000 - $20.000"
            value="option2"
            checked={selectedOption === "option2"}
            onChange={handleOptionChange}
          />
        </div>
        {/* radio 3*/}
        <div className=" flex justify-center items-center">
          <RadioButton
            label="$20.000 - $50.000"
            value="option3"
            checked={selectedOption === "option3"}
            onChange={handleOptionChange}
          />
        </div>
        {/* radio 4*/}
        <div className=" flex justify-center items-center">
          <RadioButton
            label="$50.000 +"
            value="option4"
            checked={selectedOption === "option4"}
            onChange={handleOptionChange}
          />
        </div>
      </div>
    </div>
  );

  const step4Content = (
    <form onSubmit={onSubmit} className="content4">
      <div className=" w-full h-28">
        <div className="relative  flex justify-center items-center">
          <CheckIcon className="w-28 h-28  text-primaryColor1 z-50 " />
          <div className="absolute h-12 w-12 rounded-lg bg-darkBg mb-24 mr-14 z-0 "></div>
          <div className="absolute w-7 h-7 rounded-lg bg-darkBg mb-10 ml-24  z-0 "></div>
          <div className="absolute w-8 h-8 rounded-lg bg-lightDarkBg mr-24 mt-4 z-0 "></div>
          <div className="absolute w-9 h-9 rounded-lg bg-lightDarkBg mt-20 ml-20 z-0 "></div>
        </div>
      </div>
      <div className="mb-6">
        <h2 className="text-center font-bold text-neutral-800  text-2xl  ">
          Submit your quote request
        </h2>
        <p className=" text_gray pt-3 pb-3 text-lg text-center px-10">
          Please review all the information you previously typed in the past
          steps, and if all is okay, submit your message to receive a project
          quote in 24 - 48 hours.
        </p>
      </div>
      <div>
        <div className="flex justify-center items-center">
          <div>
            <button
              type="submit"
              className=" w-full h-full rounded-full bg-primaryColor1 py-5 px-10 text-neutral-100 text-lg font-bold hover:text-neutral-400"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );

  const stepContent = [
    {
      stepId: 1,
      name: "content 1",
      content: step1Content,
    },
    {
      stepId: 2,
      name: "content 2",
      content: step2Content,
    },
    {
      stepId: 3,
      name: "content 1",
      content: step3Content,
    },
    {
      stepId: 4,
      name: "content 4",
      content: step4Content,
    },
  ];

  return (
    <div className="w-full bg-white h-screen max-sm:h-fit overflow-hidden flex justify-center items-center py-4 ">
      <div className="container mx-auto  max-w-2xl ">
        <div className="w-full h-full flex justify-center items-center ">
          {" "}
          {/*items-center  */}
          <div className="w-full px-2">
            <div className="mb-9">
              <h1 className="text-center text-neutral-800 font-bold text-5xl mb-3">
                Get a Project Quote
              </h1>
              <p className=" text_gray text-center px-12">
                {" "}
                Please fill the form below to receive a quote for your
                project.Feel free to add as much detail as needed{" "}
              </p>
            </div>
            <div className="border  w-full h-max  rounded-3xl shadow-md pb-20 pt-10">
              <div className="px-12">
                <div>
                  <div className="container mx-auto">
                    <StepProgressBar ref={childRef} />
                  </div>
                </div>
                <div className="py-10">
                  <hr></hr>
                </div>
                {/* content map */}
                {stepContent.map((step, index) => (
                  <div key={step.stepId}>
                    {step.stepId === currentStep + 1 ? (
                      <div className="h-[360px] max-sm:h-full"> {step.content}</div>) : (<> </>)}
                  </div>
                ))}
              </div>
            </div>
            <div className=" w-full h-24">
              <div className="flex justify-between w-full h-full items-end">
                <div>
                  <button
                    type="button"
                    className={` w-full h-full rounded-full bg-primaryColor1 py-5 px-10 text-neutral-100 text-lg  font-bold hover:text-neutral-400 
                    ${currentStep === 0 ? "hidden" : ""}`}
                    onClick={handlePreviousStep}
                  >
                    Previous Step
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    className={` w-full h-full rounded-full bg-primaryColor1 py-5 px-10 text-neutral-100 text-lg  font-bold hover:text-neutral-400 
                    ${currentStep === maxStep - 1 ? "hidden" : ""}`}
                    onClick={handleNextStep}
                  >
                    Next Step
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PureModal
        header="Survey Results "
        isOpen={modal}
        className="w-1/3"
        onClose={() => {
          setModal(false);
          return true;
        }}
      >
        <div className="text-primaryColor1 font-medium text-lg py-10 px-2">
          <div className="flex justify-start items-center">
            <p className="pr-4">name: </p>
            <p>{formData.name}</p>
          </div>
          <div className="flex justify-start items-center ">
            <p className="pr-4">email: </p>
            <p>{formData.email}</p>
          </div>
          <div className="flex justify-start items-center ">
            <p className="pr-4">company: </p>
            <p>{formData.companyName}</p>
          </div>
          <div className="flex justify-start items-center ">
            <p className="pr-4">Phone Number: </p>
            <p>{formData.phoneNumber}</p>
          </div>
          <div className="flex justify-start items-center ">
            <p className="pr-4">services:</p>
            <p>{formData.services}</p>
          </div>
          <div className="flex justify-start items-center ">
            <p className="pr-4">projectBudget:</p>
            <p>{formData.projectBudget}</p>
          </div>
        </div>
      </PureModal>
      ;
    </div>
  );
}

export default Home