import { createBrowserRouter } from "react-router-dom";
import { PageA } from "../pages/pageA";
import { SemanticUISamplePage } from "@/pages/SemanticUISample";

/**
 * App router
 */
const router = createBrowserRouter([
  { path: "/", element: <PageA /> },
  { path: "/pageA", element: <PageA /> },
  { path: "/semantic", element: <SemanticUISamplePage /> }
]);

export default router;
