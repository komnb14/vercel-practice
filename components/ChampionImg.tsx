import React, { ReactNode } from 'react';
import Image from 'next/image';

// https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Aatrox.png
const ChampionImg = ({ width, championImageName, version, height, children }: { width: number; height: number; children?: ReactNode; championImageName: string; version: string }) => {
  return (
    <div>
      <Image src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${championImageName}`} alt={'ERROR'} width={width} height={height} />
      {children}
    </div>
  );
};

export default ChampionImg;
