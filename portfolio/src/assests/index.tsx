import { ReactComponent as AppIcon } from "../assests/AppIcon.svg";
import { ReactComponent as GithubIcon } from "../assests/GithubIcon.svg";
import { ReactComponent as EmailIcon } from "../assests/EmailIcon.svg";
import { ReactComponent as LinkedinIcon } from "../assests/LinkedinIcon.svg";
import { ReactComponent as CVIcon } from "../assests/CVIcon.svg";
import { ReactComponent as YoutubeIcon } from "../assests/YoutubeIcon.svg";
import { ReactComponent as RumbleIcon } from "../assests/RumbleIcon.svg";
import { ReactComponent as TwitchIcon } from "../assests/TwitchIcon.svg";
import { ReactComponent as TwitterIcon } from "../assests/TwitterIcon.svg";
import { ReactComponent as InstagramIcon } from "../assests/InstagramIcon.svg";
import { ReactComponent as FaceBookIcon } from "../assests/FaceBookIcon.svg";
import { ReactComponent as CloseIcon } from "../assests/CloseIcon.svg";
import { ReactComponent as GameIcon } from "../assests/GameIcon.svg";
import { ReactComponent as MusicIcon } from "../assests/MusicIcon.svg";
import { ReactComponent as RustIcon } from "../assests/RustIcon.svg";
import { ReactComponent as CSharpIcon } from "../assests/CSharpIcon.svg";
import { ReactComponent as CPlusPlusIcon } from "../assests/CPlusPlusIcon.svg";
import { ReactComponent as TypescriptIcon } from "../assests/TypescriptIcon.svg";
import { ReactComponent as CIcon } from "../assests/CIcon.svg";
import { ReactComponent as PythonIcon } from "../assests/PythonIcon.svg";
import { ReactComponent as JavaIcon } from "../assests/JavaIcon.svg";
import { ReactComponent as JavascriptIcon } from "../assests/JavascriptIcon.svg";

const Icons = {
  AppIcon: <AppIcon />,
  GithubIcon: <GithubIcon />,
  CloseIcon: <CloseIcon />,
  EmailIcon: <EmailIcon />,
  LinkedinIcon: <LinkedinIcon />,
  CVIcon: <CVIcon />,
  YoutubeIcon: <YoutubeIcon />,
  RumbleIcon: <RumbleIcon />,
  TwitchIcon: <TwitchIcon />,
  TwitterIcon: <TwitterIcon />,
  InstagramIcon: <InstagramIcon />,
  FaceBookIcon: <FaceBookIcon />,
  GameIcon: <GameIcon />,
  MusicIcon: <MusicIcon />,
  RustIcon: <RustIcon />,
  CSharpIcon: <CSharpIcon />,
  CPlusPlusIcon: <CPlusPlusIcon />,
  TypescriptIcon: <TypescriptIcon />,
  CIcon: <CIcon />,
  PythonIcon: <PythonIcon />,
  JavaIcon: <JavaIcon />,
  JavascriptIcon: <JavascriptIcon />,
};

export function getIcon(iconName: string) {
  switch (iconName) {
    case "App":
      return Icons.AppIcon;
    case "Github":
      return Icons.GithubIcon;
    case "Close":
      return Icons.CloseIcon;
    case "Email":
      return Icons.EmailIcon;
    case "Linkedin":
      return Icons.LinkedinIcon;
    case "CV":
      return Icons.CVIcon;
    case "Youtube":
      return Icons.YoutubeIcon;
    case "Rumble":
      return Icons.RumbleIcon;
    case "Twitch":
      return Icons.TwitchIcon;
    case "Twitter":
      return Icons.TwitterIcon;
    case "Instagram":
      return Icons.InstagramIcon;
    case "FaceBook":
      return Icons.FaceBookIcon;
    case "Game":
      return Icons.GameIcon;
    case "Music":
      return Icons.MusicIcon;
    case "Rust":
      return Icons.RustIcon;
    case "C#":
      return Icons.CSharpIcon;
    case "C++":
      return Icons.CPlusPlusIcon;
    case "TypeScript":
      return Icons.TypescriptIcon;
    case "C":
      return Icons.CIcon;
    case "Python":
      return Icons.PythonIcon;
    case "Java":
      return Icons.JavaIcon;
    case "Javascript":
      return Icons.JavascriptIcon;
    default:
      return iconName;
  }
}
export default Icons;
