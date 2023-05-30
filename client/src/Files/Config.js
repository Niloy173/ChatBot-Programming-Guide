import { createChatBotMessage } from 'react-chatbot-kit';

// import options
import Decisions from '../Components/DecisionPoint/Decisions';
import LinkList from '../Components/LinkList/LinkList';
import Options from '../Components/Options/Options';
import Joke from '../Components/RandomJoke/Joke';

// import avatar icon

const message = `😃 Welcome to Programming Guide `;
const message2 = `👉 I'm here to help. What do you want to learn today ? `;

const AdditonalMessage = `
  <div>
    <p>🐵 Please feel free to explore the topics listed above. We have provided valuable links for each topic 🐵</p>
    <p>Type <b>💜 topics 💜 </b> for overall suggested concepts</p>
  </div>

`;

const customComponent = <div dangerouslySetInnerHTML={{ __html: AdditonalMessage }} />;


const config = {
  botName: 'Programming Guide',

  initialMessages: [createChatBotMessage(message),
    createChatBotMessage(message2, {widget: "Options",}),
   createChatBotMessage(customComponent)],
  customStyles: {
    
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    
    chatButton: {
      backgroundColor: "#ec7228",
    },
  },

  customComponents: {
    header: () => <div style={{ backgroundColor: '#ec7228', padding: "5px", textTransform: 'uppercase' }}> 🐵 Programming Guide 🐵</div>,

    

  },

  widgets: [
    {
      widgetName: 'Options',
      widgetFunc: (props) => <Options {...props} />,
    },

    {
      widgetName: 'Decisions',
      widgetFunc: (props) => <Decisions {...props} />,
    },

    {
      widgetName: 'jokes',
      widgetFunc: (props) => <Joke {...props} />,
    },
    
    {
      widgetName: 'PhpLinks',
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: 'Introduction to Php',
            url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript',
            id: 1
          },
          {
            text: 'JavaTPoint Php Guide',
            url: 'https://www.javatpoint.com/php-tutorial',
            id: 2
          },
          {
            text: 'W3School Php Guide',
            url: 'https://www.w3schools.com/php/php_intro.asp',
            id: 3
          }
        ],
        subject: 'Php',
      }
    },

    {
      widgetName: 'PythonLinks',
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: 'Introduction to Python',
            url: 'https://www.geeksforgeeks.org/introduction-to-python/',
            id: 1
          },
          {
            text: 'Python for Beginners',
            url: 'https://www.python.org/about/gettingstarted/',
            id: 2
          },
          {
            text: 'W3School JS Guide',
            url: 'https://www.w3schools.com/python/python_intro.asp',
            id: 3
          }
        ],
        subject: 'Python',
      }
    },

    {
      widgetName: 'JavaLinks',
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: 'Introduction to Java',
            url: 'https://www.geeksforgeeks.org/introduction-to-java/',
            id: 1
          },
          {
            text: 'Learn Java Programming',
            url: 'https://www.javatpoint.com/java-tutorial',
            id: 2
          },
          {
            text: 'W3School Java Guide',
            url: 'https://www.w3schools.com/java/java_intro.asp',
            id: 3
          }
        ],
        subject: 'Java',
      }
    },

    {
      widgetName: 'JavaScriptLinks',
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: 'Introduction to JavaScript',
            url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript',
            id: 1
          },
          {
            text: 'Mozilla JS Guide',
            url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide',
            id: 2
          },
          {
            text: 'W3School JS Guide',
            url: 'https://www.w3schools.com/js/default.asp',
            id: 3
          }
        ],
        subject: 'JavaScript',
      }
    },

    {
      widgetName: 'ScalaLinks',
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: 'Introduction to Scala',
            url: 'https://www.geeksforgeeks.org/introduction-to-scala/',
            id: 1
          },
          {
            text: 'TutorialsPoint Scala Guide',
            url: 'https://www.tutorialspoint.com/scala/index.htm',
            id: 2
          },
          {
            text: 'Tour of Scala Guide',
            url: 'https://docs.scala-lang.org/tour/tour-of-scala.html',
            id: 3
          }
        ],
        subject: 'Scala',
      }
    },

    {
      widgetName: 'C++Links',
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: 'Introduction to C++',
            url: 'https://www.geeksforgeeks.org/introduction-to-c-programming-language/',
            id: 1
          },
          {
            text: 'FreeCodeCamp C++ Guide',
            url: 'https://www.freecodecamp.org/news/learn-c-with-free-31-hour-course/',
            id: 2
          },
          {
            text: 'W3School C++ Guide',
            url: 'https://www.w3schools.com/cpp/cpp_intro.asp',
            id: 3
          }
        ],
        subject: 'C++'
      }
    },

    {
      widgetName: 'GoLinks',
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: 'Introduction to Go',
            url: 'https://www.geeksforgeeks.org/go-programming-language-introduction/',
            id: 1
          },
          {
            text: 'Get Started with Go',
            url: 'https://go.dev/doc/tutorial/getting-started',
            id: 2
          },
          {
            text: 'W3School Go Guide',
            url: 'https://www.w3schools.com/go/go_introduction.php',
            id: 3
          }
        ],
        subject: 'Go',
      }
    }

  ]
  /* widgets */ 
};

export default config;