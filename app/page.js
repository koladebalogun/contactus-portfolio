"use client";
import React, { useEffect } from "react";
import Overlay from "@/components/Overlay";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import gsap from "gsap";


export default function Home() {

  useEffect(() => {
    gsap.from(".header h1", {
      y: 200,
      ease: "power4.inOut",
      duration: 1.5,
      delay: 5.75,
      stagger: 0.05,
      opacity:0
    });

    gsap.to(".img", {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      ease: "power4.inOut",
      duration: 1.5,
      delay: 5.5,
      stagger: 0.25,
    });
  }, []);

  return (
    <div>
      <Overlay />
      <div className="site-content">
        <div className="header">
          <h1>C</h1>
          <h1>O</h1>
          <h1>N</h1>
          <h1>T</h1>
          <h1>A</h1>
          <h1>C</h1>
          <h1>T</h1>
          <h1>-</h1>
          <h1>M</h1>
          <h1>E</h1>
        </div>

        <footer>
          <div className="footer-info">
            <div className="footer-copy">
              <p>Kolade Balogun</p>
              <p>koladebalogun.kb@gmail.com</p>
              <p>+234 904122 4812</p>
            </div>

            <div className="footer-icons">
              <a
                href="https://www.instagram.com/kolvde/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram style={{ width: "30px", height: "30px" }} />
              </a>
              <a
                href="https://www.linkedin.com/in/koladebalogun/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin style={{ width: "30px", height: "30px" }} />
              </a>
              <a
                href="https://github.com/koladebalogun"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub style={{ width: "30px", height: "30px" }} />
              </a>
            </div>
          </div>

          <div className="footer-nav">
            <div className="img"></div>
            <div className="img"></div>
            <div className="img"></div>
          </div>
        </footer>
      </div>
    </div>
  );
}
