import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { PricingPage } from './pages/PricingPage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { DesktopPage } from './pages/DesktopPage.tsx';
import { CareersPage } from './pages/CareersPage.tsx';
import { PartnerPage } from './pages/PartnerPage.tsx';
import { LoginPage } from './pages/LoginPage.tsx';
import { SitemapPage } from './pages/SitemapPage.tsx';
import { ProductDetailPage } from './pages/ProductDetailPage.tsx';
import { ResourceIndexPage } from './pages/ResourceIndexPage.tsx';
import { NotFoundPage } from './pages/NotFoundPage.tsx';

// Scroll to top helper on route transition
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="about-us" element={<AboutPage />} />
          <Route path="gst-accounting-pc" element={<DesktopPage />} />
          <Route path="careers" element={<CareersPage />} />
          <Route path="distributor/create" element={<PartnerPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="sitemap" element={<SitemapPage />} />

          {/* Core Software Solutions & Vertical Products */}
          <Route path="free/small-business-accounting-software" element={<ProductDetailPage />} />
          <Route path="free/inventory-management-software" element={<ProductDetailPage />} />
          <Route path="free/invoicing-software" element={<ProductDetailPage />} />
          <Route path="free/invoicing-software/e-invoicing" element={<ProductDetailPage />} />
          <Route path="free/pos-billing-software" element={<ProductDetailPage />} />
          <Route path="ocr-scanner-software" element={<ProductDetailPage />} />

          {/* Industry Solutions */}
          <Route path="free/billing-software-for-retail-shop" element={<ProductDetailPage />} />
          <Route path="free/billing-software-for-retail-shop/pharmacy" element={<ProductDetailPage />} />
          <Route path="free/billing-software-for-retail-shop/grocery-store" element={<ProductDetailPage />} />
          <Route path="free/restaurant-billing-software" element={<ProductDetailPage />} />
          <Route path="free/billing-software-for-retail-shop/jewellery-shop" element={<ProductDetailPage />} />
          <Route path="free/billing-software-for-retail-shop/cloth-shop" element={<ProductDetailPage />} />

          {/* Resources & Knowledge Hub */}
          <Route path="blog" element={<ResourceIndexPage />} />
          <Route path="use-cases" element={<ResourceIndexPage />} />
          <Route path="guides" element={<ResourceIndexPage />} />
          <Route path="success-stories" element={<ResourceIndexPage />} />
          <Route path="videos" element={<ResourceIndexPage />} />

          {/* 404 Catch-All */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
