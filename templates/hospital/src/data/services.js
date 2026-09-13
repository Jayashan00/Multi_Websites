export const services = [
  {
    slug: 'opd-services',
    name: 'OPD Services',
    icon: 'stethoscope',
    image: 'svcOpd',
    tagline: 'Walk in, or book a slot and skip the queue.',
    description:
      'Outpatient consultations across all ten departments, seven days a week. Booked patients are seen within 15 minutes of their slot, and walk-ins are triaged by a duty nurse on arrival.',
    highlights: ['Same-day appointments', 'Digital prescriptions', 'Average wait under 15 min'],
    availability: 'Mon – Sat · 7.00 am – 9.00 pm',
  },
  {
    slug: 'laboratory-services',
    name: 'Laboratory Services',
    icon: 'flask',
    image: 'svcLab',
    tagline: 'Accredited testing with reports on your phone.',
    description:
      'A fully automated laboratory covering haematology, biochemistry, microbiology, serology and histopathology. Most routine reports are released within four hours and sent by SMS link.',
    highlights: ['Reports in 4 hours', 'Home sample collection', 'Accredited quality control'],
    availability: 'Daily · 6.00 am – 10.00 pm',
  },
  {
    slug: 'pharmacy',
    name: 'Pharmacy',
    icon: 'pill',
    image: 'svcPharmacy',
    tagline: 'Every prescription checked by a registered pharmacist.',
    description:
      'A 24-hour pharmacy stocking branded and generic medicines, surgical consumables and baby care items. Our pharmacists review every prescription for interactions before dispensing.',
    highlights: ['Open 24 hours', 'Generic alternatives offered', 'Free home delivery over Rs. 5,000'],
    availability: 'Open 24 hours',
  },
  {
    slug: 'emergency-care',
    name: 'Emergency Care',
    icon: 'alert',
    image: 'svcEmergency',
    tagline: 'A consultant on the floor, not on call.',
    description:
      'Our emergency and trauma unit is staffed by consultants on site at all hours, with resuscitation bays, a dedicated CT scanner and direct lift access to theatre.',
    highlights: ['Consultant-led at all hours', 'Dedicated trauma CT', 'Triage within 5 minutes'],
    availability: 'Open 24 hours',
  },
  {
    slug: 'ambulance-service',
    name: 'Ambulance Service',
    icon: 'ambulance',
    image: 'svcAmbulance',
    tagline: 'Advanced life support on the road in under three minutes.',
    description:
      'Six ambulances, four of them fitted for advanced life support with a paramedic and defibrillator on board. Crews are dispatched from the main campus and reach most of the city within 12 minutes.',
    highlights: ['Fleet of 6 vehicles', 'Paramedic on board', 'GPS-tracked dispatch'],
    availability: 'Open 24 hours',
  },
  {
    slug: 'vaccination',
    name: 'Vaccination',
    icon: 'syringe',
    image: 'svcVaccination',
    tagline: 'The full national schedule, plus travel and seasonal shots.',
    description:
      'Childhood immunisation following the national schedule, along with influenza, HPV, hepatitis, rabies and travel vaccines for adults. Reminders are sent before each due date.',
    highlights: ['National child schedule', 'Travel vaccines', 'Automatic SMS reminders'],
    availability: 'Mon – Sat · 8.00 am – 5.00 pm',
  },
  {
    slug: 'diagnostic-services',
    name: 'Diagnostic Services',
    icon: 'scan',
    image: 'svcDiagnostics',
    tagline: 'X-ray, ultrasound, CT and MRI — reported the same day.',
    description:
      'Low-dose digital X-ray, 4D ultrasound, 128-slice CT and 1.5T MRI, all reported by resident consultant radiologists. Images are shared through the patient portal.',
    highlights: ['128-slice CT', '1.5T MRI', 'Same-day reporting'],
    availability: 'Daily · 6.00 am – 10.00 pm',
  },
  {
    slug: 'health-checkups',
    name: 'Health Checkups',
    icon: 'clipboard',
    image: 'svcCheckup',
    tagline: 'One morning, one report, one clear conversation.',
    description:
      'Structured screening packages for individuals, couples and corporate teams. Every checkup ends with a face-to-face consultation, not just a printout.',
    highlights: ['Completed in one morning', 'Doctor review included', 'Corporate rates available'],
    availability: 'Mon – Sat · 6.30 am – 11.00 am',
  },
]

export const getService = (slug) => services.find((s) => s.slug === slug)
