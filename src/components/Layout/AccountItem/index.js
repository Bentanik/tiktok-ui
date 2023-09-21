import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        src="https://variety.com/wp-content/uploads/2023/06/avatar-1.jpg"
        alt="Hoaa"
        className={cx("avatar")}
      />
      <div className={cx("info")}>
        <p className={cx("name")}>
          <span>Nguyễn Văn A</span>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </p>
        <span className={cx("username")}>nguyenvana</span>
      </div>
    </div>
  );
}

export default AccountItem;
