import FriendList from '@/components/home/sidebar/friend-list';
import CircleXIcon from '@/components/icons/circle-x-icon';
import BackIcon from '@/components/icons/sidebar/back-icon';
import NextIcon from '@/components/icons/sidebar/next-icon';
import RingIcon from '@/components/icons/sidebar/ring-icon';
import SettingIcon from '@/components/icons/sidebar/setting-icon';
import { FixedContainerStyled, FlexAlignCenter } from '@/styles/core';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styled, { css } from 'styled-components';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}
export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const router = useRouter();

  return (
    <OuterWrapper isOpen={isOpen}>
      {isOpen && <Overlay></Overlay>}
      <Wrapper>
        <InnerWrapper>
          <TopWrapper>
            <span onClick={onClose}>
              <BackIcon />
            </span>

            <FlexAlignCenter>
              <RingIcon />
              <SettingIcon />
            </FlexAlignCenter>
          </TopWrapper>

          <ProfileWrapper onClick={() => router.push('/my')}>
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
          </ProfileWrapper>
          <Divider />
          <FriendAddWrapper>
            <CircleXIcon />
            <span>친구 추가하기</span>
          </FriendAddWrapper>
          <Divider />
          <FriendList />
        </InnerWrapper>
      </Wrapper>
    </OuterWrapper>
  );
}

const Divider = styled.hr`
  border: 0.8px solid #cccccc;
`;

const OuterWrapper = styled(FixedContainerStyled)<{ isOpen: boolean }>`
  height: 100vh;
  top: 0;
  bottom: 0;

  z-index: 100;
  transform: translateX(300px);
  display: none;
  /* TODO : open 수정 필요 */
  ${(props) =>
    props.isOpen &&
    css`
      display: block;
      transform: translateX(0);
      opacity: 1;
    `}
`;

const Overlay = styled(FixedContainerStyled)`
  width: 100%;
  height: 100%;
  background: #000000;
  opacity: 0.6;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const InnerWrapper = styled.div`
  width: 300px;
  background: #ffffff;
  box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.25);
  height: 100vh;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  padding: 10px;
`;

const FriendAddWrapper = styled(FlexAlignCenter)`
  font-weight: 500;
  font-size: 15px;
  line-height: 34px;
  color: #8e8d8d;

  padding: 0 16px;
`;
const TopWrapper = styled.div`
  margin-top: 60px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;

  padding: 0 16px;
`;

const ProfileWrapper = styled.div`
  padding: 10px 14px;
  display: flex;
  align-items: center;
  gap: 22px;

  font-weight: 900;
  font-size: 20px;
`;

const ProfileImageWrapper = styled.div`
  width: 82px;
  height: 82px;
  border-radius: 50%;
  border: 1px solid #e5e5e5;
  overflow: hidden;
`;
