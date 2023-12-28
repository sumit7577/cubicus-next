"use client";

import { motion } from "framer-motion";
import { HeroIcon } from "../Icon";

const serviceData = [
    {
        id: 1,
        title: "UI/UX Design",
        description: "something somehting"
    },
    {
        id: 2,
        title: "Mobile App Development",
        description: "something somehting"
    },
    {
        id: 3,
        title: "Web App Development",
        description: "something somehting"
    },
    {
        id: 4,
        title: "UI/UX Design",
        description: "something somehting"
    },
    {
        id: 5,
        title: "UI/UX Design",
        description: "something somehting"
    },
    {
        id: 6,
        title: "UI/UX Design",
        description: "something somehting"
    },

]

const Service = () => {
    return (
        <>
            {/* <!-- ===== About Two Start ===== --> */}
            <section id="about" className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
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
                                Services
                            </h4>
                            <h2 className="relative mb-6 text-2xl font-semibold font-sans text-black dark:text-white">
                                Explore what we offer
                            </h2>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita optio, voluptates officiis fugiat maiores labore ullam facilis quas velit ratione vero sed itaque quis atque accusamus non veritatis aperiam iste autem, enim quo ex? Maiores, qui aperiam? Recusandae, vitae qui?
                            </p>
                        </motion.div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
                            {serviceData.map((item, index) => (
                                <div key={index} className="bg-white rounded-md shadow-md p-4">
                                    <div className="flex items-center gap-2">
                                        <HeroIcon iconName={"AcademicCapIcon"} className="text-red-500 h-6 w-6" />
                                        <h2 className="text-black font-semibold font-sans text-xs">{item.title}</h2>
                                    </div>
                                    <h2 className="text-sm pl-2">{item.description}</h2>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>
            {/* <!-- ===== About Two End ===== --> */}
        </>
    );
};

export default Service;
