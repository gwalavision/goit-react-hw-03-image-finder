import s from "./Button.module.css";

const Button = ({ text, onClick }) => {
  return (
    <button className={s.Button} type="sumbit" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
