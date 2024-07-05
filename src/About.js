import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Layout } from 'antd';
import { useInView } from 'react-intersection-observer';

const { Content } = Layout;

const About = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: false, // Set to false to trigger multiple times
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, translateY: 0 });
        } else {
            controls.start({ opacity: 0, translateY: -50 });
        }
    }, [controls, inView]);

    return (
        <Content  style={{ minHeight: '100vh', padding: '20px', position: 'relative' }}>
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '50%',
                    height: '100%',
                    background: 'linear-gradient(to bottom right, #f093fb, #f5576c)',
                    zIndex: -1,
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
                    marginTop: '5rem',
                }}
            />

            <div
                ref={ref}
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', zIndex: 1 }}
            >
                {/* Text content */}
                <motion.div
                    initial={{ opacity: 0, translateY: -50 }}
                    animate={controls}
                    transition={{ duration: 0.6 }}
                    style={{ width: '50%', padding: '20px', color: 'black' }}
                >
                    <motion.h2 style={{
                        fontSize: '2rem', fontWeight: 'bold',
                        background: "-webkit-linear-gradient(left, #2563eb, #3498db)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                    }}>HI, I'M Yukta</motion.h2>
                    <motion.p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                    Experienced in building scalable web applications using React, Redux, HTML, CSS, and JavaScript. Skilled in API integration, Git, React Hooks, Redux Persist, and Ant Design. Demonstrates strong problem-solving skills and a commitment to clean, maintainable code.
                    </motion.p>
                    <motion.span
                        style={{
                            fontWeight: '600',
                            fontSize: '1.5rem',
                            background: '-webkit-linear-gradient(left, #f093fb, #f5576c)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                    </motion.span>
                </motion.div>

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, translateY: 50 }}
                    animate={controls}
                    transition={{ duration: 0.6 }}
                    style={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                    <img src="Yukta.jpg" alt="Profile" style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '50%' }} />
                </motion.div>
            </div>
        </Content>
    );
};

export default About;
