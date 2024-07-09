import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardHeader,
  Avatar,
} from "@mui/material";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import feedback from "../../assets/Home/feedback.png";
import dialog from "../../assets/Home/dialog.png";
import qa from "../../assets/Home/question-and-answer.png";

function HowItWorks() {
  return (
    <section className="how-it-works py-16">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-8  lg:gap-16">
        <div>
          <h2>Key Features</h2>
          <p>
            EM-Buddy empowers you to become a more confident and effective
            dispatcher by providing you with the following features:
          </p>
        </div>
        <div className="w-full mb-8">
          <video className="w-full" controls autoPlay loop>
            <source
              src="https://www.youtube.com/watch?v=VMT56AqStUU"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Grid with 2 columns on small screens and 3 columns on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <Card className="shadow-lg">
              <CardContent className="flex flex-col items-center justify-center">
                <Avatar className=" mb-4">
                  <img
                    src={dialog}
                    alt="Dialog Icon"
                    className="  bg-[#009379] text-white p-[5px]"
                  />
                </Avatar>
                <CardHeader
                  title={<Typography variant="h6">Simulator</Typography>}
                />
                <Typography
                  variant="body1"
                  className="text-gray-700 text-center"
                >
                  Immerse yourself in realistic emergency call scenarios.
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="shadow-lg">
              <CardContent className="flex flex-col items-center justify-center">
                <Avatar className="mb-4">
                  <img
                    src={qa}
                    alt="Q&A Icon"
                    className="p-[5px] bg-[#353c3b]]"
                  />
                </Avatar>
                <CardHeader title={<Typography variant="h6">Q&A</Typography>} />
                <Typography
                  variant="body1"
                  className="text-gray-700 text-center"
                >
                  Get instant, evidence-based answers, ensuring you have the
                  latest information at your fingertips.
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="shadow-lg">
              <CardContent className="flex flex-col items-center justify-center">
                <Avatar className=" mb-4 ">
                  <img
                    src={feedback}
                    alt="Feedback Icon"
                    className="  bg-[#009379] text-white p-[5px]"
                  />
                </Avatar>
                <CardHeader
                  title={<Typography variant="h6">Feedback</Typography>}
                />
                <Typography
                  variant="body1"
                  className="text-gray-700 text-center"
                >
                  Receive personalized feedback on your simulated call
                  performance.
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
