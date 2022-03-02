import { AuthStoreReducer } from '@/store/auth';
import { UserStoreReducer } from "@/store/user";


export interface AppState {
  auth: AuthStoreReducer.State;
  user: UserStoreReducer.State;
}

