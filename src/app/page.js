"use client";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import * as Asset from "@/assets/services-assets";
import MARQUEE from "@/components/slider-home.";
import * as SliderAsset from "@/assets/slider-home-asset";
import MeetTeam from "@/components/meet-team";
import ContactUs from "@/components/contact-us";
import Accordion from "@/components/faQs";
import ContactForm from "@/components/contact-form";
import * as TrustedAssets from "@/assets/trusted-partner-asset";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services
        title={Asset.serviceAssetOne.heading}
        titleShade={Asset.serviceAssetOne.icon}
        text={Asset.serviceAssetOne.text}
        btnText={Asset.serviceAssetOne.btnText}
        cardAsset={Asset.serviceCardAsset}
      />
      <MARQUEE asset={SliderAsset} title={"Our Clinic"} />
      <MeetTeam />
      <ContactUs />
      <Accordion />
      <ContactForm />
      <MARQUEE
        asset={TrustedAssets}
        title={"Our Trusted Partners"}
        theme={"light"}
        mode={"two"}
      />
      <Footer />
    </main>
  );
}
