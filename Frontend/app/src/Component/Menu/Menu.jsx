import { Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenuNavBar from "./MenuNavBar";

const features = [
  {
    title: "Simulator",
    description:
      "No need to worry about screen size. Anima's Landing Page UI Kit adapts to any screen size, from desktop to mobile.",
  },
  {
    title: "Q&A",
    description:
      "No need to worry about screen size. Anima's Landing Page UI Kit adapts to any screen size, from desktop to mobile.",
  },
  {
    title: "AI Feedback",
    description:
      "No need to worry about screen size. Anima's Landing Page UI Kit adapts to any screen size, from desktop to mobile.",
  },
  {
    title: "Past conversations",
    description:
      "No need to worry about screen size. Anima's Landing Page UI Kit adapts to any screen size, from desktop to mobile.",
  },
];

const Menu = () => {
  const navigate = useNavigate();
  const handleClick = (features) => {
    switch (features) {
      case "Simulator":
        navigate("/simulator");

        break;

      default:
        break;
    }
  };
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <MenuNavBar />

      <main className="flex flex-col items-center justify-center flex-grow">
        <Typography variant="h4" component="h1" className="mt-8 mb-4">
          Welcome Marya Sarah
        </Typography>
        <Typography
          variant="body1"
          component="p"
          className="mb-8 text-center max-w-2xl"
        >
          Welcome XYZ to Khanmigo, your AI-powered assistant. You can access all
          these features and unlock the power of AI.
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-screen-lg">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="w-full"
              onClick={() => handleClick(feature.title)}
            >
              <CardContent>
                <Typography variant="h5" component="div" className="mb-2">
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Menu;
