import React from "react";
import useDarkMode from "use-dark-mode";
import { Switch } from "antd";
import { FiSun, FiMoon } from "react-icons/fi";

const ModeToggle = () => {
  const darkMode = useDarkMode(false);
  return (
    <div className="toggle-button">
      <Switch
        checkedChildren={<FiSun color="#f39c12" />}
        unCheckedChildren={<FiMoon color="#2c3e50" />}
        checked={darkMode.value}
        onChange={darkMode.toggle}
      />
    </div>
  );
};

export default ModeToggle;
