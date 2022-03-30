import { Gender } from "@/enums/gender";

export interface WelcomePayload {
  merch: string[],
  user: {
    address: string;
    birthDate: Date;
    city: string;
    forename: string;
    gender: Gender;
    lastname: string;
    username: string;
    zipCode: string;
  }
}
