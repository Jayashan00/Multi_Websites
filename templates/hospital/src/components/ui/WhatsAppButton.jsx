import { site } from '../../data/site'

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
      <path d="M16.004 2.667c-7.36 0-13.333 5.973-13.333 13.333 0 2.353.615 4.56 1.69 6.475L2.667 29.333l7.02-1.84a13.24 13.24 0 0 0 6.317 1.61h.006c7.36 0 13.333-5.973 13.333-13.333S23.364 2.667 16.004 2.667Zm0 24.213h-.005a11.02 11.02 0 0 1-5.61-1.537l-.402-.239-4.166 1.092 1.113-4.06-.262-.417a10.98 10.98 0 0 1-1.686-5.85c0-6.07 4.943-11.013 11.02-11.013 2.943 0 5.71 1.148 7.79 3.23a10.94 10.94 0 0 1 3.226 7.792c0 6.07-4.943 11.002-11.018 11.002Zm6.037-8.245c-.331-.166-1.957-.966-2.26-1.076-.303-.11-.523-.166-.744.166-.22.331-.853 1.076-1.046 1.297-.193.221-.386.249-.717.083-.331-.166-1.397-.515-2.662-1.643-.984-.878-1.65-1.962-1.843-2.293-.193-.331-.02-.51.146-.675.15-.149.331-.386.497-.58.166-.193.221-.331.331-.552.11-.221.055-.414-.028-.58-.083-.166-.744-1.794-1.02-2.457-.269-.645-.542-.557-.744-.567l-.634-.011c-.22 0-.579.083-.883.414-.303.331-1.157 1.13-1.157 2.759 0 1.628 1.184 3.202 1.35 3.423.166.221 2.33 3.558 5.646 4.988.789.34 1.404.544 1.884.696.792.252 1.513.216 2.083.131.635-.095 1.957-.8 2.233-1.573.276-.772.276-1.435.193-1.573-.083-.138-.303-.221-.634-.386Z" />
    </svg>
  )
}

export default function WhatsAppButton() {
  const number = (site.whatsapp?.number || '').replace(/[^\d]/g, '')
  if (!site.whatsapp?.enabled || !number) return null

  const message = encodeURIComponent(site.whatsapp.defaultMessage || 'Hello!')
  const href = `https://wa.me/${number}?text=${message}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-[60] grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lift transition hover:scale-105 active:scale-95"
    >
      <WhatsAppIcon />
    </a>
  )
}
