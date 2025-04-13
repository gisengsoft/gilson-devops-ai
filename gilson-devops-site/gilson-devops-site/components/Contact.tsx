
import { FaWhatsapp, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-8">Contato</h2>
      <div className="flex justify-center space-x-8 text-3xl">
        <a href="https://wa.me/5579999002795" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="hover:text-green-500" />
        </a>
        <a href="https://github.com/gisengsoft" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-gray-800" />
        </a>
        <a href="mailto:gilson.engsoft@email.com">
          <FaEnvelope className="hover:text-red-500" />
        </a>
      </div>
    </section>
  );
}
