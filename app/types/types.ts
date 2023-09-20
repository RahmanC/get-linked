export interface NavItem {
  label: string;
  path: string;
}

export interface Button {
  label: string;
  link: string;
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
