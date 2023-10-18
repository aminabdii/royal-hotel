import React from "react";
import { FaXTwitter } from "react-icons/fa6";

import { AiOutlineGooglePlus } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="flex flex-col items-center bg-neutral-200 text-center text-white dark:bg-neutral-600 mt-20">
        <div className="container pt-9">
          <div className="mb-9 flex  items-center justify-center">
            <Link
              to="https://twitter.com/login?lang=en"
              className="mr-9 text-neutral-800 dark:text-neutral-200"
            >
              <FaXTwitter />
            </Link>
            <Link
              to="https://google.com/gmail"
              className="mr-9 text-neutral-800 dark:text-neutral-200"
            >
              <AiOutlineGooglePlus size={24} />
            </Link>
            <Link
              to="https://linkedin.com/in/amin-abdi-9963a0226"
              className="mr-9 text-neutral-800 dark:text-neutral-200"
            >
              <BsLinkedin />
            </Link>
            <a
              href="#!"
              className="mr-9 text-neutral-800 dark:text-neutral-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
            <Link
              to="https://github.com/aminabdii"
              className="text-neutral-800 dark:text-neutral-200"
            >
              <BsGithub />
            </Link>
          </div>
        </div>

        <div className="w-full flex items-center justify-center gap-2 bg-neutral-300 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
          © 2023 Copyright :
          <p className="text-neutral-800 dark:text-neutral-400">
            The royal residency
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
