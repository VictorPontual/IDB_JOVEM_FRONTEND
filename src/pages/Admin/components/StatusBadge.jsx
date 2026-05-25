import Dropdown from "../../../components/ui/Dropdown";
import { STATUS_DROPDOWN_STYLES, STATUS_OPTIONS } from "../../../components/ui/Dropdown/styles";

/**
 * Dropdown de status com cores dinâmicas para voluntários.
 * Wrapper especializado do componente genérico Dropdown.
 *
 * @param {{ status: string, onChange: (newStatus: string) => void }} props
 */
export default function StatusBadge({ status, onChange }) {
  return (
    <Dropdown
      value={status}
      onChange={onChange}
      options={STATUS_OPTIONS}
      styles={STATUS_DROPDOWN_STYLES}
    />
  );
}
