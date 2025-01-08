import componentsImg from "./assets/components.png";
import propsImg from "./assets/config.png";
import stateImg from "./assets/state-mgmt.png";
import jsxImg from "./assets/jsx-ui.png";

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: "Components",
    description: "Core UI building block",
  },
  {
    image: jsxImg,
    title: "JSX",
    description:
      "Return (potentially dynamic) HTML(ish) code to define your UI",
  },
  {
    image: propsImg,
    title: "Props",
    description:
      "Make components configurable (and therefore reusable) by the parent",
  },
  {
    image: stateImg,
    title: "State",
    description:
      "React managed data which changed causes the component to re-render",
  },
];

export const EXAMPLES = {
  components: {
    title: "Class Component",
    description: "A simple class component that takes a prop and renders it",
    code: `function Welcome(){
        return <h1>Hello, World!</h1>
        }`,
  },

  jsx: {
    title: "JSX",
    description:
      "A simple example of JSX syntax and how it can be used to render HTML",
    code: `<div>
        <h1>Welcome {userName}</h1>
        <p>Time to learn React!</p>
        </div>`,
  },

  props: {
    title: "Props",
    description: "A simple example of how props can be passed to a component",
    code: `
      function Welcome(props){
      return <h1>Hello, {props.name}</h1>;
    }`,
  },

  state: {
    title: "State",
    description:
      "A simple example of how state can be used to manage data in a component",
    code: `function Counter(){
      
      const [count, setCount] = useState(0);  
      }`,
  },
};
