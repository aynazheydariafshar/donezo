export interface MentionPropsType {
  children: React.ReactNode;
  side?: "left" | "right" | "top" | "bottom";
  description: string;
  sideOffset?: number;
}
