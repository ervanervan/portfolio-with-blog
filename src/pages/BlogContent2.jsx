import React, { useState } from "react";
import BlogPost from "../components/BlogPost";

const BlogContent2 = () => {
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
    <div className="container mx-auto">
      <BlogPost
        title="Getting to Know 30+ Useful Command Terminal Commands for Beginners"
        description="Hello everyone! Welcome back to our blog where we'll explore 30+ useful command terminal commands that are essential for beginners. Whether you're just starting out with the terminal or looking to expand your knowledge of available commands, you've come to the right place! Let's dive into the most basic commands and gradually move on to more advanced ones."
        date={"March 21, 2024"}
        time={"09:41 PM"}
      />
      <div className="max-w-xl mx-auto bg-[#1C1C1C] rounded-b-lg text-neutral-400">
        <div className="px-6 pb-6">
          <div className="border border-neutral-700 mb-10" />
          <div className="flex flex-col gap-y-3">
            {/* CONTENT */}
            <h3 className="font-bold">Command Terminal:</h3>
            <ol className="flex flex-col gap-y-2">
              <li className="font-semibold">
                1. `touch` - Creating a New File
              </li>
              <p>
                The `touch` command is used to create a new empty file. For
                example, to create a file named "notes.txt", you can type:
                <br />
                <code
                  onClick={() => handleCopyClick(`touch notes.txt`, 1)}
                  className="bg-neutral-700 cursor-pointer"
                >
                  touch notes.txt
                </code>
                {copiedStep === 1 && <span className="copied">Copied!</span>}
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
    </div>
  );
};

export default BlogContent2;
