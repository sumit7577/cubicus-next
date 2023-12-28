"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <>
      {/* <!-- ===== About Two Start ===== --> */}
      <section id="about" className="overflow-hidden pb-20 lg:pb-5 xl:pb-5">
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="md:flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-1/2"
            >
              <h4 className="font-bold font-sans text-red-500">
                About Us
              </h4>
              <h2 className="relative mb-6 text-2xl font-bold text-black dark:text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita optio, voluptates officiis fugiat maiores labore ullam facilis quas velit ratione vero sed itaque quis atque accusamus non veritatis aperiam iste autem, enim quo ex? Maiores, qui aperiam? Recusandae, vitae qui?
              </p>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="./images/about/about-light-02.svg"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="./images/about/about-dark-02.svg"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Two End ===== --> */}
    </>
  );
};

export default About;
