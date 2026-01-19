
export enum UserRole {
  ADMIN = 'admin',
  TEACHER = 'teacher',
  STUDENT = 'student',
  BALANCE = 'balance'
}

export interface NavItem {
  label: string;
  path: string;
  icon: React.ReactNode;
}

export interface Stat {
  label: string;
  value: string | number;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
  color: string;
}

export interface TableColumn {
  header: string;
  key: string;
}
