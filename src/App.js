import { useMode, ColorModeContext } from "./theme";
import { ThemeProvider, CssBaseline } from "@mui/material";
import TopBar from "./scences/global/TopBar";
import Sidebar from "./scences/global/Sidebar";
import Dashboard from "./scences/dashboard";
// import Team from "./scences/team";
// import Invoices from "./scences/invoices";
// import Contacts from "./scences/contacts";
// import Bar from "./scences/bar";
// import Form from "./scences/form";
// import Pie from "./scences/pie";
// import FAQ from "./scences/faq";
// import Geography from "./scences/geography";
// import Calendar from "./scences/calendar";

import { Routes, Route } from "react-router-dom";

function App() {
  const [theme, colorMode] = useMode(ColorModeContext);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <TopBar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
            {/* <Route path="/" element={<Dashboard />} /> */}
            {/* <Route path="/team" element={<Team />} /> */}
            {/* <Route path="/invoices" element={<Invoices />} /> */}
            {/* <Route path="/contacts" element={<Contacts />} /> */}
            {/* <Route path="/bar" element={<Bar />} /> */}
            {/* <Route path="/form" element={<Form />} /> */}
            {/* <Route path="/pie" element={<Pie />} /> */}
            {/* <Route path="/faq" element={<FAQ />} /> */}
            {/* <Route path="/geography" element={<Geography />} /> */}
            {/* <Route path="/calendar" element={<Calendar />} /> */}
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
