
export type Language = 'fr' | 'en' | 'ar';

export interface ContentData {
  nav: {
    home: string;
    howItWorks: string;
    features: string;
    industries: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    trust: string;
  };
  problems: {
    badge: string;
    title: string;
    items: { title: string; desc: string }[];
  };
  process: {
    title: string;
    steps: { title: string; desc: string; time: string }[];
  };
  ai: {
    title: string;
    subtitle: string;
    features: { title: string; desc: string }[];
  };
  trust: {
    title: string;
    pillars: { title: string; desc: string }[];
  };
  industries: {
    title: string;
    subtitle: string;
    list: { name: string; example: string }[];
  };
  security: {
    title: string;
    features: { title: string; desc: string }[];
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      company: string;
      message: string;
      file: string;
      submit: string;
      success: string;
    };
  };
  footer: {
    about: string;
    rights: string;
  };
}
