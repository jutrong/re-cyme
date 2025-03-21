import type { Metadata } from "next";
import '../styles/index'

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ko">
      <body className="w-screen h-screen bg-background flex items-center justify-center ruler-pattern">
        <div className={`relative w-[1200px] h-[700px] bg-second-background rounded-[14px] border-[0.5px] border-gray-500 
          before:content-[''] before:absolute before:top-[100%] before:left-[0%] before:rotate-45 before:translate-x-[265px] before:translate-y-[-50%] before:w-[12px] before:h-[12px] before:bg-background before:border-l-[0.5px] before:border-t-[0.5px] before:border-gray-500 before:z-10
          after:content-[''] after:absolute after:top-[-0%] after:left-[0%] after:rotate-225 after:translate-x-[265px] after:translate-y-[-50%] after:w-[12px] after:h-[12px] after:bg-background after:border-l-[0.5px] after:border-t-[0.5px] after:border-gray-500 after:z-10`}>
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[96%] h-[94%] border-[1px] border-white border-dashed rounded-[14px] "
          >
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[98%] h-[97%] bg-white rounded-[14px]
             before:content-[''] before:absolute before:top-[100%] before:left-[0%] before:rotate-45 before:translate-x-[229px] before:translate-y-[-50%] before:w-[12px] before:h-[12px] before:bg-second-background before:z-10
             after:content-[''] after:absolute after:top-[-0%] after:left-[0%] after:rotate-225 after:translate-x-[229px] after:translate-y-[-50%] after:w-[12px] after:h-[12px] after:bg-second-background after:z-10">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html >
  );
};