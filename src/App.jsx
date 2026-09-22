import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components/layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DesignServicePage from "./pages/DesignServicePage";
import CraftsmanshipPage from "./pages/CraftsmanshipPage";
import AftercarePage from "./pages/AftercarePage";
import ProjectsPage from "./pages/ProjectsPage";
import KitchenDesignPage from "./pages/KitchenDesignPage";
import FullInstallationPage from "./pages/FullInstallationPage";
import WorktopsUnitsPage from "./pages/WorktopsUnitsPage";
import PlumbingAppliancesPage from "./pages/PlumbingAppliancesPage";
import FlooringLightingPage from "./pages/FlooringLightingPage";
import FullRemodelsPage from "./pages/FullRemodelsPage";

export default function App() {
  return (
    <>
      <Header />
      <div className="relative">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/design-service" element={<DesignServicePage />} />
          <Route path="/craftsmanship" element={<CraftsmanshipPage />} />
          <Route path="/aftercare" element={<AftercarePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/kitchen-design" element={<KitchenDesignPage />} />
          <Route path="/full-installation" element={<FullInstallationPage />} />
          <Route path="/worktops-units" element={<WorktopsUnitsPage />} />
          <Route path="/plumbing-appliances" element={<PlumbingAppliancesPage />} />
          <Route path="/flooring-lighting" element={<FlooringLightingPage />} />
          <Route path="/full-remodels" element={<FullRemodelsPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}