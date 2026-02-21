import { Routes, Route, Navigate } from "react-router-dom";
import { RootLayout } from "@/layouts/RootLayout";
import { Dashboard } from "@/features/dashboard/pages/Dashboard";
import { PlaceholderPage } from "@/pages/PlaceholderPage";

export function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="media" element={<PlaceholderPage />} />
        <Route path="research" element={<PlaceholderPage />} />
        <Route path="quizzes" element={<PlaceholderPage />} />
        <Route path="chat" element={<PlaceholderPage />} />
        <Route path="tuition" element={<PlaceholderPage />} />
        <Route path="schedule" element={<PlaceholderPage />} />
        <Route path="resources" element={<PlaceholderPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
