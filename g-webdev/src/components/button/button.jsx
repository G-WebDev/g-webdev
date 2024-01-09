import Style from "./button.module.css";

const Button = () => {
  return (
    <button type="submit">
      <div className={Style.svg_wrapper}>
        <svg width="24" height="24">
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path
            fill="currentColor"
            d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
          ></path>
        </svg>
      </div>

      <span>Send</span>
    </button>
  );
};

export default Button;
