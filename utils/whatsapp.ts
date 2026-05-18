/**
 * Helper utility to generate WhatsApp deep links with custom pre-filled messages.
 * This allows the business to know exactly which button/section the customer clicked.
 */
export const getWhatsAppLink = (context: "general" | "hero" | "cta" | "portfolio" = "general") => {
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
    case "general":
    default:
      message = "Halo Tekno Home Services, saya ingin berkonsultasi mengenai perbaikan alat rumah tangga saya. Bisa dibantu?";
      break;
  }
  
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};
