export interface FormInputPropsType {
  id: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  type?: string;
  errors?: Record<string, string[] | undefined>;
  className?: string;
  defaultValue?: string;
  onBlur?: () => void;
}
