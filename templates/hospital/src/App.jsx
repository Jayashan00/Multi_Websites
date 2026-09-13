import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import { PageLoader } from './components/ui/Loader'

/**
 * Every route is code-split, so the first paint only downloads the home page.
 * The shared chrome (navbar / footer) lives in <Layout /> and never reloads.
 */
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Departments = lazy(() => import('./pages/Departments'))
const DepartmentDetail = lazy(() => import('./pages/DepartmentDetail'))
const Doctors = lazy(() => import('./pages/Doctors'))
const DoctorDetail = lazy(() => import('./pages/DoctorDetail'))
const Appointment = lazy(() => import('./pages/Appointment'))
const Services = lazy(() => import('./pages/Services'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'))
const HealthPackages = lazy(() => import('./pages/HealthPackages'))
const Gallery = lazy(() => import('./pages/Gallery'))
const News = lazy(() => import('./pages/News'))
const NewsDetail = lazy(() => import('./pages/NewsDetail'))
const Testimonials = lazy(() => import('./pages/Testimonials'))
const Faq = lazy(() => import('./pages/Faq'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/departments" element={<Departments />} />
          <Route path="/departments/:slug" element={<DepartmentDetail />} />

          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:slug" element={<DoctorDetail />} />

          <Route path="/appointment" element={<Appointment />} />

          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />

          <Route path="/health-packages" element={<HealthPackages />} />
          <Route path="/gallery" element={<Gallery />} />

          <Route path="/news" element={<News />} />
          <Route path="/news/:slug" element={<NewsDetail />} />

          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
