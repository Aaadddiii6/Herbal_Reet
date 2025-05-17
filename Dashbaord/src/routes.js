import Dashboard from "layouts/dashboard";
import Billing from "layouts/billing";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import Icon from "@mui/material/Icon";
import Signout from "components/Signout";
import Evaluation from "components/Evaluation";
import ChatBot from "components/ChatBot";
import Arlearning from "components/Arlearning";
import TrackingPosture from "components/TrackingPosture";
import LandingPage from "components/TrackingPosture";

const questions = [
  'What is the national animal of India?',
  'Who wrote the Indian national anthem, "Jana Gana Mana"?',
  'Which river is known as the "Ganga" in India?',
  'What is the currency of India?',
  'Who was the first Prime Minister of India?',
  'Which festival is celebrated to mark the victory of good over evil and the return of Lord Rama to Ayodhya?',
];

const options = [
  ['Tiger', 'Lion', 'Elephant', 'Leopard'],
  ['Rabindranath Tagore', 'Mahatma Gandhi', 'Jawaharlal Nehru', 'Subhas Chandra Bose'],
  ['Yamuna', 'Brahmaputra', 'Indus', 'Ganges'],
  ['Dollar', 'Rupee', 'Yen', 'Euro'],
  ['Jawaharlal Nehru', 'Indira Gandhi', 'Lal Bahadur Shastri', 'Rajiv Gandhi'],
  ['Diwali', 'Holi', 'Eid', 'Christmas'],
];

const correctAnswers = ['optionA', 'optionA', 'optionD', 'optionB', 'optionA', 'optionA'];

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  // {
  //   type: "collapse",
  //   name: "Tables",
  //   key: "tables",
  //   icon: <Icon fontSize="small">table_view</Icon>,
  //   route: "/tables",
  //   component: <Tables />,
  // },
  {
    type: "collapse",
    name: "Webinars",
    key: "billing",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/webinars",
    component: <Billing />,
  },
  // {
  //   type: "collapse",
  //   name: "RTL",
  //   key: "rtl",
  //   icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
  //   route: "/rtl",
  //   component: <RTL />,
  // },
  {
    type: "collapse",
    name: "P-Tracking",
    key: "evaluation",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/P-Tracking",
    component: <Evaluation questions={questions} options={options} correctAnswers={correctAnswers} />,
  },
  {
    type: "collapse",
    name: "Advance Search",
    key: "chatbot",
    icon: <Icon fontSize="small">VR training</Icon>,
    route: "/chatbot",
    component: <ChatBot />,
  },
  {
    type: "collapse",
    name: "AR Plants",
    key: "arlearning",
    icon: <Icon fontSize="small">VR training</Icon>,
    route: "/ARPlants",
    component: <Arlearning />,
  },
  {
    type: "collapse",
    name: "Games",
    key: "opencv",
    icon: <Icon fontSize="small">Tracking</Icon>,
    route: "/game",
    component: <TrackingPosture />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  // {
  //   type: "collapse",
  //   name: "Sign In",
  //   key: "sign-in",
  //   icon: <Icon fontSize="small">login</Icon>,
  //   route: "/authentication/sign-in",
  //   component: <SignIn />,
  // },
  // {
  //   type: "collapse",
  //   name: "Sign Up",
  //   key: "sign-up",
  //   icon: <Icon fontSize="small">assignment</Icon>,
  //   route: "/authentication/sign-up",
  //   component: <SignUp />,
  // },
  // {
  //   type: "collapse",
  //   name: "Sign Out",
  //   key: "sign-out",
  //   icon: <Icon fontSize="small">assignment</Icon>,
  //   route: "/authentication/sign-out",
  //   component: <Signout />,
  // },
];

export default routes;
