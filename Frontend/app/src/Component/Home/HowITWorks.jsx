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
    <section className="how-it-works px-[40px] py-16">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-8  lg:gap-16">
        <div className="w-full mb-8 px-[40px]">
          <video className="w-full" controls autoPlay loop>
            <source
              src="https://www.youtube.com/watch?v=VMT56AqStUU"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="text-center mb-[20px]">
          <h2 className="text-[20px] font-bold leading-relaxed tracking-wide lg:text-[40px] mb-[20px]" style={{ color: '#333333' }}>
            Key Features
          </h2>
          <p className="leading-7 lg:text-[18px]" style={{ color: '#333333' }}>
            EM-Buddy empowers you to become a more confident and effective
            dispatcher by providing you with the following features:
          </p>
        </div>


        {/* Grid with 2 columns on small screens and 3 columns on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <Card className="shadow-lg p-4">
              <CardContent className="flex flex-col items-center justify-center">
                <Avatar>
                  <img
                    src={dialog}
                    alt="Dialog Icon"
                    className="bg-[#FFE0DC] text-white p-[5px]"
                  />
                </Avatar>
                <CardHeader
                  title={<p className="text-[18px] font-medium">Simulator</p>}
                />
                <p
                  className="text-gray-700 text-center"
                >
                  Immerse yourself in realistic emergency call scenarios.
                </p>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="shadow-lg">
              <CardContent className="flex flex-col items-center justify-center">
                <Avatar>
                  <img
                    src={qa}
                    alt="Q&A Icon"
                    className="p-[5px] bg-[#CCE9E4]"
                  />
                </Avatar>
                <CardHeader title={<p className="text-[18px] font-medium">Q&A</p>} />
                <p
                  className="text-gray-700 text-center"
                >
                  Get instant, evidence-based answers, ensuring you have the
                  latest information at your fingertips.
                </p>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="shadow-lg">
              <CardContent className="flex flex-col items-center justify-center">
                <Avatar>
                  <img
                    src={feedback}
                    alt="Feedback Icon"
                    className="bg-[#FEF7E5] text-white p-[5px]"
                  />
                </Avatar>
                <CardHeader
                  title={<p className="text-[18px] font-medium">Feedback</p>}
                />
                <p
                  className="text-gray-700 text-center"
                >
                  Receive personalized feedback on your simulated call
                  performance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
