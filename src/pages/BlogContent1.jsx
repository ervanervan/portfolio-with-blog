import React, { useState } from "react";
import BlogPost from "../components/BlogPost";

const BlogContent1 = () => {
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
        date={"March 19, 2024"}
        time={"09:08 AM"}
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
              <li className="font-semibold">1. Download Git:</li>
              <p>
                Start by visiting the official Git website at{" "}
                <a
                  href="https://git-scm.com/downloads"
                  className="hover:underline"
                >
                  https://git-scm.com/downloads.
                </a>
              </p>
              <li className="font-semibold">2. Choose the Right Version:</li>
              <p>
                There, you'll find options to download Git. Make sure to select
                the version that matches your operating system, whether it's
                32-bit or 64-bit, then click the "Download" button.
              </p>
              <li className="font-semibold">3. Run the Installer:</li>
              <p>
                After the download process is complete, open the downloaded Git
                installer file. Follow the simple steps in the installation
                guide to complete the installation process.
              </p>
            </ol>
            <div className="border border-neutral-700 my-3" />
            <p className="font-bold">macOS:</p>
            <ol className="flex flex-col gap-y-2">
              <li className="font-semibold">1. Use Homebrew:</li>
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
              <li className="font-semibold">2. Use the Git Installer</li>
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
              <li className="font-semibold">1. Through the Terminal:</li>
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
              <li className="font-semibold">2. Verify the Installation:</li>
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

            {/* Tutorial: Setting Up Git for Easy Use */}
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

              <br />
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

              <br />
              <li className="font-semibold">Step 3: Check Your Settings</li>
              <p>
                Lastly, let's make sure everything's set up correctly. You can
                check it with this command:
                <br />
                <code
                  onClick={() =>
                    handleCopyClick(`git config --global --list`, 9)
                  }
                  className="bg-neutral-700 cursor-pointer"
                >
                  git config --global --list
                </code>
                {copiedStep === 9 && <span className="copied">Copied!</span>}
              </p>
              <p>
                This command will show you a list of the global settings you've
                configured.
              </p>
            </ol>

            {/* Tutorial: Getting Started with Git - Your Easy Guide */}
            <div className="border border-neutral-700 my-3" />
            <h2 className="text-xl font-bold mb-4">
              Tutorial: Getting Started with Git - Your Easy Guide
            </h2>
            <p>
              Hey there! So, you want to start using Git to manage your
              projects? Here are the simple steps to get started:
            </p>

            <ol className="flex flex-col gap-y-2">
              <li className="font-semibold">
                Step 1: Creating a Git Repository
              </li>
              <p>
                First things first, let's create a Git repository. This is like
                a storage space for your project in Git. Use this command in
                your terminal or command prompt:
                <br />
                <code
                  onClick={() => handleCopyClick(`git init`, 10)}
                  className="bg-neutral-700 cursor-pointer"
                >
                  git init
                </code>
                {copiedStep === 10 && <span className="copied">Copied!</span>}
              </p>
              <p>
                This will initialize a local Git repository in your project
                directory. Easy, right?
              </p>

              <br />
              <li className="font-semibold">
                Step 2: Adding Changes to the Repository
              </li>
              <p>
                Once you have a repository, you can start adding changes to it.
                For example, if you create or edit a file, you need to let Git
                know about the changes. Here's how to do it:
                <br />
                <code
                  onClick={() => handleCopyClick(`git add file_name`, 11)}
                  className="bg-neutral-700 cursor-pointer"
                >
                  git add file_name
                </code>
                {copiedStep === 11 && <span className="copied">Copied!</span>}
              </p>
              <p>
                Replace file_name with the name of the file you want to add.
                It's like telling Git, "Hey, this is the file I want to include
                in the project!"
              </p>

              <p>
                If you want to add all changes in the directory, you can use:
                <br />
                <code
                  onClick={() => handleCopyClick(`git add .`, 12)}
                  className="bg-neutral-700 cursor-pointer"
                >
                  git add .
                </code>
                {copiedStep === 12 && <span className="copied">Copied!</span>}
              </p>
              <p>
                This will add all changes in the current directory to the
                staging area.
              </p>

              <br />
              <li className="font-semibold">Step 3: Making a Commit</li>
              <p>
                After adding changes, it's time to make a "commit." This is like
                creating a reference point for the changes you've made. Add a
                message explaining your changes with this command:
                <br />
                <code
                  onClick={() =>
                    handleCopyClick(
                      `git commit -m "your commit message here"`,
                      13
                    )
                  }
                  className="bg-neutral-700 cursor-pointer"
                >
                  git commit -m "your commit message here"
                </code>
                {copiedStep === 13 && <span className="copied">Copied!</span>}
              </p>
              <p>
                Make sure to replace <i>"your commit message here"</i> with a
                message that describes your changes.
              </p>

              <br />
              <li className="font-semibold">
                Step 4: Saving Changes to GitHub
              </li>
              <p>
                Now, after committing your changes, you might want to save your
                project on GitHub to share with others or for backup. Here's
                how:
              </p>
              <ol>
                <li>1. Create an empty repository on GitHub.</li>

                <li>
                  2. Add the repository's URL as a remote in your local Git
                  repository with this command:
                  <br />
                  <code
                    onClick={() =>
                      handleCopyClick(
                        `git remote add origin GitHub_Repository_URL`,
                        14
                      )
                    }
                    className="bg-neutral-700 cursor-pointer"
                  >
                    git remote add origin GitHub_Repository_URL
                  </code>
                  {copiedStep === 14 && <span className="copied">Copied!</span>}
                </li>
                <p>
                  Replace <i>GitHub_Repository_URL</i> with your GitHub
                  repository's URL.
                </p>

                <li>
                  3. Finally, push your changes to GitHub with this command:
                  <br />
                  <code
                    onClick={() =>
                      handleCopyClick(`git push -u origin master`, 15)
                    }
                    className="bg-neutral-700 cursor-pointer"
                  >
                    git push -u origin master
                  </code>
                  {copiedStep === 15 && <span className="copied">Copied!</span>}
                </li>
                <p>
                  This will push the changes from your local master branch to
                  the master branch in your GitHub repository.
                </p>
              </ol>
            </ol>

            {/* BONUS */}
            <div className="border border-neutral-700 my-3" />
            <h3 className="font-bold">Bonus:</h3>
            <ol className="flex flex-col gap-y-2">
              <li className="font-semibold">1. git status</li>
              <p>
                This command is used to display the status of files in your
                repository. It tells you which files have been modified, added,
                or deleted since the last commit.
                <br />
                <code
                  onClick={() => handleCopyClick(`git status`, 16)}
                  className="bg-neutral-700 cursor-pointer"
                >
                  git status
                </code>
                {copiedStep === 16 && <span className="copied">Copied!</span>}
              </p>

              <li className="font-semibold">2. git pull</li>
              <p>
                This command is used to fetch changes from the remote repository
                to your local repository.
                <br />
                <code
                  onClick={() => handleCopyClick(`git pull`, 17)}
                  className="bg-neutral-700 cursor-pointer"
                >
                  git pull
                </code>
                {copiedStep === 17 && <span className="copied">Copied!</span>}
              </p>

              <li className="font-semibold">3. git branch</li>
              <p>
                This command is used to view the list of branches in your
                repository.
                <br />
                <code
                  onClick={() => handleCopyClick(`git branch`, 18)}
                  className="bg-neutral-700 cursor-pointer"
                >
                  git branch
                </code>
                {copiedStep === 18 && <span className="copied">Copied!</span>}
              </p>

              <li className="font-semibold">4. git checkout</li>
              <p>
                This command is used to switch between branches in your
                repository.
                <br />
                <code
                  onClick={() =>
                    handleCopyClick(`git checkout branch_name`, 19)
                  }
                  className="bg-neutral-700 cursor-pointer"
                >
                  git checkout branch_name
                </code>
                {copiedStep === 19 && <span className="copied">Copied!</span>}
              </p>
              <p>
                Replace <i>branch_name</i> with the name of the branch you want
                to switch to.
              </p>

              <li className="font-semibold">5. git merge</li>
              <p>
                This command is used to merge changes from one branch into
                another branch.
                <br />
                <code
                  onClick={() => handleCopyClick(`git merge branch_name`, 19)}
                  className="bg-neutral-700 cursor-pointer"
                >
                  git merge branch_name
                </code>
                {copiedStep === 19 && <span className="copied">Copied!</span>}
              </p>
              <p>
                Replace <i>branch_name</i> with the name of the branch you want
                to merge.
              </p>

              <li className="font-semibold">6. git clone</li>
              <p>
                This command is used to clone an existing Git repository into a
                new directory. It copies the entire repository, including all
                files, branches, and commit history.
                <br />
                <code
                  onClick={() =>
                    handleCopyClick(`git clone repository_url`, 20)
                  }
                  className="bg-neutral-700 cursor-pointer"
                >
                  git clone repository_url
                </code>
                {copiedStep === 20 && <span className="copied">Copied!</span>}
              </p>
              <p>
                Replace <i>repository_url</i> with the URL of the repository you
                want to clone. For example:
                <br />
                <code
                  onClick={() =>
                    handleCopyClick(
                      `git clone https://github.com/username/repository.git`,
                      21
                    )
                  }
                  className="bg-neutral-700 cursor-pointer"
                >
                  git clone https://github.com/username/repository.git
                </code>
                {copiedStep === 21 && <span className="copied">Copied!</span>}
              </p>
              <p>
                This will create a new directory with the same name as the
                repository and copy all the files into it.
              </p>

              <li className="font-semibold">7. git log</li>
              <p>
                This command is used to view the commit history of a repository.
                It displays a list of commits, including the commit hash,
                author, date, and commit message.
                <br />
                <code
                  onClick={() => handleCopyClick(`git log`, 21)}
                  className="bg-neutral-700 cursor-pointer"
                >
                  git log
                </code>
                {copiedStep === 21 && <span className="copied">Copied!</span>}
              </p>
              <p>
                This will display the commit history in chronological order,
                starting with the most recent commit.
              </p>

              <li className="font-semibold">8. git remote</li>
              <p>
                This command is used to manage remote repositories. It allows
                you to view, add, rename, and remove remote repositories.
                <br />
                <code
                  onClick={() => handleCopyClick(`git remote -v`, 22)}
                  className="bg-neutral-700 cursor-pointer"
                >
                  git remote -v
                </code>
                {copiedStep === 22 && <span className="copied">Copied!</span>}
              </p>
              <p>
                This will display a list of remote repositories associated with
                your local repository, along with their URLs.
              </p>

              <li className="font-semibold">9. git rm</li>
              <p>
                This command is used to remove files from the staging area and
                the working directory. It also stages the removal for commit.
                <br />
                <code
                  onClick={() => handleCopyClick(`git rm file_name`, 23)}
                  className="bg-neutral-700 cursor-pointer"
                >
                  git rm file_name
                </code>
                {copiedStep === 23 && <span className="copied">Copied!</span>}
              </p>
              <p>
                Replace <i>file_name</i> with the name of the file you want to
                remove. This will stage the removal of the file for the next
                commit.
              </p>
            </ol>

            <div className="border border-neutral-700 my-3" />
            <p>
              That's it for now! These are some more essential Git commands that
              will help you navigate through your Git workflow more effectively.
            </p>
            <p>
              These are some basic Git commands that will help you get started
              with Git. Happy coding!
            </p>
          </div>
        </div>
      </div>

      {/* <footer className="md:bg-[#1C1C1C] max-w-xl mx-auto rounded-b-lg text-neutral-400">
        <div className="p-4">
          <p className="text-xs text-center">
            Copyright ©2024 Ervan Kurniawan.
          </p>
        </div>
      </footer> */}
    </div>
  );
};

export default BlogContent1;
