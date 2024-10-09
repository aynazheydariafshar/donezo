export interface FormInputPropsType {
  id: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  type?: string;
  errors?: string[];
  className?: string;
  defaultValue?: string;
  onBlur?: () => void;
}
