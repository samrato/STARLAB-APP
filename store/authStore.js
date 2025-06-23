import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { API_URL } from "../constants/api";

export const useAuthStore = create((set) => ({
  user: null,
  token: null,
  isLoading: false,
  isCheckingAuth: true,

  register: async (username, email, password) => {
    set({ isLoading: true });

    try {
      const response = await fetch(`${API_URL}/api/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await response.json();
      console.log("register response:", data);
      if (!response.ok) throw new Error(data.message || "Something went wrong");
      await AsyncStorage.setItem("user", JSON.stringify(data.user));
      await AsyncStorage.setItem("token", data.token);
      set({ token: data.token, user: data.user, isLoaded: false });
    } catch (error) {
      console.error("register error:", error);
      set({ isLoading: false });
      return { success: false, error: error.message };
    }
    // try {
    //   const response = await fetch(`${API_URL}/api/register`, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body:  JSON.stringify({ username, email, password }),
    //   });

    //   const data = await response.json();
    //   console.log("REGISTER response:", data);

    //   if (!response.ok) throw new Error(data.message || "Something went wrong");

    //   if (data && typeof data.user === "object") {
    //     await AsyncStorage.setItem("user", JSON.stringify(data.user));
    //   } else {
    //     console.warn("User missing, removing AsyncStorage user");
    //     await AsyncStorage.removeItem("user");
    //   }

    //   if (data && typeof data.token === "string") {
    //     await AsyncStorage.setItem("token", data.token);
    //   } else {
    //     console.warn("Token missing, removing AsyncStorage token");
    //     await AsyncStorage.removeItem("token");
    //   }

    //   set({
    //     token: typeof data.token === "string" ? data.token : null,
    //     user: typeof data.user === "object" ? data.user : null,
    //     isLoading: false,
    //   });

    //   return { success: true };
    // } catch (error) {
    //   console.error("Register error:", error);
    //   set({ isLoading: false });
    //   return { success: false, error: error.message };
    // }
  },

  login: async (email, password) => {
    set({ isLoading: true });

    try {
      const response = await fetch(`${API_URL}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log("LOGIN response:", data);
      if (!response.ok) throw new Error(data.message || "Something went wrong");

      await AsyncStorage.setItem("user", JSON.stringify(data.user));
      await AsyncStorage.setItem("token", data.token);

      set({ token: data.token, user: data.user, isLoaded: false });
    } catch (error) {
      console.error("Login error:", error);
      set({ isLoading: false });
      return { success: false, error: error.message };
    }

    // try {
    //   const response = await fetch(`${API_URL}/api/login`, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ email, password }),
    //   });

    //   const data = await response.json();
    //   console.log("LOGIN response:", data);

    //   if (!response.ok) throw new Error(data.message || "Something went wrong");

    //   if (data && typeof data.user === "object") {
    //     await AsyncStorage.setItem("user", JSON.stringify(data.user));
    //   } else {
    //     console.warn("User missing, removing AsyncStorage user");
    //     await AsyncStorage.removeItem("user");
    //   }

    //   if (data && typeof data.token === "string") {
    //     await AsyncStorage.setItem("token", data.token);
    //   } else {
    //     console.warn("Token missing, removing AsyncStorage token");
    //     await AsyncStorage.removeItem("token");
    //   }

    //   set({
    //     token: typeof data.token === "string" ? data.token : null,
    //     user: typeof data.user === "object" ? data.user : null,
    //     isLoading: false,
    //   });

    //   return { success: true };
    // } catch (error) {
    //   console.error("Login error:", error);
    //   set({ isLoading: false });
    //   return { success: false, error: error.message };
    // }
  },

  checkAuth: async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      const userJson = await AsyncStorage.getItem("user");
      const user = userJson ? JSON.parse(userJson) : null;
      set({ token, user });
    } catch (error) {
      console.error("Auth check failed:", error);
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  logOut: async () => {
    try {
      await AsyncStorage.removeItem("token");
      await AsyncStorage.removeItem("user");
      set({ token: null, user: null });
    } catch (error) {
      console.error("Logout error:", error);
    }
  },
}));
