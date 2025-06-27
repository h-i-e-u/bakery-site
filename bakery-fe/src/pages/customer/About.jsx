import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const chefs = [
    {
      name: "Chef 1",
      role: "Head Chef",
      image: "/man.png",
      description: "With over 15 years of experience in artisanal baking.",
      socials: {
        instagram: "#",
        twitter: "#",
        facebook: "#",
      },
    },
    {
      name: "Chef 2",
      role: "Pastry Chef",
      image: "/man.png",
      description: "Specializes in creating exquisite French pastries.",
      socials: {
        instagram: "#",
        twitter: "#",
        facebook: "#",
      },
    },
    {
      name: "Chef 3",
      role: "Bread Specialist",
      image: "/man.png",
      description: "Master of traditional and modern bread-making techniques.",
      socials: {
        instagram: "#",
        twitter: "#",
        facebook: "#",
      },
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 font-amaranth">
          {t("About Us")}
        </h1>
        <p className="max-w-2xl mx-auto">
          {t(
            "We're passionate about creating delicious baked goods using traditional recipes and the finest ingredients. Every day, our master bakers craft fresh breads, pastries, and cakes for our community."
          )}
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="card bg-base-200">
          <div className="card-body">
            <h2 className="card-title font-amaranth">Our Story</h2>
            <p>Không có cái gì hết...</p>
          </div>
        </div>
        <div className="card bg-base-200">
          <div className="card-body">
            <h2 className="card-title font-amaranth">Our Values</h2>
            <p>Ko có lun...</p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6 font-amaranth">
          {t("Visit Us")}
        </h2>
        <div className="max-w-md mx-auto">
          <span className="mb-4 inline-flex items-center gap-2">
            <Icon icon="mdi:google-maps" />70 đường Tô Ký, phường Tân Chánh Hiệp, Quận 12
          </span>
          <p className="mb-4">Mon-Sat: 7am - 7pm</p>
          <p>Sunday: 8am - 3pm</p>
        </div>
      </section>
      <div className="m-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1497.901004870359!2d106.61834505248578!3d10.865170258237539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752b2a11844fb9%3A0xbed3d5f0a6d6e0fe!2zVHLGsOG7nW5nIMSQ4bqhaSBI4buNYyBHaWFvIFRow7RuZyBW4bqtbiBU4bqjaSBUaMOgbmggUGjhu5EgSOG7kyBDaMOtIE1pbmggKFVUSCkgLSBDxqEgc-G7nyAz!5e0!3m2!1svi!2s!4v1750995197534!5m2!1svi!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Our Team Section */}
      <section className="py-12">
        <h2 className="text-4xl font-bold text-center mb-12 font-amaranth">
          {t("Meet Our Team")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chefs.map((chef, index) => (
            <div key={index} className="card bg-base-100 shadow-xl">
              <figure className="relative">
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <h3 className="text-xl font-bold text-white">{chef.name}</h3>
                  <p className="text-white/80">{chef.role}</p>
                </div>
              </figure>
              <div className="card-body">
                <p className="text-center mb-4">{chef.description}</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={chef.socials.instagram}
                    className="btn btn-circle btn-ghost"
                  >
                    <Icon icon="mdi:instagram" className="text-xl" />
                  </a>
                  <a
                    href={chef.socials.twitter}
                    className="btn btn-circle btn-ghost"
                  >
                    <Icon icon="mdi:twitter" className="text-xl" />
                  </a>
                  <a
                    href={chef.socials.facebook}
                    className="btn btn-circle btn-ghost"
                  >
                    <Icon icon="mdi:facebook" className="text-xl" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
