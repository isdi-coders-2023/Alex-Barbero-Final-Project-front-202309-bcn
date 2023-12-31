import { renderHook, screen } from "@testing-library/react";
import App from "../components/App/App";
import { errorHandlers } from "../mocks/errorHandlers";
import { server } from "../mocks/node";
import { store } from "../store";
import RecordStructure from "../store/feature/records/types";
import { providerWrapper } from "../test-utils/customRender";
import customRenderWithProviders from "../test-utils/customRenderWithProviders";
import useRecordsApi from "./useRecordsApi";

describe("Given a modifyRecord function", () => {
  const modifiedMock = {
    bandName: "Los chunguitos modificaos teteee",
    albumName: "Dame veneno",
    frontCover: "https://i.ibb.co/ssBNRbH/kvelertak.webp",
    backCover: "back1.png",
    printImage: "print1.png",
    cookieImage: "cookie1.png",
    description: "Ke pum ke pam triki taun",
    trackList: "Uan,chu,zri",
    isActive: true,
  };

  describe("When user enters the new Record data and modify button is clicked", () => {
    test("Then it should show a message 'New record was modified!'...", async () => {
      const {
        result: {
          current: { modifyRecord },
        },
      } = renderHook(() => useRecordsApi(), { wrapper: providerWrapper });

      customRenderWithProviders(<App />, {
        preloadedState: {
          recordsState: {
            records: [],
            currentRecord: {} as RecordStructure,
          },
          uiState: {
            feedbackToast: { type: "success", message: "" },
            isLoading: true,
          },
        },
        initialPath: "/add",
      });

      await modifyRecord(modifiedMock, "1");

      const updatedMessage = store.getState().uiState.feedbackToast.message;

      expect(updatedMessage).toBe(
        "'Dame veneno of Los chunguitos modificaos teteee' was modified ✅😍!",
      );
    });
  });

  describe("When user enters the new Record data and modify button is clicked", () => {
    test("Then it should show a message 'New record was modified!'...", async () => {
      const {
        result: {
          current: { modifyRecord },
        },
      } = renderHook(() => useRecordsApi(), { wrapper: providerWrapper });

      customRenderWithProviders(<App />, {
        preloadedState: {
          recordsState: {
            records: [],
            currentRecord: {} as RecordStructure,
          },
          uiState: {
            feedbackToast: { type: "success", message: "" },
            isLoading: true,
          },
        },
        initialPath: "/add",
      });

      await modifyRecord(modifiedMock, "1");

      const toastElement = screen.getByText("Loading...");
      await expect(toastElement).toBeInTheDocument();
    });
  });

  describe("When it renders Los chunguitos and it's addNew button is clicked but it fails", () => {
    test("Then it should show a message Impossible to modify 'Dame veneno'...", async () => {
      server.use(...errorHandlers);

      const {
        result: {
          current: { modifyRecord },
        },
      } = renderHook(() => useRecordsApi(), { wrapper: providerWrapper });

      await modifyRecord(modifiedMock, "1");

      const updatedMessage = store.getState().uiState.feedbackToast.message;

      expect(updatedMessage).toBe(
        "Impossible to modify 'Dame veneno of Los chunguitos modificaos teteee' ⛔😒...",
      );
    });
  });
});
