import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const SERVER_NAME = process.env.REACT_APP_SITE_URL || "http://localhost:4000";
const BASE_URL = `${SERVER_NAME}/user/`;

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery,
  tagTypes: ["User"],
  refetchOnMountOrArgChange: true,

  endpoints: builder => ({
    getUser: builder.query({
      query: () => "/",
      providesTags: ["User", "Auth"],
    }),

    updateUser: builder.mutation({
      query: ({ name, data }) => ({
        url: `/${name}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["User", "Auth"],
    }),

    updateUserAvatar: builder.mutation({
      query: file => ({
        url: "/avatar",
        method: "PATCH",
        body: file,
      }),
      invalidatesTags: ["User"],
    }),

    addPet: builder.mutation({
      query: formdata => {
        const formad = new FormData();
        Object.keys(formdata).forEach(key => formad.append(key, formdata[key]));
        formad.set("avatar", formdata.avatar[0]);
        return {
          url: "/pets",
          method: "POST",
          body: formad,
        };
      },
      invalidatesTags: ["User"],
    }),

    deletePet: builder.mutation({
      query: petId => ({
        url: `/pets/${petId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),

    getUserNotices: builder.query({
      query: () => ({
        url: `/notice`,
        method: "GET",
      }),
      providesTags: ["User"],
    }),

    getUserFavorite: builder.query({
      query: () => ({
        url: `/favorite`,
        method: "GET",
      }),
      providesTags: ["User"],
    }),

    addFavoriteNotice: builder.mutation({
      query: notice_id => ({
        url: `/favorite?notice_id=${notice_id}`,
        method: "POST",
      }),
      invalidatesTags: ["User"],
    }),

    deleteFavoriteNotice: builder.mutation({
      query: notice_id => ({
        url: `/favorite?notice_id=${notice_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useUpdateUserMutation,
  useAddPetMutation,
  useDeletePetMutation,
  useUpdateUserAvatarMutation,
  useGetUserNoticesQuery,
  useGetUserFavoriteQuery,
  useAddFavoriteNoticeMutation,
  useDeleteFavoriteNoticeMutation,
} = userApi;