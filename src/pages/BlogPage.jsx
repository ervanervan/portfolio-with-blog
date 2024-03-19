import React, { useState } from "react";
import BlogPost from "../components/BlogPost";

const BlogPage = () => {
  const [copiedStep, setCopiedStep] = useState(null);

  const handleCopyClick = (text, step) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopiedStep(step);
        setTimeout(() => {
          setCopiedStep(null);
        }, 2000); // Hide message after 2 seconds
      })
      .catch((error) => {
        console.error("Gagal menyalin teks:", error);
      });
  };
  return (
    <div className="container mx-auto md:my-8">
      <BlogPost
        title="Easy Steps to Push Your Project to GitHub with Git: Guide for Developers"
        description="Let's learn the simple way to push your project to GitHub! In this blog, we'll discuss the steps in a relaxed and understandable style. No need to worry about technicalities anymore because we'll be there to guide you from start to finish. Ready to embark on your journey towards smoother and more productive collaboration?"
        content={`
        

        Choose Version:
        Select the Git version that matches your operating system (32-bit or 64-bit) and click "Download".

        Run the Installer:
        After the download is complete, open the downloaded Git installer file and follow the installation instructions.

        `}
      />
      <div className="max-w-xl mx-auto bg-[#1C1C1C] text-neutral-400">
        <div className="px-6 pb-6">
          <div className="border border-neutral-700 mb-10" />
          <div className="flex flex-col gap-y-3">
            <p>
              Hey, fellow developers! Pushing projects to GitHub can often be
              confusing. But don't worry, because you're in the right place to
              get help!
            </p>
            <p>
              In this blog, we'll dive deep into how to push projects using Git.
              We'll discuss it in simple and friendly language, so no need to
              fret about technical jargon!
            </p>
            <p>
              From setting up repositories, adding changes, to resolving merge
              conflicts, we'll cover it all directly and enjoyably. So, get
              ready to gain newfound confidence in managing your projects on
              GitHub!
            </p>
            <p>
              Come on, let's explore a more enjoyable and productive world of
              collaboration together. We can't wait to share this knowledge with
              you and see how your projects flourish rapidly!
            </p>
            <p>
              Here are the steps to download and install Git on various
              platforms:
            </p>
            <p className="font-bold">Windows:</p>
            <ol className="flex flex-col gap-y-2">
              <li>1. Download Git:</li>
              <p>
                Start by visiting the official Git website at{" "}
                <a
                  href="https://git-scm.com/downloads"
                  className="hover:underline"
                >
                  https://git-scm.com/downloads.
                </a>
              </p>
              <li>2. Choose the Right Version:</li>
              <p>
                There, you'll find options to download Git. Make sure to select
                the version that matches your operating system, whether it's
                32-bit or 64-bit, then click the "Download" button.
              </p>
              <li>3. Run the Installer:</li>
              <p>
                After the download process is complete, open the downloaded Git
                installer file. Follow the simple steps in the installation
                guide to complete the installation process.
              </p>
            </ol>
            <div className="border border-neutral-700 my-3" />
            <p className="font-bold">macOS:</p>
            <ol className="flex flex-col gap-y-2">
              <li>1. Use Homebrew:</li>
              <p>
                If you're using macOS, you can easily install Git through the
                Terminal. Open the Terminal and run the following command:
                <br />
                <code
                  onClick={() => handleCopyClick("brew install git", 1)}
                  className="bg-neutral-700 cursor-pointer"
                >
                  brew install git
                </code>
                {copiedStep === 1 && <span className="copied">Copied!</span>}
              </p>
              <li>2. Use the Git Installer</li>
              <p>
                If you prefer using an installer, you can get it from{" "}
                <a
                  className="hover:underline"
                  href="https://git-scm.com/download/mac"
                >
                  https://git-scm.com/download/mac
                </a>{" "}
                Follow the provided installation instructions to complete the
                installation process.
              </p>
            </ol>
            <div className="border border-neutral-700 my-3" />
            <p className="font-bold">Linux (Ubuntu/Debian):</p>
            <ol className="flex flex-col gap-y-2">
              <li>1. Through the Terminal:</li>
              <p>
                If you're using a Linux distribution like Ubuntu or Debian, you
                can install Git directly through the terminal. Open the terminal
                and run the following commands: <br />
                <code
                  onClick={() => handleCopyClick("sudo apt update", 2)}
                  className="bg-neutral-700 cursor-pointer"
                >
                  sudo apt update
                </code>
                {copiedStep === 2 && <span className="copied">Copied!</span>}
                <br />
                <code
                  onClick={() => handleCopyClick("sudo apt install git", 3)}
                  className="bg-neutral-700 cursor-pointer"
                >
                  sudo apt install git
                </code>
                {copiedStep === 3 && <span className="copied">Copied!</span>}
              </p>
              <li>2. Verify the Installation:</li>
              <p>
                After the installation is complete, you can verify that Git has
                been installed by running the command:
                <br />
                <code
                  onClick={() => handleCopyClick("git --version", 4)}
                  className="bg-neutral-700 cursor-pointer"
                >
                  git --version
                </code>
                {copiedStep === 4 && <span className="copied">Copied!</span>}
              </p>
            </ol>
            <div className="border border-neutral-700 my-3" />
            <h2 className="text-xl font-bold mb-4">
              Tutorial: Setting Up Git for Easy Use
            </h2>
            <p>
              Before diving into Git, let's get it set up to fit your
              preferences. First things first, let's configure your Git with
              your name and email address. Here's how you do it:
            </p>

            <ol className="flex flex-col gap-y-2">
              <li className="font-semibold">Step 1: Set Your Name</li>
              <p>
                Let's kick things off with your name. This helps others in the
                Git community recognize your contributions. So, let's set up
                your username:
                <br />
                <code
                  onClick={() =>
                    handleCopyClick(
                      `git config --global user.name "Your Name"`,
                      5
                    )
                  }
                  className="bg-neutral-700 cursor-pointer"
                >
                  git config --global user.name "Your Name"
                </code>
                {copiedStep === 5 && <span className="copied">Copied!</span>}
              </p>
              <p>Just replace "Your Name" with your actual name!</p>
              <p>
                Example <br />
                <code
                  onClick={() =>
                    handleCopyClick(`git config --global user.name "ervan"`, 6)
                  }
                  className="bg-neutral-700 cursor-pointer"
                >
                  git config --global user.name "ervan"
                </code>
                {copiedStep === 6 && <span className="copied">Copied!</span>}
              </p>
            </ol>

            <ol className="flex flex-col gap-y-2">
              <li className="font-semibold">Step 2: Set Your Email Address</li>
              <p>
                Next up, let's get your email address sorted. This is crucial
                for communication within Git. Use this command to set your
                email:
                <br />
                <code
                  onClick={() =>
                    handleCopyClick(
                      `git config --global user.email "email@domain.com"`,
                      7
                    )
                  }
                  className="bg-neutral-700 cursor-pointer"
                >
                  git config --global user.email "email@domain.com"
                </code>
                {copiedStep === 7 && <span className="copied">Copied!</span>}
              </p>
              <p>
                Make sure to swap out <i>"email@domain.com"</i> with the email
                address you use.
              </p>
              <p>
                Example <br />
                <code
                  onClick={() =>
                    handleCopyClick(
                      `git config --global user.name "ervan@gmail.com"`,
                      8
                    )
                  }
                  className="bg-neutral-700 cursor-pointer"
                >
                  git config --global user.name "ervan@gmail.com"
                </code>
                {copiedStep === 8 && <span className="copied">Copied!</span>}
              </p>
            </ol>
          </div>
        </div>
      </div>

      <footer className="md:bg-[#1C1C1C] max-w-xl mx-auto rounded-b-lg text-neutral-400">
        <div className="p-4">
          <p className="text-xs text-center">
            Copyright ©2024 Ervan Kurniawan.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BlogPage;
