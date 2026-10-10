/**
 * Helper utility to generate WhatsApp deep links with custom pre-filled messages.
 * This allows the business to know exactly which button/section the customer clicked.
 */
export const getWhatsAppLink = (
  context: "general" | "hero" | "cta" | "portfolio" | "comingsoon" = "general",
  customService?: string
) => {
  const phoneNumber = "6282299359184";
  
  let message = "";
  
  switch (context) {
    case "hero":
      message = "Halo Tekno Home Services, saya ingin memesan layanan servis cepat / panggilan ke rumah. Bagaimana prosedurnya?";
      break;
    case "cta":
      message = "Halo Tekno Home Services, peralatan saya sedang bermasalah dan membutuhkan perbaikan segera. Bisa dibantu?";
      break;
    case "portfolio":
      message = "Halo Tekno Home Services, saya melihat portofolio hasil kerja terbaik Anda di website dan tertarik untuk memesan layanan servis. Bisa dibantu?";
      break;
    case "comingsoon":
      message = customService
        ? `Halo Tekno Home Services, saya melihat layanan ${customService} di website. Apakah sudah bisa dipesan atau kapan estimasi tersedianya?`
        : "Halo Tekno Home Services, saya ingin menanyakan ketersediaan layanan teknisi di wilayah saya. Bisa dibantu?";
      break;
    case "general":
    default:
      message = "Halo Tekno Home Services, saya ingin berkonsultasi mengenai perbaikan alat rumah tangga saya. Bisa dibantu?";
      break;
  }
  
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};

export const getCityWhatsAppLink = (
  service: string,
  cityName: string,
  issue?: string
) => {
  const phoneNumber = "6282299359184";
  const message = issue
    ? `Halo Tekno Home Services, saya butuh bantuan perbaikan ${service} di wilayah ${cityName}. Kendalanya: ${issue}. Apakah ada teknisi yang bisa dijadwalkan ke lokasi saya?`
    : `Halo Tekno Home Services, saya ingin memesan layanan servis ${service} untuk area ${cityName}. Bagaimana jadwal kunjungan teknisi terdekat?`;

  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};

export const getPortfolioWhatsAppLink = (
  service: string,
  cityName: string,
  projectTitle: string,
  location: string
) => {
  const phoneNumber = "6282299359184";
  const message = `Halo Tekno Home Services, saya melihat hasil pengerjaan "${projectTitle}" di ${location} (${cityName}). Saya ingin konsultasi kendala ${service} saya di rumah. Bisa dijadwalkan teknisi?`;

  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};


