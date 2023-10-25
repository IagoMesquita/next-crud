import { useState } from "react";

export default function useTableOrForm() {
  const [isVisible, setIsVisible] = useState<"table" | "form">("table");

  const displayTable = () => setIsVisible('table')
  const displayForm = () => setIsVisible('form');

  return {
    visibleTable: isVisible === 'table',
    displayTable,
    displayForm,
  }
  
}