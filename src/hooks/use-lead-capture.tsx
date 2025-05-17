
import { useState } from "react";

export const useLeadCapture = () => {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);
  const [leadSource, setLeadSource] = useState<string>("general");

  const openLeadForm = (source: string = "general") => {
    setLeadSource(source);
    setIsLeadFormOpen(true);
  };

  return {
    isLeadFormOpen,
    setIsLeadFormOpen,
    leadSource,
    openLeadForm
  };
};
