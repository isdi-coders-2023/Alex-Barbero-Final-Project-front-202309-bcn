import RecordStructure, {
  RecordStructureWithoutId,
} from "../store/feature/records/types";

export const recordsMock: RecordStructure[] = [
  {
    _id: "1",
    bandName: "Los chunguitos",
    albumName: "Dame veneno",
    frontCover: "http://test.com",
    backCover: "http://test.com",
    printImage: "http://test.com",
    cookieImage: "http://test.com",
    description: "Ke pum ke pam triki taun",
    trackList: "Uan,chu,zri",
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
    trackList: "Uan,chu,zri",
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
  frontCover: "http://test.com",
  backCover: "http://test.com",
  printImage: "http://test.com",
  cookieImage: "http://test.com",
  description: "te",
  trackList: "daria",
  isActive: false,
};

export const recordMockDetails: RecordStructure = {
  _id: "0",
  albumName: "Aquarium",
  backCover:
    "https://i.discogs.com/kbHlx-RVJ4dXj9QQraxuQnHn31vr-zV8OIPacgtsSrA/rs:fit/g:sm/q:90/h:515/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIxMzAz/MzAtMTY0NjMxMTE4/OS0xMTUxLmpwZWc.jpeg",
  bandName: "Aqua",
  cookieImage:
    "https://i.discogs.com/qdKoF8tG0dtEfOXrzYep_Om03JbZxZZyGOrlAHLQ-Co/rs:fit/g:sm/q:90/h:593/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQwMzgx/Ny0xMjY3MjgxOTQz/LmpwZWc.jpeg",
  description:
    "Aqua is a Danish-Norwegian Europop band, best known for their 1997 single Barbie Girl. The group formed in 1995 as Joyspeed, and achieved international success around the globe in the late 1990s and early 2000s. ",
  frontCover:
    "https://i.discogs.com/pX8Nmu5nAhlYwoPpGfFBcgqRwvvveDrQQXrY4hLMyAE/rs:fit/g:sm/q:90/h:598/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIxMzAz/MzAtMTQ5NzM2NDc2/Ny0yMzk3LmpwZWc.jpeg",
  printImage:
    "https://i.discogs.com/OLPDA3mPVM_HMqigN6sobcAb7m_UJw2A1ic9JhRcUV8/rs:fit/g:sm/q:90/h:600/w:591/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIxMzAz/MzAtMTQ5NzM2NDc3/My01MTU1LmpwZWc.jpeg",
  trackList:
    "Happy Boys & Girls, Barbie Girl, Good Morning Sunshine, Doctor Jones, Heat Of The Night, Be A mainSheet, Lollipop (Candyman), Roses Are Red, Turn Back Time, Calling You",
};

export const modifiedRecordMock = {
  _id: "1",
  bandName: "Los chunguitos modificaos teteee",
  albumName: "Dame veneno",
  frontCover: "http://test.com",
  backCover: "http://test.com",
  printImage: "http://test.com",
  cookieImage: "http://test.com",
  description: "Ke pum ke pam triki taun",
  trackList: "Uan,chu,zri",
  isActive: true,
};
