import { ChevronLeft } from "lucide-react";

/**
 * Título de seção/página admin com botão de voltar opcional.
 *
 * @param {{
 *   title: string,
 *   onBack?: () => void,
 *   backTitle?: string,
 *   rightContent?: React.ReactNode,
 *   className?: string
 * }} props
 */
export default function SectionTitle({
  title,
  onBack,
  backTitle = "Voltar",
  rightContent,
  className = "",
}) {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      <h1
        className="font-black text-[#1E1E1E]"
        style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)" }}
      >
        {title}
      </h1>

      {/* Botão de voltar ou conteúdo customizado à direita */}
      {onBack ? (
        <button
          onClick={onBack}
          className="w-10 h-10 rounded-full bg-[#FF6D2C] hover:bg-[#e65c18] flex items-center justify-center transition-colors shadow-md"
          title={backTitle}
        >
          <ChevronLeft size={22} className="text-white" />
        </button>
      ) : rightContent ? (
        rightContent
      ) : null}
    </div>
  );
}
