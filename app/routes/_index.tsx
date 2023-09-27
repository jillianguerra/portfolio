import type { MetaFunction } from "@remix-run/node";
import App from "../pages/App/App"
export const meta: MetaFunction = () => {
  return [
    { title: "Jillian Guerra" },
    { name: "description", content: "Welcome to my portfolio!" },
  ];
};

export default function Index() {
  return (
  <App />
  );
}
