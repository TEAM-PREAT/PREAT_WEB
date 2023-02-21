import { IconProps } from '@/components/icons/types';

function SmallHeartIcon({ color }: IconProps) {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <path
        d="M13.875 4.84375C13.875 3.08334 12.3884 1.65625 10.5547 1.65625C9.18362 1.65625 8.00666 2.45403 7.5 3.59242C6.99334 2.45403 5.81638 1.65625 4.44531 1.65625C2.61155 1.65625 1.125 3.08334 1.125 4.84375C1.125 9.95831 7.5 13.3438 7.5 13.3438C7.5 13.3438 13.875 9.95831 13.875 4.84375Z"
        stroke={color ?? '#BDBDBD'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
export default SmallHeartIcon;
