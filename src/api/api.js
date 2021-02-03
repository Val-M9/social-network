import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "2d13296c-9cbf-451c-b8a5-e0246a2a6ae7",
  },
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  follow(userId) {
    return instance.post(`follow/${userId}`);
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },
};
export const authAPI = {
  isAuth() {
    return instance.get(`auth/me`);
  },
};
export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
};
