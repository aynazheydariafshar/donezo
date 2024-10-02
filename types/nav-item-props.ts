import { organizationType } from "./organization";

export interface NavItemPropsType {
  key: string;
  isActive: boolean;
  isExpanded: boolean;
  organization: organizationType;
  onExpand: (id: string) => void;
}
