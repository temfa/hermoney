import Email from "@/svgs/email";
import Address from "@/svgs/address";
import Phone from "@/svgs/phone";
import EyeClose from "@/svgs/eyeClose";

// interface Sample {
//     label: string;
//     type: string;
//     placeholder: string;
//     hasIcon: boolean;
//     icon: any
// }

export const signupFields = [
  {
    label: "Organization Name",
    type: "text",
    placeholder: "Placeholder",
    hasIcon: false,
  },
  {
    label: "RC No",
    type: "text",
    placeholder: "Placeholder",
    hasIcon: false,
  },
  {
    label: "Salary payment date",
    type: "date",
    placeholder: "Enter the date your company pays salary",
    hasIcon: false,
    // icon: <Email />,
  },
  {
    label: "Email Address",
    type: "email",
    placeholder: "Placeholder",
    hasIcon: true,
    icon: <Email />,
  },
  {
    label: "Phone Number",
    type: "text",
    placeholder: "Placeholder",
    hasIcon: true,
    icon: <Phone />,
  },
  {
    label: "Address ",
    type: "text",
    placeholder: "Placeholder",
    hasIcon: true,
    icon: <Address />,
  },
  {
    label: "Password",
    type: "password",
    placeholder: "Placeholder",
    hasIcon: true,
    icon: <EyeClose />,
  },
];
