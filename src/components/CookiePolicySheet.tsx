import React from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import SheetBackButton from "./shared/SheetBackButton";

interface CookiePolicySheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const CookiePolicySheet = ({ isOpen, onClose }: CookiePolicySheetProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent
        side="right"
        className="!w-full sm:!w-[75vw] 2xl:!w-[66vw] sm:!max-w-[75vw] 2xl:!max-w-[66vw] overflow-y-auto bg-[#F7F7F5] border-l shadow-xl p-0"
      >
        <SheetBackButton onBack={onClose} />
        <div className="h-full pt-24 px-8">
          <div className="max-w-4xl mx-auto pb-20">
            <h1 className="text-4xl font-bold mb-8 text-[#002A38]">
              COOKIE POLICY
            </h1>
            <p className="text-gray-600 mb-6">Last updated: March 07, 2025</p>
            <div className="prose max-w-none text-gray-600">
              <p className="mb-6">
                This Cookie Policy explains how Traced Systems ("Company," "we,"
                "us," and "our") uses cookies and similar technologies to
                recognize you when you visit our website at
                <a
                  href="https://tracedsystems.com"
                  className="text-[#E4AC70] hover:text-[#C66600]"
                >
                  https://tracedsystems.com
                </a>{" "}
                ("Website"). It explains what these technologies are, why we use
                them, and your rights to control their use.
              </p>
              <p className="mb-6">
                In some cases, we may use cookies to collect personal
                information, or that becomes personal information if we combine
                it with other data.
              </p>
              <h2 className="text-2xl font-semibold mb-4 text-[#002A38]">
                What are cookies?
              </h2>
              <p className="mb-6">
                Cookies are small data files that are placed on your computer or
                mobile device when you visit a website. They are widely used to
                make websites work or function more efficiently, as well as to
                provide reporting information.
              </p>
              <p className="mb-6">
                Cookies set by the website owner (in this case, Traced Systems)
                are called "first-party cookies." Cookies set by parties other
                than the website owner are called "third-party cookies."
                Third-party cookies enable third-party features or functionality
                to be provided on or through the website (e.g., advertising,
                interactive content, and analytics). These third-party cookies
                can recognize your computer both when it visits the website in
                question and also when it visits certain other websites.
              </p>
              <h2 className="text-2xl font-semibold mb-4 text-[#002A38]">
                Why do we use cookies?
              </h2>
              <p className="mb-6">
                We use both first-party and third-party cookies for various
                reasons. Some cookies are required for technical reasons to
                ensure our Website operates properly; these are referred to as
                "essential" or "strictly necessary" cookies.
              </p>
              <p className="mb-6">
                Other cookies enable us to track and target user interests to
                enhance the experience on our Website. Third parties serve
                cookies through our Website for advertising, analytics, and
                other purposes. These are described in more detail below.
              </p>
              <h2 className="text-2xl font-semibold mb-4 text-[#002A38]">
                How can I control cookies?
              </h2>
              <p className="mb-6">
                You have the right to decide whether to accept or reject
                cookies. You can exercise your cookie rights by setting your
                preferences in the Cookie Consent Manager. This tool allows you
                to select which categories of cookies you accept or reject.
                Essential cookies cannot be rejected as they are strictly
                necessary to provide you with services.
              </p>
              <p className="mb-6">
                The Cookie Consent Manager can be found in the notification
                banner and on our Website. If you choose to reject cookies, you
                may still use our Website, but some functionality and areas may
                be restricted. You may also set or amend your web browser
                controls to accept or refuse cookies.
              </p>
              <p>
                The specific types of first-party and third-party cookies served
                through our Website and their purposes are described in the
                table below. (Note: Specific cookies may vary based on the
                website version you visit).
              </p>
              <h2 className="text-2xl font-semibold mb-4 text-[#002A38]">
                Analytics and customization cookies
              </h2>
              <table className="mb-6 w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 p-2">Name</th>
                    <th className="border border-gray-300 p-2">Purpose</th>
                    <th className="border border-gray-300 p-2">Provider</th>
                    <th className="border border-gray-300 p-2">Service</th>
                    <th className="border border-gray-300 p-2">Type</th>
                    <th className="border border-gray-300 p-2">Expires</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2">s7</td>
                    <td className="border border-gray-300 p-2">
                      Gather data regarding site usage and user behavior.
                    </td>
                    <td className="border border-gray-300 p-2">
                      janf.tionshare.com
                    </td>
                    <td className="border border-gray-300 p-2">
                      Adobe Analytics
                    </td>
                    <td className="border border-gray-300 p-2">
                      Server cookie
                    </td>
                    <td className="border border-gray-300 p-2">Session</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">ga#</td>
                    <td className="border border-gray-300 p-2">
                      Distinguishes individual users using a randomly generated
                      number.
                    </td>
                    <td className="border border-gray-300 p-2">
                      tracedsystems.com
                    </td>
                    <td className="border border-gray-300 p-2">
                      Google Analytics
                    </td>
                    <td className="border border-gray-300 p-2">HTTP cookie</td>
                    <td className="border border-gray-300 p-2">
                      1 year 1 month 4 days
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">_ga</td>
                    <td className="border border-gray-300 p-2">
                      Records a particular ID used to generate website usage
                      data by the user.
                    </td>
                    <td className="border border-gray-300 p-2">
                      tracedsystems.com
                    </td>
                    <td className="border border-gray-300 p-2">
                      Google Analytics
                    </td>
                    <td className="border border-gray-300 p-2">HTTP cookie</td>
                    <td className="border border-gray-300 p-2">
                      1 year 1 month 4 days
                    </td>
                  </tr>
                </tbody>
              </table>
              <h2 className="text-2xl font-semibold mb-4 text-[#002A38]">
                How can I control cookies on my browser?
              </h2>
              <p className="mb-6">
                The method for refusing cookies through your web browser
                controls varies depending on the browser. You should visit your
                browser’s help menu for more details. Below are links to manage
                cookies on popular browsers:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Chrome</li>
                <li>Internet Explorer</li>
                <li>Firefox</li>
                <li>Safari</li>
                <li>Edge</li>
                <li>Opera</li>
              </ul>
              <p className="mb-6">
                Additionally, most advertising networks allow you to opt out of
                targeted advertising. For more information, visit:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Digital Advertising Alliance</li>
                <li>Digital Advertising Alliance of Canada</li>
                <li>European Interactive Digital Advertising Alliance</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 text-[#002A38]">
                What about other tracking technologies, like web beacons?
              </h2>
              <p className="mb-6">
                Cookies are not the only way to recognize or track visitors to a
                website. We may use other similar technologies, such as web
                beacons (also called "tracking pixels" or "clear GIFs"). These
                are tiny graphic files that contain a unique identifier,
                enabling us to recognize when someone has visited our Website or
                opened an email containing them.
              </p>
              <p className="mb-6">These technologies allow us to:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>
                  Monitor traffic patterns of users from one page within a
                  website to another.
                </li>
                <li>Deliver or communicate with cookies.</li>
                <li>
                  Understand whether you came to the website from an
                  advertisement on a third-party website.
                </li>
                <li>Improve site performance.</li>
                <li>Measure the success of email marketing campaigns.</li>
              </ul>
              <p className="mb-6">
                In many instances, these technologies rely on cookies to
                function properly, so declining cookies may impair their
                functionality.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-[#002A38]">
                Do you use Flash cookies or Local Shared Objects?
              </h2>
              <p className="mb-6">
                Websites may also use Flash Cookies (also known as Local Shared
                Objects or "LSOs") to store information about how you use our
                services, for fraud prevention, and for other site operations.
              </p>
              <p className="mb-6">
                If you do not want Flash Cookies stored on your computer, you
                can adjust your Flash Player settings using the tools in the
                Website Storage Settings Panel. You can also control Flash
                Cookies by going to the Global Storage Settings Panel.
              </p>
              <p className="mb-6">
                Please note that disabling Flash Cookies may affect some website
                functionality.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-[#002A38]">
                Do you serve targeted advertising?
              </h2>
              <p className="mb-6">
                Third parties may serve cookies on your device to display
                advertisements through our Website. These companies may collect
                information about your visits to this and other websites to show
                relevant ads based on your interests.
              </p>
              <p className="mb-6">
                They may also use tracking pixels or web beacons to measure ad
                effectiveness. This process does not allow us or them to
                identify your name, contact details, or other directly
                identifiable data unless you choose to provide it.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-[#002A38]">
                How often will you update this Cookie Policy?
              </h2>
              <p className="mb-6">
                We may update this Cookie Policy from time to time to reflect
                changes in our use of cookies or for legal, regulatory, or
                operational reasons. Please revisit this page regularly to stay
                informed about our use of cookies.
              </p>
              <p className="mb-6">
                The date at the top of this policy indicates when it was last
                updated.
              </p>

              <p>
                Traced Systems
                <br />
                Njalsgade 76, 4th floor
                <br />
                Copenhagen, Denmark 2300
                <br />
                Denmark
                <br />
              </p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CookiePolicySheet;
