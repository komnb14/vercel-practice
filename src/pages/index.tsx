import { GetStaticProps } from 'next';
import { getGlobalData } from '../../lib/globalfetch/globalfetch';
import { AsyncReturnType } from '../../lib/types/promise/asyncReturn';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import ChampionImg from '@/components/ChampionImg';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1200px;
`;

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15%;
  cursor: pointer;
`;

export default function Home({ global }: staticProps) {
  const router = useRouter();

  const onClickBox = useCallback((id: string, version: string) => {
    router.push(`/champions/${version}/${id}`);
  }, []);

  return (
    <Wrapper>
      <ContentBox>
        {global.championInfo.map((champion) => {
          return (
            <FlexBox key={champion.key} onClick={() => onClickBox(champion.id, champion.version)}>
              <ChampionImg width={36} height={36} championImageName={champion.image.full} version={champion.version} />
              <label>{champion.name}</label>
            </FlexBox>
          );
        })}
      </ContentBox>
    </Wrapper>
  );
}

type staticProps = {
  global: AsyncReturnType<typeof getGlobalData>;
};
export const getStaticProps: GetStaticProps = async () => {
  const global = await getGlobalData();

  return {
    props: { global },
  };
};
