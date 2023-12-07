interface RecordStructure {
  _id: string;
  bandName: string;
  albumName: string;
  frontCover: string;
  backCover: string;
  printImage: string;
  cookieImage: string;
  description: string;
  trackList: string;
  isActive?: boolean;
}

export type RecordStructureWithoutId = Omit<RecordStructure, "_id">;

export default RecordStructure;
