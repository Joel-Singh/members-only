interface SignUpFormData {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  admin?: "true";
}

export interface RequestWithSignUpFormData extends Request {
  body: {
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    admin?: "true";
  };
}

export default signUpFormData;
