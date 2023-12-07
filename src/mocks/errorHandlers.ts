import { http, HttpResponse } from "msw";

const apiUrl = import.meta.env.VITE_API_URL;

export const errorHandlers = [
  http.get(`${apiUrl}/records`, async () => {
    return HttpResponse.error();
  }),

  http.post(`${apiUrl}/records`, async () => {
    return HttpResponse.error();
  }),

  http.delete(`${apiUrl}/records/1`, async () => {
    return HttpResponse.error();
  }),
];
