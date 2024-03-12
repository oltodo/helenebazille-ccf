"use client";

import { SessionPicture } from "@/components/Home/components/screens/SessionPicture";
import { Expertise } from "@/components/Home/components/screens/Expertise";
import { Jumbotron } from "@/components/Home/components/screens/Jumbotron";
import { AboutMe } from "@/components/Home/components/screens/AboutMe";
import { BookNow } from "@/components/Home/components/screens/BookNow";
import { CCF } from "@/components/Home/components/screens/CCF";
import { SessionType } from "@/components/BookDialog/types";
import { BookDialog } from "@/components/BookDialog";
import { Header } from "@/components/Header";
import { useInView } from "framer-motion";
import { useState, useRef } from "react";
import clsx from "clsx/lite";

import appContext from "@/libs/appContext";

export default function Home() {
  // const [ready, setReady] = useState(true);

  // const handleReady = useCallback(() => {
  //   setReady(true);
  // }, []);

  const [defaultSessionType, setDefaultSessionType] = useState<SessionType>();
  const [menuOpened, setMenuOpened] = useState(false);
  const [bookingOpened, setBookingOpened] = useState(false);

  const ccfRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const bookNowRef = useRef<HTMLDivElement>(null);

  const ccfInView = useInView(ccfRef);
  const aboutMeInView = useInView(aboutMeRef);
  const bookNowInView = useInView(bookNowRef, { amount: 0.2 });

  return (
    <appContext.Provider
      value={{ menuOpened, setMenuOpened, bookingOpened, setBookingOpened }}
    >
      <main
        className={clsx(
          "mb-[20vh] min-h-[100vh] w-[100vw] transition-colors duration-200",
          // !ready && "h-[100vh] overflow-hidden",
          bookNowInView && "bg-gunmetal duration-1000",
        )}
      >
        <Header
          onClickBook={() => {
            setDefaultSessionType(undefined);
            setBookingOpened(true);
          }}
          mode={
            (aboutMeInView && !ccfInView) || bookNowInView ? "light" : "dark"
          }
        />
        <Jumbotron />
        <CCF ref={ccfRef} />
        <AboutMe
          onClickContactMe={() => setMenuOpened(true)}
          ref={aboutMeRef}
        />
        <Expertise />
        <SessionPicture />
        <BookNow
          onSelectSessionType={(sessionType) => {
            setDefaultSessionType(sessionType);
            setBookingOpened(true);
          }}
          inView={bookNowInView}
          ref={bookNowRef}
        />

        <BookDialog
          open={bookingOpened}
          forceSessionType={defaultSessionType}
          onClose={() => {
            setDefaultSessionType(undefined);
            setBookingOpened(false);
          }}
        />
      </main>
    </appContext.Provider>
  );
}
