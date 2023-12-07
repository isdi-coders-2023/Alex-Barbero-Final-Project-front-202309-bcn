import RecordStructure, {
  RecordStructureWithoutId,
} from "../store/feature/records/types";

const recordsMock: RecordStructure[] = [
  {
    _id: "1",
    bandName: "Los chunguitos",
    albumName: "Dame veneno",
    frontCover: "https://i.ibb.co/ssBNRbH/kvelertak.webp",
    backCover: "back1.png",
    printImage: "print1.png",
    cookieImage: "cookie1.png",
    description: "Ke pum ke pam triki taun",
    trackList: "Uan, chu, zri",
    isActive: true,
  },
  {
    _id: "2",
    bandName: "Ejtopa",
    albumName: "Fui alaorilla del rio y mi ketabah mu chola",
    frontCover: "https://i.ibb.co/MPScWNn/gel.webp",
    backCover: "back2.png",
    printImage: "print2.png",
    cookieImage: "cookie2.png",
    description: "Lo etopa son lo ma grande",
    trackList: "Uan, chu, zri",
    isActive: false,
  },
  {
    _id: "3",
    bandName: "Chola y Jerena",
    albumName: "Yo quiero bailá",
    frontCover: "https://i.ibb.co/ssBNRbH/kvelertak.webp",
    backCover: "cuando",
    printImage: "llega",
    cookieImage: "er",
    description: "caló",
    trackList: "fallero",
    isActive: false,
  },
  {
    _id: "4",
    bandName: "Andilucas",
    albumName: "deha de lloraaAaiiaau",
    frontCover: "https://i.ibb.co/MPScWNn/gel.webp",
    backCover: "andi.png",
    printImage: "lucas.png",
    cookieImage: "lopetan",
    description: "arriki",
    trackList: "tauntaun",
    isActive: false,
  },
];

export const recordMockWithouId: RecordStructureWithoutId = {
  bandName: "David bisbal",
  albumName: "Ave Maria",
  frontCover: "la pelukeria",
  backCover: "si me",
  printImage: "kisieras",
  cookieImage: "todo",
  description: "te",
  trackList: "daria",
  isActive: false,
};

export default recordsMock;
