import React, { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  getCookieConsent,
  saveCookieConsent,
  defaultConsent,
  type CookieConsent,
} from "@/utils/cookieConsent";

const CookieConsentBanner = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [preferences, setPreferences] = useState<CookieConsent>(defaultConsent);

  useEffect(() => {
    const existingConsent = getCookieConsent();
    if (!existingConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allConsent: CookieConsent = {
      ...defaultConsent,
      functional: true,
      statistical: true,
      marketing: true,
    };
    saveCookieConsent(allConsent);
    setShowBanner(false);
    setIsOpen(false);
  };

  const handleRejectAll = () => {
    saveCookieConsent(defaultConsent);
    setShowBanner(false);
    setIsOpen(false);
  };

  const handleSavePreferences = () => {
    saveCookieConsent(preferences);
    setShowBanner(false);
    setIsOpen(false);
  };

  const togglePreference = (
    category: keyof Omit<CookieConsent, "timestamp">
  ) => {
    if (category === "necessary") return; // Cannot toggle necessary cookies
    setPreferences((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const openPreferences = () => {
    const currentConsent = getCookieConsent() || defaultConsent;
    setPreferences(currentConsent);
    setIsOpen(true);
  };

  if (!showBanner && !isOpen)
    return (
      <Button
        onClick={openPreferences}
        className="fixed bottom-4 right-4 z-50 bg-white/80 hover:bg-white text-gray-600 text-sm py-2 px-3 rounded-md shadow-sm border border-gray-200 backdrop-blur-sm transition-all duration-200 hover:shadow-md"
        variant="ghost"
      >
        Cookie Preferences
      </Button>
    );

  return (
    <>
      {/* Cookie Banner */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-white p-6 shadow-lg z-50 border-t">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-[#173A44] mb-2">
                  We value your privacy
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  We use cookies to enhance your browsing experience, serve
                  personalized content, and analyze our traffic. You can choose
                  which cookies you want to allow.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <Button
                  variant="outline"
                  onClick={handleRejectAll}
                  className="flex-1 sm:flex-none"
                >
                  Reject All
                </Button>
                <Button
                  variant="outline"
                  onClick={openPreferences}
                  className="flex-1 sm:flex-none"
                >
                  Customize
                </Button>
                <Button
                  onClick={handleAcceptAll}
                  className="flex-1 sm:flex-none bg-[#173A44] hover:bg-[#0D2328]"
                >
                  Accept All
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Preferences Sheet */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className="sm:max-w-[540px]">
          <SheetHeader>
            <SheetTitle>Cookie Preferences</SheetTitle>
            <SheetDescription>
              Manage your cookie preferences. You can enable or disable
              different types of cookies below.
            </SheetDescription>
          </SheetHeader>

          <div className="mt-6 space-y-6">
            {/* Necessary Cookies */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="font-semibold">Necessary Cookies</Label>
                <Switch checked={true} disabled />
              </div>
              <p className="text-sm text-gray-500">
                These cookies are essential for the website to function
                properly.
              </p>
            </div>

            <Separator />

            {/* Functional Cookies */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="font-semibold">Functional Cookies</Label>
                <Switch
                  checked={preferences.functional}
                  onCheckedChange={() => togglePreference("functional")}
                />
              </div>
              <p className="text-sm text-gray-500">
                These cookies enable enhanced functionality and personalization.
              </p>
            </div>

            <Separator />

            {/* Statistical Cookies */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="font-semibold">Statistical Cookies</Label>
                <Switch
                  checked={preferences.statistical}
                  onCheckedChange={() => togglePreference("statistical")}
                />
              </div>
              <p className="text-sm text-gray-500">
                These cookies help us understand how visitors interact with the
                website.
              </p>
            </div>

            <Separator />

            {/* Marketing Cookies */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="font-semibold">Marketing Cookies</Label>
                <Switch
                  checked={preferences.marketing}
                  onCheckedChange={() => togglePreference("marketing")}
                />
              </div>
              <p className="text-sm text-gray-500">
                These cookies are used to deliver personalized advertisements.
              </p>
            </div>

            <div className="flex justify-end gap-3 mt-8">
              <Button variant="outline" onClick={handleRejectAll}>
                Reject All
              </Button>
              <Button
                onClick={handleSavePreferences}
                className="bg-[#173A44] hover:bg-[#0D2328]"
              >
                Save Preferences
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default CookieConsentBanner;
