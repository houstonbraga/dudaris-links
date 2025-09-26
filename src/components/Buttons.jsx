import { Globe } from "lucide-react";

const Buttons = () => {
  const handleWhatsAppClick = () => {
    // Tenta abrir o WhatsApp Web primeiro
    const whatsappUrl = "https://wa.me/5581988611833";

    // Verifica se é mobile
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    if (isMobile) {
      // No mobile, tenta abrir o app diretamente
      window.location.href = whatsappUrl;
    } else {
      // No desktop, abre em nova aba
      const newWindow = window.open(whatsappUrl, "_blank");
      if (!newWindow) {
        // Se popup foi bloqueado, redireciona na mesma aba
        window.location.href = whatsappUrl;
      }
    }
  };

  return (
    <div className="w-[340px] space-y-2">
      <button
        onClick={handleWhatsAppClick}
        className="h-[50px] hover:opacity-90 w-full text-white rounded-full bg-blue-dudaris flex items-center justify-center font-semibold cursor-pointer"
      >
        WhatsApp
      </button>

      <a
        href="https://www.tiktok.com/@dudarimood?_t=ZM-8zyfaE1W0oW&_r=1"
        target="_blank"
        rel="noopener noreferrer"
        className="h-[50px] hover:opacity-90 w-full text-white rounded-full bg-blue-dudaris flex items-center justify-center font-semibold"
      >
        TikTok
      </a>

      <a
        href="https://www.dudarimood.com.br/"
        target="_blank"
        rel="noopener noreferrer"
        className="h-[50px] hover:opacity-90 w-full text-white rounded-full bg-blue-dudaris flex items-center justify-center gap-1 font-semibold"
      >
        Compre pelo site
        <Globe width={20} />
      </a>
    </div>
  );
};

export default Buttons;
