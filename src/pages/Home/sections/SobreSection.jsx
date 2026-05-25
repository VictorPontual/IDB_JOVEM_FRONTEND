import { Link } from "react-router-dom";
import cultoImg from "../../../assets/images/culto.png";

export default function SobreSection() {
  return (
    <section className="w-full flex flex-col md:flex-row min-h-[400px]">
      {/* Imagem - Metade Esquerda */}
      <div className="w-full md:w-1/2">
        <img
          src={cultoImg}
          alt="Sobre o IDB Jovem"
          className="w-full h-full min-h-[300px] md:min-h-[400px] object-cover"
        />
      </div>

      {/* Texto - Metade Direita */}
      <div className="w-full md:w-1/2 bg-[#D5650D] flex flex-col justify-center items-center py-12 md:py-16 px-8 md:px-12 text-center">
        <h2
          className="font-handwriting text-white leading-none mb-8"
          style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)" }}
        >
          CONHEÇA O IDB
          <br />
          JOVEM
        </h2>
        <div className="max-w-md w-full mx-auto text-black text-base md:text-lg leading-relaxed mb-10 text-left">
          <p className="mb-4">
            A IDB Jovem é um movimento feito para quem busca viver a fé de forma real e com propósito.
          </p>
          <p>
            Com encontros, eventos e uma comunidade acolhedora, é o lugar ideal para crescer, fazer amizades e se conectar com Deus.
          </p>
        </div>
        <Link
          to="/sobre"
          className="inline-block bg-white text-[#D5650D] hover:bg-neutral-100 transition-colors px-10 py-2 md:py-3 rounded-[2rem] text-lg md:text-xl tracking-wide shadow-sm"
        >
          Saiba mais
        </Link>
      </div>
    </section>
  );
}
