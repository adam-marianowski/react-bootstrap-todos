import { FunctionComponent } from "react";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { toggleTheme } from "redux/colorThemeReducer";
import { SIDEBAR } from "utilities/localization";

const SidebarTitle: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const colorTheme = useAppSelector((state) => state.colorTheme.color);

  return (
    <div className="d-flex align-items-center mb-md-0 p-1">
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
      >
        <span
          className={`fs-4 text-${
            colorTheme === "dark" ? "light" : "dark"
          } fw-bold`}
        >
          {SIDEBAR.SIDEBAR}
        </span>
      </a>
      <div>
        <i
          onClick={() => dispatch(toggleTheme())}
          style={{ cursor: "pointer" }}
          className={`bi bi-${colorTheme === "dark" ? "sun" : "moon"}`}
        ></i>
      </div>
    </div>
  );
};

export default SidebarTitle;
