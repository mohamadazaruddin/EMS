import ky from "ky";

export type ApiHandler<T, U> = (
  baseHttpClient: typeof ky,
  params: U
) => Promise<T>;

export type MyClientOptions = {
  authRequired: boolean;
  additionalHeader?: AdditionalHeaderOptions[];
};

export type AdditionalHeaderOptions = {
  key: string;
  value: string;
};

export type LoginParamsType = {
  username: string;
  password?: string;
};

export type LoginResponse = SessionTokens & User;

export type SessionTokens = {
  token: string;
  refreshToken: string;
};

export type User = {
  id: string;
  userName?: string;
};

export type Appointment = {
  id: number;
  status: string;
  location: string;
  resource: string;
  address: string;
};

export type EventItem = {
  start?: Date | string;
  end?: Date | string;
  data?: { appointment?: Appointment };
  isDraggable?: boolean;
  isResizable?: boolean;
  resourceId?: number;
};
export type postTaskPayload = {
  taskName: string;
  estimation: number;
  completed: number;
  employee: number;
  project: number;
  date: string;
};

export type editProfile = {
  firstName: string;
  lastName: string;
  role: number;
  team: number;
  email: string;
  contact: string;
};

export type timesheetData = {
  id: number;
  uuid: null;
  taskName: string;
  estimation: number;
  date: string;
  completed: number;
}[];
