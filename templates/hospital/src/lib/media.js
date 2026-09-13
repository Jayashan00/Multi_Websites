/**
 * Central media registry.
 * ---------------------------------------------------------------------------
 * Every photograph and video used on the site is declared here exactly once,
 * so swapping in the real hospital's own photography is a single-file edit.
 *
 * Two modes:
 *   VITE_LOCAL_ASSETS !== 'true'  -> stream from the CDN (default, zero setup)
 *   VITE_LOCAL_ASSETS === 'true'  -> serve from /assets/images (run `npm run assets` first)
 */

const USE_LOCAL = import.meta.env.VITE_LOCAL_ASSETS === 'true'

const UNSPLASH = 'https://images.unsplash.com'

/** key -> [unsplash photo id, local file name] */
const PHOTOS = {
  // --- Hero / general hospital -------------------------------------------
  heroPoster:        ['photo-1519494026892-80bbd2d6fd0d', 'hero-poster.jpg'],
  hospitalBuilding:  ['photo-1587351021759-3e566b6af7cc', 'hospital-building.jpg'],
  hospitalLobby:     ['photo-1538108149393-fbbd81895907', 'hospital-lobby.jpg'],
  hospitalCorridor:  ['photo-1516549655169-df83a0774514', 'hospital-corridor.jpg'],
  receptionDesk:     ['photo-1666214280557-f1b5022eb634', 'reception-desk.jpg'],
  nurseStation:      ['photo-1559839734-2b71ea197ec2', 'nurse-station.jpg'],
  patientRoom:       ['photo-1586773860418-d37222d8fce3', 'patient-room.jpg'],
  waitingArea:       ['photo-1631217868264-e5b90bb7e133', 'waiting-area.jpg'],
  ambulance:         ['photo-1587745416684-47953f16f02f', 'ambulance.jpg'],
  operatingTheatre:  ['photo-1584982751601-97dcc096659c', 'operating-theatre.jpg'],

  // --- Departments --------------------------------------------------------
  deptGeneral:       ['photo-1579684385127-1ef15d508118', 'dept-general-medicine.jpg'],
  deptCardiology:    ['photo-1628348068343-c6a848d2b6dd', 'dept-cardiology.jpg'],
  deptPediatrics:    ['photo-1530026405186-ed1f139313f8', 'dept-pediatrics.jpg'],
  deptOrthopedics:   ['photo-1624727828489-a1e03b79bba8', 'dept-orthopedics.jpg'],
  deptGynecology:    ['photo-1519824145371-296894a0daa9', 'dept-gynecology.jpg'],
  deptNeurology:     ['photo-1559757175-5700dde675bc', 'dept-neurology.jpg'],
  deptEnt:           ['photo-1588776814546-1ffcf47267a5', 'dept-ent.jpg'],
  deptDental:        ['photo-1606811841689-23dfddce3e95', 'dept-dental.jpg'],
  deptRadiology:     ['photo-1516069677018-378515003435', 'dept-radiology.jpg'],
  deptLaboratory:    ['photo-1581595220892-b0739db3ba8c', 'dept-laboratory.jpg'],

  // --- Doctors ------------------------------------------------------------
  doctor01:           ['photo-1612349317150-e413f6a5b16d', 'doctor-01.jpg'],
  doctor02:           ['photo-1594824476967-48c8b964273f', 'doctor-02.jpg'],
  doctor03:           ['photo-1622253692010-333f2da6031d', 'doctor-03.jpg'],
  doctor04:           ['photo-1651008376811-b90baee60c1f', 'doctor-04.jpg'],
  doctor05:           ['photo-1537368910025-700350fe46c7', 'doctor-05.jpg'],
  doctor06:           ['photo-1584515933487-779824d29309', 'doctor-06.jpg'],
  doctor07:           ['photo-1590611936760-eeb9bc598548', 'doctor-07.jpg'],
  doctor08:           ['photo-1527613426441-4da17471b66d', 'doctor-08.jpg'],
  doctor09:           ['photo-1543333995-a78aea2eee50', 'doctor-09.jpg'],
  doctor10:           ['photo-1607990281513-2c110a25bd8c', 'doctor-10.jpg'],
  doctor11:           ['photo-1576669801838-1b1c52121e6a', 'doctor-11.jpg'],
  doctor12:           ['photo-1631217873436-b0fa88e71f0c', 'doctor-12.jpg'],

  // --- Services -----------------------------------------------------------
  svcOpd:            ['photo-1666214280391-8ff5bd3c0bf0', 'service-opd.jpg'],
  svcLab:            ['photo-1579154204601-01588f351e67', 'service-laboratory.jpg'],
  svcPharmacy:       ['photo-1587854692152-cbe660dbde88', 'service-pharmacy.jpg'],
  svcEmergency:      ['photo-1612277795421-9bc7706a4a34', 'service-emergency.jpg'],
  svcAmbulance:      ['photo-1615461066841-6116e61058f4', 'service-ambulance.jpg'],
  svcVaccination:    ['photo-1632053002928-1919f6b2a2b1', 'service-vaccination.jpg'],
  svcDiagnostics:    ['photo-1551601651-2a8555f1a136', 'service-diagnostics.jpg'],
  svcCheckup:        ['photo-1559757148-5c350d0d3c56', 'service-checkup.jpg'],

  // --- Packages -----------------------------------------------------------
  pkgBasic:          ['photo-1505751172876-fa1923c5c528', 'package-basic.jpg'],
  pkgExecutive:      ['photo-1576091160550-2173dba999ef', 'package-executive.jpg'],
  pkgCardiac:        ['photo-1628595351029-c2bf17511435', 'package-cardiac.jpg'],
  pkgDiabetic:       ['photo-1624638760852-8ac2ef2bdf98', 'package-diabetic.jpg'],
  pkgWomens:         ['photo-1591604129939-f1efa4d9f7fa', 'package-womens.jpg'],
  pkgSenior:         ['photo-1573497019940-1c28c88b4f3e', 'package-senior.jpg'],

  // --- News / articles ----------------------------------------------------
  newsHeart:         ['photo-1518152006812-edab29b069ac', 'news-heart-health.jpg'],
  newsDengue:        ['photo-1584036561566-baf8f5f1b144', 'news-dengue.jpg'],
  newsChild:         ['photo-1476703993599-0035a21b17a9', 'news-child-nutrition.jpg'],
  newsScanner:       ['photo-1629909613654-28e377c37b09', 'news-new-scanner.jpg'],
  newsDiabetes:      ['photo-1505576399279-565b52d4ac71', 'news-diabetes.jpg'],
  newsMental:        ['photo-1499209974431-9dddcece7f88', 'news-mental-health.jpg'],
  newsCamp:          ['photo-1576091160399-112ba8d25d1d', 'news-health-camp.jpg'],
  newsBack:          ['photo-1571019613454-1cb2f99b2d8b', 'news-back-pain.jpg'],

  // --- Gallery ------------------------------------------------------------
  galEquipment1:     ['photo-1583912267550-d6c2ac3196c0', 'gallery-equipment-1.jpg'],
  galEquipment2:     ['photo-1580281658223-9b93f18ae9ae', 'gallery-equipment-2.jpg'],
  galEvent1:         ['photo-1582213782179-e0d53f98f2ca', 'gallery-event-1.jpg'],
  galEvent2:         ['photo-1577896851231-70ef18881754', 'gallery-event-2.jpg'],
  galFacility1:      ['photo-1596541223130-5d31a73fb6c6', 'gallery-facility-1.jpg'],
  galFacility2:      ['photo-1504439468489-c8920d796a29', 'gallery-facility-2.jpg'],
  galTeam1:          ['photo-1550831107-1553da8c8464', 'gallery-team-1.jpg'],
  galTeam2:          ['photo-1521791136064-7986c2920216', 'gallery-team-2.jpg'],

  // --- Testimonials (patients) -------------------------------------------
  patient01:       ['photo-1494790108377-be9c29b29330', 'patient-01.jpg'],
  patient02:       ['photo-1500648767791-00dcc994a43e', 'patient-02.jpg'],
  patient03:       ['photo-1573496359142-b8d87734a5a2', 'patient-03.jpg'],
  patient04:       ['photo-1507003211169-0a1dd7228f2d', 'patient-04.jpg'],
  patient05:       ['photo-1580489944761-15a19d654956', 'patient-05.jpg'],
  patient06:       ['photo-1519085360753-af0119f7cbe7', 'patient-06.jpg'],

  // --- Management team ----------------------------------------------------
  mgmt01:      ['photo-1560250097-0b93528c311a', 'mgmt-01.jpg'],
  mgmt02:      ['photo-1573497019940-1c28c88b4f3e', 'mgmt-02.jpg'],
  mgmt03:      ['photo-1487412720507-e7ab37603c6f', 'mgmt-03.jpg'],
  mgmt04:      ['photo-1472099645785-5658abf4ff4e', 'mgmt-04.jpg'],
}

/** Hero background video (Pexels — free licence, no attribution required). */
const VIDEO = {
  remote: 'https://videos.pexels.com/video-files/4114797/4114797-uhd_2560_1440_25fps.mp4',
  local: '/assets/images/hero-loop.mp4',
}

/**
 * Build a CDN URL with sensible width/quality/format parameters so we never
 * ship a 4000px original to a phone.
 */
function cdn(id, { w = 1200, h, q = 68 } = {}) {
  const params = [`w=${w}`, `q=${q}`, 'auto=format', 'fit=crop']
  if (h) params.splice(1, 0, `h=${h}`)
  return `${UNSPLASH}/${id}?${params.join('&')}`
}

/**
 * img('deptCardiology', { w: 800 })
 * Returns a ready-to-use src string for either mode.
 */
export function img(key, opts) {
  const entry = PHOTOS[key]
  if (!entry) {
    if (import.meta.env.DEV) console.warn(`[media] unknown image key: "${key}"`)
    return ''
  }
  const [id, file] = entry
  return USE_LOCAL ? `/assets/images/${file}` : cdn(id, opts)
}

/** Small helper for responsive srcSet on the big hero-style images. */
export function imgSet(key, widths = [640, 960, 1400, 1920]) {
  if (USE_LOCAL) return undefined
  return widths.map((w) => `${img(key, { w })} ${w}w`).join(', ')
}

export const heroVideo = USE_LOCAL ? VIDEO.local : VIDEO.remote

export const usingLocalAssets = USE_LOCAL

export { PHOTOS, VIDEO }
