export type Certificate = {
  title: string;
  issuer: string;
  year: number;
  link?: string;
};

export const certificates: Certificate[] = [
  {
    title: "Programming in Java",
    issuer: "NPTEL (IIT Kharagpur)",
    year: 2021
  },
  {
    title: "Career Edge - Young Professional",
    issuer: "TCS iON",
    year: 2022
  },
  {
    title: "Full Stack Web Development",
    issuer: "Tap Academy",
    year: 2024
  }
];


