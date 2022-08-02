declare namespace User {
  declare type Form = {
    user: string;
    password: string;
  };

  declare type ResponsePayloadType = {
    token: string;
  };
}
