import RNFS from 'react-native-fs';

export const requestStorageDataService = async (param: string) => {
  const path = RNFS.MainBundlePath;
  try {
    const response = await RNFS.readFile(`${path}/assets/data/${param}.json`);
    return JSON.parse(response);
  } catch (error) {
    return [];
  }
};
// End
