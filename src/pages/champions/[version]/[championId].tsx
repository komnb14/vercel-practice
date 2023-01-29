import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getChampionDetail } from '../../../../lib/fetch/championDetail';
import { __fetch_championInfo } from '../../../../lib/globalfetch/globalfetch';
import ChampionHeader from '../../../../components/ChampionHeader';

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (typeof params?.championId === 'string' && typeof params?.version === 'string') {
    const result = await getChampionDetail({ championName: params.championId, version: params.version });

    console.log(result);
    return {
      props: { champion: result },
    };
  }
  return {
    props: { champion: [] },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const list = await __fetch_championInfo();
  const paths = list.map((champion) => {
    return {
      params: { championId: champion.id, version: champion.version },
    };
  });
  return { paths, fallback: false };
};

export const ChampionId = ({ champion }: { champion: any }) => {
  return <div>{JSON.stringify(champion)}</div>;
};

export default ChampionId;
