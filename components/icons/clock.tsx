export const ClockIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      fill="none"
      viewBox="0 0 28 28"
      {...props}
    >
      <path
        d="M14 25.666c6.443 0 11.666-5.223 11.666-11.666S20.443 2.333 14 2.333 2.333 7.556 2.333 14c0 6.443 5.223 11.666 11.667 11.666"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.4"
        stroke="currentColor"
      />
      <path
        d="M14 7v7l4.667 2.333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.4"
        stroke="currentColor"
      />
    </svg>
  )
}
