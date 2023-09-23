export interface NavItem {
  label: string;
  path: string;
}

export interface Button {
  label: string;
  link?: string;
  customStyle?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface Criteria {
  label: string;
  value: string;
  date?: string;
  id?: number;
}

export interface FaqItem {
  switchFaq: () => void;
  active: boolean;
  label: string;
  value: string;
}

interface Option {
  name: string;
  id: number;
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
  options?: Option[];
  selectHolder?: string;
  error?: string;
}

export interface Modal {
  showModal: boolean;
  children: React.ReactNode;
  onClose?: () => void;
}
