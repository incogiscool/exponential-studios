import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { InlineWidget } from "react-calendly";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Offer from "../components/Offer";
import frontPhoto from "../public/sitePic2ndRev.png";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Exponential Studios</title>
        <meta
          name="description"
          content="Sit back, relax, and watch the numbers roll in."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div>
        <section className="items-center sm:mr-32 sm:ml-32 mt-32 flex sm:text-left text-center">
          <div>
            <h1 className="font-bold sm:text-5xl sm:max-w-2xl text-3xl">
              Reach <span className="text-rose-500">exponential growth</span>,
              without needing to touch your ads manager.
            </h1>
            <p className="mt-6 max-w-2xl font-medium text-slate-100">
              We can manage everything for you, from creatives, to social media
              and advertisement management. Just sit back, relax and watch the
              numbers roll in.
            </p>
          </div>
          <div className="xl:block hidden">
            <Image src={frontPhoto} height="700px" width="900px" />
          </div>
        </section>
        <section className="text-center sm:m-5 m-12">
          <h1 className="text-5xl font-bold">What we offer</h1>
          <div className="m-24 items-center flex flex-wrap justify-center">
            <Offer
              title="Digital Marketing"
              desc="We specialize in Facebook, Instagram, and Tiktok advertisements."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                  />
                </svg>
              }
            />
            <Offer
              title="Web Development"
              desc="Fully custom websites in ReactJS using the NextJS framework."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                  />
                </svg>
              }
            />
            <Offer
              title="Graphic Design"
              desc="Top-of-the-line graphic design created by a high-level artist."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                  />
                </svg>
              }
            />
            <Offer
              title="Video Editing & Compositing"
              desc="We can provide video editing and profesional compositing."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                  />
                </svg>
              }
            />
          </div>
        </section>
        <hr></hr>
        <section className="m-5">
          <div className="m-24">
            <h1 className="sm:text-5xl text-3xl font-bold text-center">
              <span className="text-rose-500">Book a call</span> with us
            </h1>
            <div className="flex text-center justify-center m-24">
              <div className="m-5">
                <InlineWidget
                  styles={{
                    maxWidth: "500px",
                    minWidth: "450px",
                    height: "650px",
                  }}
                  url="https://calendly.com/exponentialstudios/initial-call"
                />
              </div>
              <div className="m-5 hidden xl:block">
                <h1 className="font-bold text-3xl">How to Book:</h1>
                <p className="max-w-xl mt-8 mb-8 text-lg font-medium">
                  First of all, select an appropriate date for you through this
                  calendar. Then, select an appropriate time. You should see a
                  form with inputs you must enter. Enter all the details asked
                  so we can know more about what you guys do.
                </p>
                <hr />
                <p className="font-bold text-lg mt-8">
                  Please only set a meeting if you are serious about working
                  with us.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
