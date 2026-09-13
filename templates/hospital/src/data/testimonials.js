/**
 * Patient testimonials — placeholder data only.
 * Names, locations and reviewing doctors are all generic placeholders.
 */

export const testimonials = [
  {
    id: 1,
    name: 'Patient Name 01',
    photo: 'patient01',
    location: 'City Name',
    department: 'Gynecology & Obstetrics',
    doctor: 'Dr. Doctor Name 04',
    rating: 5,
    date: '2026-07-15',
    quote:
      'I was induced at 39 weeks and stayed four nights. What I remember most is that nobody ever made me feel like I was asking too many questions — the night nurses answered the same worry three times without a flicker.',
    story: true,
    storyTitle: 'A first delivery, and a team that never rushed her',
  },
  {
    id: 2,
    name: 'Patient Name 02',
    photo: 'patient02',
    location: 'City Name',
    department: 'Cardiology',
    doctor: 'Dr. Doctor Name 02',
    rating: 5,
    date: '2026-06-30',
    quote:
      'I came in for what I assumed was indigestion. The ECG was done in under ten minutes and I was in the cardiac unit before I had finished arguing that it was nothing. That speed is the reason I am writing this.',
    story: true,
    storyTitle: 'Ten minutes from reception to the cardiac unit',
  },
  {
    id: 3,
    name: 'Patient Name 03',
    photo: 'patient03',
    location: 'City Name',
    department: 'Pediatrics',
    doctor: 'Dr. Doctor Name 03',
    rating: 5,
    date: '2026-06-12',
    quote:
      'My son is four and terrified of doctors. The consultant spent the first five minutes talking to him about his shoes, not his chest. He now asks when we are going back.',
    story: false,
  },
  {
    id: 4,
    name: 'Patient Name 04',
    photo: 'patient04',
    location: 'City Name',
    department: 'Orthopedics',
    doctor: 'Dr. Doctor Name 05',
    rating: 5,
    date: '2026-05-22',
    quote:
      'Knee replacement at 62, and I was walking with a frame the next morning. The physiotherapy team came to the ward twice a day rather than waiting for me to come to them.',
    story: true,
    storyTitle: 'Back on the golf course eleven weeks after surgery',
  },
  {
    id: 5,
    name: 'Patient Name 05',
    photo: 'patient05',
    location: 'City Name',
    department: 'Laboratory',
    doctor: 'Dr. Doctor Name 10',
    rating: 4,
    date: '2026-05-08',
    quote:
      'The home collection service is the reason I finally did my annual tests. The technician arrived at 7.10 am and the report link came through before lunch.',
    story: false,
  },
  {
    id: 6,
    name: 'Patient Name 06',
    photo: 'patient06',
    location: 'City Name',
    department: 'Neurology',
    doctor: 'Dr. Doctor Name 07',
    rating: 5,
    date: '2026-04-19',
    quote:
      'My father had a stroke on a Sunday morning. He was scanned within twenty minutes of arriving. Six weeks on he is speaking clearly again, and we know how much that speed mattered.',
    story: true,
    storyTitle: 'A Sunday morning stroke, and twenty minutes that mattered',
  },
]

export const successStories = testimonials.filter((t) => t.story)