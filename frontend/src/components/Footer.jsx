import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

const Footer = () => {
  return (
    <div className="bg-black flex justify-center flex-col items-center text-white p-9">
      <p className=" text-md">©️ copyright by Athesh A</p>
      <div className="flex gap-4 p-4">
        <GitHubLogoIcon className="cursor-pointer" />
        <LinkedInLogoIcon className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Footer;
