import { Globe } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { Language } from "@/utils/translations";

interface LanguageSwitcherProps {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const LanguageSwitcher = ({ language, setLanguage }: LanguageSwitcherProps) => {
  const onChange = (value: Language) => {
    try {
      localStorage.setItem("app_language", value);
      window.dispatchEvent(new CustomEvent("app_language_change", { detail: value }));
    } catch {}
    setLanguage(value);
  };

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-primary" />
      <Select value={language} onValueChange={onChange}>
        <SelectTrigger className="w-[140px] text-foreground">
          <SelectValue placeholder="Language" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="mr">मराठी</SelectItem>
          <SelectItem value="hi">हिन्दी</SelectItem>
          <SelectItem value="gu">ગુજરાતી</SelectItem>
          <SelectItem value="te">తెలుగు</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};