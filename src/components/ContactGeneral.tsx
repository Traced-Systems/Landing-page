
import React, { useState } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import SheetBackButton from "./shared/SheetBackButton";
import Button1 from "./ui/button-1";
import emailjs from "emailjs-com";
import { FloatingInput } from "./ui/floating-input";
import { Loader, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactGeneralProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactGeneral = ({ isOpen, onClose }: ContactGeneralProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const emailParams = {
      from_name: formData.get("from_name") as string,
      from_email: formData.get("from_email") as string,
      company_name: formData.get("company_name") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    console.log("Sending email with params:", emailParams);

    emailjs
      .send(
        "service_z7y8ym8",
        "template_uvaie1r",
        emailParams,
        "N8xBUF-xOQnWEdxCb"
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          toast({
            title: "Message Sent Successfully",
            description: "Thank you for contacting us. We'll get back to you soon!",
            className: "fixed top-6 left-1/2 transform -translate-x-1/2 bg-green-50 border-green-200 z-[10000] min-w-[300px] shadow-lg",
            action: <CheckCircle2 className="h-5 w-5 text-green-500" />,
          });
          form.reset();
          setIsSubmitting(false);
        },
        (error) => {
          console.error("Error sending email:", error);
          toast({
            title: "Error Sending Message",
            description: "Please try again later.",
            variant: "destructive",
            className: "fixed top-6 left-1/2 transform -translate-x-1/2 z-[10000] min-w-[300px] shadow-lg",
          });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent 
        side="right" 
        className="!w-full sm:!w-[75vw] 2xl:!w-[66vw] sm:!max-w-[75vw] 2xl:!max-w-[66vw] overflow-y-auto bg-[#F7F7F5] border-l shadow-xl p-0 z-[9999]"
      >
        <SheetBackButton onBack={onClose} />

        <div className="h-full flex flex-col pt-16">
          <div className="text-center mb-16 relative px-4">
            <h1 className="text-4xl font-bold text-primary mb-4">Contact Us</h1>
          </div>

          <div className="px-4 sm:px-8 mb-12">
            <form
              onSubmit={handleSubmit}
              className="space-y-8 max-w-2xl mx-auto bg-[#f1f1f1] p-8 rounded-lg"
            >
              <div>
                <FloatingInput
                  name="from_name"
                  label="Your Name"
                  required
                />
              </div>

              <div>
                <FloatingInput
                  name="company_name"
                  label="Company Name"
                  required
                />
              </div>

              <div>
                <FloatingInput
                  name="from_email"
                  type="email"
                  label="Email Address"
                  required
                />
              </div>

              <div className="relative">
                <Select name="subject" required>
                  <SelectTrigger className="w-full bg-white px-6 py-3 text-base h-auto border border-gray-300 rounded-md">
                    <SelectValue placeholder="Select Subject" />
                  </SelectTrigger>
                  <SelectContent className="bg-white z-[9999] min-w-[200px]">
                    <SelectItem value="general">General Inquiries</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="press">Press</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Message"
                  required
                  className="bg-white px-6 py-3 text-base min-h-[150px]"
                />
              </div>

              <div className="flex justify-center pt-4">
                <Button1 type="submit" disabled={isSubmitting} className="relative">
                  {isSubmitting ? (
                    <Loader className="w-5 h-5 animate-spin" />
                  ) : (
                    "Submit"
                  )}
                </Button1>
              </div>
            </form>
          </div>

          <div className="bg-gradient-to-br from-[#FAFAFA] to-[#E8EDEF] p-8 mt-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-12">
                Elevate Your Brand, Stay Compliant
              </h2>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="text-center">
                  <div className="w-56 h-56 mx-auto mb-6">
                    <img
                      src="/lovable-uploads/093c0721-b2bf-4b0e-8bab-76817fdaccb7.png"
                      alt="Farhad Rasouli"
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                  <h3 className="font-bold text-lg">Farhad Rasouli</h3>
                  <p className="text-gray-600 mb-4">
                    Executive Lead & Co-Founder
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-56 h-56 mx-auto mb-6">
                    <img
                      src="/lovable-uploads/718a19dc-08d6-4a18-9312-d4deaa31be03.png"
                      alt="David Dolhomut"
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                  <h3 className="font-bold text-lg">David Dolhomut</h3>
                  <p className="text-gray-600 mb-4">
                    Head of Partnerships & Business Development
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ContactGeneral;
