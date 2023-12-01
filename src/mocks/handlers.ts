import { http, HttpResponse } from "msw";
import recordsMock from "./recordsMock";

const apiUrl = import.meta.env.VITE_API_URL;
const mock = recordsMock;

export const handlers = [
  http.get(`${apiUrl}/records`, async () => {
    return HttpResponse.json(mock);
  }),
];
