import getButtonStyling from "./getButtonStyleType.js"

const Button = ({buttonType, text, styleType, onClickHandler}) => {
  return (
    <>
        <button type={buttonType} className={`px-4 py-2 ${getButtonStyling(styleType)}  text-white  rounded-md transition-all`} onClick={onClickHandler}>
            {text}
        </button>
    </>

  )
}

export default Button