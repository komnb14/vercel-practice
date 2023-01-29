import serverAxios from '../axios/server';
import { Champion } from '../types/champion/champion';

const DDRAGON_CHAMPION_URL = 'httpS://ddragon.leagueoflegends.com/cdn/13.1.1/data/ko_KR/champion.json';
export const getGlobalData = async () => {
  const __champion_fetch = await serverAxiosGet(DDRAGON_CHAMPION_URL);
  const championInfo = calChampionData(__champion_fetch);
  const version = __champion_fetch.version as string;
  return { championInfo: championInfo, version };
};

export const serverAxiosGet = (url: string) => {
  return serverAxios.get(url).then((res) => res.data);
};

const calChampionData = (fetchData: any) => {
  const championData = Object.values(fetchData.data);
  // @ts-ignore
  return championData.map((data: Champion): Champion => {
    return {
      id: data.id,
      version: data.version,
      blurb: data.blurb,
      key: data.key,
      name: data.name,
      image: data.image,
      title: data.title,
    };
  }) as Champion[];
};

export const __fetch_championInfo = async () => {
  const __champion_fetch = await serverAxiosGet(DDRAGON_CHAMPION_URL);
  const championInfo = calChampionData(__champion_fetch);
  return championInfo;
};
