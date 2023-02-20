interface IconProps {
  color?: string;
}

function StarIcon({ color }: IconProps) {
  return (
    <svg
      width="27"
      height="25"
      viewBox="0 0 27 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.786 0.810398C13.0502 0.17518 13.9501 0.17518 14.2143 0.810398L17.1375 7.83865C17.2489 8.10644 17.5007 8.28941 17.7898 8.31259L25.3774 8.92088C26.0632 8.97586 26.3412 9.83168 25.8188 10.2792L20.0378 15.2312C19.8175 15.4199 19.7214 15.716 19.7886 15.9981L21.5548 23.4023C21.7144 24.0715 20.9864 24.6004 20.3993 24.2418L13.9033 20.274C13.6558 20.1229 13.3445 20.1229 13.097 20.274L6.60095 24.2418C6.01383 24.6004 5.28583 24.0715 5.44546 23.4023L7.21163 15.9981C7.27893 15.716 7.18273 15.4199 6.96247 15.2312L1.18152 10.2792C0.659038 9.83168 0.937108 8.97586 1.62288 8.92089L9.21047 8.31259C9.49957 8.28941 9.75141 8.10644 9.86279 7.83865L12.786 0.810398Z"
        fill={color ?? '#FF6C3E'}
      />
    </svg>
  );
}
export default StarIcon;
