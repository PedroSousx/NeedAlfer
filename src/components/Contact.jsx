import Instagram from '../assets/instagrampreto.png';
import Whatsapp from '../assets/whatsapppreto.png';
import Location from '../assets/locationpreto.png';
import Facebook from '../assets/facebook.png';

function Contact() {
  return (
    <section id="contato" className="py-20 px-4 bg-amber-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-amber-900 mb-4">
          Fale Conosco
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Tem dúvidas ou gostaria de fazer uma encomenda especial?
        </p>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-32 mt-16">
          <div className="text-center">
            <img src={Whatsapp} alt="WhatsApp" className="w-24 mx-auto mb-8" />
            <h3 className="uppercase text-black text-3xl font-semibold pb-5">
              WhatsApp
            </h3>
            {/* <p className="text-center text-black mx-4 text-xl">
              Nossa unidade fica em Franca — venha nos visitar!
            </p>
            <p className="mt-4">
              <a
                className="text-amber-600 underline"
                href="https://maps.app.goo.gl/Dt4Ld5yWZpAZ2LZW8"
                target="_blank"
                rel="noreferrer"
              >
                R. Virgínio Pereira, 1739 - Estacao, Franca - SP
              </a> */}
                          <p className="text-center text-black mx-4 text-xl">
              Atendimento rápido e direto pelo WhatsApp.
            </p>
            <p className="mt-4">
              <a
                className="text-amber-600 underline"
                href="https://wa.me/5516999973295"
                target="_blank"
                rel="noreferrer"
              >
                (16) 99290-6304
              </a>
            </p>
          </div>

          <div className="text-center">
            <img src={ Facebook } alt="Facebook" className="w-24 mx-auto mb-8" />            
            <h3 className="uppercase text-black text-3xl font-semibold pb-5">
              Facebook
            </h3>
            <p className="text-center text-black mx-4 text-xl">
              Acompanhe de perto nosso dia a dia pelas postagens!
            </p>
            <p className="mt-4">
              <a
                className="text-amber-600 underline"
                href="https://wa.me/5516999973295"
                target="_blank"
                rel="noreferrer"
              >
                (16) 99290-6304
              </a>
            </p>
          </div>

          <div className="text-center">
            <img src={ Instagram } alt="Instagram" className="w-24 mx-auto mb-8" />
            <h3 className="uppercase text-black text-3xl font-semibold pb-5">
              Instagram
            </h3>
            <p className="text-center text-black mx-4 text-xl">
              Siga nosso perfil para novidades e fotos dos produtos.
            </p>
            <p className="mt-4">
              <a
                className="text-amber-600 underline"
                href="https://www.instagram.com/need.alfer/"
                target="_blank"
                rel="noreferrer"
              >
                @need.alfer
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">Ou entre em contato direto:</p>
          <a
            href="https://wa.me/+5516999973295"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            💬 Conversar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
