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

              <li className="font-semibold">
                2. `mkdir` - Creating a New Directory
              </li>
              <p>
                The `mkdir` command is used to create a new directory. For
                example, if you want to create a directory named "documents",
                you can type:
                <br />
                <code
                  onClick={() => handleCopyClick(`mkdir documents`, 2)}
                  className="bg-neutral-700 cursor-pointer"
                >
                  mkdir documents
                </code>
                {copiedStep === 2 && <span className="copied">Copied!</span>}
              </p>

              <li className="font-semibold">3. `cd` - Changing Directories</li>
              <p>
                The `cd` command is used to change directories. For example, to
                enter the "documents" directory, you can type:
                <br />
                <code
                  onClick={() => handleCopyClick(`cd documents`, 3)}
                  className="bg-neutral-700 cursor-pointer"
                >
                  cd documents
                </code>
                {copiedStep === 3 && <span className="copied">Copied!</span>}
              </p>

              <li className="font-semibold">
                4. `ls` - Listing Files and Directories
              </li>
              <p>
                The `ls` command is used to list files and directories in the
                current directory. For example, you can type:
                <br />
                <code
                  onClick={() => handleCopyClick(`ls`, 4)}
                  className="bg-neutral-700 cursor-pointer"
                >
                  ls
                </code>
                {copiedStep === 4 && <span className="copied">Copied!</span>}
              </p>

              <li className="font-semibold">
                5. `pwd` - Displaying the Current Directory
              </li>
              <p>
                The `pwd` command is used to display the current directory. For
                example:
                <br />
                <code
                  onClick={() => handleCopyClick(`pwd`, 5)}
                  className="bg-neutral-700 cursor-pointer"
                >
                  pwd
                </code>
                {copiedStep === 5 && <span className="copied">Copied!</span>}
              </p>

              <li className="font-semibold">
                6. `cp` - Copying Files or Directories
              </li>
              <p>
                The `cp` command is used to copy files or directories. For
                example, to copy the file "notes.txt" to the "documents"
                directory, you can type:
                <br />
                <code
                  onClick={() => handleCopyClick(`cp notes.txt documents/`, 6)}
                  className="bg-neutral-700 cursor-pointer"
                >
                  cp notes.txt documents/
                </code>
                {copiedStep === 6 && <span className="copied">Copied!</span>}
              </p>

              <li className="font-semibold">
                7. `mv` - Moving or Renaming Files
              </li>
              <p>
                The `mv` command is used to move or rename files. For example,
                to rename the file "old.txt" to "new.txt", you can type:
                <br />
                <code
                  onClick={() => handleCopyClick(`mv old.txt new.txt`, 7)}
                  className="bg-neutral-700 cursor-pointer"
                >
                  mv old.txt new.txt
                </code>
                {copiedStep === 7 && <span className="copied">Copied!</span>}
              </p>

              <li className="font-semibold">
                8. `rm` - Deleting Files or Directories
              </li>
              <p>
                The `rm` command is used to delete files or directories. For
                example, to delete the file "notes.txt", you can type:
                <br />
                <code
                  onClick={() => handleCopyClick(`rm notes.txt`, 8)}
                  className="bg-neutral-700 cursor-pointer"
                >
                  rm notes.txt
                </code>
                {copiedStep === 8 && <span className="copied">Copied!</span>}
              </p>

              <li className="font-semibold">
                9. `cat` - Displaying File Contents
              </li>
              <p>
                The `cat` command is used to display the contents of a file
                directly in the terminal. For example, to display the contents
                of the file "notes.txt", you can type:
                <br />
                <code
                  onClick={() => handleCopyClick(`cat notes.txt`, 9)}
                  className="bg-neutral-700 cursor-pointer"
                >
                  cat notes.txt
                </code>
                {copiedStep === 9 && <span className="copied">Copied!</span>}
              </p>

              <li className="font-semibold">
                10. `echo` - Displaying Text or Writing to a File
              </li>
              <p>
                The echo command is used to display text to the terminal or
                write text to a file. For example, to add text to the file
                "notes.txt", you can type:
                <br />
                <code
                  onClick={() =>
                    handleCopyClick(`echo "Hello, world!" >> notes.txt`, 10)
                  }
                  className="bg-neutral-700 cursor-pointer"
                >
                  echo "Hello, world!" &gt;&gt; notes.txt
                </code>
                {copiedStep === 10 && <span className="copied">Copied!</span>}
              </p>

              <li className="font-semibold">
                11. `grep` - Searching for Text in Files
              </li>
              <p>
                The `grep` command is used to search for text within files. For
                example, to search for the word "error" in the file "log.txt",
                you can type:
                <br />
                <code
                  onClick={() => handleCopyClick(`grep "error" log.txt`, 11)}
                  className="bg-neutral-700 cursor-pointer"
                >
                  grep "error" log.txt
                </code>
                {copiedStep === 11 && <span className="copied">Copied!</span>}
              </p>

              <li className="font-semibold">
                12. `chmod` - Changing File Permissions
              </li>
              <p>
                The `chmod` command is used to change permissions for files or
                directories. For example, to give read permission to everyone
                for the file "notes.txt", you can type:
                <br />
                <code
                  onClick={() => handleCopyClick(`chmod +r notes.txt`, 12)}
                  className="bg-neutral-700 cursor-pointer"
                >
                  chmod +r notes.txt
                </code>
                {copiedStep === 12 && <span className="copied">Copied!</span>}
              </p>

              <li className="font-semibold">
                13. `sudo` - Running Commands as Superuser
              </li>
              <p>
                The `sudo` command is used to run commands as the superuser or
                administrator. For example, to install software using apt, you
                may need to use sudo. Example:
                <br />
                <code
                  onClick={() =>
                    handleCopyClick(`sudo apt install software_name`, 13)
                  }
                  className="bg-neutral-700 cursor-pointer"
                >
                  sudo apt install software_name
                </code>
                {copiedStep === 13 && <span className="copied">Copied!</span>}
              </p>

              <li className="font-semibold">
                14. `history` - Displaying Command History
              </li>
              <p>
                The `history` command is used to display a list of previously
                run commands in the terminal. For example:
                <br />
                <code
                  onClick={() => handleCopyClick(`history`, 14)}
                  className="bg-neutral-700 cursor-pointer"
                >
                  history
                </code>
                {copiedStep === 14 && <span className="copied">Copied!</span>}
              </p>

              <li className="font-semibold">
                15. `man` - Reading Manual for Commands
              </li>
              <p>
                The `man` command is used to read the manual (guide) for a
                specific command. For example, to read the manual for the ls
                command, you can type:
                <br />
                <code
                  onClick={() => handleCopyClick(`man ls`, 15)}
                  className="bg-neutral-700 cursor-pointer"
                >
                  man ls
                </code>
                {copiedStep === 15 && <span className="copied">Copied!</span>}
              </p>

              <li className="font-semibold">
                16. `df` - Displaying Disk Usage Information
              </li>
              <p>
                The `df` command is used to display information about disk usage
                on the system. For example:
                <br />
                <code
                  onClick={() => handleCopyClick(`df -h`, 16)}
                  className="bg-neutral-700 cursor-pointer"
                >
                  df -h
                </code>
                {copiedStep === 16 && <span className="copied">Copied!</span>}
              </p>

              <li className="font-semibold">
                17. `du` - Displaying File and Directory Sizes
              </li>
              <p>
                The `du` command is used to display file and directory sizes.
                For example:
                <br />
                <code
                  onClick={() => handleCopyClick(`du -h`, 17)}
                  className="bg-neutral-700 cursor-pointer"
                >
                  du -h
                </code>
                {copiedStep === 17 && <span className="copied">Copied!</span>}
              </p>

              <li className="font-semibold">
                18. `find` - Searching for Files or Directories
              </li>
              <p>
                The `find` command is used to search for files or directories
                based on certain criteria. For example, to find files with the
                ".txt" extension in the current directory, you can type:
                <br />
                <code
                  onClick={() => handleCopyClick(`find . -name "*.txt"`, 18)}
                  className="bg-neutral-700 cursor-pointer"
                >
                  find . -name "*.txt"
                </code>
                {copiedStep === 18 && <span className="copied">Copied!</span>}
              </p>

              <li className="font-semibold">
                19. `wget` - Downloading Files from the Internet
              </li>
              <p>
                The `wget` command is used to download files from the internet
                via the terminal. For example, to download a file "data.csv"
                from a URL, you can type:
                <br />
                <code
                  onClick={() => handleCopyClick(`wget url_file`, 19)}
                  className="bg-neutral-700 cursor-pointer"
                >
                  wget url_file
                </code>
                {copiedStep === 19 && <span className="copied">Copied!</span>}
              </p>

              <li className="font-semibold">
                20. `tar` - Compressing or Extracting Files
              </li>
              <p>
                The `tar` command is used to compress or extract files and
                directories. For example, to extract the "archive.tar.gz" file,
                you can type:
                <br />
                <code
                  onClick={() =>
                    handleCopyClick(`tar -xzvf archive.tar.gz`, 20)
                  }
                  className="bg-neutral-700 cursor-pointer"
                >
                  tar -xzvf archive.tar.gz
                </code>
                {copiedStep === 20 && <span className="copied">Copied!</span>}
              </p>

              <li className="font-semibold">
                21. `zip` - Creating a Zip Archive
              </li>
              <p>
                The `zip` command is used to create a zip archive from files or
                directories. For example:
                <br />
                <code
                  onClick={() =>
                    handleCopyClick(`zip -r archive.zip directory`, 21)
                  }
                  className="bg-neutral-700 cursor-pointer"
                >
                  zip -r archive.zip directory
                </code>
                {copiedStep === 21 && <span className="copied">Copied!</span>}
              </p>

              <li className="font-semibold">
                22. `unzip` - Extracting a Zip Archive
              </li>
              <p>
                The `unzip` command is used to extract a zip archive. For
                example:
                <br />
                <code
                  onClick={() => handleCopyClick(`unzip archive.zip`, 22)}
                  className="bg-neutral-700 cursor-pointer"
                >
                  unzip archive.zip
                </code>
                {copiedStep === 22 && <span className="copied">Copied!</span>}
              </p>

              <li className="font-semibold">
                23. `ps` - Displaying Running Processes
              </li>
              <p>
                The `ps` command is used to display a list of running processes
                on the system. For example:
                <br />
                <code
                  onClick={() => handleCopyClick(`ps aux`, 23)}
                  className="bg-neutral-700 cursor-pointer"
                >
                  ps aux
                </code>
                {copiedStep === 23 && <span className="copied">Copied!</span>}
              </p>

              <li className="font-semibold">24. `kill` - Stopping Processes</li>
              <p>
                The `kill` command is used to stop a running process. For
                example, to stop a process with ID 1234, you can type:
                <br />
                <code
                  onClick={() => handleCopyClick(`kill 1234`, 24)}
                  className="bg-neutral-700 cursor-pointer"
                >
                  kill 1234
                </code>
                {copiedStep === 24 && <span className="copied">Copied!</span>}
              </p>

              <li className="font-semibold">
                25. `top` - Displaying Processes Using Resources
              </li>
              <p>
                The `top` command is used to display a list of processes that
                are using computer resources such as CPU and memory. For
                example:
                <br />
                <code
                  onClick={() => handleCopyClick(`top`, 25)}
                  className="bg-neutral-700 cursor-pointer"
                >
                  top
                </code>
                {copiedStep === 25 && <span className="copied">Copied!</span>}
              </p>

              <li className="font-semibold">
                26. `chmod` - Changing File Permissions
              </li>
              <p>
                The `chmod` command is used to change permissions for files or
                directories. For example:
                <br />
                <code
                  onClick={() => handleCopyClick(`chmod 755 file.txt`, 26)}
                  className="bg-neutral-700 cursor-pointer"
                >
                  chmod 755 file.txt
                </code>
                {copiedStep === 26 && <span className="copied">Copied!</span>}
              </p>

              <li className="font-semibold">
                27. `chown` - Changing File Owner
              </li>
              <p>
                The `chown` command is used to change the owner of a file or
                directory. For example:
                <br />
                <code
                  onClick={() =>
                    handleCopyClick(`chown user:group file.txt`, 27)
                  }
                  className="bg-neutral-700 cursor-pointer"
                >
                  chown user:group file.txt
                </code>
                {copiedStep === 27 && <span className="copied">Copied!</span>}
              </p>

              <li className="font-semibold">
                28. `date` - Displaying Date and Time
              </li>
              <p>
                The `date` command is used to display the current date and time.
                For example:
                <br />
                <code
                  onClick={() => handleCopyClick(`date`, 28)}
                  className="bg-neutral-700 cursor-pointer"
                >
                  date
                </code>
                {copiedStep === 28 && <span className="copied">Copied!</span>}
              </p>

              <li className="font-semibold">
                29. `whoami` - Displaying Current User
              </li>
              <p>
                The `whoami` command is used to display the name of the current
                user logged in. For example:
                <br />
                <code
                  onClick={() => handleCopyClick(`whoami`, 29)}
                  className="bg-neutral-700 cursor-pointer"
                >
                  whoami
                </code>
                {copiedStep === 29 && <span className="copied">Copied!</span>}
              </p>

              <li className="font-semibold">
                30. `clear` - Clearing the Terminal Screen
              </li>
              <p>
                The `clear` command is used to clear the terminal screen. For
                example:
                <br />
                <code
                  onClick={() => handleCopyClick(`clear`, 30)}
                  className="bg-neutral-700 cursor-pointer"
                >
                  clear
                </code>
                {copiedStep === 30 && <span className="copied">Copied!</span>}
              </p>
            </ol>

            <div className="border border-neutral-700 my-3" />
            <p>
              Now you've learned more than 30 useful commands to use in the
              terminal! Keep exploring and practicing these commands to improve
              your skills in using the command terminal.
            </p>
            <p>Thank you for reading. See you in the next post!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent2;
