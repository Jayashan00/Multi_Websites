import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Membership from '@/pages/Membership';
import Programs from '@/pages/Programs';
import Trainers from '@/pages/Trainers';
import Facilities from '@/pages/Facilities';
import Gallery from '@/pages/Gallery';
import Schedule from '@/pages/Schedule';
import Register from '@/pages/Register';
import PersonalTraining from '@/pages/PersonalTraining';
import Nutrition from '@/pages/Nutrition';
import Blog from '@/pages/Blog';
import BlogDetail from '@/pages/BlogDetail';
import Testimonials from '@/pages/Testimonials';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/register" element={<Register />} />
          <Route path="/personal-training" element={<PersonalTraining />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
