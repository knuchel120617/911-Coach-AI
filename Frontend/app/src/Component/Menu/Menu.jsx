import { Card, CardContent, Typography } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
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
    title: "My conversations",
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
      case "My conversations":
        navigate("/conversations");
        break;
      case "Q&A":
        navigate("/qa");
        break;
      default:
        break;
    }
  };
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#F8F9FF]">
      <MenuNavBar />

      <main className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-xl font-bold mt-8 mb-4" style={{ color: '#333333' }}>
          Welcome Marya Sarah
        </h1>
        <p
          variant="body1"
          component="p"
          className="mb-8 text-center max-w-2xl"
          style={{ color: '#333333' }}
        >
          Welcome XYZ to Khanmigo, your AI-powered assistant. You can access all
          these features and unlock the power of AI.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-screen-lg">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="w-full"
              onClick={() => handleClick(feature.title)}
            >
              <CardContent>
                <h6 style={{ color: '#333333' }} className="mb-2 font-bold">
                  {feature.title}
                </h6>
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
