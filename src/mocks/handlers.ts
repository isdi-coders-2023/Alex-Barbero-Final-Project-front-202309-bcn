import { http, HttpResponse } from "msw";
import { recordsMock } from "./recordsMock";

const apiUrl = import.meta.env.VITE_API_URL;
const mock = recordsMock;

export const handlers = [
  http.get(`${apiUrl}/records`, async () => {
    return HttpResponse.json({ records: mock });
  }),

  http.get(`${apiUrl}/records/${recordsMock[0]._id}`, async () => {
    return HttpResponse.json({ record: recordsMock[0] });
  }),

  http.get(`${apiUrl}/records/2`, async () => {
    return HttpResponse.json({ record: recordsMock[0] });
  }),

  http.post(`${apiUrl}/records`, async () => {
    return HttpResponse.json({ record: recordsMock[1] });
  }),

  http.delete(`${apiUrl}/records/1`, async () => {
    return HttpResponse.json({
      message: `${mock[0].bandName} ${mock[0].albumName} successfully deleted`,
    });
  }),
];
