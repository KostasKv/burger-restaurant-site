import "./HambugerMenuButton.css";

export default function HamburgerMenuButton({ isExpanded, onClick }) {
  return (
    <button
      className="nav-btn bg-black group rounded-full duration-75 sm:hidden hover:bg-accent"
      onClick={onClick}
      aria-controls="primary-navigation"
      aria-expanded={isExpanded}>
      <span className="sr-only">Menu</span>
      <svg
        className="group-hover:fill-black"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="white"
        xmlns="http://www.w3.org/2000/svg">
        <g>
          <rect
            className="line top"
            x="11"
            y="14"
            rx="1"
            width="18"
            height="2"
          />
          <rect
            className="line middle-1"
            x="11"
            y="19"
            rx="1"
            width="18"
            height="2"
          />
          <rect
            className="line middle-2"
            x="11"
            y="19"
            rx="1"
            width="18"
            height="2"
          />
          <rect
            className="line bottom"
            x="11"
            y="24"
            rx="1"
            width="18"
            height="2"
          />
        </g>
      </svg>
    </button>
  );
}
