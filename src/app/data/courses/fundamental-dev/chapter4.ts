import { CourseContentItem, CourseQuizItem } from '../../course.model';

export const PYTHON_SECTION_01: CourseContentItem = {
  id: 'why-python',
  title: 'Section 1: Why Python?',
  summary: 'A readable language for beginners and beyond',
  type: 'content',
  blocks: [
    { type: 'h2', text: 'Why Python?' },
    {
      type: 'image',
      src: 'assets/chapter4-python.png',
      alt: 'Hand-drawn Python laptop illustration with notebook and coffee',
      caption: 'Course artwork from the Introducing Python section.',
    },
    {
      type: 'labelValue',
      label: 'Practical reasons to learn Python:',
      list: {
        ordered: false,
        items: [
          'It runs on almost every machine: Windows, Mac, Linux, even tiny devices.',
          'It is easy to read and easy to write. The code looks close to plain English.',
          'It is one of the fastest languages for a beginner to pick up and get results with.',
          'It is everywhere in AI and machine learning, a fast-growing field worth getting into early.',
        ],
      },
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'Learning Python opens doors in AI, the area everyone is hiring for right now.',
    },
    { type: 'divider' },
    { type: 'h3', text: 'Less Code, Same Result' },
    { type: 'p', text: 'Here is a program that shows “Hello, World” in Java:' },
    {
      type: 'code',
      language: 'java',
      filename: 'HelloWorld.java',
      code: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World");
    }
}`,
    },
    { type: 'p', text: 'And the same program in Python:' },
    { type: 'code', language: 'python', filename: 'main.py', code: `print("Hello, World")` },
    {
      type: 'p',
      text: 'Same output. Python is one line. Java needs five lines of structure before it even prints. For a beginner, less to type means less to get wrong.',
    },
    {
      type: 'p',
      text: 'This is not a criticism of Java. It is a strong language used by huge companies, and its extra lines (class, main, types) all have good reasons. On day one, though, they are noise. With Python you see a result immediately, which keeps motivation up.',
    },
  ],
};

export const PYTHON_SECTION_02: CourseContentItem = {
  id: 'python-setup',
  title: 'Section 2: Installing Python and the Command Line',
  summary: 'Install, verify, and try Python',
  type: 'content',
  blocks: [
    { type: 'h2', text: 'Installing Python on Windows' },
    {
      type: 'labelValue',
      label: 'Steps:',
      list: {
        ordered: true,
        items: [
          'Go to python.org and open the Downloads page. Download the latest version for Windows.',
          'Run the installer.',
          'Tick the box “Add python.exe to PATH” at the bottom before you click Install. This lets you run Python from any terminal.',
          'Click “Install Now” and wait for it to finish.',
        ],
      },
    },
    {
      type: 'links',
      links: [
        {
          label: 'Download Python',
          url: 'https://www.python.org/downloads/',
          description: 'Official Python downloads',
        },
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Missing the “Add python.exe to PATH” box is the most common beginner mistake. If you skip it, Python will not be found later and it will look as if the install failed. If in doubt, run the installer again and tick the box.',
    },
    { type: 'divider' },
    { type: 'h3', text: 'Check the Install' },
    {
      type: 'p',
      text: 'Open the Windows terminal: search for “Command Prompt” or “PowerShell” in the Start menu. Type this and press Enter:',
    },
    { type: 'code', language: 'bash', filename: 'terminal', code: `python --version` },
    { type: 'p', text: 'You should see something like:' },
    { type: 'code', language: 'bash', filename: 'terminal', code: `Python 3.13.0` },
    {
      type: 'p',
      text: 'If you see a version number, Python is installed. If you see an error, the PATH box was probably missed during the install. The fix is almost always to run the installer again with the PATH box ticked, or to restart the terminal so it picks up the new PATH.',
    },
    { type: 'divider' },
    { type: 'h3', text: 'The Python Command Line (REPL)' },
    {
      type: 'labelValue',
      label: 'How it works:',
      list: {
        ordered: false,
        items: [
          'Type python in the terminal and press Enter. The prompt changes to >>>. You are now inside Python.',
          'Whatever you type, Python runs immediately and shows the result. This is great for trying things out.',
          'Type exit() and press Enter to leave and go back to the normal terminal.',
        ],
      },
    },
    {
      type: 'code',
      language: 'python',
      filename: 'Python REPL',
      code: `>>> 2 + 2
4
>>> print("Hi")
Hi
>>> exit()`,
    },
  ],
};

export const PYTHON_SECTION_03: CourseContentItem = {
  id: 'vscode-setup',
  title: 'Section 3: Setting Up Visual Studio Code',
  summary: 'Create and run a Python file',
  type: 'content',
  blocks: [
    { type: 'h2', text: 'Setting Up Visual Studio Code' },
    {
      type: 'labelValue',
      label: 'Steps:',
      list: {
        ordered: true,
        items: [
          'Download and install Visual Studio Code from code.visualstudio.com. It is free.',
          'Open VS Code and go to the Extensions panel (the squares icon on the left). Search for “Python” and install the official extension from Microsoft.',
          'Create a new file and save it with a .py ending, for example hello.py.',
          'Type your code (see below).',
          'Press the Run button (the triangle, top right) and watch the output appear in the panel at the bottom.',
        ],
      },
    },
    {
      type: 'links',
      links: [
        {
          label: 'Download Visual Studio Code',
          url: 'https://code.visualstudio.com/',
          description: 'Official Visual Studio Code download',
        },
      ],
    },
    { type: 'code', language: 'python', filename: 'hello.py', code: `print("Hello from VS Code!")` },
    {
      type: 'p',
      text: 'The Microsoft Python extension is what gives you the Run button, code highlighting, and error hints. VS Code itself is free, popular, and the same editor professionals use.',
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'Use the terminal and REPL for quick experiments. Use VS Code to write and save the real programs you want to keep.',
    },
  ],
};

export const PYTHON_RECAP: CourseContentItem = {
  id: 'introducing-python-recap',
  title: 'Recap: Introducing Python',
  summary: 'Key points from the chapter',
  type: 'content',
  blocks: [
    { type: 'h2', text: 'Recap: Introducing Python' },
    {
      type: 'labelValue',
      label: 'Remember:',
      list: {
        ordered: false,
        items: [
          'Python runs almost everywhere and reads close to plain English.',
          'Less code for the same result means less to type and less to get wrong.',
          'Install from python.org and tick “Add python.exe to PATH”.',
          'Check the install in the terminal, then use the REPL (>>>) to try things out.',
          'VS Code with the official Python extension is where we write our programs.',
        ],
      },
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'Key takeaway: your environment is ready. Python is installed and verified, and VS Code is set up.',
    },
  ],
};

export const PYTHON_QUIZ: CourseQuizItem = {
  id: 'introducing-python-quiz',
  title: 'Quiz: Introducing Python',
  summary: 'Check your understanding of the whole chapter',
  type: 'quiz',
  intro:
    'These questions cover every section in the chapter. Choose the best answer, then read the explanation.',
  questions: [
    {
      id: 'python-platforms',
      prompt: 'Where can Python run?',
      correctOptionId: 'b',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'Only on Windows.',
          wrongExplanation: 'Python is not limited to Windows.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'On almost every machine: Windows, Mac, Linux, even tiny devices.',
          wrongExplanation: '',
          correctExplanation: 'Correct. Python runs almost everywhere.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'Only on servers in the cloud.',
          wrongExplanation: 'Python runs on servers, but also on your own laptop and small devices.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'Only on Mac and Linux.',
          wrongExplanation: 'Python runs on Windows too, which is what we use in this course.',
        },
      ],
    },
    {
      id: 'python-benefit',
      prompt: 'Why is Python a good first programming language?',
      correctOptionId: 'd',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'It guarantees that programs contain no errors.',
          wrongExplanation:
            'Every programming language allows errors. Python just makes them easier to spot.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'It removes the need to learn programming concepts.',
          wrongExplanation:
            'You still learn the same concepts. Python just gets less in the way while you do.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'It is the only language that companies use.',
          wrongExplanation: 'Many languages are used in industry, including Java, C#, and JavaScript.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'It is easy to read and write, and the code looks close to plain English.',
          wrongExplanation: '',
          correctExplanation:
            'Correct. That makes it one of the fastest languages for a beginner to get results with.',
        },
      ],
    },
    {
      id: 'python-ai',
      prompt: 'In which fast-growing field is Python used everywhere?',
      correctOptionId: 'a',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'AI and machine learning.',
          wrongExplanation: '',
          correctExplanation:
            'Correct. Learning Python opens doors in the area everyone is hiring for right now.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'Printing physical documents.',
          wrongExplanation: 'The print command shows text on the screen; it has nothing to do with printers.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'Designing computer chips by hand.',
          wrongExplanation: 'That is hardware engineering. Python is a high-level language.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'None. Python is mainly a teaching language.',
          wrongExplanation:
            'Python is easy to learn, but it is also widely used professionally, especially in AI.',
        },
      ],
    },
    {
      id: 'less-code',
      prompt: 'Why does “less code, same result” matter for a beginner?',
      correctOptionId: 'c',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'Shorter programs always run faster.',
          wrongExplanation: 'Speed is not the point here. The point is the learning curve.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'Because longer programs are always wrong.',
          wrongExplanation: 'Longer programs can be perfectly correct. They just give you more to get right.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'Less to type means less to get wrong, and you see a result immediately.',
          wrongExplanation: '',
          correctExplanation:
            'Correct. Seeing a result straight away keeps motivation up on day one.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'Because the output is better.',
          wrongExplanation: 'The output is the same. Only the amount of code differs.',
        },
      ],
    },
    {
      id: 'java-extra-lines',
      prompt: 'Java needs five lines to print “Hello, World”. What is true about those extra lines?',
      correctOptionId: 'b',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'They are mistakes that Java developers should remove.',
          wrongExplanation: 'The program will not run without them. They are required by Java.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'They have good reasons, but they are noise when you are on day one.',
          wrongExplanation: '',
          correctExplanation:
            'Correct. Java is a strong language used by huge companies. It just has a steeper start.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'They make the output look different from Python’s.',
          wrongExplanation: 'Both programs give the same output.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'They show that Java is a weak language.',
          wrongExplanation: 'Java is a strong language used by huge companies.',
        },
      ],
    },
    {
      id: 'path-checkbox',
      prompt: 'What is the most important thing to remember when installing Python on Windows?',
      correctOptionId: 'a',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'Tick “Add python.exe to PATH” before clicking Install.',
          wrongExplanation: '',
          correctExplanation:
            'Correct. Without it, the terminal cannot find Python and the install looks as if it failed.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'Choose the oldest version available.',
          wrongExplanation: 'Download the latest version from python.org.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'Install Visual Studio Code first.',
          wrongExplanation: 'You can install them in either order. The PATH box is what matters.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'Restart the computer before running the installer.',
          wrongExplanation: 'No restart is needed. Do not miss the PATH checkbox.',
        },
      ],
    },
    {
      id: 'check-install',
      prompt: 'Which command checks that Python is installed?',
      correctOptionId: 'd',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'install python',
          wrongExplanation: 'This is not a command. You install Python with the installer from python.org.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'exit()',
          wrongExplanation: 'exit() leaves the Python REPL. It does not check the install.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'print("Python")',
          wrongExplanation: 'This is Python code. Run in a normal terminal, it is not a valid command.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'python --version',
          wrongExplanation: '',
          correctExplanation:
            'Correct. If you see a version number such as Python 3.13.0, Python is installed.',
        },
      ],
    },
    {
      id: 'version-error',
      prompt: 'You type python --version and get an error. What is the most likely fix?',
      correctOptionId: 'c',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'Buy a new computer.',
          wrongExplanation: 'Your computer is fine. The problem is almost always the PATH setting.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'Switch to a different programming language.',
          wrongExplanation: 'This is a setup problem, not a problem with Python.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'Run the installer again with the PATH box ticked, or restart the terminal.',
          wrongExplanation: '',
          correctExplanation:
            'Correct. A new terminal picks up the new PATH, and re-running the installer fixes a missed checkbox.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'Type the command in capital letters.',
          wrongExplanation: 'The command is fine as it is. Python simply cannot be found.',
        },
      ],
    },
    {
      id: 'repl-prompt',
      prompt: 'You type python in the terminal and the prompt changes to >>>. What does that mean?',
      correctOptionId: 'b',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'Python has crashed.',
          wrongExplanation: 'Nothing has gone wrong. This is the normal Python prompt.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'You are inside Python, and whatever you type runs immediately.',
          wrongExplanation: '',
          correctExplanation:
            'Correct. This is the REPL, which is great for trying things out.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'Python is being installed.',
          wrongExplanation: 'Python is already installed. The >>> prompt means it is running.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'You need to open VS Code to continue.',
          wrongExplanation: 'You can type Python straight into the REPL without VS Code.',
        },
      ],
    },
    {
      id: 'repl-result',
      prompt: 'In the REPL you type 2 + 2 and press Enter. What happens?',
      correctOptionId: 'a',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'Python shows 4 straight away.',
          wrongExplanation: '',
          correctExplanation: 'Correct. The REPL runs what you type immediately and shows the result.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'Nothing, until you save the file.',
          wrongExplanation: 'There is no file in the REPL. It runs each line as you enter it.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'Python shows 22.',
          wrongExplanation: '2 and 2 are numbers here, so Python adds them.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'An error, because you must use print.',
          wrongExplanation: 'The REPL shows the result of an expression even without print.',
        },
      ],
    },
    {
      id: 'leave-repl',
      prompt: 'How do you leave the REPL and go back to the normal terminal?',
      correctOptionId: 'd',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'Type >>>.',
          wrongExplanation: '>>> is the prompt Python shows you, not a command.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'Type python again.',
          wrongExplanation: 'That command starts Python. It does not leave it.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'Type print("exit").',
          wrongExplanation: 'This just shows the word exit on the screen.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'Type exit() and press Enter.',
          wrongExplanation: '',
          correctExplanation: 'Correct. exit() takes you back to the normal terminal.',
        },
      ],
    },
    {
      id: 'vscode-extension',
      prompt: 'Which VS Code extension should you install for this course?',
      correctOptionId: 'c',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'Any extension with a snake in its icon.',
          wrongExplanation: 'Install the official Python extension, and check that it is from Microsoft.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'None. VS Code runs Python without extensions.',
          wrongExplanation: 'The extension gives you the Run button, highlighting, and error hints.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'The official Python extension from Microsoft.',
          wrongExplanation: '',
          correctExplanation:
            'Correct. It gives you the Run button, code highlighting, and error hints.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'The Java extension.',
          wrongExplanation: 'This course uses Python, so you need the Python extension.',
        },
      ],
    },
    {
      id: 'python-file-extension',
      prompt: 'Which file name should you use for a Python program?',
      correctOptionId: 'b',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'hello.txt',
          wrongExplanation: 'A .txt file is plain text and does not identify the file as Python code.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'hello.py',
          wrongExplanation: '',
          correctExplanation: 'Correct. Python files use the .py ending.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'hello.java',
          wrongExplanation: 'The .java ending is for Java source code.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'hello.exe',
          wrongExplanation: 'An .exe file is a Windows program, not Python source code.',
        },
      ],
    },
    {
      id: 'vscode-run',
      prompt: 'You have written hello.py in VS Code. How do you run it?',
      correctOptionId: 'd',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'Copy the code into a Word document.',
          wrongExplanation: 'Word cannot run code. VS Code can.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'Rename the file to hello.exe.',
          wrongExplanation: 'Renaming does not turn Python code into a Windows program.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'Restart the computer.',
          wrongExplanation: 'No restart is needed to run a program.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'Press the Run button (the triangle, top right) and read the output in the panel at the bottom.',
          wrongExplanation: '',
          correctExplanation: 'Correct. The output appears in the panel at the bottom of VS Code.',
        },
      ],
    },
    {
      id: 'repl-or-vscode',
      prompt: 'When should you use the REPL, and when should you use VS Code?',
      correctOptionId: 'a',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'The REPL for quick experiments; VS Code for real programs you want to save and keep.',
          wrongExplanation: '',
          correctExplanation:
            'Correct. The REPL runs lines straight away, while VS Code is where you write and save files.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'The REPL for long programs; VS Code for single lines.',
          wrongExplanation: 'It is the other way around. The REPL does not save your work.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'Always use the REPL. VS Code is only for professionals.',
          wrongExplanation:
            'VS Code is free and well suited to beginners too. It is where you keep your programs.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'They do exactly the same thing, so it does not matter.',
          wrongExplanation:
            'They serve different purposes: quick experiments versus programs you keep.',
        },
      ],
    },
  ],
};
