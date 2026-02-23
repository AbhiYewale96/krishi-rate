import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, Send, Phone, Mail, MessageCircle, Clock } from "lucide-react";
import { useState } from "react";
import { getTranslation } from "@/utils/translations";
import { Language } from "@/utils/translations";

interface HelpDeskProps {
  language: Language;
}

export const HelpDesk = ({ language }: HelpDeskProps) => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Check if all fields are filled
    if (!name.trim() || !email.trim() || !category || !query.trim()) {
      return;
    }
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setQuery("");
      setCategory("");
      setName("");
      setEmail("");
    }, 3000);
  };

  const quickActions = [
    {
      title: "Toll-Free Helpline",
      description: "1800-123-4567",
      icon: <Phone className="w-5 h-5" />,
      available: "24/7"
    },
    {
      title: "Email Support",
      description: "support@kisanmandi.gov.in",
      icon: <Mail className="w-5 h-5" />,
      available: "Business Hours"
    },
    {
      title: "WhatsApp Chat",
      description: "+91-98765-43210",
      icon: <MessageCircle className="w-5 h-5" />,
      available: "9 AM - 6 PM"
    }
  ];

  const categories = [
    "Mandi Rate Inquiry",
    "Fertilizer Information",
    "Pesticide Guidance",
    "Government Schemes",
    "Technical Support",
    "Market Access",
    "Payment Issues",
    "Other"
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-info" />
          {getTranslation('helpDesk', language)}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {!isSubmitted ? (
          <div className="space-y-6">
            {/* Quick Actions */}
            <div>
              <h4 className="font-medium text-foreground mb-3">Quick Contact</h4>
              <div className="grid grid-cols-1 gap-3">
                {quickActions.map((action, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-info/10 rounded-lg text-info">
                        {action.icon}
                      </div>
                      <div>
                        <h5 className="font-medium text-foreground">{action.title}</h5>
                        <p className="text-sm text-muted-foreground">{action.description}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs border-info text-info">
                      <Clock className="w-3 h-3 mr-1" />
                      {action.available}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>

            {/* Query Form */}
            <div>
              <h4 className="font-medium text-foreground mb-3">{getTranslation('submitQuery', language)}</h4>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">
                    {getTranslation('name', language)} *
                  </label>
                  <Input
                    placeholder={getTranslation('enterName', language)}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">
                    {getTranslation('email', language)} *
                  </label>
                  <Input
                    type="email"
                    placeholder={getTranslation('enterEmail', language)}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">
                    Category *
                  </label>
                  <Select value={category} onValueChange={setCategory} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select query category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">
                    {getTranslation('query', language)} *
                  </label>
                  <Textarea
                    placeholder={getTranslation('describeQuery', language)}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    rows={4}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={!name.trim() || !email.trim() || !category || !query.trim()}
                >
                  <Send className="w-4 h-4 mr-2" />
                  {getTranslation('submit', language)}
                </Button>
              </form>
            </div>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <HelpCircle className="w-8 h-8 text-success" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">Query Submitted Successfully!</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Your query has been forwarded to the government support team. 
              You will receive a response within 24-48 hours.
            </p>
            <Badge className="bg-success text-success-foreground">
              Reference ID: KMP-{Date.now().toString().slice(-6)}
            </Badge>
          </div>
        )}
      </CardContent>
    </Card>
  );
};