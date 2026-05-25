/**
 * Estilos de status para o dropdown de voluntários.
 * Cada chave corresponde a um valor de status.
 */
export const STATUS_DROPDOWN_STYLES = {
  pendente: {
    bg: "bg-[#F5C518]",
    text: "text-[#1E1E1E]",
    border: "border-[#F5C518]",
    hoverBg: "hover:bg-[#e6b800]",
    optionBg: "bg-[#FFFBE6]",
    optionHover: "hover:bg-[#FFF3B0]",
    optionText: "text-[#8B7000]",
  },
  aprovado: {
    bg: "bg-[#22C55E]",
    text: "text-white",
    border: "border-[#22C55E]",
    hoverBg: "hover:bg-[#16A34A]",
    optionBg: "bg-[#F0FDF4]",
    optionHover: "hover:bg-[#DCFCE7]",
    optionText: "text-[#166534]",
  },
  reprovado: {
    bg: "bg-[#EF4444]",
    text: "text-white",
    border: "border-[#EF4444]",
    hoverBg: "hover:bg-[#DC2626]",
    optionBg: "bg-[#FEF2F2]",
    optionHover: "hover:bg-[#FEE2E2]",
    optionText: "text-[#991B1B]",
  },
};

/**
 * Opções de status do voluntário.
 */
export const STATUS_OPTIONS = [
  { value: "pendente", label: "Pendente" },
  { value: "aprovado", label: "Aprovado" },
  { value: "reprovado", label: "Reprovado" },
];
