'use client';
interface RadioButtonProps {
    label: string;
    value: string;
    checked: boolean;
    onChange: (value: string , label: string) => void;
  }
  
  const RadioButton: React.FC<RadioButtonProps> = ({
    label,
    value,
    checked,
    onChange,
  }) => {
    return (
      <label className={`flex items-center justify-start w-full h-full pl-8 py-4  gray_outline_focusBlue_radioBtn ${checked === true ? "ring-primaryColor1" : ""}`}> 
        <input
          type="radio"
          className="form-radio my-4 h-6 w-6 p-3  text-gray-500 checked:bg-primaryColor1"
          value={value}
          checked={checked}
          onChange={() => onChange(value,label)}
        />
        <span className="text-neutral-800 font-medium text-lg pl-3">{label}</span>
      </label>
    );
  };

  export default RadioButton