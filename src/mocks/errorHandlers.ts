import { http, HttpResponse } from "msw";
import { recordsMock } from "./recordsMock";

const apiUrl = import.meta.env.VITE_API_URL;

export const errorHandlers = [
  http.get(`${apiUrl}/records`, async () => {
    return HttpResponse.error();
  }),

  http.get(`${apiUrl}/records/${recordsMock[0]._id}`, async () => {
    return HttpResponse.error();
  }),

  http.post(`${apiUrl}/records`, async () => {
    return HttpResponse.error();
  }),

  http.delete(`${apiUrl}/records/1`, async () => {
    return HttpResponse.error();
  }),
];

export const undefinedHandlers = [
  http.get(`${apiUrl}/records`, async () => {
    return HttpResponse.json({ records: undefined });
  }),

  http.get(`${apiUrl}/records/${recordsMock[0]._id}`, async () => {
    return HttpResponse.error();
  }),
];
