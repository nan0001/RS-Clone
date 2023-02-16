export type FactoryTitle = { titleEN: string; titleRU: string };

export type FactoryDesc = { descriptionEN: string; descriptionRU: string };

export type UserData = {
  cookiesCount: number;
  boosters: {
    doubleCost: number;
    changeSpeed: number;
    blow: number;
  };
  factories: {
    factoryS: {
      bought: boolean;
      level: number;
    };
    factoryM: {
      bought: boolean;
      level: number;
    };
    factoryL: {
      bought: boolean;
      level: number;
    };
  };
};

export type Credentials = {
  login: string;
  password: string;
};

export type RegisterData = {
  message: string;
};

export type LoginData = {
  message: string;
  token?: string;
};

export type UserLoginReturn = {
  success: boolean;
  data: LoginData;
};

export type UserRegisterReturn = {
  success: boolean;
  data: RegisterData;
};

export type LoginMessages = {
  ru: {
    [key: string]: string;
  };
  en: {
    [key: string]: string;
  };
};
