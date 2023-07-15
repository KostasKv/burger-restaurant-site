export default function HamburgerMenuButton({ onClick }) {
  return (
    <button
      className="bg-black group rounded-full sm:hidden hover:bg-accent duration-75 hover:fill-black"
      onClick={onClick}
      aria-controls="primary-navigation"
      aria-expanded="false">
      <span className="sr-only">Menu</span>
      <svg
        className="group-hover:fill-black"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="white"
        xmlns="http://www.w3.org/2000/svg">
        <g>
          <rect x="11" y="14" rx="1" width="18" height="2" />
          <rect x="11" y="19" rx="1" width="18" height="2" />
          <rect x="11" y="24" rx="1" width="18" height="2" />
        </g>
      </svg>
    </button>
  );
}
