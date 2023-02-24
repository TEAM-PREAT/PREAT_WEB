import styled from 'styled-components';
import Image from 'next/image';
import NextIcon from '@/components/icons/sidebar/next-icon';
import { FlexAlignCenter } from '@/styles/core';
import ItemList from '@/components/my/item-list';
import BackIcon from '@/components/icons/back-icon';
import RingIcon from '@/components/icons/sidebar/ring-icon';
import SettingIcon from '@/components/icons/sidebar/setting-icon';
import { useRouter } from 'next/router';

export default function My() {
  const router = useRouter();

  return (
    <Wrapper>
      <HeaderWrapper>
        <span onClick={() => router.push('/home')}>
          <BackIcon />
        </span>

        <FlexAlignCenter>
          <RingIcon />
          <SettingIcon />
        </FlexAlignCenter>
      </HeaderWrapper>
      <ProfileWrapper>
        <ProfileImageWrapper>
          <Image
            src="/assets/images/profile.png"
            width={82}
            height={82}
            alt="preat"
          />
        </ProfileImageWrapper>

        <FlexAlignCenter gap={16}>
          <span>맛집매니아</span>
          <NextIcon />
        </FlexAlignCenter>

        <Image
          src="/assets/images/preat_2.png"
          width={60}
          height={64}
          alt="preat"
        />
      </ProfileWrapper>

      <ShadowBox>
        <TopBox>
          <FlexAlignCenter>
            <h2>많이 방문한 카테고리</h2>
            <Image
              src="/assets/images/yee.png"
              width={23}
              height={23}
              alt="yee"
            />
          </FlexAlignCenter>
          <MoreIcon />
        </TopBox>

        <ItemList />
      </ShadowBox>
      <ShadowBox>
        <TopBox>
          <FlexAlignCenter>
            <h2>만족도 높은 카테고리</h2>
            <Image
              src="/assets/images/heart-emo.png"
              width={23}
              height={23}
              alt="yee"
            />
          </FlexAlignCenter>
          <MoreIcon />
        </TopBox>

        <ItemList />
      </ShadowBox>
      <ShadowBox>
        <TopBox>
          <FlexAlignCenter>
            <h2>입맛이 비슷한 친구</h2>
            <Image
              src="/assets/images/mogiga.png"
              width={23}
              height={23}
              alt="yee"
            />
          </FlexAlignCenter>
          <MoreIcon />
        </TopBox>

        <ItemList />
      </ShadowBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-image: url('/assets/images/preat_bg.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const MoreIcon = () => {
  return (
    <svg
      width="10"
      height="24"
      viewBox="0 0 10 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.5 1L9 12.019L1.5 23.0379"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 30px 16px;

  max-width: 360px;
  margin: auto;
`;

const ProfileWrapper = styled.div`
  padding: 10px 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 22px;
  font-weight: 900;
  font-size: 20px;
`;

const ProfileImageWrapper = styled.div`
  width: 82px;
  height: 82px;
  border-radius: 50%;
  border: 1px solid #e5e5e5;
  /* background-color: #e5e5e5; */
  overflow: hidden;
`;

const ShadowBox = styled.div`
  background: #ffffff;
  mix-blend-mode: normal;
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 31px;

  max-width: 360px;
  width: 100%;
  margin: 20px auto;

  padding: 30px;
  h2 {
    font-weight: 900;
    font-size: 20px;
    line-height: 34px;

    color: #000000;
  }
  img {
    position: relative;
    bottom: 3px;

    &:nth-child(1) {
      bottom: 0px;
    }
  }
`;
