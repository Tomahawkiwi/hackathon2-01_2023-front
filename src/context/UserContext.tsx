/* eslint-disable react/jsx-no-constructed-context-values */
import { User } from "@prisma/client";
import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";

type TUser = Omit<User, "password">;

interface IUserContext {
  user: TUser | User | null;
  isAuth: boolean;
  isLoading: boolean;
  signIn: (credentials: TCredentials) => Promise<void>;
  signOut: () => Promise<void>;
}

type TUserContextProviderProps = {
  children: React.ReactNode;
};

type TCredentials = {
  email: string;
  password: string;
};

type AuthState = {
  user: TUser | null;
  isAuth: boolean;
  isLoading: boolean;
};

const UserContext = createContext<IUserContext | null>(null);

function UserContextProvider({ children }: TUserContextProviderProps) {
  const router = useRouter();
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuth: false,
    isLoading: true,
  });

  const signIn = async ({ email, password }: TCredentials) => {
    try {
      const { data, headers } = await axiosInstance.post("/auth/signin", {
        email,
        password,
      });
      setAuthState(() => ({
        isAuth: true,
        user: data,
        isLoading: false,
      }));
      const token = headers.authorization;
      axiosInstance.defaults.headers.common.authorization = token;
      localStorage.setItem("token", token || "");
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const signOut = async () => {
    setAuthState({
      user: null,
      isAuth: false,
      isLoading: false,
    });
    localStorage.removeItem("token");
    axiosInstance.defaults.headers.common.authorization = "";
    router.push("/auth/signin");
  };

  useEffect(() => {
    setAuthState((state) => ({
      ...state,
    }));
    axiosInstance
      .post("/auth/me")
      .then((res) => {
        setAuthState({
          user: res.data,
          isAuth: true,
          isLoading: false,
        });
        if (router.pathname === "/auth/signin") {
          router.push("/");
        }
      })
      .catch(() => router.push("/auth/signin"));
  }, []);

  return (
    <UserContext.Provider
      value={{
        user: authState.user,
        isAuth: authState.isAuth,
        isLoading: authState.isLoading,
        signIn,
        signOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("User context must be used within a UserContextProvider");
  }

  return context;
};

export default UserContextProvider;
