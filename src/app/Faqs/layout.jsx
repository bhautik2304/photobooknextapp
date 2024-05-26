import Script from "next/script";
export const metadata = {
  title: "Photokrafft - Faqs",
  description: "Begin your album printing journey here.",
};

export default function RootLayout({ children }) {
  return (
    <>
      {/* {children} */}
      <div
        class="elfsight-app-f01e3246-9720-4838-86f8-ce215a2d706e"
        data-elfsight-app-lazy
      ></div>
      <Script
        src="https://static.elfsight.com/platform/platform.js"
        data-use-service-core
        defer
      ></Script>
    </>
  );
}
