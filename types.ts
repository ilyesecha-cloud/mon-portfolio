
export interface Mission {
  title: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  missions: string[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  specialties?: string[];
  description: string;
}

export interface Skill {
  name: string;
  icon: string;
}
