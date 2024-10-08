export interface FormSubmitPropsType {
  children?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  variant?:
    | "default"
    | "secondary"
    | "destructive"
    | "outline"
    | "ghost"
    | "link";
}
