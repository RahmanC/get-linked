export interface NavItem {
  label: string;
  path: string;
}

export interface Button {
  label: string;
  link?: string;
  customStyle?: string;
  onClick?: () => void;
}

export interface Criteria {
  label: string;
  value: string;
  date?: string;
  id?: number;
}

export interface FaqItem {
  switchFaq: (faq: number) => void;
  activeFaq: number;
  index: number;
  label: string;
  value: string;
}

export interface AppFieldProps {
  name: string;
  value: string;
  type?: string;
  placeholder?: string;
  setText: (text: string) => void;
  textArea?: boolean;
  label?: string;
  select?: boolean;
  options?: string[];
  selectHolder?: string;
}
