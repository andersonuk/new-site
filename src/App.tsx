import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/courses" element={<div>Courses Page (Coming Soon)</div>} />
          <Route path="/about" element={<div>About Page (Coming Soon)</div>} />
          <Route path="/testimonials" element={<div>Testimonials Page (Coming Soon)</div>} />
          <Route path="/curriculum" element={<div>Curriculum Page (Coming Soon)</div>} />
          <Route path="/pricing" element={<div>Pricing Page (Coming Soon)</div>} />
          <Route path="/apply" element={<div>Application Page (Coming Soon)</div>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;