import { useEffect } from 'react'
import Hero from '../components/sections/Hero'
import EmergencyBanner from '../components/sections/EmergencyBanner'
import AboutPreview from '../components/sections/AboutPreview'
import DepartmentsGrid from '../components/sections/DepartmentsGrid'
import FeaturedDoctors from '../components/sections/FeaturedDoctors'
import HealthPackagesSection from '../components/sections/HealthPackagesSection'
import AppointmentCTA from '../components/sections/AppointmentCTA'
import LatestNews from '../components/sections/LatestNews'
import TestimonialSlider from '../components/sections/TestimonialSlider'
import ContactInfoSection from '../components/sections/ContactInfoSection'
import ServicesStrip from '../components/sections/ServicesStrip'
import { usePageMeta } from '../lib/usePageMeta'

export default function Home() {
  usePageMeta({
    title: 'Hospital Name — Compassionate care, 24 hours a day',
    description:
      '24/7 emergency care, ten specialist departments, twelve consultants, an accredited laboratory and affordable health packages in Location. Book an appointment online.',
  })

  useEffect(() => {}, [])

  return (
    <>
      <Hero />
      <EmergencyBanner />
      <AboutPreview />
      <DepartmentsGrid limit={6} />
      <FeaturedDoctors limit={4} />
      <ServicesStrip />
      <HealthPackagesSection limit={3} />
      <AppointmentCTA />
      <LatestNews limit={3} />
      <TestimonialSlider />
      <ContactInfoSection />
    </>
  )
}
