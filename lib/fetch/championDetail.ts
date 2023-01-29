import serverAxios from '../axios/server';
import { serverAxiosGet } from '../globalfetch/globalfetch';

// http://ddragon.leagueoflegends.com/cdn/10.11.1/data/ko_KR/champion/Aatrox.json
export const getChampionDetail = async ({ championName, version }: { championName: string; version?: string }) => {
  const url = `http://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion/${championName}.json`;
  return await serverAxiosGet(url);
};
